import React, { useState } from 'react';
import { ChevronDown, MessageCircle, HelpCircle } from 'lucide-react';
import { faqList, businessConfig, createWhatsAppUrl } from '../config/business.ts';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const purwokertoWA = createWhatsAppUrl(
    businessConfig.branches.purwokerto.whatsapp,
    businessConfig.branches.purwokerto.name
  );

  return (
    <section id="faq" className="py-20 md:py-28 bg-white border-t border-neutral-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-extrabold tracking-wider text-[#BE123C] uppercase px-3.5 py-1.5 rounded-full bg-pink-100/70 border border-pink-200">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Questions & Answers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-neutral-900 font-medium max-w-xl mx-auto leading-relaxed">
            Jawaban lengkap seputar layanan, reservasi, dan panduan sebelum kunjungan ke GULA Waxing.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {faqList.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all ${
                  isOpen
                    ? 'border-neutral-400 bg-neutral-50 shadow-xs'
                    : 'border-neutral-300 bg-white hover:border-neutral-400 shadow-xs'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(idx)}
                  className="w-full py-4.5 px-6 text-left flex items-center justify-between gap-4 font-extrabold text-neutral-950 focus-visible:outline-hidden cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg">
                    {item.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'rotate-180 bg-neutral-950 text-white'
                        : 'bg-neutral-100 text-neutral-950 border border-neutral-300'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm sm:text-base text-neutral-900 font-medium leading-relaxed border-t border-neutral-200">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* WhatsApp Inquiry Fallback Callout */}
        <div className="p-6 rounded-2xl bg-rose-50 border border-pink-300 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <h3 className="text-base font-extrabold text-neutral-950">
              Punya pertanyaan lain yang belum terjawab?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-900 font-medium">
              Admin GULA Waxing Purwokerto siap membantu konsultasi Anda melalui WhatsApp resmi (0889-8957-5099).
            </p>
          </div>

          <a
            href={purwokertoWA}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[44px] inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-[#E11D74] hover:bg-[#c41563] transition-colors shadow-xs shrink-0 whitespace-nowrap"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Chat Admin Purwokerto</span>
          </a>
        </div>

      </div>
    </section>
  );
};
