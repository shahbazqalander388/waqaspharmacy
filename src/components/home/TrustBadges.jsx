import React from 'react';
import { Truck, ShieldCheck, MessageCircle, UserCheck } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const BADGES = [
  {
    icon: Truck,
    title: "Fast Doorstep Delivery",
    desc: "Swift dispatch across Peshawar & express delivery across KP with safe packaging.",
    iconColor: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-100"
  },
  {
    icon: ShieldCheck,
    title: "100% Genuine Stock",
    desc: "Directly sourced from licensed pharmaceutical distributors with sealed packaging.",
    iconColor: "text-teal-600",
    bgColor: "bg-teal-50",
    borderColor: "border-teal-100"
  },
  {
    icon: MessageCircle,
    title: "Instant WhatsApp Orders",
    desc: "+92 334 9238785 dedicated helpline for quick inquiries & immediate order confirmation.",
    iconColor: "text-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-100"
  },
  {
    icon: UserCheck,
    title: "Pharmacist Consultation",
    desc: "Free expert guidance on medicine dosage, prescription checks, and safety advice.",
    iconColor: "text-indigo-600",
    bgColor: "bg-indigo-50",
    borderColor: "border-indigo-100"
  }
];

const TrustBadges = () => {
  return (
    <section className="relative z-20 -mt-4 sm:-mt-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {BADGES.map((badge, idx) => {
          const Icon = badge.icon;
          return (
            <div 
              key={idx}
              className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-md hover:shadow-lg transition-all duration-300 flex items-start gap-3.5 group"
            >
              <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl ${badge.bgColor} border ${badge.borderColor} ${badge.iconColor} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="min-w-0">
                <h3 className="text-sm font-extrabold text-[#0F172A] leading-tight mb-1">
                  {badge.title}
                </h3>
                <p className="text-xs text-[#64748B] leading-relaxed font-normal">
                  {badge.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TrustBadges;
