import React from "react";

// --- SVG / Icon helpers ---
const CheckIcon = ({ color = "#1e40af" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-4 h-4 shrink-0"
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={2.5}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const DashIcon = () => (
  <span className="w-4 h-4 shrink-0 flex items-center justify-center">
    <span className="block w-3 h-0.5 bg-gray-400 rounded-full" />
  </span>
);

const WifiIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 shrink-0 text-[#1e40af]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12.55a11 11 0 0114.08 0" />
    <path d="M1.42 9a16 16 0 0121.16 0" />
    <path d="M8.53 16.11a6 6 0 016.95 0" />
    <circle cx="12" cy="20" r="1" fill="currentColor" />
  </svg>
);

const CpuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <rect x="9" y="9" width="6" height="6" />
    <line x1="9" y1="1" x2="9" y2="4" /><line x1="15" y1="1" x2="15" y2="4" />
    <line x1="9" y1="20" x2="9" y2="23" /><line x1="15" y1="20" x2="15" y2="23" />
    <line x1="20" y1="9" x2="23" y2="9" /><line x1="20" y1="14" x2="23" y2="14" />
    <line x1="1" y1="9" x2="4" y2="9" /><line x1="1" y1="14" x2="4" y2="14" />
  </svg>
);

const RefreshIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 shrink-0 text-[#0ea5e9]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 4 23 10 17 10" />
    <polyline points="1 20 1 14 7 14" />
    <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" />
  </svg>
);

const HospitalIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 shrink-0 text-[#1e40af]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
    <line x1="12" y1="7" x2="12" y2="10" />
    <line x1="10.5" y1="8.5" x2="13.5" y2="8.5" />
  </svg>
);

const VideoIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <polygon points="23 7 16 12 23 17 23 7" />
    <rect x="1" y="5" width="15" height="14" rx="2" />
  </svg>
);

const CheckSquareIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 11 12 14 22 4" />
    <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
  </svg>
);

// --- Section Illustration (SVG-based) ---
const TierIllustration = () => (
  <div className="relative w-full flex items-center justify-center py-2 px-4">
    {/* Main connecting line */}
    <svg
      viewBox="0 0 600 180"
      className="w-full max-w-[580px] h-auto"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Dotted arc path */}
      <path
        d="M 80 130 Q 300 40 520 100"
        stroke="#60a5fa"
        strokeWidth="2.5"
        strokeDasharray="6 5"
        fill="none"
      />

      {/* Left node – Rural Doctor & Patient */}
      <circle cx="80" cy="130" r="38" fill="#eff6ff" stroke="#bfdbfe" strokeWidth="1.5" />
      <image href="https://api.dicebear.com/7.x/personas/svg?seed=doctor&backgroundColor=eff6ff" x="42" y="92" width="76" height="76" clipPath="url(#left-clip)" />
      <clipPath id="left-clip"><circle cx="80" cy="130" r="38" /></clipPath>

      {/* Tier 3 City label */}
      <rect x="28" y="60" width="104" height="24" rx="12" fill="#dbeafe" />
      <text x="80" y="77" textAnchor="middle" fontSize="11" fontWeight="700" fill="#1e40af">Tier 3 City</text>

      {/* WiFi signal at right */}
      <g transform="translate(485, 38)">
        <path d="M0 18 Q8 10 16 18" stroke="#60a5fa" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <path d="M-5 12 Q8 2 21 12" stroke="#93c5fd" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <circle cx="8" cy="21" r="2.5" fill="#3b82f6"/>
      </g>

      {/* Right node – City specialist */}
      <circle cx="520" cy="100" r="42" fill="#eff6ff" stroke="#bfdbfe" strokeWidth="1.5" />
      {/* Building / hospital icon placeholder */}
      <rect x="498" y="76" width="44" height="48" rx="4" fill="#bfdbfe" />
      <rect x="508" y="60" width="24" height="18" rx="2" fill="#93c5fd" />
      <rect x="505" y="95" width="8" height="12" rx="2" fill="white" />
      <rect x="517" y="95" width="8" height="12" rx="2" fill="white" />
      <rect x="529" y="95" width="8" height="12" rx="2" fill="white" />
      <rect x="513" y="108" width="14" height="16" rx="1" fill="white" />

      {/* Tier 1 City label */}
      <rect x="468" y="32" width="104" height="24" rx="12" fill="#dbeafe" />
      <text x="520" y="49" textAnchor="middle" fontSize="11" fontWeight="700" fill="#1e40af">Tier 1 City</text>

      {/* Middle – Doctor consulting with patient on laptop */}
      <circle cx="300" cy="100" r="50" fill="#f0f9ff" stroke="#e0f2fe" strokeWidth="1.5" />
      {/* Laptop base */}
      <rect x="270" y="118" width="60" height="5" rx="2" fill="#94a3b8" />
      {/* Laptop screen */}
      <rect x="275" y="95" width="50" height="30" rx="3" fill="#1e40af" />
      <rect x="279" y="99" width="42" height="22" rx="1.5" fill="#60a5fa" />
      {/* Doctor figure simplified */}
      <circle cx="290" cy="82" r="9" fill="#fde68a" />
      <path d="M 278 118 Q 290 108 302 118" fill="#3b82f6" />
      {/* Patient figure */}
      <circle cx="314" cy="86" r="7" fill="#fdba74" />
      <path d="M304 118 Q 314 110 324 118" fill="#6b7280" />
    </svg>
  </div>
);

