import { useState, useEffect } from 'react';
import { base44 } from '@/api/base44Client';
import { Plus, Trash2, Pencil, X, Check, Upload, Images } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const CATEGORIES = ['Mobile', 'Intérieur', 'Extérieur', 'Polissage', 'Céramique', 'Véhicules'];

function BulkUploadForm({ onDone, onCancel, nextOrder }) {
  const [category, setCategory] = useState('Véhicules');
  const [files, setFiles] = useState([]); // [{file, preview, label, status: idle|uploading|done|error}]
  const [uploading, setUploading] = useState(false);

  const handleFiles = (e) => {
    const selected = Array.from(e.target.files);
    setFiles(selected.map(f => ({ file: f, preview: URL.createObjectURL(f), label: f.name.replace(/\.[^.]+$/, ''), status: 'idle' })));
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const selected = Array.from(e.dataTransfer.files).filter(f => f.type.startsWith('image/'));
    setFiles(selected.map(f => ({ file: f, preview: URL.createObjectURL(f), label: f.name.replace(/\.[^.]+$/, ''), status: 'idle' })));
  };

  const handleUploadAll = async () => {
    if (!files.length) return;
    setUploading(true);
    const updated = [...files];
    for (let i = 0; i < updated.length; i++) {
      updated[i] = { ...updated[i], status: 'uploading' };
      setFiles([...updated]);
      const { file_url } = await base44.integrations.Core.UploadFile({ file: updated[i].file });
      await base44.entities.GaleriePhoto.create({ src: file_url, label: updated[i].label, category, order: nextOrder + i });
      updated[i] = { ...updated[i], status: 'done' };
      setFiles([...updated]);
    }
    setUploading(false);
    onDone();
  };

  return (
    <div className="bg-[#1a2030] border border-white/10 rounded-2xl p-6 space-y-5 mb-10">
      <h3 className="font-bold text-white text-sm tracking-widest uppercase flex items-center gap-2">
        <Images size={15} className="text-cyan" /> Import multiple
      </h3>

      {/* Catégorie */}
      <div>
        <label className="block text-xs text-white/40 uppercase tracking-widest mb-2">Catégorie pour toutes les photos</label>
        <select
          value={category}
          onChange={e => setCategory(e.target.value)}
          className="w-full bg-[#0d1117] border border-white/10 rounded-xl text-white text-sm px-4 py-2.5 focus:border-cyan focus:outline-none"
        >
          {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>

      {/* Drop zone */}
      <div
        onDrop={handleDrop}
        onDragOver={e => e.preventDefault()}
        className="border-2 border-dashed border-white/20 rounded-xl p-8 text-center hover:border-cyan/50 transition-colors cursor-pointer"
        onClick={() => document.getElementById('bulk-file-input').click()}
      >
        <Upload size={24} className="text-white/30 mx-auto mb-3" />
        <p className="text-white/50 text-sm mb-1">Glissez vos images ici</p>
        <p className="text-white/25 text-xs">ou cliquez pour sélectionner</p>
        <input id="bulk-file-input" type="file" accept="image/*" multiple className="hidden" onChange={handleFiles} />
      </div>

      {/* Préview des fichiers */}
      {files.length > 0 && (
        <div className="space-y-2 max-h-64 overflow-y-auto pr-1">
          {files.map((f, i) => (
            <div key={i} className="flex items-center gap-3 bg-[#0d1117] rounded-xl px-3 py-2">
              <img src={f.preview} alt="" className="w-10 h-10 object-cover rounded-lg flex-shrink-0" />
              <input
                value={f.label}
                onChange={e => { const u = [...files]; u[i] = { ...u[i], label: e.target.value }; setFiles(u); }}
                className="flex-1 bg-transparent text-white text-xs focus:outline-none border-b border-white/10 focus:border-cyan py-1 transition-colors"
                placeholder="Label..."
                disabled={uploading}
              />
              <span className={`text-xs w-16 text-right flex-shrink-0 ${f.status === 'done' ? 'text-green-400' : f.status === 'uploading' ? 'text-cyan' : f.status === 'error' ? 'text-red-400' : 'text-white/30'}`}>
                {f.status === 'done' ? '✓ OK' : f.status === 'uploading' ? '...' : f.status === 'error' ? 'Erreur' : 'En attente'}
              </span>
            </div>
          ))}
        </div>
      )}

      <div className="flex gap-3 pt-1">
        <button
          onClick={handleUploadAll}
          disabled={!files.length || uploading}
          className="flex-1 bg-cyan text-[#0d1117] py-2.5 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-cyan/80 transition-colors disabled:opacity-40 flex items-center justify-center gap-2"
        >
          {uploading ? `Envoi...` : `Envoyer ${files.length > 0 ? `(${files.length})` : ''}`}
        </button>
        <button
          onClick={onCancel}
          disabled={uploading}
          className="flex-1 border border-white/20 text-white/60 py-2.5 rounded-xl text-xs uppercase tracking-widest hover:border-white/40 transition-colors"
        >
          Annuler
        </button>
      </div>
    </div>
  );
}

function PhotoForm({ photo, onSave, onCancel }) {
  const [form, setForm] = useState(photo || { src: '', label: '', category: 'Véhicules', order: 0 });
  const [uploading, setUploading] = useState(false);

  const handleFile = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setUploading(true);
    const { file_url } = await base44.integrations.Core.UploadFile({ file });
    setForm(f => ({ ...f, src: file_url }));
    setUploading(false);
  };

  return (
    <div className="bg-[#1a2030] border border-white/10 rounded-2xl p-6 space-y-4">
      <h3 className="font-bold text-white text-sm tracking-widest uppercase">
        {photo ? 'Modifier la photo' : 'Ajouter une photo'}
      </h3>

      {/* Upload ou URL */}
      <div>
        <label className="block text-xs text-white/40 uppercase tracking-widest mb-2">Photo</label>
        {form.src && (
          <img src={form.src} alt="" className="w-full h-40 object-cover rounded-xl mb-3" />
        )}
        <label className={`flex items-center gap-2 justify-center w-full border-2 border-dashed border-white/20 rounded-xl py-3 text-xs text-white/50 cursor-pointer hover:border-cyan/50 hover:text-cyan transition-all ${uploading ? 'opacity-50' : ''}`}>
          <Upload size={14} />
          {uploading ? 'Envoi en cours...' : 'Choisir une image'}
          <input type="file" accept="image/*" className="hidden" onChange={handleFile} disabled={uploading} />
        </label>
      </div>

      <div>
        <label className="block text-xs text-white/40 uppercase tracking-widest mb-2">Ou URL directe</label>
        <input
          value={form.src}
          onChange={e => setForm(f => ({ ...f, src: e.target.value }))}
          placeholder="https://..."
          className="w-full bg-[#0d1117] border border-white/10 rounded-xl text-white text-sm px-4 py-2.5 focus:border-cyan focus:outline-none"
        />
      </div>

      <div>
        <label className="block text-xs text-white/40 uppercase tracking-widest mb-2">Label</label>
        <input
          value={form.label}
          onChange={e => setForm(f => ({ ...f, label: e.target.value }))}
          placeholder="Description de la photo"
          className="w-full bg-[#0d1117] border border-white/10 rounded-xl text-white text-sm px-4 py-2.5 focus:border-cyan focus:outline-none"
        />
      </div>

      <div>
        <label className="block text-xs text-white/40 uppercase tracking-widest mb-2">Catégorie</label>
        <select
          value={form.category}
          onChange={e => setForm(f => ({ ...f, category: e.target.value }))}
          className="w-full bg-[#0d1117] border border-white/10 rounded-xl text-white text-sm px-4 py-2.5 focus:border-cyan focus:outline-none"
        >
          {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>

      <div>
        <label className="block text-xs text-white/40 uppercase tracking-widest mb-2">Ordre d'affichage</label>
        <input
          type="number"
          value={form.order}
          onChange={e => setForm(f => ({ ...f, order: parseInt(e.target.value) || 0 }))}
          className="w-full bg-[#0d1117] border border-white/10 rounded-xl text-white text-sm px-4 py-2.5 focus:border-cyan focus:outline-none"
        />
      </div>

      <div className="flex gap-3 pt-2">
        <button
          onClick={() => onSave(form)}
          disabled={!form.src}
          className="flex-1 bg-cyan text-[#0d1117] py-2.5 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-cyan/80 transition-colors disabled:opacity-40"
        >
          <Check size={14} className="inline mr-1" /> Enregistrer
        </button>
        <button
          onClick={onCancel}
          className="flex-1 border border-white/20 text-white/60 py-2.5 rounded-xl text-xs uppercase tracking-widest hover:border-white/40 transition-colors"
        >
          Annuler
        </button>
      </div>
    </div>
  );
}

export default function AdminGalerie() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('Tous');
  const [showAdd, setShowAdd] = useState(false);
  const [showBulk, setShowBulk] = useState(false);
  const [editing, setEditing] = useState(null);
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  useEffect(() => {
    base44.auth.me().then(u => {
      if (!u || u.role !== 'admin') { navigate('/'); return; }
      setUser(u);
      loadPhotos();
    }).catch(() => navigate('/'));
  }, []);

  const loadPhotos = async () => {
    setLoading(true);
    const data = await base44.entities.GaleriePhoto.list('order', 200);
    setPhotos(data);
    setLoading(false);
  };

  const handleAdd = async (form) => {
    await base44.entities.GaleriePhoto.create(form);
    setShowAdd(false);
    loadPhotos();
  };

  const handleEdit = async (form) => {
    await base44.entities.GaleriePhoto.update(editing.id, form);
    setEditing(null);
    loadPhotos();
  };

  const handleDelete = async (id) => {
    if (!confirm('Supprimer cette photo ?')) return;
    await base44.entities.GaleriePhoto.delete(id);
    loadPhotos();
  };

  const filtered = filter === 'Tous' ? photos : photos.filter(p => p.category === filter);

  if (loading) return (
    <div className="min-h-screen bg-[#0d1117] flex items-center justify-center">
      <div className="w-8 h-8 border-4 border-cyan/20 border-t-cyan rounded-full animate-spin" />
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0d1117] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <p className="text-cyan text-xs tracking-[0.4em] uppercase font-semibold mb-2">Dashboard Admin</p>
            <h1 className="font-montserrat font-bold text-3xl text-white">Gestion de la Galerie</h1>
            <p className="text-white/40 text-sm mt-1">{photos.length} photos au total</p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => navigate('/galerie')}
              className="border border-white/20 text-white/60 px-4 py-2.5 rounded-xl text-xs uppercase tracking-widest hover:border-white/40 transition-colors"
            >
              Voir la galerie
            </button>
            <button
              onClick={() => { setShowBulk(true); setShowAdd(false); setEditing(null); }}
              className="border border-cyan/50 text-cyan px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-cyan/10 transition-colors flex items-center gap-2"
            >
              <Images size={14} /> Import multiple
            </button>
            <button
              onClick={() => { setShowAdd(true); setShowBulk(false); setEditing(null); }}
              className="bg-cyan text-[#0d1117] px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-cyan/80 transition-colors flex items-center gap-2"
            >
              <Plus size={14} /> Ajouter
            </button>
          </div>
        </div>

        {/* Import multiple */}
        {showBulk && (
          <BulkUploadForm
            nextOrder={photos.length + 1}
            onDone={() => { setShowBulk(false); loadPhotos(); }}
            onCancel={() => setShowBulk(false)}
          />
        )}

        {/* Formulaire ajout */}
        {showAdd && (
          <div className="mb-10 max-w-lg">
            <PhotoForm onSave={handleAdd} onCancel={() => setShowAdd(false)} />
          </div>
        )}

        {/* Filtres */}
        <div className="flex gap-3 mb-8 flex-wrap">
          {['Tous', ...CATEGORIES].map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-xs tracking-widest uppercase font-semibold px-4 py-2 rounded-xl transition-colors ${
                filter === cat ? 'bg-cyan text-[#0d1117]' : 'border border-white/15 text-white/50 hover:text-white/80'
              }`}
            >
              {cat}
              {cat !== 'Tous' && <span className="ml-1.5 opacity-60">({photos.filter(p => p.category === cat).length})</span>}
              {cat === 'Tous' && <span className="ml-1.5 opacity-60">({photos.length})</span>}
            </button>
          ))}
        </div>

        {/* Grille */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map(photo => (
            <motion.div
              key={photo.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="relative group rounded-2xl overflow-hidden aspect-square bg-white/5"
            >
              {editing?.id === photo.id ? (
                <div className="absolute inset-0 z-10 overflow-y-auto">
                  <PhotoForm photo={editing} onSave={handleEdit} onCancel={() => setEditing(null)} />
                </div>
              ) : (
                <>
                  <img src={photo.src} alt={photo.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
                    <div className="flex justify-end gap-2">
                      <button
                        onClick={() => { setEditing(photo); setShowAdd(false); }}
                        className="w-8 h-8 bg-white/10 hover:bg-cyan hover:text-[#0d1117] rounded-lg flex items-center justify-center transition-colors"
                      >
                        <Pencil size={13} />
                      </button>
                      <button
                        onClick={() => handleDelete(photo.id)}
                        className="w-8 h-8 bg-white/10 hover:bg-red-500 rounded-lg flex items-center justify-center transition-colors"
                      >
                        <Trash2 size={13} />
                      </button>
                    </div>
                    <div>
                      <div className="text-cyan text-xs tracking-widest uppercase font-semibold mb-0.5">{photo.category}</div>
                      <div className="text-white text-xs font-bold">{photo.label}</div>
                      <div className="text-white/40 text-xs mt-1">Ordre: {photo.order ?? 0}</div>
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-24 text-white/30 text-sm">Aucune photo dans cette catégorie</div>
        )}
      </div>
    </div>
  );
}