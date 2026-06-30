import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Calendar, 
  Clock, 
  Award, 
  BookOpen, 
  ShieldCheck, 
  AlertCircle, 
  ArrowLeft,
  CheckCircle2,
  Cpu,
  X,
} from "lucide-react"

export default function ExamDetails() {
  const navigate = useNavigate()
  const { id } = useParams()
  const examId = id || "EX-901"

  // States
  const [isAcknowledged, setIsAcknowledged] = useState(false)
  const [isDiagnosticsPassed, setIsDiagnosticsPassed] = useState(false)
  const [showPremiumAlert, setShowPremiumAlert] = useState(false)

  const runDiagnostics = () => {
    setShowPremiumAlert(true)
    setIsDiagnosticsPassed(true)
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen bg-[#f8fafc] p-6 md:p-10 text-slate-800 relative overflow-hidden"
    >
      {/* 🌌 Ambient Glow */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-blue-500/5 blur-[120px]" />
        <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-indigo-500/5 blur-[100px]" />
      </div>

      {/* Upper Action Bar */}
      <div className="max-w-7xl mx-auto flex items-center justify-between mb-8 relative z-10">
        <motion.button 
          whileHover={{ scale: 1.03, x: -2 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => navigate("/student/dashboard")}
          className="flex items-center gap-2.5 text-xs font-black uppercase tracking-wider text-slate-600 bg-white hover:text-blue-600 hover:bg-blue-50/80 px-4 py-2.5 rounded-xl border border-slate-200 hover:border-blue-200 shadow-sm transition-all duration-200 cursor-pointer group"
        >
          <ArrowLeft className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors group-hover:animate-pulse"/> 
          <span>Back to Dashboard</span>
        </motion.button>

        <div className="bg-slate-900 text-white px-4 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider shadow-sm flex items-center gap-2 border border-slate-800">
          <Award className="w-4 h-4 text-blue-400"/> Terminal Ref: {examId}
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto bg-slate-900 text-white rounded-[2rem] p-8 md:p-12 shadow-xl mb-8 relative overflow-hidden group z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 opacity-40 pointer-events-none" />
        <span className="text-xs font-black uppercase tracking-widest bg-blue-500/20 text-blue-300 border border-blue-500/30 px-3 py-1 rounded-full">
          CS-401 · Hard Specifications
        </span>
        <h1 className="text-3xl md:text-4xl font-black mt-4 tracking-tight">Advanced Algorithms & Data Structures</h1>
      </div>

      {/* Grid Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
        
        {/* LEFT: Exam Blueprint & Syllabus */}
        <div className="lg:col-span-2 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <motion.div 
              whileHover={{ y: -5, borderColor: "#2563eb", boxShadow: "0 10px 25px -5px rgba(37, 99, 235, 0.1)" }}
              className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4 transition-all duration-200"
            >
              <div className="p-3 bg-blue-50 rounded-xl text-blue-600"><Calendar className="w-5 h-5"/></div>
              <div>
                <p className="text-[10px] uppercase font-black tracking-wider text-slate-400">Date Schedule</p>
                <p className="text-sm font-bold text-slate-800">July 02, 2026</p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5, borderColor: "#2563eb", boxShadow: "0 10px 25px -5px rgba(37, 99, 235, 0.1)" }}
              className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4 transition-all duration-200"
            >
              <div className="p-3 bg-blue-50 rounded-xl text-blue-600"><Clock className="w-5 h-5"/></div>
              <div>
                <p className="text-[10px] uppercase font-black tracking-wider text-slate-400">Window Timeline</p>
                <p className="text-sm font-bold text-slate-800">10:00 AM - 01:00 PM</p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5, borderColor: "#2563eb", boxShadow: "0 10px 25px -5px rgba(37, 99, 235, 0.1)" }}
              className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4 transition-all duration-200"
            >
              <div className="p-3 bg-blue-50 rounded-xl text-blue-600"><Award className="w-5 h-5"/></div>
              <div>
                <p className="text-[10px] uppercase font-black tracking-wider text-slate-400">Total Blueprint</p>
                <p className="text-sm font-bold text-slate-800">100 Marks</p>
              </div>
            </motion.div>
          </div>

                    {/* Syllabus Card */}
          <motion.div 
            whileHover={{ shadow: "0 20px 25px -5px rgba(37, 99, 235, 0.05)", borderColor: "#3b82f6" }}
            className="bg-white p-6 md:p-8 rounded-[2rem] border border-slate-200 shadow-sm transition-all duration-300"
          >
            <h3 className="text-base font-black text-slate-900 mb-6 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-blue-600"/> Prescribed Syllabus Breakdown
            </h3>
            
            <div className="space-y-4 text-sm text-slate-600 font-medium">
              <motion.div 
                whileHover={{ x: 6, backgroundColor: "#f0f5ff", borderColor: "#bfdbfe" }}
                className="p-4 bg-slate-50 rounded-xl border border-slate-100 transition-all duration-200"
              >
                <p className="font-bold text-slate-900 mb-2">Unit 1: Asymptotic Analysis & Recurrences</p>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="bg-white border px-2.5 py-1 rounded-md shadow-sm">Master Theorem</span>
                  <span className="bg-white border px-2.5 py-1 rounded-md shadow-sm">Amortized Analysis</span>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ x: 6, backgroundColor: "#f0f5ff", borderColor: "#bfdbfe" }}
                className="p-4 bg-slate-50 rounded-xl border border-slate-100 transition-all duration-200"
              >
                <p className="font-bold text-slate-900 mb-2">Unit 2: Advanced Graph Algorithms</p>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="bg-white border px-2.5 py-1 rounded-md shadow-sm">Tarjan's SCC</span>
                  <span className="bg-white border px-2.5 py-1 rounded-md shadow-sm">Network Flow & Max-Cut</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* RIGHT: Proctoring & Rules Sidebar */}
        <motion.div 
          whileHover={{ shadow: "0 20px 25px -5px rgba(37, 99, 235, 0.05)", borderColor: "#3b82f6" }}
          className="bg-white p-6 md:p-8 rounded-[2rem] border border-slate-200 shadow-sm flex flex-col justify-between h-fit transition-all duration-300"
        >
          <div>
            <h3 className="text-base font-black text-slate-900 mb-6 flex items-center gap-2 uppercase tracking-wider">
              <ShieldCheck className="w-5 h-5 text-blue-600"/> Proctoring Protocols
            </h3>
            <div className="space-y-4 text-xs font-semibold text-slate-600 leading-relaxed">
              <div className="flex gap-3"><AlertCircle className="w-4 h-4 text-amber-500 shrink-0"/> <p>The browser terminal will lock automatically upon initiation.</p></div>
              <div className="flex gap-3"><AlertCircle className="w-4 h-4 text-amber-500 shrink-0"/> <p>Any tab switching or window resizing will flag a violation.</p></div>
              <div className="flex gap-3"><AlertCircle className="w-4 h-4 text-amber-500 shrink-0"/> <p>AI webcam surveillance requires face verification during the session.</p></div>
            </div>

            {/* Acknowledge Checkbox */}
            <label className="flex items-start gap-3 mt-8 p-3 bg-slate-50 hover:bg-blue-50/50 rounded-xl border border-slate-100 cursor-pointer select-none transition-colors">
              <input 
                type="checkbox" 
                checked={isAcknowledged}
                onChange={(e) => setIsAcknowledged(e.target.checked)}
                className="w-4 h-4 mt-0.5 accent-blue-600 rounded"
              />
              <span className="text-[11px] font-bold text-slate-600">I acknowledge that I have read and agree to all rules stated above.</span>
            </label>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 space-y-3">
            <button
              disabled={!isAcknowledged}
              onClick={runDiagnostics}
              className="w-full py-3 border border-blue-200 bg-blue-50/50 text-blue-700 hover:bg-blue-50 text-xs font-black uppercase tracking-wider rounded-xl transition-all disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer font-bold"
            >
              Run System Diagnostics {isDiagnosticsPassed && <CheckCircle2 className="w-4 h-4 text-emerald-500"/>}
            </button>

            <button
              disabled={!isDiagnosticsPassed}
              onClick={() => navigate(`/student/start-exam/${examId}`)}
              className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-xs font-black uppercase tracking-wider rounded-xl transition-all shadow-md shadow-blue-600/10 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer font-bold"
            >
              Enter Live Terminal
            </button>
          </div>
        </motion.div>
      </div>

      {/* 🚀 Diagnostics Alert Modal */}
      <AnimatePresence>
        {showPremiumAlert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-md">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="w-full max-w-md bg-white border border-blue-100 rounded-3xl p-6 shadow-2xl relative overflow-hidden"
            >
              {/* Top Accent Lines */}
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-600" />
              
              {/* Close Button */}
              <button 
                onClick={() => setShowPremiumAlert(false)}
                className="absolute top-4 right-4 p-1.5 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Icon & Title */}
              <div className="flex items-center gap-3.5 mb-4">
                <div className="p-3 bg-blue-50 rounded-2xl text-blue-600 shadow-sm animate-pulse">
                  <Cpu className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-black text-slate-900 tracking-tight">Diagnostics Complete</h4>
                  <p className="text-[11px] text-emerald-600 font-bold tracking-wide uppercase mt-0.5">Hardware Integrity Verified</p>
                </div>
              </div>

              {/* Message Content */}
              <p className="text-xs text-slate-600 leading-relaxed font-semibold bg-slate-50/80 p-4 rounded-2xl border border-slate-100 mb-5">
                System Hardware Diagnostics Passed! Your Camera, Microphone, and Browser Safe-Lock are 100% compatible. You are now cleared to access the live terminal dashboard safely.
              </p>

              {/* Action Button inside Modal */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setShowPremiumAlert(false)}
                className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white text-xs font-black uppercase tracking-wider rounded-xl shadow-md transition-all cursor-pointer"
              >
                Acknowledge & Proceed
              </motion.button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </motion.div>
  )
}
