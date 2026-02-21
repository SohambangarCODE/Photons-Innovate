import React from "react";

/* ────────────────────────────────────────────────
   Tiny inline SVG icons
──────────────────────────────────────────────── */
const ClipboardIcon = ({ cls = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2"/>
    <rect x="8" y="2" width="8" height="4" rx="1"/>
    <line x1="9" y1="11" x2="15" y2="11"/><line x1="9" y1="15" x2="12" y2="15"/>
  </svg>
);

const FlaskIcon = ({ cls = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 3h6M9 3v7l-4.5 9A1 1 0 005.4 21h13.2a1 1 0 00.9-1.5L15 10V3"/>
    <line x1="9" y1="3" x2="15" y2="3"/>
  </svg>
);

const ImageIcon = ({ cls = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2"/>
    <circle cx="8.5" cy="8.5" r="1.5"/>
    <polyline points="21 15 16 10 5 21"/>
  </svg>
);

const MonitorIcon = ({ cls = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2"/>
    <line x1="8" y1="21" x2="16" y2="21"/>
    <line x1="12" y1="17" x2="12" y2="21"/>
    <path d="M9 10l2 2 4-4"/>
  </svg>
);

const UsersIcon = ({ cls = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
  </svg>
);

const NetworkIcon = ({ cls = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/>
    <line x1="12" y1="7" x2="5" y2="17"/><line x1="12" y1="7" x2="19" y2="17"/>
  </svg>
);

const BrainIcon = ({ cls = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.5 2A2.5 2.5 0 017 4.5v0A2.5 2.5 0 014.5 7v0A2.5 2.5 0 012 9.5v0A4.5 4.5 0 006.5 14H9"/>
    <path d="M14.5 2A2.5 2.5 0 0117 4.5v0A2.5 2.5 0 0119.5 7v0A2.5 2.5 0 0122 9.5v0A4.5 4.5 0 0117.5 14H15"/>
    <path d="M9 14v7M15 14v7M9 17h6"/>
  </svg>
);

const MessageIcon = ({ cls = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
  </svg>
);

const BarChartIcon = ({ cls = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
  </svg>
);

/* ────────────────────────────────────────────────
   Top Step Icons row
──────────────────────────────────────────────── */
const steps = [
  { icon: <ClipboardIcon cls="w-7 h-7" />, label: "Symptom-Based\nSmart Forms", color: "text-blue-600", bg: "bg-blue-50" },
  { icon: <FlaskIcon cls="w-7 h-7" />,     label: "Easy Input for\nLab Data & Vitals", color: "text-indigo-600", bg: "bg-indigo-50" },
  { icon: <MonitorIcon cls="w-7 h-7" />,   label: "Instant Connect\nto Docs On Screen", color: "text-sky-600", bg: "bg-sky-50" },
  { icon: <UsersIcon cls="w-7 h-7" />,     label: "Top Specialist\nNetwork", color: "text-violet-600", bg: "bg-violet-50" },
  { icon: <BrainIcon cls="w-7 h-7" />,     label: "Smart AI\nRecommendations", color: "text-teal-600", bg: "bg-teal-50" },
];

/* ────────────────────────────────────────────────
   Left / Right feature lists inside the card
──────────────────────────────────────────────── */
const leftFeatures = [
  { icon: <ClipboardIcon cls="w-5 h-5" />, color: "text-blue-600",   bg: "bg-blue-50",   label: "Symptom-Based Smart Forms" },
  { icon: <FlaskIcon cls="w-5 h-5" />,     color: "text-indigo-600", bg: "bg-indigo-50", label: "Easy Input for Lab Data & Vitals" },
  { icon: <ImageIcon cls="w-5 h-5" />,     color: "text-amber-600",  bg: "bg-amber-50",  label: "Image Upload (Optional)" },
];

const rightFeatures = [
  { icon: <MonitorIcon cls="w-5 h-5" />, color: "text-sky-600",    bg: "bg-sky-50",    label: "Instant Connect to Docs On Screen" },
  { icon: <UsersIcon cls="w-5 h-5" />,   color: "text-violet-600", bg: "bg-violet-50", label: "Top Specialist Network" },
  { icon: <NetworkIcon cls="w-5 h-5" />, color: "text-blue-600",   bg: "bg-blue-50",   label: "Best Dr-to-Dr Network" },
];

/* ────────────────────────────────────────────────
   Central SVG Illustration
──────────────────────────────────────────────── */
const WomanTabletIllustration = () => (
  <svg viewBox="0 0 240 260" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    {/* Background circle */}
    <circle cx="120" cy="150" r="105" fill="#dbeafe" opacity="0.5"/>

    {/* Tablet body */}
    <rect x="60" y="100" width="110" height="80" rx="8" fill="#1e40af" />
    <rect x="64" y="104" width="102" height="72" rx="6" fill="#60a5fa" />

    {/* Doctor on screen */}
    <circle cx="115" cy="128" r="14" fill="#fde68a" />
    <path d="M95 160 Q105 148 115 145 Q125 148 135 160" fill="#3b82f6" />
    {/* Stethoscope hint */}
    <path d="M110 135 Q106 142 108 149" stroke="#1e3a8a" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    <circle cx="108" cy="151" r="3" fill="none" stroke="#1e3a8a" strokeWidth="1.5"/>

    {/* Video call overlay badge */}
    <rect x="138" y="104" width="26" height="16" rx="3" fill="#22c55e" />
    <polygon points="165,109 170,112 165,115" fill="white"/>

    {/* Woman silhouette (front) */}
    {/* Head */}
    <circle cx="120" cy="185" r="22" fill="#fdba74" />
    {/* Hair */}
    <path d="M98 183 Q100 162 120 163 Q140 162 142 183 Q130 175 120 176 Q110 175 98 183z" fill="#1c1917" />
    {/* Body / saree */}
    <path d="M90 260 Q95 220 120 210 Q145 220 150 260z" fill="#dc2626" />
    <path d="M100 260 Q100 228 115 218 Q110 240 105 260z" fill="#b91c1c" opacity="0.5"/>
    {/* Arm holding tablet */}
    <path d="M108 210 Q85 218 75 195 Q70 185 80 182" stroke="#fdba74" strokeWidth="12" fill="none" strokeLinecap="round"/>
    {/* Tablet in hand */}
    <rect x="52" y="155" width="38" height="28" rx="4" fill="#1e3a8a" />
    <rect x="55" y="158" width="32" height="22" rx="3" fill="#93c5fd" />
    <circle cx="71" cy="168" r="6" fill="#fde68a" />

    {/* Plant leaf hint bottom-left */}
    <ellipse cx="30" cy="230" rx="18" ry="28" fill="#86efac" opacity="0.7" transform="rotate(-20,30,230)"/>
    <ellipse cx="22" cy="245" rx="12" ry="20" fill="#4ade80" opacity="0.5" transform="rotate(15,22,245)"/>
  </svg>
);

/* ────────────────────────────────────────────────
   Main Export
──────────────────────────────────────────────── */
export default function EndToEndSection() {
  return (
    <section className="w-full bg-white py-12 md:py-16 font-sans">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Heading ── */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1e3a8a] leading-tight">
            End-to-End Integrations for Better Healthcare Decisions
          </h2>
        </div>

        {/* ── Top Icon Steps Row ── */}
        <div className="flex items-start justify-between gap-2 mb-8 px-2 sm:px-4">
          {steps.map((s, i) => (
            <React.Fragment key={i}>
              <div className="flex flex-col items-center gap-2 flex-1 min-w-0">
                <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl ${s.bg} ${s.color} flex items-center justify-center shadow-sm border border-white`}>
                  {s.icon}
                </div>
                <p className="text-[10px] md:text-xs font-semibold text-slate-600 text-center leading-tight whitespace-pre-line">
                  {s.label}
                </p>
              </div>
              {i < steps.length - 1 && (
                <div className="flex items-start pt-5 shrink-0">
                  <svg width="28" height="10" viewBox="0 0 28 10" className="text-blue-200">
                    <line x1="0" y1="5" x2="20" y2="5" stroke="#93c5fd" strokeWidth="1.5" strokeDasharray="4 3"/>
                    <circle cx="24" cy="5" r="2.5" fill="#bfdbfe"/>
                  </svg>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* ── Central Feature Card ── */}
        <div className="bg-gradient-to-br from-[#f0f9ff] to-[#eff6ff] rounded-3xl border border-blue-100 shadow-[0_8px_40px_rgb(30,64,175,0.08)] p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 items-center">

            {/* Left Features */}
            <div className="space-y-4">
              {leftFeatures.map((f, i) => (
                <div key={i} className="flex items-center gap-3 bg-white/70 rounded-xl px-4 py-3 border border-blue-50 shadow-sm hover:-translate-y-0.5 transition-transform duration-200">
                  <div className={`w-9 h-9 rounded-lg ${f.bg} ${f.color} flex items-center justify-center shrink-0`}>
                    {f.icon}
                  </div>
                  <span className="text-sm font-semibold text-slate-700 leading-snug">{f.label}</span>
                </div>
              ))}
            </div>

            {/* Central Illustration */}
            <div className="w-44 md:w-52 mx-auto shrink-0">
              <WomanTabletIllustration />
            </div>

            {/* Right Features */}
            <div className="space-y-4">
              {rightFeatures.map((f, i) => (
                <div key={i} className="flex items-center gap-3 bg-white/70 rounded-xl px-4 py-3 border border-blue-50 shadow-sm hover:-translate-y-0.5 transition-transform duration-200">
                  <div className={`w-9 h-9 rounded-lg ${f.bg} ${f.color} flex items-center justify-center shrink-0`}>
                    {f.icon}
                  </div>
                  <span className="text-sm font-semibold text-slate-700 leading-snug">{f.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Bottom Badges ── */}
          <div className="mt-6 pt-5 border-t border-blue-100 flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center gap-2.5 bg-white rounded-full px-5 py-2.5 shadow-md border border-blue-100">
              <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                <MessageIcon cls="w-4 h-4" />
              </div>
              <span className="text-sm font-bold text-[#1e3a8a]">SmamA Specialist Connect</span>
            </div>
            <div className="flex items-center gap-2.5 bg-white rounded-full px-5 py-2.5 shadow-md border border-blue-100">
              <div className="w-7 h-7 rounded-full bg-teal-100 flex items-center justify-center text-teal-600">
                <BarChartIcon cls="w-4 h-4" />
              </div>
              <span className="text-sm font-bold text-[#1e3a8a]">Smart AI Recommendations</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
