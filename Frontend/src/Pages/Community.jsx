import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- Mock Data ---

const categories = [
    { id: "doctors", title: "Doctors Near Me", icon: "ri-user-heart-line", color: "bg-blue-500", desc: "Location-based specialist directory" },
    { id: "workers", title: "Nurses & PHC Workers", icon: "ri-nurse-line", color: "bg-teal-500", desc: "Rural health workers directory" },
    { id: "facilities", title: "Nearby Health Facilities", icon: "ri-hospital-line", color: "bg-indigo-500", desc: "ICU, Blood Bank & Lab search" },
    { id: "emergency", title: "Emergency Contacts", icon: "ri-alarm-warning-line", color: "bg-red-500", desc: "Instant escalation directory" },
    { id: "discussions", title: "Clinical Discussion Groups", icon: "ri-discuss-line", color: "bg-orange-500", desc: "Structured WhatsApp-style clinical comms" },
    { id: "learning", title: "Case-Based Learning", icon: "ri-book-open-line", color: "bg-purple-500", desc: "Curated clinical case reviews" },
    { id: "projects", title: "Ongoing Health Projects", icon: "ri-rocket-line", color: "bg-emerald-500", desc: "Ecosystem-driven initiatives" },
    { id: "alerts", title: "Public Health Alerts", icon: "ri-error-warning-line", color: "bg-amber-500", desc: "District-level clinical advisories" },
    { id: "collaboration", title: "Collaboration Requests", icon: "ri-hand-heart-line", color: "bg-cyan-500", desc: "NGO & Pilot partnerships" },
    { id: "schemes", title: "Govt Schemes & Updates", icon: "ri-government-line", color: "bg-slate-600", desc: "Official health programs" },
    { id: "boards", title: "Clinical Discussion Boards", icon: "ri-layout-masonry-line", color: "bg-blue-600", desc: "Protocol feedback & support" },
    { id: "reputation", title: "Verification & Reputation", icon: "ri-shield-check-line", color: "bg-gray-700", desc: "Role-based verification stats" },
];

const doctorsData = [
    { 
        id: 1, name: "Dr. Amit Deshmukh", specialty: "General Medicine", qualification: "MD Medicine", 
        exp: "8 Years", hospital: "District Civil Hospital", distance: "12 km", avail: "On-Call",
        initials: "AD", gradient: "from-blue-600 to-blue-800"
    },
    { 
        id: 2, name: "Dr. Snehal Patil", specialty: "Pediatrics", qualification: "MD Peds", 
        exp: "10 Years", hospital: "Sancheti Hospital", distance: "5 km", avail: "Scheduled",
        initials: "SP", gradient: "from-teal-500 to-teal-700"
    }
];

const workersData = [
    { id: 1, name: "Sonia Verma", role: "Staff Nurse", phc: "Junner PHC", area: "Pune District", exp: "8 years", initials: "SV", gradient: "from-cyan-500 to-blue-600" },
    { id: 2, name: "Rajesh Kumar", role: "ASHA Coordinator", phc: "Manchar PHC", area: "Ambegaon", exp: "11 years", initials: "RK", gradient: "from-orange-400 to-red-600" }
];

const facilitiesData = [
    { id: 1, name: "Pune District Civil Hospital", type: "District Hospital", services: ["ICU", "Blood Bank", "X-Ray"], emergency: "24x7", referral: "Yes", transfer: "20 min" },
    { id: 2, name: "Sassoon General Hospital", type: "Government Hospital", services: ["ICU", "Blood Bank", "Burn Unit"], emergency: "24x7", referral: "Yes", transfer: "15 min" }
];

const alertData = [
    { id: 1, title: "Dengue Spike Alert – Pune District", issued: "District Health Authority", date: "22 Feb 2026", area: "Hadapsar, Wagholi", risk: "High" },
];

const communityGroups = [
    { id: 1, name: "PHC Pune District – Clinical Support", moderator: "Dr. K. Iyer", members: 156, specialty: "General", active: 12 },
    { id: 2, name: "Snake Bite Rapid Response Network", moderator: "Dr. V. Rao", members: 89, specialty: "Emergency", active: 3 }
];

