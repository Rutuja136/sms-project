import { motion } from "framer-motion"
import { useParams, useNavigate } from "react-router-dom"
import { ArrowLeft, TrendingUp, PieChart, BarChart3 } from "lucide-react"

export default function ResultDetails() {
  const { id } = useParams()
  const navigate = useNavigate()

  const detailsData = {
    examId: id || "EX-901",
    title: "Advanced Algorithms & Data Structures",
    remarks: "Excellent performance overall! Keep focusing on weaker areas to achieve mastery.",
    stats: { attempted: 28, correct: 26, incorrect: 2, total: 30 },
    sections: [
      { name: "Analysis", score: 28, total: 30 },
      { name: "Graph Algorithms", score: 30, total: 35 },
      { name: "Dynamic Programming", score: 34, total: 35 },
    ]
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen bg-slate-50 p-6 md:p-10 text-slate-800 relative overflow-hidden"
    >
      {/* Ambient Glow */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] rounded-full bg-purple-200/30 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] rounded-full bg-indigo-200/30 blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto space-y-8 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-slate-900 text-white rounded-[2rem] p-8 md:p-12 shadow-xl flex justify-between items-center"
        >
          <div>
            <span className="text-xs font-black uppercase tracking-widest bg-purple-500/20 text-purple-300 border border-purple-500/30 px-3 py-1 rounded-full">
              Detailed Report · {detailsData.examId}
            </span>
            <h1 className="text-2xl md:text-3xl font-black mt-4 tracking-tight">{detailsData.title}</h1>
            <p className="text-sm text-slate-400 mt-2">Deep analysis of your exam performance.</p>
          </div>
          <PieChart className="w-12 h-12 text-indigo-400 animate-pulse"/>
        </motion.div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <motion.div whileHover={{ scale: 1.05 }} className="bg-white p-6 rounded-2xl border shadow-sm text-center">
            <p className="text-xs font-bold text-slate-500">Attempted</p>
            <p className="text-2xl font-black text-indigo-600">{detailsData.stats.attempted}/{detailsData.stats.total}</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="bg-white p-6 rounded-2xl border shadow-sm text-center">
            <p className="text-xs font-bold text-slate-500">Correct</p>
            <p className="text-2xl font-black text-emerald-600">{detailsData.stats.correct}</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="bg-white p-6 rounded-2xl border shadow-sm text-center">
            <p className="text-xs font-bold text-slate-500">Incorrect</p>
            <p className="text-2xl font-black text-red-600">{detailsData.stats.incorrect}</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="bg-white p-6 rounded-2xl border shadow-sm text-center">
            <p className="text-xs font-bold text-slate-500">Accuracy</p>
            <p className="text-2xl font-black text-purple-600">
              {Math.round((detailsData.stats.correct / detailsData.stats.attempted) * 100)}%
            </p>
          </motion.div>
        </div>

        {/* Section Breakdown Premium */}
        <div className="bg-white rounded-[2rem] border p-8 shadow-sm">
          <h3 className="text-base font-black text-slate-900 mb-6 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-indigo-600"/> Section-wise Performance
          </h3>
          <div className="space-y-6">
            {detailsData.sections.map((sec, idx) => {
              const percent = Math.round((sec.score/sec.total)*100)
              return (
                <div key={idx}>
                  <div className="flex justify-between items-center mb-2">
                    {/* Premium Heading */}
                    <motion.span 
                      whileHover={{ scale: 1.05 }}
                      className="font-black text-lg bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent flex items-center gap-2"
                    >
                      <BarChart3 className="w-5 h-5 text-indigo-500"/> {sec.name}
                    </motion.span>

                    {/* Premium Badge */}
                    <motion.div 
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      whileHover={{ scale: 1.1 }}
                      className="px-4 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold shadow-md hover:shadow-lg"
                    >
                      {sec.score}/{sec.total} · {percent}%
                    </motion.div>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-slate-200 rounded-full h-3">
                    <motion.div 
                      initial={{ width: 0 }} 
                      animate={{ width: `${percent}%` }} 
                      transition={{ duration: 1 }}
                      className="h-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600"
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Remarks */}
        <motion.div whileHover={{ y: -3 }} className="bg-white p-8 rounded-[2rem] border shadow-sm flex items-start gap-4">
          <TrendingUp className="w-8 h-8 text-emerald-600"/>
          <div>
            <h3 className="text-base font-black text-slate-900 mb-2">Professional Remarks</h3>
            <p className="text-sm text-slate-600 leading-relaxed">{detailsData.remarks}</p>
          </div>
        </motion.div>

        {/* Back Button FIX */}
        <div className="flex gap-4">
          <button 
            onClick={() => navigate("/student/results")} 
            className="flex items-center gap-2 px-6 py-3 bg-slate-200 hover:bg-slate-300 rounded-xl font-bold text-slate-700 transition-all"
          >
            <ArrowLeft className="w-4 h-4"/> Back to Results
          </button>
        </div>
      </div>
    </motion.div>
  )
}