// --- Main Component ---
export default function TierConnectSection() {
  return (
    <section className="w-full bg-gradient-to-b from-[#f0f9ff] to-[#f8fafc] py-12 md:py-16 font-sans">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1e3a8a] leading-tight">
            Connects Tier 3 Cities to Specialists in Tier 1
          </h2>
        </div>

        {/* Illustration Card */}
        <div className="bg-white rounded-2xl border border-blue-100 shadow-[0_8px_30px_rgb(0,0,0,0.07)] overflow-hidden mb-6">
          <div className="bg-gradient-to-br from-[#e0f2fe] to-[#f0f9ff] px-6 py-6">
            <TierIllustration />
          </div>

          {/* Sub-text row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 border-t border-blue-50">
            <div className="px-6 py-4 border-b sm:border-b-0 sm:border-r border-blue-50">
              <p className="text-slate-600 text-sm font-medium leading-relaxed">
                Allows rural patients access to<br />top-tier medical advice
              </p>
            </div>
            <div className="px-6 py-4">
              <p className="text-slate-600 text-sm font-medium leading-relaxed">
                Allows rural patients access to<br />top-tier medical advice
              </p>
            </div>
          </div>
        </div>

        {/* Two Feature Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

          {/* LEFT – For Rural & Offline Use */}
          <div className="bg-white rounded-2xl border border-blue-100 shadow-[0_4px_20px_rgb(0,0,0,0.06)] overflow-hidden">
            {/* Header */}
            <div className="flex items-center gap-3 px-5 py-3.5 border-b border-blue-50 bg-[#f8fafc]">
              <div className="w-8 h-8 rounded-lg bg-[#dbeafe] flex items-center justify-center shrink-0">
                <WifiIcon />
              </div>
              <span className="font-bold text-[#1e3a8a] text-sm">For Rural &amp; Offline Use</span>
            </div>

            {/* Items */}
            <div className="px-5 py-4 space-y-3">
              <div className="flex items-center gap-3">
                <CheckIcon color="#1e40af" />
                <span className="text-slate-700 font-medium text-sm">Works Without Internet</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded bg-[#60a5fa] flex items-center justify-center shrink-0">
                  <CpuIcon />
                </div>
                <span className="text-slate-700 font-medium text-sm">Locally-Run Risk Model</span>
              </div>
              <div className="flex items-center gap-3">
                <RefreshIcon />
                <span className="text-slate-700 font-medium text-sm">Syncs When Online</span>
              </div>
            </div>
          </div>

          {/* RIGHT – For Tier 3 Clinics / PHCs */}
          <div className="bg-white rounded-2xl border border-blue-100 shadow-[0_4px_20px_rgb(0,0,0,0.06)] overflow-hidden">
            {/* Header */}
            <div className="flex items-center gap-3 px-5 py-3.5 border-b border-blue-50 bg-[#f8fafc]">
              <div className="w-8 h-8 rounded-lg bg-[#dbeafe] flex items-center justify-center shrink-0">
                <HospitalIcon />
              </div>
              <span className="font-bold text-[#1e3a8a] text-sm">For Tier 3 Clinics / PHCs</span>
            </div>

            {/* Items */}
            <div className="px-5 py-4 space-y-3">
              <div className="flex items-center gap-3">
                <DashIcon />
                <span className="text-slate-700 font-medium text-sm">Patient Cases Referred</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded bg-[#60a5fa] flex items-center justify-center shrink-0">
                  <VideoIcon />
                </div>
                <span className="text-slate-700 font-medium text-sm">Remote Consultation</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded bg-[#22c55e] flex items-center justify-center shrink-0">
                  <CheckSquareIcon />
                </div>
                <span className="text-slate-700 font-medium text-sm">Faster Critical Care</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
