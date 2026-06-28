import { motion } from "framer-motion"
import { useParams, useNavigate } from "react-router-dom"
import { Award, BarChart3, ShieldCheck, ArrowLeft, Download, FileText } from "lucide-react"
import jsPDF from "jspdf"

export default function Results() {
  const { id } = useParams()
  const navigate = useNavigate()

  const resultData = {
    examId: id || "EX-901",
    title: "Advanced Algorithms & Data Structures",
    totalMarks: 100,
    securedMarks: 92,
    grade: "A+",
    percentage: 92,
    sections: [
      { name: "Analysis", score: 28, total: 30 },
      { name: "Graph Algorithms", score: 30, total: 35 },
      { name: "Dynamic Programming", score: 34, total: 35 },
    ]
  }

  // ✅ Professional PDF Download
  const handleDownloadPDF = () => {
    const doc = new jsPDF()
    doc.setFont("helvetica", "bold")
    doc.setFontSize(16)
    doc.text(`Exam Result Report`, 20, 20)

    doc.setFontSize(12)
    doc.text(`Exam ID: ${resultData.examId}`, 20, 35)
    doc.text(`Title: ${resultData.title}`, 20, 45)
    doc.text(`Secured Marks: ${resultData.securedMarks}/${resultData.totalMarks}`, 20, 55)
    doc.text(`Grade: ${resultData.grade}`, 20, 65)
    doc.text(`Percentage: ${resultData.percentage}%`, 20, 75)

    doc.setFont("helvetica", "normal")
    doc.text(`Section-wise Performance:`, 20, 90)
    resultData.sections.forEach((sec, i) => {
      doc.text(`${sec.name}: ${sec.score}/${sec.total}`, 30, 100 + i * 10)
    })

    doc.save(`Result_${resultData.examId}.pdf`)
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen bg-slate-50 p-6 md:p-10 text-slate-800 relative overflow-hidden"
    >
      {/* Ambient Glow */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] rounded-full bg-indigo-200/30 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] rounded-full bg-purple-200/30 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto space-y-8 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-slate-900 text-white rounded-[2rem] p-8 md:p-12 shadow-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative overflow-hidden"
        >
          <div>
            <span className="text-xs font-black uppercase tracking-widest bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 px-3 py-1 rounded-full">
              Result Ref: {resultData.examId}
            </span>
            <h1 className="text-3xl md:text-4xl font-black mt-4 tracking-tight">{resultData.title}</h1>
            <p className="text-sm text-slate-400 mt-2">Exam completed successfully. Below is your performance summary.</p>
          </div>

          <div className="flex items-center gap-4">
            <Award className="w-12 h-12 text-yellow-400 animate-bounce"/>
            <div>
              <p className="text-xs uppercase font-bold text-slate-400">Secured Marks</p>
              <p className="text-3xl font-black text-white">{resultData.securedMarks}/{resultData.totalMarks}</p>
              <p className="text-sm text-emerald-400 font-bold">Grade: {resultData.grade}</p>
            </div>
          </div>
        </motion.div>

        {/* Performance Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div whileHover={{ y: -5 }} className="bg-white p-6 rounded-2xl border shadow-sm flex items-center gap-4">
            <BarChart3 className="w-8 h-8 text-indigo-600"/>
            <div>
              <p className="text-xs uppercase font-bold text-slate-500">Percentage</p>
              <p className="text-xl font-black text-slate-900">{resultData.percentage}%</p>
            </div>
          </motion.div>

          <motion.div whileHover={{ y: -5 }} className="bg-white p-6 rounded-2xl border shadow-sm flex items-center gap-4">
            <ShieldCheck className="w-8 h-8 text-emerald-600"/>
            <div>
              <p className="text-xs uppercase font-bold text-slate-500">Grade</p>
              <p className="text-xl font-black text-slate-900">{resultData.grade}</p>
            </div>
          </motion.div>

          <motion.div whileHover={{ y: -5 }} className="bg-white p-6 rounded-2xl border shadow-sm flex items-center gap-4">
            <Award className="w-8 h-8 text-yellow-500"/>
            <div>
              <p className="text-xs uppercase font-bold text-slate-500">Total Marks</p>
              <p className="text-xl font-black text-slate-900">{resultData.totalMarks}</p>
            </div>
          </motion.div>
        </div>

        {/* Section Breakdown */}
        <div className="bg-white rounded-[2rem] border p-8 shadow-sm">
          <h3 className="text-base font-black text-slate-900 mb-6 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-indigo-600"/> Section-wise Performance
          </h3>
          <div className="space-y-4">
            {resultData.sections.map((sec, idx) => (
              <motion.div key={idx} whileHover={{ scale: 1.02 }} className="flex justify-between items-center bg-slate-50 p-4 rounded-xl border">
                <span className="font-bold text-slate-700">{sec.name}</span>
                <span className="font-black text-indigo-600">{sec.score}/{sec.total}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <button 
            onClick={() => navigate("/student/dashboard")} 
            className="flex items-center gap-2 px-6 py-3 bg-slate-200 hover:bg-slate-300 rounded-xl font-bold text-slate-700 transition-all"
          >
            <ArrowLeft className="w-4 h-4"/> Back to Dashboard
          </button>

          {/* Navigate to ResultDetails */}
          <button 
            onClick={() => navigate(`/student/results/${resultData.examId}`)} 
            className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-bold transition-all"
          >
            <FileText className="w-4 h-4"/> View Detailed Report
          </button>

          {/* Professional PDF Download */}
          <button 
            onClick={handleDownloadPDF} 
            className="flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold transition-all"
          >
            <Download className="w-4 h-4"/> Download PDF
          </button>
        </div>
      </div>
    </motion.div>
  )
}
