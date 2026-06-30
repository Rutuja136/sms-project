import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useNavigate } from "react-router-dom"
import {
  FileText, Search, Sparkles, BookOpen,
  ShieldAlert, Info, CheckCircle, HelpCircle, Zap, Clock, Calendar, Timer, ChevronRight, Award
} from "lucide-react"

export default function Exams() {
  const [activeTab, setActiveTab] = useState("Upcoming")
  const [searchQuery, setSearchQuery] = useState("")
  const navigate = useNavigate()

  const examCategories = ["Upcoming", "Active", "Completed"]

  const examsData = [
    {
      id: "EX-901",
      title: "Advanced Algorithms & Data Structures",
      code: "CS-401",
      date: "July 02, 2026",
      time: "10:00 AM - 01:00 PM",
      duration: "3 Hours",
      questions: "45 MCQs + 5 Coding",
      status: "Upcoming",
      totalMarks: 100,
      difficulty: "Hard",
    },
    {
      id: "EX-902",
      title: "Machine Learning & Neural Networks",
      code: "AI-403",
      date: "Today",
      time: "02:00 PM - 04:00 PM",
      duration: "2 Hours",
      questions: "30 MCQs",
      status: "Active",
      totalMarks: 50,
      difficulty: "Advanced",
    },
    {
      id: "EX-881",
      title: "Database Management Systems",
      code: "CS-302",
      date: "June 18, 2026",
      time: "Completed",
      duration: "3 Hours",
      questions: "50 MCQs",
      status: "Completed",
      totalMarks: 100,
      score: "92/100",
      difficulty: "Medium",
    },
  ]

  const filteredExams = examsData.filter((exam) => {
    const matchesTab = exam.status === activeTab
    const matchesSearch = exam.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          exam.code.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesTab && matchesSearch
  })

  // ✅ Corrected Navigation Handlers
  const handleStartExam = (examId) => {
    navigate(`/student/start-exam/${examId}`)
  }

  const handleViewDetails = (examId) => {
    navigate(`/student/exams/${examId}`)
  }

  const handleViewResult = (examId) => {
    navigate(`/student/results/${examId}`)
  }

  return (
    <div className="min-h-screen bg-slate-50/60 p-4 font-sans md:p-8 text-slate-800 antialiased w-full relative">
      
      {/* Background Ambient Glows */}
      <div className="absolute inset-0 opacity-30 pointer-events-none overflow-hidden">
        <div className="absolute top-[30%] left-[15%] w-[600px] h-[600px] rounded-full bg-indigo-200/40 blur-[130px]" />
      </div>

      <div className="mx-auto max-w-7xl space-y-8 w-full relative z-10">
        
        {/* ==================== 1. STRICTLY DARK PREMIUM HEADER ==================== */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative overflow-hidden rounded-[2.5rem] bg-slate-950 border border-slate-800 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 w-full"
        >
          {/* Subtle Indigo Light Leak effect inside Dark Header */}
          <div className="absolute top-0 right-0 w-[400px] h-full bg-indigo-600/10 blur-[60px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[200px] h-full bg-purple-600/10 blur-[40px] pointer-events-none" />

          <div className="flex items-center gap-5 relative z-10">
            <div className="p-4 bg-gradient-to-tr from-indigo-600 to-indigo-500 text-white rounded-2xl shadow-lg shadow-indigo-500/20">
              <FileText className="h-6 w-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] bg-indigo-500/20 text-indigo-400 px-3 py-0.5 rounded-full font-black uppercase tracking-widest flex items-center gap-1 border border-indigo-500/30">
                  <Sparkles className="w-3 h-3 text-indigo-400 animate-pulse"/> Portal Core
                </span>
              </div>
              <h1 className="text-3xl font-black text-white tracking-tight mt-1">
                Examination Portal
              </h1>
              <p className="text-xs text-slate-400 font-medium mt-0.5 max-w-xl">
                Access your personalized test schedules, continuous assessments, and official academic historical grading.
              </p>
            </div>
          </div>

          {/* Premium Glass Search inside Dark Header */}
          <div className="relative w-full md:w-80 relative z-10">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500"/>
            <input 
              type="text" 
              placeholder="Search by subject or code..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-white/5 border border-slate-800 rounded-2xl text-sm focus:outline-none focus:ring-4 focus:ring-indigo-500/30 focus:border-indigo-500 text-white transition-all placeholder:text-slate-500 font-semibold"
            />
          </div>
        </motion.div>

        {/* ==================== 2. EXTENDED FULL-WIDTH CONTROLS BAR ==================== */}
        <div className="w-full bg-white border border-slate-200/80 p-2.5 rounded-2.5xl shadow-sm flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="relative flex bg-slate-100 p-1 rounded-xl w-full sm:w-auto min-w-[340px]">
            {examCategories.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="relative z-10 flex-1 py-2 text-xs font-black rounded-lg transition-colors duration-300 text-center uppercase tracking-wider"
                style={{ color: activeTab === tab ? "#ffffff" : "#64748b" }}
              >
                {activeTab === tab && (
                  <motion.span
                    layoutId="exams-extended-pill"
                    transition={{ type: "spring", stiffness: 380, damping: 28 }}
                    className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-indigo-500 rounded-lg -z-10 shadow-md shadow-indigo-200"
                  />
                )}
                {tab}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4 text-xs font-bold text-slate-500 px-3">
            <span className="flex items-center gap-2 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-lg">
              <span className="w-2 h-2 rounded-full bg-indigo-500" /> Upcoming: <span className="text-indigo-600 font-black">1</span>
            </span>
            <span className="flex items-center gap-2 bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-lg">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> Live: <span className="text-emerald-600 font-black">1</span>
            </span>
          </div>
        </div>

                {/* ==================== 3. GRAND LARGE & MAX STACK LAYOUT ==================== */}
        <div className="w-full flex flex-col items-center justify-center min-h-[320px]">
          <AnimatePresence mode="wait">
            {filteredExams.length > 0 ? (
              <motion.div 
                key={activeTab}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="w-full space-y-6 max-w-4xl flex flex-col items-center"
              >
                {filteredExams.map((exam) => (
                  <motion.div
                    key={exam.id}
                    variants={{
                      hidden: { opacity: 0, y: 30, scale: 0.98 },
                      visible: { opacity: 1, y: 0, scale: 1 }
                    }}
                    style={{ transformPerspective: 1200 }}
                    whileHover={{ 
                      y: -8, 
                      rotateX: 1.5,
                      boxShadow: "0 30px 60px -15px rgba(99, 102, 241, 0.12)"
                    }}
                    transition={{ type: "spring", stiffness: 100, damping: 15 }}
                    className="w-full bg-white border border-indigo-50/80 p-8 flex flex-col justify-between rounded-[2.5rem] shadow-sm relative overflow-hidden group min-h-[320px]"
                  >
                    {/* Left Indicator Ribbon Accent */}
                    <div className={`absolute top-0 bottom-0 left-0 w-[6px] ${
                      exam.status === "Active" ? "bg-gradient-to-b from-emerald-500 to-teal-500" : exam.status === "Upcoming" ? "bg-gradient-to-b from-indigo-500 to-indigo-600" : "bg-slate-300"
                    }`} />

                    <BookOpen className="absolute right-[-10px] bottom-[-10px] w-44 h-44 text-slate-50 group-hover:text-indigo-50/30 pointer-events-none transform -rotate-12 transition-all duration-500 scale-100 group-hover:scale-105"/>

                    <div>
                      <div className="flex justify-between items-center mb-6">
                        <div className="flex items-center gap-3.5">
                          <span className="text-[11px] font-mono font-black text-indigo-600 bg-indigo-50 border border-indigo-100/70 px-3 py-1 rounded-xl shadow-inner">
                            {exam.code}
                          </span>
                          <span className="text-[10px] font-bold text-slate-400 bg-slate-100 px-2.5 py-1 rounded-lg">
                            {exam.difficulty}
                          </span>
                        </div>
                        
                        <span className={`text-[11px] font-black uppercase tracking-widest px-3.5 py-1 rounded-full border flex items-center gap-1.5 shadow-sm ${
                          exam.status === "Active" 
                            ? "bg-emerald-50 text-emerald-600 border-emerald-200" 
                            : exam.status === "Upcoming" 
                              ? "bg-indigo-50 text-indigo-600 border-indigo-200" 
                              : "bg-slate-50 text-slate-500 border-slate-200"
                        }`}>
                          {exam.status === "Active" && <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />}
                          {exam.status === "Active" ? "LIVE TERMINAL" : exam.status}
                        </span>
                      </div>

                      <h3 className="font-black text-2xl text-slate-900 tracking-tight leading-snug group-hover:text-indigo-600 transition-colors duration-300">
                        {exam.title}
                      </h3>

                      <div className="h-px bg-gradient-to-r from-indigo-100 via-slate-200/50 to-transparent my-5" />

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative z-10">
                        <div className="flex items-center gap-3.5 text-xs font-bold text-slate-600 bg-slate-50/50 p-3 rounded-xl border border-slate-100/60">
                          <Calendar className="h-4 w-4 text-indigo-500/80"/>
                          <div>
                            <p className="text-[9px] text-slate-400 uppercase tracking-wider font-medium">Date</p>
                            <p className="text-slate-900 font-extrabold mt-0.5">{exam.date}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3.5 text-xs font-bold text-slate-600 bg-slate-50/50 p-3 rounded-xl border border-slate-100/60">
                          <Clock className="h-4 w-4 text-indigo-500/80"/>
                          <div>
                            <p className="text-[9px] text-slate-400 uppercase tracking-wider font-medium">Timeline</p>
                            <p className="text-slate-900 font-extrabold mt-0.5">{exam.time}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3.5 text-xs font-bold text-slate-600 bg-slate-50/50 p-3 rounded-xl border border-slate-100/60">
                          <Timer className="h-4 w-4 text-indigo-500/80"/>
                          <div>
                            <p className="text-[9px] text-slate-400 uppercase tracking-wider font-medium">Structure</p>
                            <p className="text-slate-900 font-extrabold mt-0.5">{exam.duration}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Card Actions Footer with Route Navigations */}
                    <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between relative z-10">
                      <div>
                        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Global Scale</p>
                        <p className="text-lg font-black text-indigo-950">{exam.totalMarks} Marks</p>
                      </div>

                      {exam.status === "Active" ? (
                        <button 
                          onClick={() => handleStartExam(exam.id)}
                          className="flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-indigo-600 hover:from-emerald-600 hover:to-indigo-700 text-white font-black text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-lg shadow-emerald-100 transition-all hover:scale-103 active:scale-97 cursor-pointer"
                        >
                          Launch Terminal <Zap className="h-3.5 w-3.5 fill-current text-white/30"/>
                        </button>
                      ) : exam.status === "Upcoming" ? (
                        <button 
                          onClick={() => handleViewDetails(exam.id)}
                          className="flex items-center gap-1.5 bg-indigo-50 hover:bg-indigo-600 text-indigo-600 hover:text-white font-black text-xs uppercase tracking-wider px-5 py-3 rounded-xl border border-indigo-100/80 group/subbtn transition-all duration-300 shadow-sm cursor-pointer"
                        >
                          View Syllabus <ChevronRight className="h-4 w-4 transform group-hover/subbtn:translate-x-1 transition-transform"/>
                        </button>
                      ) : (
                        <button 
                          onClick={() => handleViewResult(exam.id)}
                          className="flex items-center gap-2 text-indigo-600 bg-indigo-50 hover:bg-indigo-100 border border-indigo-100 px-4 py-2.5 rounded-xl font-black text-xs shadow-sm transition-all cursor-pointer"
                        >
                          <Award className="h-4 w-4 text-indigo-500"/> Secured Score: {exam.score}
                        </button>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div 
                className="w-full max-w-4xl bg-white rounded-[2.5rem] border border-slate-200 p-16 text-center flex flex-col items-center justify-center space-y-3 shadow-sm"
              >
                <HelpCircle className="h-10 w-10 text-slate-300"/>
                <h4 className="font-black text-slate-700 text-lg">No Assessments Found</h4>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

                {/* ==================== 4. GUIDELINES FULL-WIDTH ROW ==================== */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[2.5rem] border border-slate-200 p-6 shadow-sm w-full space-y-4 max-w-7xl mx-auto"
        >
          <div className="flex items-center gap-2 text-slate-800 border-b border-slate-100 pb-3">
            <ShieldAlert className="h-5 w-5 text-indigo-500"/>
            <h3 className="font-black text-xs uppercase tracking-wider text-slate-700">
              Official Examination Guidelines
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-1">
            {/* Guideline 1 */}
            <div className="bg-slate-50/60 p-4 rounded-2xl border border-slate-100 flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5"/>
              <div>
                <h4 className="font-bold text-xs text-slate-800">Stable Connectivity</h4>
                <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                  Ensure you possess a robust and constant internet network connection prior to initiating any live test terminals.
                </p>
              </div>
            </div>

            {/* Guideline 2 */}
            <div className="bg-slate-50/60 p-4 rounded-2xl border border-slate-100 flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5"/>
              <div>
                <h4 className="font-bold text-xs text-slate-800">Proctoring Protocols</h4>
                <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                  Switching application windows or browser tabs during an active exam will invoke security auto-submit algorithms.
                </p>
              </div>
            </div>

            {/* Guideline 3 */}
            <div className="bg-slate-50/60 p-4 rounded-2xl border border-slate-100 flex items-start gap-3">
              <Info className="h-5 w-5 text-indigo-500 shrink-0 mt-0.5"/>
              <div>
                <h4 className="font-bold text-xs text-slate-800">Support Desk</h4>
                <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                  For any persistent technical disruptions or discrepancy parameters, contact your university controller desk immediately.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  )
}