const projectsData = [
    { id: 1, name: "Rural Fever Surveillance Pilot", objective: "Early detection of viral outbreaks", lead: "Narayana Health", area: "Nashik", status: "Active", volunteer: "Yes" },
];

const casesData = [
    { id: "C-101", condition: "Severe Dehydration in Child", decision: "Immediate Referral", outcome: "Stabilized at District Hospital", initials: "CH" },
];

// --- Sub-Components ---

const SectionHeader = ({ title, icon, onBack }) => (
    <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
            <button onClick={onBack} className="w-10 h-10 bg-white shadow-sm border border-gray-100 rounded-xl flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors">
                <i className="ri-arrow-left-line"></i>
            </button>
            <div className="flex items-center gap-3">
                <i className={`${icon} text-3xl text-blue-600`}></i>
                <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
            </div>
        </div>
        <div className="text-sm font-bold text-blue-600 px-4 py-2 bg-blue-50 rounded-full">Maharashtra / Pune District</div>
    </div>
);

const DetailView = ({ section, onBack }) => {
    switch (section.id) {
        case "doctors":
            return (
                <div className="space-y-6">
                    <SectionHeader title={section.title} icon={section.icon} onBack={onBack} />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {doctorsData.map(doc => (
                            <div key={doc.id} className="bg-white rounded-3xl p-6 border-2 border-gray-100 hover:border-blue-200 transition-all shadow-sm group">
                                <div className="flex items-start gap-4">
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${doc.gradient} flex items-center justify-center text-white shrink-0 shadow-lg`}>
                                        <span className="text-xl font-black">{doc.initials}</span>
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between">
                                            <h3 className="font-bold text-gray-900 text-lg leading-tight">{doc.name}</h3>
                                            <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-lg">Verified Expert</span>
                                        </div>
                                        <p className="text-sm text-blue-600 font-medium mb-2">{doc.specialty} · {doc.qualification}</p>
                                        <div className="grid grid-cols-2 gap-2 mt-4 text-xs font-semibold text-gray-500">
                                            <div className="flex items-center gap-1 text-[10px]"><i className="ri-hospital-line"></i> {doc.hospital}</div>
                                            <div className="flex items-center gap-1 text-[10px]"><i className="ri-map-pin-line"></i> {doc.distance} away</div>
                                            <div className="flex items-center gap-1 text-[10px] italic"><i className="ri-time-line"></i> {doc.avail}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-2 mt-6 pt-6 border-t border-gray-50">
                                    <button className="flex-1 py-2.5 bg-blue-600 text-white font-bold rounded-xl text-[10px] hover:bg-blue-700 transition-colors uppercase tracking-wider">Request Opinion</button>
                                    <button className="flex-1 py-2.5 bg-red-50 text-red-600 font-bold rounded-xl text-[10px] hover:bg-red-100 transition-colors uppercase tracking-wider">Emergency Escalation</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            );
        case "workers":
            return (
                <div className="space-y-6">
                    <SectionHeader title={section.title} icon={section.icon} onBack={onBack} />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {workersData.map(worker => (
                            <div key={worker.id} className="bg-white rounded-3xl p-6 border-2 border-gray-100 hover:border-teal-200 transition-all shadow-sm">
                                <div className="flex items-start gap-4">
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${worker.gradient} flex items-center justify-center text-white shrink-0 shadow-lg`}>
                                        <span className="text-xl font-black">{worker.initials}</span>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-bold text-gray-900 text-lg leading-tight">{worker.name}</h3>
                                        <p className="text-sm text-teal-600 font-medium mb-2">{worker.role} · {worker.phc}</p>
                                        <div className="space-y-1.5 mt-3 text-xs font-semibold text-gray-500">
                                            <div className="flex items-center gap-1 font-bold">Area: <span className="text-gray-900 ml-1">{worker.area}</span></div>
                                            <div className="flex items-center gap-1 font-bold">Experience: <span className="text-gray-900 ml-1">{worker.exp}</span></div>
                                            <div className="flex items-center gap-1 font-bold">Reputation: <span className="text-yellow-600 ml-1">4.8 (Top Contributor)</span></div>
                                        </div>
                                    </div>
                                </div>
                                <button className="w-full mt-6 py-2.5 bg-teal-50 text-teal-700 font-bold rounded-xl text-[10px] hover:bg-teal-100 transition-colors uppercase tracking-widest">Connect with Worker</button>
                            </div>
                        ))}
                    </div>
                </div>
            );
        case "facilities":
            return (
                <div className="space-y-6">
                    <SectionHeader title={section.title} icon={section.icon} onBack={onBack} />
                    <div className="space-y-4">
                        {facilitiesData.map(fac => (
                            <div key={fac.id} className="bg-white rounded-3xl p-6 border border-gray-100 flex flex-col md:flex-row gap-6 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-3">
                                        <h3 className="font-black text-gray-900 text-xl">{fac.name}</h3>
                                        <span className="text-[10px] font-black bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full uppercase tracking-[0.15em] border border-indigo-100">{fac.type}</span>
                                    </div>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {fac.services.map(s => <span key={s} className="px-3 py-1 bg-gray-50 text-gray-600 text-[10px] font-black rounded-lg border border-gray-100 uppercase tracking-widest">{s}</span>)}
                                    </div>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-xs font-black">
                                        <div className="flex flex-col gap-1"><span className="text-gray-400 uppercase tracking-widest text-[9px]">Emergency</span><span className="text-green-600">{fac.emergency}</span></div>
                                        <div className="flex flex-col gap-1"><span className="text-gray-400 uppercase tracking-widest text-[9px]">Referrals</span><span className="text-blue-600">{fac.referral}</span></div>
                                        <div className="flex flex-col gap-1"><span className="text-gray-400 uppercase tracking-widest text-[9px]">Avg Transfer</span><span className="text-orange-600">{fac.transfer}</span></div>
                                    </div>
                                </div>
                                <div className="flex md:flex-col gap-2 justify-center shrink-0">
                                    <button className="px-8 py-4 bg-red-600 text-white font-black rounded-2xl text-[10px] hover:bg-red-700 transition-all shadow-lg shadow-red-200 uppercase tracking-widest">Request Emergency ICU</button>
                                    <button className="px-8 py-4 bg-indigo-50 text-indigo-700 font-black rounded-2xl text-[10px] hover:bg-indigo-100 transition-all uppercase tracking-widest">Clinical Protocol</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            );
        case "discussions":
            return (
                <div className="space-y-6">
                    <SectionHeader title={section.title} icon={section.icon} onBack={onBack} />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {communityGroups.map(group => (
                            <div key={group.id} className="bg-white rounded-3xl p-6 border-2 border-gray-100 hover:border-orange-200 transition-all shadow-sm">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 text-2xl font-black">
                                        {group.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 text-lg leading-tight">{group.name}</h3>
                                        <p className="text-xs text-orange-600 font-bold flex items-center gap-1">
                                            <i className="ri-user-follow-line"></i> Mod: {group.moderator}
                                        </p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 gap-2 mb-6 text-[10px] font-black uppercase tracking-widest text-gray-500">
                                    <div className="bg-gray-50 rounded-xl p-3 flex flex-col items-center gap-1"><span>Members</span><span className="text-gray-900 text-sm">{group.members}</span></div>
                                    <div className="bg-gray-50 rounded-xl p-3 flex flex-col items-center gap-1"><span>Active</span><span className="text-green-600 text-sm">{group.active}</span></div>
                                    <div className="bg-gray-50 rounded-xl p-3 flex flex-col items-center gap-1"><span>Role</span><span className="text-blue-600 text-sm">{group.specialty}</span></div>
                                </div>
                                <button className="w-full py-4 bg-orange-600 text-white font-black rounded-2xl text-[10px] hover:bg-orange-700 transition-all uppercase tracking-widest">Join Clinical Group</button>
                            </div>
                        ))}
                    </div>
                </div>
            );
        case "learning":
            return (
                <div className="space-y-6">
                    <SectionHeader title={section.title} icon={section.icon} onBack={onBack} />
                    {casesData.map(c => (
                        <div key={c.id} className="bg-white rounded-[2.5rem] p-8 border-2 border-purple-100 shadow-xl shadow-purple-900/5 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 opacity-5"><i className="ri-book-read-fill text-9xl text-purple-600"></i></div>
                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="px-3 py-1 bg-purple-600 text-white text-[10px] font-black rounded-full uppercase tracking-widest">Case ID: {c.id}</span>
                                    <span className="text-sm font-bold text-purple-800">Published: 15 Feb 2026</span>
                                </div>
                                <h3 className="text-2xl font-black text-gray-900 mb-4">{c.condition}</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                    <div className="bg-purple-50 rounded-2xl p-6 border border-purple-100">
                                        <h4 className="font-black text-purple-900 text-xs uppercase tracking-widest mb-3">Decision Taken</h4>
                                        <p className="text-purple-800 font-bold leading-relaxed">{c.decision}</p>
                                    </div>
                                    <div className="bg-green-50 rounded-2xl p-6 border border-green-100">
                                        <h4 className="font-black text-green-900 text-xs uppercase tracking-widest mb-3">Patient Outcome</h4>
                                        <p className="text-green-800 font-bold leading-relaxed">{c.outcome}</p>
                                    </div>
                                </div>
                                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 mb-8">
                                    <h4 className="font-black text-slate-900 text-xs uppercase tracking-widest mb-3">Key Learning Point</h4>
                                    <p className="text-slate-600 font-bold leading-relaxed italic">"Early SpO₂ drop indicator in pediatric cases is a critical referral marker for PHC officers."</p>
                                </div>
                                <button className="px-10 py-4 bg-purple-600 text-white font-black rounded-2xl text-[10px] hover:bg-purple-700 transition-all uppercase tracking-widest shadow-lg shadow-purple-200">Attend Expert Review</button>
                            </div>
                        </div>
                    ))}
                </div>
            );
        case "projects":
            return (
                <div className="space-y-6">
                    <SectionHeader title={section.title} icon={section.icon} onBack={onBack} />
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                        {projectsData.map(proj => (
                            <div key={proj.id} className="bg-white rounded-[3rem] p-10 border-2 border-emerald-100 shadow-xl shadow-emerald-900/5 relative overflow-hidden group">
                                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
                                    <div className="max-w-2xl">
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-[10px] font-black rounded-full uppercase tracking-widest border border-emerald-200">Pilot Phase</span>
                                            <span className="text-sm font-bold text-gray-400"><i className="ri-map-pin-line"></i> {proj.area}, Maharashtra</span>
                                        </div>
                                        <h3 className="text-3xl font-black text-gray-900 mb-3">{proj.name}</h3>
                                        <p className="text-lg text-gray-500 font-medium mb-6">{proj.objective}</p>
                                        <div className="flex items-center gap-6">
                                            <div className="flex flex-col gap-0.5"><span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Lead Entity</span><span className="text-sm font-black text-emerald-800">{proj.lead}</span></div>
                                            <div className="w-px h-8 bg-gray-100"></div>
                                            <div className="flex flex-col gap-0.5"><span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Status</span><span className="text-sm font-black text-blue-600">{proj.status}</span></div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-3 w-full lg:w-fit shrink-0">
                                        <button className="px-10 py-5 bg-emerald-600 text-white font-black rounded-[2rem] text-[10px] hover:bg-emerald-700 transition-all uppercase tracking-[0.2em] shadow-xl shadow-emerald-200">Volunteer Now</button>
                                        <button className="px-10 py-5 bg-white border-2 border-emerald-50 text-emerald-800 font-black rounded-[2rem] text-[10px] hover:bg-emerald-50 transition-all uppercase tracking-[0.2em]">Partner Enquiry</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            );
        case "alerts":
            return (
                <div className="space-y-6">
                    <SectionHeader title={section.title} icon={section.icon} onBack={onBack} />
                    {alertData.map(alert => (
                        <div key={alert.id} className="bg-amber-50 rounded-3xl p-8 border-2 border-amber-200 shadow-xl shadow-amber-900/5 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10"><i className="ri-error-warning-fill text-6xl text-amber-600"></i></div>
                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="px-3 py-1 bg-red-600 text-white text-[10px] font-black rounded-full uppercase tracking-widest animate-pulse">Critical Alert</span>
                                    <span className="text-sm font-bold text-amber-800">{alert.date}</span>
                                </div>
                                <h3 className="text-2xl font-black text-amber-900 mb-2">{alert.title}</h3>
                                <p className="text-sm font-semibold text-amber-800 opacity-80 mb-6 italic">Issued By: {alert.issued}</p>
                                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-amber-200 mb-8">
                                    <h4 className="font-black text-amber-900 mb-3 text-sm">Clinical Advisory</h4>
                                    <ul className="space-y-2 text-sm text-amber-800 font-medium list-disc pl-4">
                                        <li>Avoid Hadapsar and Wagholi regions if showing signs of fever.</li>
                                        <li>PHCs instructed to prioritize rapid antigen testing.</li>
                                        <li>Escalate platelet drop cases immediately to District Hospital.</li>
                                    </ul>
                                </div>
                                <button className="px-10 py-4 bg-red-600 text-white font-black rounded-2xl text-[10px] hover:bg-red-700 transition-all flex items-center gap-2 uppercase tracking-widest">
                                    View Detailed Protocol <i className="ri-file-search-line"></i>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            );
        default:
            return (
                <div className="space-y-6 py-20 text-center">
                    <SectionHeader title={section.title} icon={section.icon} onBack={onBack} />
                    <div className="max-w-md mx-auto">
                        <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-3xl flex items-center justify-center text-3xl mx-auto mb-6">
                            <i className={section.icon}></i>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Detailed {section.title} Module</h3>
                        <p className="text-gray-500 text-sm leading-relaxed mb-8">This tactical clinical module is currently being structured with regional data for the Maharashtra pilot program. Expected live date: Mar 2026.</p>
                        <button onClick={onBack} className="px-8 py-3 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-all">Back to Hub</button>
                    </div>
                </div>
            );
    }
};

// --- Main Component ---

const Community = () => {
    const [activeSection, setActiveSection] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [isEmergencyVisible, setIsEmergencyVisible] = useState(false);

    const filteredCategories = categories.filter(c => 
        c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.desc.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="min-h-full bg-[#f8fafc] pb-24 relative">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-[400px] bg-blue-900 overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500 rounded-full blur-[150px] opacity-20 -mr-40 -mt-60"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-600 rounded-full blur-[120px] opacity-20 -ml-20 -mb-40"></div>
            </div>

            {/* Header Content */}
            <div className="relative pt-16 pb-32 px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-800/40 backdrop-blur-md border border-white/10 rounded-full text-blue-100 text-xs font-bold mb-6 tracking-widest uppercase">
                            Clinical Coordination Platform
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-6 tracking-tight leading-[1.1]">
                            Ecosystem <span className="text-blue-300">Driven</span> Healthcare
                        </h1>
                        <p className="text-xl text-blue-100/70 max-w-2xl mx-auto leading-relaxed mb-12">
                            A highly structured tactical workspace for clinical coordination, rural health networking, and regional escalation support.
                        </p>

                        {/* Search Hub */}
                        <div className="max-w-2xl mx-auto relative group">
                            <i className="ri-search-2-line absolute left-6 top-1/2 -translate-y-1/2 text-blue-400 text-xl group-focus-within:text-blue-600 transition-colors"></i>
                            <input 
                                type="text" 
                                placeholder="Search tactical modules (e.g., 'Emergency', 'ASHA', 'Nashik Pilot')..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-white/95 backdrop-blur-lg border-2 border-transparent focus:border-blue-400 focus:outline-none pl-16 pr-8 py-5 rounded-[2.5rem] shadow-2xl text-lg font-medium text-gray-800 placeholder:text-blue-900/30 transition-all"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Tactical Grid / Detail View */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 -mt-16 relative z-10">
                <AnimatePresence mode="wait">
                    {activeSection ? (
                        <motion.div
                            key="detail"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 40 }}
                            className="bg-white/70 backdrop-blur-2xl rounded-[3rem] p-8 sm:p-12 shadow-2xl shadow-blue-900/5 border border-white"
                        >
                            <DetailView section={activeSection} onBack={() => setActiveSection(null)} />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="grid"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                        >
                            {filteredCategories.map((cat, idx) => (
                                <motion.div
                                    key={cat.id}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: idx * 0.05 }}
                                    onClick={() => setActiveSection(cat)}
                                    className="group cursor-pointer bg-white/90 backdrop-blur-md rounded-[2.5rem] p-8 border border-white shadow-lg hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center overflow-hidden relative"
                                >
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50/50 rounded-bl-[4rem] group-hover:w-full group-hover:h-full group-hover:rounded-none transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                                    <div className={`w-20 h-20 ${cat.color} rounded-3xl flex items-center justify-center text-white text-3xl mb-6 shadow-xl shadow-blue-900/10 group-hover:scale-110 transition-transform relative z-10`}>
                                        <i className={cat.icon}></i>
                                    </div>
                                    <h3 className="text-xl font-black text-gray-900 mb-2 relative z-10">{cat.title}</h3>
                                    <p className="text-sm font-semibold text-gray-500 leading-relaxed px-2 relative z-10 group-hover:text-gray-700">{cat.desc}</p>
                                    <div className="mt-6 text-blue-600 font-black text-xs uppercase tracking-widest flex items-center gap-2 relative z-10 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 transition-all">
                                        Access Module <i className="ri-arrow-right-line"></i>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Quick Connect Dashboard */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-20">
                <div className="bg-slate-900 rounded-[3rem] p-1 shadow-2xl overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-[100px] opacity-20 -mr-20 -mt-20"></div>
                    <div className="bg-white/5 backdrop-blur-md rounded-[2.8rem] p-8 sm:p-12 relative z-10 border border-white/5">
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                            <div className="max-w-xl text-center lg:text-left">
                                <span className="inline-flex items-center gap-2 px-3 py-1 bg-red-600 text-white text-[10px] font-black rounded-full uppercase tracking-[0.2em] mb-6">Emergency Dashboard</span>
                                <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Emergency <span className="text-blue-400 underline decoration-blue-400/30 underline-offset-8">Quick Connect</span> Panel</h2>
                                <p className="text-gray-400 font-semibold leading-relaxed">Direct access to the critical nodes of the Nashik-Pune health corridor. Prioritized for on-call experts and PHC escalation officers.</p>
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full lg:w-fit">
                                {[
                                    { label: "On-Call Specialist", icon: "ri-user-voice-line" },
                                    { label: "Nearest ICU Bed", icon: "ri-hotel-bed-line" },
                                    { label: "Blood Directory", icon: "ri-drop-line" },
                                    { label: "Ambulance Hub", icon: "ri-truck-line" },
                                    { label: "Referral Coord.", icon: "ri-exchange-line" },
                                    { label: "Govt Healthline", icon: "ri-phone-line" },
                                ].map(item => (
                                    <button key={item.label} className="bg-white/5 hover:bg-white/10 p-4 rounded-3xl border border-white/5 transition-all text-center group flex flex-col items-center gap-3">
                                        <i className={`${item.icon} text-2xl text-blue-400 group-hover:scale-110 transition-transform`}></i>
                                        <span className="text-[10px] font-black text-gray-300 uppercase leading-tight">{item.label}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Stats / Reputation (Mock) */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-16 flex flex-wrap justify-between gap-8 opacity-50 px-12">
                <div className="flex flex-col"><span className="text-xs font-black text-gray-500 uppercase tracking-widest">Platform Integrity</span><span className="text-2xl font-black text-slate-900 tracking-tighter">8,402 Verified Badges</span></div>
                <div className="flex flex-col"><span className="text-xs font-black text-gray-500 uppercase tracking-widest">Regional Coverage</span><span className="text-2xl font-black text-slate-900 tracking-tighter">14 Districts (MH)</span></div>
                <div className="flex flex-col"><span className="text-xs font-black text-gray-500 uppercase tracking-widest">Network Speed</span><span className="text-2xl font-black text-slate-900 tracking-tighter">4.2min Avg. Response</span></div>
                <div className="flex flex-col"><span className="text-xs font-black text-gray-500 uppercase tracking-widest">Active Pilots</span><span className="text-2xl font-black text-slate-900 tracking-tighter">23 Incubation Projects</span></div>
            </div>
        </div>
    );
};

export default Community;
