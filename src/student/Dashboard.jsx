import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import {
  Sparkles, GraduationCap, CheckCircle2, TrendingUp, Award,
  GaugeCircle, Layers, Clock, MapPin,  FileText,
  BookOpen, MessageSquare, ArrowUpRight, User, Settings
} from "lucide-react"

export default function Dashboard() {
  const [time, setTime] = useState("")
  const [dateStr, setDateStr] = useState("")
  const [weekday, setWeekday] = useState("")
  const [activeFilter, setActiveFilter] = useState("This Semester")

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true }))
      setDateStr(now.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }))
      setWeekday(now.toLocaleDateString("en-US", { weekday: "long" }))
    }
    updateDateTime()
    const interval = setInterval(updateDateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  const subjectData = {
    "This Semester": [
      { subject: "Algorithms", value: 92, grade: "A+" },
      { subject: "Databases", value: 78, grade: "B+" },
      { subject: "Networks", value: 85, grade: "A" },
      { subject: "AI & ML", value: 96, grade: "O" },
      { subject: "Systems", value: 71, grade: "B" },
      { subject: "Math III", value: 88, grade: "A+" },
    ],
    "Overall Academic Year": [
      { subject: "Algorithms", value: 89, grade: "A+" },
      { subject: "Databases", value: 82, grade: "A" },
      { subject: "Networks", value: 80, grade: "B+" },
      { subject: "AI & ML", value: 94, grade: "O" },
      { subject: "Systems", value: 76, grade: "B" },
      { subject: "Math III", value: 91, grade: "A+" },
    ],
  }

  const classes = [
    { time: "08:30 AM", subject: "Advanced Algorithms", room: "Hall A-204", status: "done" },
    { time: "10:15 AM", subject: "Machine Learning Lab", room: "Lab C-12", status: "active" },
    { time: "01:00 PM", subject: "Database Systems", room: "Hall B-110", status: "upcoming" },
    { time: "03:30 PM", subject: "Computer Networks", room: "Hall A-301", status: "upcoming" },
  ]

  const activities = [
    { icon: CheckCircle2, label: "Submitted ML Assignment 3", who: "Aria K.", time: "2m ago", link: "/student/exams", color: "text-emerald-500 bg-emerald-50" },
    { icon: FileText, label: "Graded: Algorithms Quiz", who: "Prof. Lin", time: "1h ago", link: "/student/results", color: "text-violet-500 bg-violet-50" },
    { icon: BookOpen, label: "Enrolled in Cloud Computing", who: "Aria K.", time: "3h ago", link: "/student/courses", color: "text-blue-500 bg-blue-50" },
    { icon: MessageSquare, label: "New feedback on project", who: "Prof. Vega", time: "5h ago", link: "/student/profile", color: "text-amber-500 bg-amber-50" },
  ]

  const announcements = [
    { tag: "Urgent", title: "Final end-sem exam timetable released.", color: "bg-rose-50 text-rose-600 border-rose-100", time: "Just now" },
    { tag: "Event", title: "National Hackathon 2026 registrations open.", color: "bg-violet-50 text-violet-600 border-violet-100", time: "2 hours ago" },
    { tag: "Notice", title: "Library hours extended till midnight.", color: "bg-amber-50 text-amber-600 border-amber-100", time: "Yesterday" },
  ]

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-50 via-slate-100 to-indigo-50/30 p-4 font-sans md:p-8 text-slate-800 antialiased">

      {/* Background Animated Blurs for Premium Feel */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-violet-200/40 rounded-full blur-3xl pointer-events-none animate-pulse duration-4000" />
      <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-indigo-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto grid max-w-7xl grid-cols-12 gap-6 relative z-10">

        {/* ==================== 1. WELCOME HERO (DYNAMIC MESH + GLASSMORPHISM) ==================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative col-span-12 overflow-hidden rounded-[2.5rem] bg-slate-950 p-8 text-white shadow-[0_25px_60px_-15px_rgba(30,27,75,0.4)] md:p-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border border-slate-800"
        >
          {/* Dynamic Mesh Backglow Background Elements */}
          <div className="absolute inset-0 opacity-40 pointer-events-none">
            <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[80%] rounded-full bg-gradient-to-br from-violet-600 to-indigo-800 blur-[80px] animate-pulse" />
            <div className="absolute bottom-[-30%] right-[-10%] w-[50%] h-[80%] rounded-full bg-gradient-to-tr from-fuchsia-600 to-purple-700 blur-[90px] animate-bounce duration-5000" />
          </div>

          {/* Glassmorphism Wrapper Content */}
          <div className="relative z-10 space-y-4">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium border border-white/10 backdrop-blur-md shadow-inner"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Academic Session: 2026 Active
            </motion.div>

            <div className="space-y-1">
              <p className="text-sm text-indigo-300 flex items-center gap-1.5 font-semibold tracking-wide uppercase">
                <GraduationCap className="h-4 w-4 text-violet-400" /> {weekday || "Loading Today..."}
              </p>
              <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
                Welcome back, Aria
              </h1>
              <p className="text-sm text-slate-300 max-w-md font-light leading-relaxed">
                Your performance is exceptional this term. Let's see your real-time academic analytics.
              </p>
            </div>

            <div className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 px-3.5 py-1 text-xs text-amber-300 font-semibold shadow-sm">
              <Sparkles className="h-3.5 w-3.5 text-amber-400 animate-spin duration-3000" /> Top 5% in Computer Science cohort
            </div>
          </div>

          {/* Premium Glassmorphism Clock widget */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="relative overflow-hidden rounded-2xl bg-white/[0.07] border border-white/10 p-6 text-left md:text-right backdrop-blur-xl shadow-2xl w-full md:w-auto min-w-[200px]"
          >
            <p className="font-mono text-4xl font-black tracking-tight tabular-nums bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">{time || "--:--:--"}</p>
            <p className="text-[10px] font-bold uppercase tracking-widest text-indigo-300 mt-1.5">{dateStr || "Loading..."}</p>
          </motion.div>
        </motion.div>


        {/* ==================== QUICK LINKS SECTION ==================== */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  className="col-span-12 bg-white p-6 md:p-8 rounded-[2rem] border border-slate-200 shadow-md"
>
  <h2 className="font-bold text-xl text-slate-800 mb-6">Quick Access</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
    
    {/* Exams */}
    <Link to="/student/exams" className="group block p-6 rounded-2xl border border-slate-200 hover:border-indigo-300 hover:shadow-lg transition">
      <div className="flex items-center gap-4">
        <FileText className="h-8 w-8 text-indigo-600 group-hover:scale-110 transition-transform" />
        <div>
          <p className="font-bold text-slate-700">Exams</p>
          <p className="text-xs text-slate-400">View upcoming & past exams</p>
        </div>
      </div>
    </Link>

    {/* Results */}
    <Link to="/student/results" className="group block p-6 rounded-2xl border border-slate-200 hover:border-violet-300 hover:shadow-lg transition">
      <div className="flex items-center gap-4">
        <Award className="h-8 w-8 text-violet-600 group-hover:scale-110 transition-transform" />
        <div>
          <p className="font-bold text-slate-700">Results</p>
          <p className="text-xs text-slate-400">Check your performance</p>
        </div>
      </div>
    </Link>

    {/* Profile */}
    <Link to="/student/profile" className="group block p-6 rounded-2xl border border-slate-200 hover:border-emerald-300 hover:shadow-lg transition">
      <div className="flex items-center gap-4">
        <User className="h-8 w-8 text-emerald-600 group-hover:scale-110 transition-transform" />
        <div>
          <p className="font-bold text-slate-700">Profile</p>
          <p className="text-xs text-slate-400">Manage your personal info</p>
        </div>
      </div>
    </Link>

    {/* Settings */}
    <Link to="/student/settings" className="group block p-6 rounded-2xl border border-slate-200 hover:border-amber-300 hover:shadow-lg transition">
      <div className="flex items-center gap-4">
        <Settings className="h-8 w-8 text-amber-600 group-hover:scale-110 transition-transform" />
        <div>
          <p className="font-bold text-slate-700">Settings</p>
          <p className="text-xs text-slate-400">Preferences & security</p>
        </div>
      </div>
    </Link>

  </div>
</motion.div>

        {/* ==================== 2. PREMIUM METRIC CARDS ==================== */}
        {/* Attendance */}
        <motion.div
          whileHover={{ y: -6, scale: 1.01 }}
          className="col-span-12 sm:col-span-6 md:col-span-3 bg-white p-6 rounded-3xl border border-slate-200/80 shadow-[0_15px_30px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(99,102,241,0.15)] transition-all group flex flex-col justify-between relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-50 rounded-bl-[4rem] -z-10 group-hover:bg-indigo-100/70 transition-colors" />
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs font-bold tracking-wider uppercase text-slate-400 group-hover:text-indigo-600 transition-colors">Attendance</p>
              <p className="text-xs text-slate-500 font-medium mt-0.5">Current Phase</p>
            </div>
            <div className="p-2 bg-indigo-50 text-indigo-600 rounded-xl group-hover:scale-110 transition-transform">
              <CheckCircle2 className="h-5 w-5" />
            </div>
          </div>
          <div className="mt-8 flex flex-col items-start">
            <div className="text-4xl font-black tracking-tight text-slate-900">85%</div>
            <div className="mt-2 inline-flex items-center gap-1 text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" /> Safe Zone
            </div>
          </div>
        </motion.div>

        {/* Assignments */}
        <motion.div
          whileHover={{ y: -6, scale: 1.01 }}
          className="col-span-12 sm:col-span-6 md:col-span-3 bg-white p-6 rounded-3xl border border-slate-200/80 shadow-[0_15px_30px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(99,102,241,0.15)] transition-all group flex flex-col justify-between relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-violet-50 rounded-bl-[4rem] -z-10 group-hover:bg-violet-100/70 transition-colors" />
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs font-bold tracking-wider uppercase text-slate-400 group-hover:text-violet-600 transition-colors">Assignments</p>
              <p className="text-xs text-slate-500 font-medium mt-0.5">Submission Rate</p>
            </div>
            <div className="p-2 bg-violet-50 text-violet-600 rounded-xl group-hover:scale-110 transition-transform">
              <TrendingUp className="h-5 w-5" />
            </div>
          </div>
          <div className="mt-6 w-full">
            <p className="text-4xl font-black tracking-tight text-slate-900">42/48</p>
            <div className="w-full bg-slate-100 h-2 rounded-full mt-3 overflow-hidden relative">
              <div className="bg-gradient-to-r from-indigo-600 to-violet-600 h-full rounded-full relative" style={{ width: "87.5%" }}>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent w-full h-full animate-pulse" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Credits */}
        <motion.div
          whileHover={{ y: -6, scale: 1.01 }}
          className="col-span-12 sm:col-span-6 md:col-span-3 bg-white p-6 rounded-3xl border border-slate-200/80 shadow-[0_15px_30px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(99,102,241,0.15)] transition-all group flex flex-col justify-between relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-fuchsia-50 rounded-bl-[4rem] -z-10 group-hover:bg-fuchsia-100/70 transition-colors" />
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs font-bold tracking-wider uppercase text-slate-400 group-hover:text-fuchsia-600 transition-colors">Total Credits</p>
              <p className="text-xs text-slate-500 font-medium mt-0.5">Earned Count</p>
            </div>
            <div className="p-2 bg-fuchsia-50 text-fuchsia-600 rounded-xl group-hover:scale-110 transition-transform">
              <Award className="h-5 w-5" />
            </div>
          </div>
          <div className="mt-8 flex flex-col items-start">
            <p className="text-4xl font-black tracking-tight text-slate-900">96</p>
            <div className="mt-2 inline-flex bg-violet-50 text-violet-600 text-[11px] font-bold px-2.5 py-0.5 rounded-full border border-violet-100">
              +12 Accumulated
            </div>
          </div>
        </motion.div>

        {/* GPA */}
        <motion.div
          whileHover={{ y: -6, scale: 1.01 }}
          className="col-span-12 sm:col-span-6 md:col-span-3 bg-white p-6 rounded-3xl border border-slate-200/80 shadow-[0_15px_30px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(99,102,241,0.15)] transition-all group flex flex-col justify-between relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-50 rounded-bl-[4rem] -z-10 group-hover:bg-emerald-100/70 transition-colors" />
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs font-bold tracking-wider uppercase text-slate-400 group-hover:text-emerald-600 transition-colors">Current GPA</p>
              <p className="text-xs text-slate-500 font-medium mt-0.5">Cumulative Index</p>
            </div>
            <div className="p-2 bg-emerald-50 text-emerald-600 rounded-xl group-hover:scale-110 transition-transform">
              <GaugeCircle className="h-5 w-5" />
            </div>
          </div>
          <div className="mt-8 flex flex-col items-start">
            <p className="text-4xl font-black tracking-tight text-slate-900">3.84</p>
            <div className="mt-2 inline-flex bg-emerald-50 text-emerald-700 text-[11px] font-bold px-2.5 py-0.5 rounded-full items-center gap-1 border border-emerald-100">
              <TrendingUp className="h-3 w-3" /> +0.2 Upward Flow
            </div>
          </div>
        </motion.div>

        {/* ==================== 3. SUBJECT-WISE MASTERY (FIXED SPACEMENT & LAYOUT) ==================== */}

        <motion.div
          whileHover={{ y: -4 }}
          className="col-span-12 lg:col-span-7 bg-white p-6 md:p-8 rounded-[2rem] border border-slate-200 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.05)] hover:shadow-[0_25px_50px_-20px_rgba(99,102,241,0.12)] transition-all flex flex-col justify-between"
        >
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-indigo-50 text-indigo-600 rounded-2xl shadow-inner">
                <Layers className="h-5 w-5" />
              </div>
              <div>
                <h2 className="font-bold text-xl text-slate-800 tracking-tight">Subject-Wise Mastery</h2>
                <p className="text-xs text-slate-400 font-medium">Real-time credit distribution analytics</p>
              </div>
            </div>

            {/* Premium Pill Filter Toggle */}
            <div className="relative flex bg-slate-100 p-1.5 rounded-full border border-slate-200 shadow-inner">
              {["This Semester", "Overall Academic Year"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveFilter(tab)}
                  className="relative z-10 px-4 py-1.5 text-xs font-bold rounded-full transition-colors duration-300"
                  style={{ color: activeFilter === tab ? "#ffffff" : "#64748b" }}
                >
                  {activeFilter === tab && (

                    <motion.span
                      layoutId="premium-active-pill"
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                      className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-full -z-10 shadow-md"
                    />
                  )}
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Graphical Bars Area - Gap Fixes Applied Here */}
          <div className="mt-8 flex h-64 items-end justify-between gap-3 overflow-visible px-2">
            <AnimatePresence mode="wait">
              {subjectData[activeFilter].map((item, idx) => (
                <div key={activeFilter + item.subject} className="flex flex-col items-center justify-end h-full flex-1 group relative gap-3">

                  {/* Floating Tooltip on Hover */}
                  <div className="absolute -top-6 opacity-0 group-hover:opacity-100 group-hover:-top-8 bg-slate-900 text-white text-[11px] font-bold px-3 py-1.5 rounded-xl transition-all duration-300 shadow-xl z-20 flex flex-col items-center gap-0.5 pointer-events-none">
                    <span className="text-indigo-300 text-[9px] uppercase tracking-wider">Score</span>
                    <span>{item.value} / 100</span>
                    <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-900 rotate-45" />
                  </div>

                  {/* Bar Container - Matches nicely with the text below */}
                  <div className="w-full max-w-[40px] bg-slate-50 border border-slate-100 h-60 rounded-2xl flex items-end overflow-hidden shadow-inner group-hover:border-indigo-200 transition-colors">

                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: `${item.value}%` }}
                      exit={{ height: 0 }}
                      className="w-full bg-gradient-to-t from-indigo-600 via-indigo-500 to-violet-400 rounded-b-xl rounded-t-2xl relative"
                      transition={{ type: "spring", stiffness: 80, damping: 15, delay: idx * 0.04 }}
                    >
                      <div className="absolute top-0 left-0 right-0 h-1.5 bg-white/40 rounded-t-full" />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.div>
                  </div>

                  {/* Subject Title & Grade Badge - Properly placed */}
                  <div className="flex flex-col items-center gap-1 w-full">
                    <span className="text-[12px] font-bold text-slate-700 truncate w-full text-center group-hover:text-indigo-600 transition-colors">
                      {item.subject}
                    </span>
                    <span className="text-[10px] font-mono font-black text-slate-400 bg-slate-100 px-2 py-0.5 rounded-md">
                      {item.grade}
                    </span>
                  </div>
                </div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* ==================== 4. TODAY'S TIME SCHEDULE TABLE ==================== */}
        <motion.div
          whileHover={{ y: -4 }}
          className="col-span-12 lg:col-span-5 bg-white p-6 md:p-8 rounded-[2rem] border border-slate-200 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.05)] hover:shadow-[0_25px_50px_-20px_rgba(99,102,241,0.12)] transition-all"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-violet-50 text-violet-600 rounded-2xl shadow-inner">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <h2 className="font-bold text-xl text-slate-800 tracking-tight">Today's Timeline</h2>
                <p className="text-xs text-slate-400 font-medium">Chronological learning track</p>
              </div>
            </div>
            <span className="text-xs bg-slate-100 px-3 py-1 rounded-full text-slate-500 font-bold border border-slate-200 shadow-sm">4 Sectors</span>
          </div>

          <div className="mt-8 space-y-4 relative pl-4 border-l-2 border-slate-100">
            {classes.map((c, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.08 }}
                className="relative group/item"
              >
                {/* Dynamic Status Dot Indicator */}
                <span className={`absolute -left-[22.5px] top-4 h-3 w-3 rounded-full border-2 border-white transition-transform duration-300 group-hover/item:scale-125 ${c.status === "active"
                    ? "bg-emerald-500 ring-4 ring-emerald-100 shadow-[0_0_12px_rgba(16,185,129,0.5)]"
                    : c.status === "done"
                      ? "bg-indigo-600"
                      : "bg-slate-300"
                  }`} />

                <div className={`flex items-center justify-between p-4 rounded-2xl border transition-all duration-300 ${c.status === "active"
                    ? "border-emerald-500/30 bg-gradient-to-r from-emerald-50/50 to-emerald-50/10 shadow-[0_4px_20px_-4px_rgba(16,185,129,0.1)]"
                    : "border-slate-100 bg-slate-50/40 hover:bg-slate-50 hover:border-indigo-100 hover:shadow-md"
                  }`}>
                  <div className="flex items-center gap-3.5">
                    <span className="font-mono text-xs font-bold text-slate-600 bg-white border border-slate-200 px-2.5 py-1 rounded-xl shadow-sm tracking-tight group-hover/item:border-indigo-300 transition-colors">
                      {c.time}
                    </span>
                    <div>
                      <p className="text-sm font-bold text-slate-800 group-hover/item:text-indigo-600 transition-colors">{c.subject}</p>
                      <p className="text-xs text-slate-400 font-medium flex items-center gap-1 mt-0.5">
                        <MapPin className="h-3 w-3 text-slate-400" /> {c.room}
                      </p>
                    </div>
                  </div>

                  {c.status === "active" ? (
                    <span className="text-[9px] bg-emerald-500 text-white px-2.5 py-1 rounded-full font-black uppercase tracking-widest shadow-sm shadow-emerald-400/30 animate-pulse">
                      On Air
                    </span>
                  ) : c.status === "done" ? (
                    <span className="text-[10px] text-slate-400 font-bold italic">Completed</span>
                  ) : (
                    <ArrowUpRight className="h-4 w-4 text-slate-300 opacity-0 group-hover/item:opacity-100 group-hover/item:text-indigo-500 transition-all transform translate-y-1 group-hover/item:translate-y-0" />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ==================== 5. DYNAMIC RECENT ACTIVITY CHART ==================== */}

        <motion.div className="col-span-12 lg:col-span-7 bg-white p-6 md:p-8 rounded-[2rem] border">
          <h2 className="font-bold text-xl text-slate-800">Recent Activity</h2>
          <div className="space-y-3.5 mt-4">
            {activities.map((act, idx) => (
              <Link to={act.link} key={idx} className="block">
                <motion.div className="flex items-center justify-between p-3 rounded-2xl hover:bg-slate-50 transition">
                  <div className="flex items-center gap-4">
                    <div className={`p-2.5 rounded-xl ${act.color}`}>
                      <act.icon className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-700">{act.label}</p>
                      <p className="text-xs text-slate-400">{act.who}</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400">{act.time}</span>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Announcements */}
        <motion.div className="col-span-12 lg:col-span-5 bg-white p-6 md:p-8 rounded-[2rem] border">
          <h2 className="font-bold text-xl text-slate-800">University Noticeboard</h2>
          <div className="space-y-4 mt-4">
            {announcements.map((ann, idx) => (
              <motion.div key={idx} className="p-4 bg-slate-50 rounded-2xl border">
                <div className="flex justify-between">
                  <span className={`text-[9px] font-black uppercase px-2 py-0.5 rounded-md border ${ann.color}`}>
                    {ann.tag}
                  </span>
                  <span className="text-[10px] text-slate-400">{ann.time}</span>
                </div>
                <p className="text-xs font-semibold text-slate-700 mt-2">{ann.title}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  )
}