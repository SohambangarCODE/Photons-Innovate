import React from "react";

// SVG Icons matching the specified design
const HeartPulseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-10 h-10 md:w-12 md:h-12 text-red-600"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.933 12.8a1 1 0 000-1.6L6.6 7.1A2 2 0 003 8.6v7.8a2 2 0 003.5.8l5.433-4.4z"
    />
  </svg>
);

const DatabaseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-10 h-10 md:w-12 md:h-12 text-blue-600"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0v3.75C20.25 19.903 16.556 21.75 12 21.75s-8.25-1.847-8.25-4.125v-3.75"
    />
  </svg>
);

const SearchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-10 h-10 md:w-12 md:h-12 text-[#0ea5e9]"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
    />
  </svg>
);

const PersonIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5 text-gray-400 inline-block mr-2"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
    />
  </svg>
);

const EnvelopeIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`w-6 h-6 ${className}`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
    />
  </svg>
);

const UserIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`w-6 h-6 ${className}`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
    />
  </svg>
);

const CheckCircleIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`w-6 h-6 ${className}`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const CheckBadgeIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`w-5 h-5 ${className}`}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
      clipRule="evenodd"
    />
  </svg>
);

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#f8fafc] to-[#f0f9ff] py-1 md:py-2 font-sans text-gray-900 flex flex-col items-center">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full flex flex-col items-center relative z-10">
        {/* 2. Heading Block */}

        <div className="min-h-screen bg-slate-50 overflow-x-hidden pt-2 pb-1 relative w-full">
      {/* Background Shapes */}
      <div className="absolute top-0 w-full h-[600px] bg-gradient-to-br from-blue-50/80 to-transparent -z-10" />
      
      {/* Curved background line representing the path */}
      <div className="absolute top-[40%] left-0 right-0 w-full overflow-hidden -z-10 opacity-20 pointer-events-none">
        <svg viewBox="0 0 1440 320" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,160 C320,300 420,0 720,160 C1020,320 1120,50 1440,200" stroke="#3B82F6" strokeWidth="4" />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16 relative">
          
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8 z-10 relative pl-2 lg:pl-0">
            <h1 className="text-[2rem] md:text-[2.6rem] lg:text-[2.8rem] font-bold text-[#1E3A8A] leading-[1.2] tracking-tight">
              AI-Powered Clinical Decision Support <br className="hidden lg:block"/> System for Healthcare Workers
            </h1>
            <p className="text-lg md:text-xl text-slate-600 font-medium">
              Helping Primary Health Workers with Diagnosis & Second Opinions
            </p>

            {/* Feature Buttons / Cards */}
            <div className="flex flex-wrap lg:flex-nowrap gap-4 pt-6">
               {/* Button 1 */}
               <div className="flex-1 min-w-[200px] flex flex-col items-center gap-3 bg-white px-4 py-5 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-blue-50 hover:-translate-y-1 transition-transform duration-300">
                  <div className="w-12 h-12 rounded-lg bg-red-50 flex items-center justify-center text-red-500 mb-1 mx-auto relative">
                    <i className="ri-heart-pulse-fill text-3xl z-10"></i>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-white flex items-center justify-center"><i className="ri-stethoscope-line text-[10px] text-gray-700"></i></div>
                  </div>
                  <span className="font-bold text-[#1E3A8A] text-sm text-center">Enter Patient Info</span>
               </div>
               
               {/* Button 2 */}
               <div className="flex-1 min-w-[200px] flex flex-col items-center gap-3 bg-white px-4 py-5 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-blue-50 hover:-translate-y-1 transition-transform duration-300 relative">
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-2 bg-gray-200 rounded-b-md"></div>
                  <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500 mb-1 mx-auto relative">
                    <i className="ri-profile-line text-3xl z-10"></i>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-white flex items-center justify-center shadow-sm border border-gray-100"><i className="ri-robot-2-fill text-[10px] text-blue-500"></i></div>
                  </div>
                  <span className="font-bold text-[#1E3A8A] text-sm text-center">Get AI Recommendations</span>
               </div>

               {/* Button 3 */}
               <div className="flex-1 min-w-[200px] flex flex-col items-center gap-3 bg-white px-4 py-5 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-blue-50 hover:-translate-y-1 transition-transform duration-300">
                  <div className="w-12 h-12 rounded-lg bg-slate-50 flex items-center justify-center text-[#1E3A8A] mb-1 mx-auto">
                    <i className="ri-search-eye-line text-3xl"></i>
                  </div>
                  <span className="font-bold text-[#1E3A8A] text-sm text-center">Request Second Opinion</span>
               </div>
            </div>
          </div>

          {/* Right Image/Illustration Area */}
          <div className="relative flex justify-center lg:justify-end z-10">
            {/* Soft background glow */}
            <div className="absolute inset-0 bg-blue-200/40 rounded-full blur-3xl transform scale-75 -z-10"></div>
            
            <div className="relative w-full max-w-[450px] aspect-[4/5] md:aspect-square lg:aspect-[4/4.5] bg-gradient-to-tr from-[#cfe3fa] to-[#ebf4ff] rounded-2xl sm:rounded-[3rem] overflow-hidden flex items-end justify-center shadow-2xl border-4 border-white">
               {/* Abstract medical screens behind doctor */}
               <div className="absolute top-2 left-6 w-32 h-40 bg-white/40 rounded-xl border border-white/60 shadow-sm p-3">
                 <div className="w-full h-1/2 bg-blue-100/50 rounded-md mb-2 flex flex-col items-center justify-center">
                    <i className="ri-body-scan-line text-blue-400 text-3xl"></i>
                 </div>
                 <div className="w-full h-2 bg-blue-200/50 rounded-full mb-1"></div>
                 <div className="w-2/3 h-2 bg-blue-200/50 rounded-full"></div>
               </div>
               
               <div className="absolute top-1 right-6 w-36 h-28 bg-white/40 backdrop-blur-sm rounded-xl border border-white/60 shadow-sm p-3">
                 <div className="flex gap-2 mb-3 border-b border-white/50 pb-2">
                   <div className="w-4 h-4 rounded-sm bg-blue-300/60"></div>
                   <div className="w-4 h-4 rounded-full bg-blue-300/60"></div>
                   <div className="w-4 h-4 rounded-full bg-blue-300/60"></div>
                 </div>
                 <div className="w-full h-2 bg-blue-200/50 rounded-full mb-2"></div>
                 <div className="w-full h-8 bg-blue-100/50 rounded-md"></div>
               </div>

               {/* Doctor Image */}
               <img src="/herodoc.jpg" alt="Doctor" className="w-[85%] h-[85%] object-cover object-top rounded-t-[2.5rem] shadow-[0_-10px_20px_rgba(0,0,0,0.05)] border-t border-x border-white/50" />
            </div>
          </div>
        </div>
      </div>
    </div>

        {/* --------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

        {/* 5. Two-column Content Section */}
        <div className="w-full flex flex-col lg:flex-row items-stretch justify-center gap-10 lg:gap-16 mb-2 z-20 px-16 pb-10">
          {/* Left Column: AI Diagnosis */}
          <div className="lg:w-1/2 w-full flex flex-col bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden transform hover:-translate-y-1 transition duration-500">
            <div className="bg-[#1e40af] py-5 px-6 md:px-8 border-b border-[#1e3a8a]">
              <h2 className="text-white text-xl md:text-2xl font-bold tracking-wider flex items-center gap-3">
                <CheckBadgeIcon className="text-blue-200" />
                AI Diagnosis
              </h2>
            </div>
            <div className="flex-1 p-6 md:p-8 flex flex-col bg-gradient-to-br from-white to-slate-50 relative">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                Likely Conditions:
              </h3>
              <ul className="space-y-5 lg:space-y-6 flex-1 mb-8 text-base md:text-lg">
                <li className="flex items-center text-gray-800 font-semibold bg-white p-3 rounded-lg border border-gray-100 shadow-sm">
                  <PersonIcon /> <span className="mr-auto">1. Pneumonia</span>{" "}
                  <span className="text-[#dc2626] font-bold tracking-tight bg-red-50 px-2.5 py-1 rounded-md ml-2">
                    (High Risk)
                  </span>
                </li>
                <li className="flex items-center text-gray-800 font-semibold bg-white p-3 rounded-lg border border-gray-100 shadow-sm">
                  <PersonIcon /> <span className="mr-auto">2. Viral Fever</span>{" "}
                  <span className="text-[#16a34a] font-bold tracking-tight bg-green-50 px-2.5 py-1 rounded-md ml-2">
                    (Moderate)
                  </span>
                </li>
                <li className="flex items-center text-gray-800 font-semibold bg-white p-3 rounded-lg border border-gray-100 shadow-sm">
                  <PersonIcon /> <span className="mr-auto">3. COPD</span>{" "}
                  <span className="text-[#f59e0b] font-bold tracking-tight bg-amber-50 px-2.5 py-1 rounded-md ml-2">
                    (Low Risk)
                  </span>
                </li>
              </ul>
              <div className="pt-6 border-t border-gray-200 bg-white -mx-6 -mb-6 p-6 md:px-8 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.02)]">
                <p className="text-lg md:text-xl font-bold text-gray-800 flex items-center justify-between mb-3">
                  <span>Risk Level:</span>
                  <span className="text-[#dc2626] bg-red-50 px-4 py-1.5 rounded-lg border border-red-100 shadow-sm">
                    82% - High
                  </span>
                </p>
                <p className="text-lg md:text-xl font-bold text-gray-800 flex items-center justify-between">
                  <span>Suggested Action:</span>
                  <span className="text-[#16a34a] bg-green-50 px-4 py-1.5 rounded-lg border border-green-100 shadow-sm">
                    Refer to Specialist
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Second Opinion Workflow */}
          <div className="lg:w-1/2 w-full flex flex-col bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden transform hover:-translate-y-1 transition duration-500">
            <div className="bg-slate-50 py-5 px-6 md:px-8 border-b border-gray-200 flex items-center justify-between">
              <h2 className="text-[#1e40af] text-xl md:text-2xl font-bold tracking-wider">
                Second Opinion Workflow
              </h2>
              <div className="flex gap-1">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
            </div>
            <div className="flex-1 p-6 md:p-8 flex flex-col lg:flex-row gap-8 bg-gradient-to-bl from-white to-blue-50/30">
              {/* Internal Left: Laptop Illustration */}
              <div className="w-full lg:w-[50%] bg-[#f8fafc] rounded-2xl border border-gray-200 overflow-hidden shadow-inner relative min-h-[220px] flex items-center justify-center p-4">
                <img
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600"
                  alt="Doctor reviewing on laptop"
                  className="w-full h-full object-cover rounded-xl shadow-md border border-white"
                />

                {/* Mock UI Overlay */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[85%] bg-white/90 backdrop-blur-md rounded-lg shadow-lg border border-gray-100 p-3 flex items-center gap-3">
                  <CheckBadgeIcon className="w-8 h-8 text-green-500" />
                  <div className="flex-1 space-y-2">
                    <div className="w-full h-2.5 bg-gray-200 rounded-full"></div>
                    <div className="w-2/3 h-2.5 bg-gray-200 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Internal Right: Steps */}
              <div className="w-full lg:w-[50%] flex flex-col justify-center gap-6 py-2">
                {/* Step 1 */}
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#f59e0b] flex items-center justify-center shrink-0 border border-orange-100 group-hover:bg-orange-100 group-hover:scale-105 transition-all shadow-sm">
                    <EnvelopeIcon className="w-6 h-6" />
                  </div>
                  <span className="font-bold text-gray-800 text-base md:text-lg">
                    Case Summary Sent
                  </span>
                </div>
                {/* Step Connect Line */}
                <div className="w-1 h-6 bg-gray-100 ml-5.5 -my-4 rounded-full"></div>

                {/* Step 2 */}
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#2563eb] flex items-center justify-center shrink-0 border border-blue-100 group-hover:bg-blue-100 group-hover:scale-105 transition-all shadow-sm">
                    <UserIcon className="w-6 h-6" />
                  </div>
                  <span className="font-bold text-gray-800 text-base md:text-lg">
                    Specialist Reviews
                  </span>
                </div>
                {/* Step Connect Line */}
                <div className="w-1 h-6 bg-gray-100 ml-5.5 -my-4 rounded-full"></div>

                {/* Step 3 */}
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 rounded-xl bg-green-50 text-[#16a34a] flex items-center justify-center shrink-0 border border-green-100 group-hover:bg-green-100 group-hover:scale-105 transition-all shadow-sm">
                    <CheckCircleIcon className="w-6 h-6" />
                  </div>
                  <span className="font-bold text-gray-800 text-base md:text-lg">
                    Feedback Received
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Badges */}
            <div className="bg-white px-4 md:px-6 py-5 border-t border-gray-200 flex flex-wrap items-center justify-center md:justify-around gap-4 shadow-inner">
              <span className="flex items-center gap-2 text-xs md:text-sm font-bold text-gray-600 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-200">
                <CheckBadgeIcon className="w-4 h-4 text-blue-500" />
                AI-Powered Analysis
              </span>
              <span className="flex items-center gap-2 text-xs md:text-sm font-bold text-gray-600 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-200">
                <CheckBadgeIcon className="w-4 h-4 text-green-500" />
                Expert Consultation
              </span>
              <span className="flex items-center gap-2 text-xs md:text-sm font-bold text-gray-600 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-200">
                <CheckBadgeIcon className="w-4 h-4 text-orange-500" />
                Final Recommendations
              </span>
            </div>
          </div>
        </div>

        {/* 6. Bottom Tagline */}
        <div className="w-full max-w-4xl mx-auto flex items-center justify-center relative mt-10 md:mt-12 py-6">
          {/* Line */}
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full border-t-2 border-slate-200"></div>
          </div>
          {/* Text */}
          <div className="relative flex justify-center">
            <span className="bg-gradient-to-b from-[#f8fafc] to-[#f0f9ff] px-6 text-xl md:text-3xl font-bold tracking-tight text-[#1E3A8A]">
              Improving Healthcare Decisions, Together
            </span>
          </div>
        </div>

        {/* 7. Features Cards Section */}
        <div className="w-full max-w-5xl mx-auto px-4 mt-8 flex flex-col md:flex-row gap-8 justify-center pb-16 z-20 relative">
          
          {/* Card 1: Integrated with ASHA Workers */}
          <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-blue-50 overflow-hidden flex-1 flex flex-col hover:-translate-y-1 transition-transform duration-300 pt-6">
             <div className="px-6 text-center mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-[#1E3A8A]">Integrated with ASHA Workers</h3>
             </div>
             
             <div className="w-full h-56 md:h-64 bg-slate-100 overflow-hidden relative">
                <img src="/Screenshot 2026-02-22 014542.png" alt="ASHA Worker" className="w-full h-full object-cover object-center" />
             </div>
             
             <div className="p-6 md:p-8 flex-1 flex flex-col bg-white">
                <p className="text-slate-700 text-lg md:text-xl font-medium mb-8 leading-snug">
                  Local health workers can enter<br className="hidden md:block"/> cases and get guided support
                </p>
                <div className="mt-auto bg-white rounded-xl border border-blue-100/60 overflow-hidden shadow-sm shadow-blue-50">
                   <div className="bg-[#f8fafc] px-5 py-3 border-b border-blue-50 flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full overflow-hidden bg-white shadow-sm shrink-0 border border-gray-100 p-0.5">
                         <img src="https://ui-avatars.com/api/?name=A+W&background=1E3A8A&color=fff&rounded=true&font-size=0.4" alt="Worker Avatar" className="w-full h-full object-cover rounded-full" />
                      </div>
                      <span className="font-bold text-[#1E3A8A] text-lg">For ASHA Health Workers</span>
                   </div>
                   <div className="px-5 py-4 space-y-3.5">
                      <div className="flex items-center gap-3">
                         <i className="ri-check-line text-[#0ea5e9] text-2xl font-bold"></i>
                         <span className="text-slate-700 font-medium text-lg">Symptom Inputs</span>
                      </div>
                      <div className="flex items-center gap-3">
                         <i className="ri-check-line text-[#0ea5e9] text-2xl font-bold"></i>
                         <span className="text-slate-700 font-medium text-lg">Smart Triage</span>
                      </div>
                      <div className="flex items-center gap-3">
                         <i className="ri-check-line text-[#0ea5e9] text-2xl font-bold"></i>
                         <span className="text-slate-700 font-medium text-lg">Referral Assistance</span>
                      </div>
                   </div>
                </div>
             </div>
          </div>

          {/* Card 2: Offline Support for Remote Areas */}
          <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-blue-50 overflow-hidden flex-1 flex flex-col hover:-translate-y-1 transition-transform duration-300 pt-6">
             <div className="px-6 text-center mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-[#1E3A8A]">Offline Support for Remote Areas</h3>
             </div>
             
             <div className="w-full h-56 md:h-64 bg-slate-100 overflow-hidden relative group">
                <img src="/doc.jpg" alt="Doctor and Patient" className="w-full h-full object-cover object-center" />
                
                {/* No Network Badge */}
                <div className="absolute bottom-13 right-8 bg-white/95 backdrop-blur-md shadow-[0_4px_20px_rgb(0,0,0,0.1)] rounded-full px-5 py-2 flex items-center gap-2 border border-blue-50 translate-x-0 group-hover:-translate-y-1 transition-transform">
                   <div className="bg-blue-100 w-6 h-6 rounded-full flex items-center justify-center">
                      <i className="ri-cloud-off-line text-blue-500 text-xs"></i>
                   </div>
                   <span className="text-[#1E3A8A] font-bold text-sm tracking-wide">No Network</span>
                </div>
             </div>
             
             <div className="p-6 md:p-8 flex-1 flex flex-col bg-white">
                <p className="text-slate-700 text-lg md:text-xl font-medium mb-8 leading-snug">
                  System works offline with local sync<br className="hidden md:block"/> when network returns
                </p>
                <div className="mt-auto bg-white rounded-xl border border-blue-100/60 overflow-hidden shadow-sm shadow-blue-50">
                   <div className="bg-[#f0f5fa] px-5 py-3 border-b border-blue-50 flex items-center gap-3">
                      <div className="w-9 h-9 flex items-center justify-center shrink-0 border-2 border-[#64748b] border-dashed rounded-full text-[#64748b] bg-transparent transform -rotate-45 ml-1">
                         <i className="ri-wifi-off-line text-[15px]"></i>
                      </div>
                      <span className="font-bold text-[#1E3A8A] text-lg tracking-wide pl-2">For Rural & Offline Use</span>
                   </div>
                   <div className="px-5 py-4 space-y-3.5 mt-1">
                      <div className="flex items-center gap-4">
                         <i className="ri-wifi-line text-[#1E3A8A] text-xl font-bold ml-1"></i>
                         <span className="text-slate-700 font-medium text-lg">Works Without Internet</span>
                      </div>
                      <div className="flex items-center gap-4">
                         <div className="bg-[#60a5fa] text-white rounded-[6px] w-[22px] h-[22px] flex items-center justify-center ml-1">
                           <i className="ri-cpu-line text-[14px]"></i>
                         </div>
                         <span className="text-slate-700 font-medium text-lg">Locally-Run Risk Model</span>
                      </div>
                      <div className="flex items-center gap-4">
                         <i className="ri-refresh-line text-[#0ea5e9] text-[20px] font-bold bg-[#eff6ff] rounded-full w-7 h-7 flex items-center justify-center ml-0.5"></i>
                         <span className="text-slate-700 font-medium text-lg border-l-2 border-transparent pl-[2px]">Syncs When Online</span>
                      </div>
                   </div>
                </div>
             </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
