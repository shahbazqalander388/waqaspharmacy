import React from 'react';
import { Camera, FileText, CheckCircle2, ArrowRight, ShieldCheck, Clock } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const PrescriptionBanner = () => {
  return (
    <section id="prescription" className="py-8 sm:py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
      <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-white text-[#0F172A] p-5 sm:p-10 lg:p-12 shadow-md sm:shadow-lg border border-slate-200">
        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
          
          {/* Left Text & Steps */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-red-50 px-3 py-1 sm:px-3.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-black text-[#B91C1C] border border-red-200">
              <Camera className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#B91C1C]" />
              <span>PRESCRIPTION HOME DELIVERY</span>
            </div>

            <h2 className="text-xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[#0F172A] leading-tight">
              Need to order via Doctor's Prescription?
            </h2>

            <p className="text-[#475569] text-xs sm:text-base leading-relaxed font-medium">
              Don't worry about searching individual medicines. Just snap a photo of your doctor's slip and send it to our qualified pharmacists on WhatsApp. We'll verify, confirm availability, and deliver right to your doorstep.
            </p>

            {/* 3 Step Process */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 pt-1 sm:pt-2">
              <div className="bg-slate-50 rounded-xl sm:rounded-2xl p-3.5 sm:p-4 border border-slate-200">
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-[#B91C1C] text-white font-black text-xs flex items-center justify-center mb-1.5 shadow-2xs">
                  1
                </div>
                <h4 className="text-xs font-extrabold text-[#0F172A] mb-0.5">Take a Photo</h4>
                <p className="text-[11px] text-[#64748B] leading-snug">Clear picture of doctor's prescription</p>
              </div>

              <div className="bg-slate-50 rounded-xl sm:rounded-2xl p-3.5 sm:p-4 border border-slate-200">
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-[#B91C1C] text-white font-black text-xs flex items-center justify-center mb-1.5 shadow-2xs">
                  2
                </div>
                <h4 className="text-xs font-extrabold text-[#0F172A] mb-0.5">Send on WhatsApp</h4>
                <p className="text-[11px] text-[#64748B] leading-snug">Send to +92 334 9238785</p>
              </div>

              <div className="bg-slate-50 rounded-xl sm:rounded-2xl p-3.5 sm:p-4 border border-slate-200">
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-[#B91C1C] text-white font-black text-xs flex items-center justify-center mb-1.5 shadow-2xs">
                  3
                </div>
                <h4 className="text-xs font-extrabold text-[#0F172A] mb-0.5">Doorstep Delivery</h4>
                <p className="text-[11px] text-[#64748B] leading-snug">Fast dispatch across Peshawar</p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <a
                href="https://wa.me/923349238785?text=Hello,%20I%20want%20to%20send%20my%20prescription%20for%20ordering."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 sm:gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-black text-xs sm:text-base px-5 py-3.5 sm:px-6 sm:py-4 rounded-xl sm:rounded-2xl shadow-lg shadow-green-950/15 hover:shadow-green-950/25 active:scale-95 transition-all duration-200 cursor-pointer text-center"
              >
                <FaWhatsapp className="text-xl sm:text-2xl" />
                <span>Send Prescription on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Card / Visual */}
          <div className="lg:col-span-5">
            <div className="bg-slate-50 text-slate-800 rounded-2xl sm:rounded-3xl p-4 sm:p-7 shadow-sm border border-slate-200 space-y-3 sm:space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200 pb-2.5 sm:pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-red-100 text-[#B91C1C] flex items-center justify-center shrink-0">
                    <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-extrabold text-[#0F172A]">Direct Pharmacist Desk</h3>
                    <p className="text-[10px] sm:text-[11px] text-[#64748B]">Waqas Pharmacy Licensed Staff</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  Active Now
                </span>
              </div>

              <div className="space-y-2 text-xs text-[#334155]">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Licensed pharmacists verify dosage & drug interactions</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Temperature-controlled storage & safe sealed packing</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Free consultation on affordable generic alternatives</span>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-[11px] sm:text-xs text-[#64748B]">
                  <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#B91C1C]" />
                  <span>Response in &lt; 5 mins</span>
                </div>
                <a
                  href="https://wa.me/923349238785?text=Hello,%20I%20want%20to%20send%20my%20prescription%20for%20ordering."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] sm:text-xs font-bold text-[#B91C1C] hover:text-red-800 flex items-center gap-1"
                >
                  <span>Quick WhatsApp Order</span>
                  <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PrescriptionBanner;
