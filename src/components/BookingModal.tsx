import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Calendar, MessageCircle, Check, AlertCircle } from 'lucide-react';
import { branchList, servicesData, createWhatsAppUrl, businessConfig } from '../config/business.ts';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  initialBranchId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialService,
  initialBranchId = 'purwokerto',
}) => {
  const [selectedBranchId, setSelectedBranchId] = useState<string>(initialBranchId);
  const [selectedServiceName, setSelectedServiceName] = useState<string>(initialService || 'Underarm Waxing');
  const [customerName, setCustomerName] = useState<string>('');
  const [dateNote, setDateNote] = useState<string>('');

  if (!isOpen) return null;

  const currentBranch = branchList.find(b => b.id === selectedBranchId) || branchList[0];
  const isPurwokerto = currentBranch.id === 'purwokerto';

  const handleLaunchWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    if (isPurwokerto) {
      const namePart = customerName.trim() ? ` dari ${customerName.trim()}` : '';
      const datePart = dateNote.trim() ? ` Rencana jadwal: ${dateNote.trim()}.` : '';
      const baseMessage =
        `Halo GULA Waxing, saya${namePart} ingin booking ${selectedServiceName} ` +
        `di cabang ${currentBranch.name}.${datePart} Mohon info harga & ketersediaan slot. Terima kasih.`;

      const targetUrl = `https://wa.me/${currentBranch.whatsapp}?text=${encodeURIComponent(baseMessage)}`;
      window.open(targetUrl, '_blank', 'noopener,noreferrer');
      onClose();
    } else {
      window.open(businessConfig.linktreeUrl, '_blank', 'noopener,noreferrer');
      onClose();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="relative max-w-lg w-full bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-neutral-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full text-neutral-700 hover:text-black hover:bg-neutral-100 transition-colors cursor-pointer"
          aria-label="Tutup modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-6">
          {/* Header */}
          <div>
            <span className="text-xs font-extrabold tracking-wider uppercase text-[#BE123C]">
              Reservasi & Tanya Jadwal
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-neutral-950 mt-1">
              Atur Rencana Booking
            </h3>
            <p className="text-xs sm:text-sm text-neutral-900 font-medium mt-1 leading-relaxed">
              Pilih layanan dan cabang, pesan WhatsApp Anda akan otomatis terbuat dengan format rapi.
            </p>
          </div>

          <form onSubmit={handleLaunchWhatsApp} className="space-y-4">
            {/* Branch Selector */}
            <div>
              <label className="block text-xs font-bold text-neutral-900 mb-1.5">
                Pilih Cabang GULA Waxing
              </label>
              <select
                value={selectedBranchId}
                onChange={(e) => setSelectedBranchId(e.target.value)}
                className="w-full text-sm font-semibold rounded-xl border border-neutral-300 px-3.5 py-2.5 bg-neutral-50 text-neutral-950 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#BE123C]"
              >
                {branchList.map((branch) => (
                  <option key={branch.id} value={branch.id}>
                    {branch.name} {branch.id === 'purwokerto' ? '⭐ (Flagship UNSOED)' : `(${branch.city})`}
                  </option>
                ))}
              </select>
            </div>

            {/* Service Selector */}
            <div>
              <label className="block text-xs font-bold text-neutral-900 mb-1.5">
                Pilih Layanan Waxing
              </label>
              <select
                value={selectedServiceName}
                onChange={(e) => setSelectedServiceName(e.target.value)}
                className="w-full text-sm font-semibold rounded-xl border border-neutral-300 px-3.5 py-2.5 bg-neutral-50 text-neutral-950 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#BE123C]"
              >
                {servicesData.map((service) => (
                  <option key={service.id} value={service.name}>
                    {service.name} — {service.treatmentArea}
                  </option>
                ))}
                <option value="Konsultasi Perawatan Waxing Lainnya">
                  Lainnya (Konsultasi via WhatsApp)
                </option>
              </select>
            </div>

            {/* Optional Customer Name */}
            <div>
              <label className="block text-xs font-bold text-neutral-900 mb-1.5">
                Nama Anda (Opsional)
              </label>
              <input
                type="text"
                placeholder="Contoh: Sarah"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="w-full text-sm font-medium rounded-xl border border-neutral-300 px-3.5 py-2.5 bg-neutral-50 text-neutral-950 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#BE123C]"
              />
            </div>

            {/* Optional Date / Time Note */}
            <div>
              <label className="block text-xs font-bold text-neutral-900 mb-1.5">
                Rencana Hari / Jam (Opsional)
              </label>
              <input
                type="text"
                placeholder="Contoh: Besok sore jam 15.00"
                value={dateNote}
                onChange={(e) => setDateNote(e.target.value)}
                className="w-full text-sm font-medium rounded-xl border border-neutral-300 px-3.5 py-2.5 bg-neutral-50 text-neutral-950 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#BE123C]"
              />
            </div>

            {/* Branch Note */}
            {isPurwokerto ? (
              <div className="p-3.5 rounded-xl bg-pink-100/70 border border-pink-300 text-xs text-neutral-950 flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#BE123C] shrink-0 mt-0.5" />
                <span>
                  Cabang Purwokerto menggunakan nomor resmi <strong className="text-neutral-950 font-extrabold">0889-8957-5099</strong>. Klik tombol di bawah untuk membuka chat langsung.
                </span>
              </div>
            ) : (
              <div className="p-3.5 rounded-xl bg-amber-100/80 border border-amber-300 text-xs text-amber-950 flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
                <span>
                  Untuk cabang Yogyakarta ({currentBranch.name}), Anda akan diarahkan ke halaman Linktree resmi untuk memilih kontak admin yang bertugas.
                </span>
              </div>
            )}

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full min-h-[48px] inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-sm font-bold text-white bg-[#E11D74] hover:bg-[#c41563] active:scale-98 transition-all shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>
                  {isPurwokerto ? 'Lanjut ke WhatsApp (Purwokerto)' : 'Buka Kontak Linktree'}
                </span>
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </motion.div>
  );
};
