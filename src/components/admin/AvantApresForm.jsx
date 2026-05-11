import { useState } from 'react';
import { Upload, Check, SplitSquareHorizontal } from 'lucide-react';
import { base44 } from '@/api/base44Client';
import BeforeAfterSlider from '@/components/galerie/BeforeAfterSlider';

export default function AvantApresForm({ onDone, onCancel, nextOrder }) {
  const [label, setLabel] = useState('');
  const [avant, setAvant] = useState('');
  const [apres, setApres] = useState('');
  const [uploadingAvant, setUploadingAvant] = useState(false);
  const [uploadingApres, setUploadingApres] = useState(false);
  const [saving, setSaving] = useState(false);

  const handleUpload = async (file, side) => {
    if (!file) return;
    if (side === 'avant') setUploadingAvant(true);
    else setUploadingApres(true);
    const { file_url } = await base44.integrations.Core.UploadFile({ file });
    if (side === 'avant') { setAvant(file_url); setUploadingAvant(false); }
    else { setApres(file_url); setUploadingApres(false); }
  };

  const handleSave = async () => {
    if (!avant || !apres) return;
    setSaving(true);
    await base44.entities.AvantApres.create({ avant, apres, label, order: nextOrder });
    setSaving(false);
    onDone();
  };

  return (
    <div className="bg-[#1a2030] border border-white/10 rounded-2xl p-6 space-y-5 mb-10">
      <h3 className="font-bold text-white text-sm tracking-widest uppercase flex items-center gap-2">
        <SplitSquareHorizontal size={15} className="text-cyan" /> Avant / Après
      </h3>

      <div>
        <label className="block text-xs text-white/40 uppercase tracking-widest mb-2">Label (optionnel)</label>
        <input
          value={label}
          onChange={e => setLabel(e.target.value)}
          placeholder="Ex: Polissage BMW M3"
          className="w-full bg-[#0d1117] border border-white/10 rounded-xl text-white text-sm px-4 py-2.5 focus:border-cyan focus:outline-none"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {/* Avant */}
        <div>
          <label className="block text-xs text-white/40 uppercase tracking-widest mb-2">Photo Avant</label>
          {avant && <img src={avant} alt="avant" className="w-full h-32 object-cover rounded-xl mb-2" />}
          <label className={`flex items-center gap-2 justify-center w-full border-2 border-dashed border-white/20 rounded-xl py-3 text-xs cursor-pointer hover:border-cyan/50 hover:text-cyan transition-all ${uploadingAvant ? 'opacity-50 text-white/30' : 'text-white/50'}`}>
            <Upload size={14} />
            {uploadingAvant ? 'Envoi...' : 'Choisir photo avant'}
            <input type="file" accept="image/*" className="hidden" onChange={e => handleUpload(e.target.files[0], 'avant')} disabled={uploadingAvant} />
          </label>
        </div>

        {/* Après */}
        <div>
          <label className="block text-xs text-white/40 uppercase tracking-widest mb-2">Photo Après</label>
          {apres && <img src={apres} alt="après" className="w-full h-32 object-cover rounded-xl mb-2" />}
          <label className={`flex items-center gap-2 justify-center w-full border-2 border-dashed border-white/20 rounded-xl py-3 text-xs cursor-pointer hover:border-cyan/50 hover:text-cyan transition-all ${uploadingApres ? 'opacity-50 text-white/30' : 'text-white/50'}`}>
            <Upload size={14} />
            {uploadingApres ? 'Envoi...' : 'Choisir photo après'}
            <input type="file" accept="image/*" className="hidden" onChange={e => handleUpload(e.target.files[0], 'apres')} disabled={uploadingApres} />
          </label>
        </div>
      </div>

      {/* Aperçu slider */}
      {avant && apres && (
        <div>
          <p className="text-xs text-white/40 uppercase tracking-widest mb-2">Aperçu</p>
          <div className="max-w-xs mx-auto">
            <BeforeAfterSlider avant={avant} apres={apres} label={label} />
          </div>
        </div>
      )}

      <div className="flex gap-3 pt-1">
        <button
          onClick={handleSave}
          disabled={!avant || !apres || saving}
          className="flex-1 bg-cyan text-[#0d1117] py-2.5 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-cyan/80 transition-colors disabled:opacity-40 flex items-center justify-center gap-2"
        >
          <Check size={14} /> {saving ? 'Enregistrement...' : 'Enregistrer'}
        </button>
        <button
          onClick={onCancel}
          disabled={saving}
          className="flex-1 border border-white/20 text-white/60 py-2.5 rounded-xl text-xs uppercase tracking-widest hover:border-white/40 transition-colors"
        >
          Annuler
        </button>
      </div>
    </div>
  );
}