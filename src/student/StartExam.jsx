
import { useState, useEffect } from "react"
import { Clock, Bookmark,  AlertTriangle } from "lucide-react"
import { useNavigate } from "react-router-dom"

export default function StartExam() {
  const navigate = useNavigate()
  const [timeLeft, setTimeLeft] = useState(180 * 60)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState({})
  const [attempted, setAttempted] = useState({}) // Question index tracking
  const [markedForReview, setMarkedForReview] = useState({})
  const [showSubmitModal, setShowSubmitModal] = useState(false)

  const questions = Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    question: `Professional Algorithm Question Number ${i + 1}: Explain the time complexity in real-world scenarios?`,
    options: ["Option A", "Option B", "Option C", "Option D"]
  }))

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0)), 1000)
    return () => clearInterval(timer)
  }, [])

  const handleOptionSelect = (idx) => {
    setSelectedAnswers({...selectedAnswers, [currentQuestion]: idx})
    setAttempted({...attempted, [currentQuestion]: true})
  }

  const getStatus = (idx) => {
    if (currentQuestion === idx) return "current"
    if (markedForReview[idx]) return "marked"
    if (attempted[idx]) return "answered"
    // If not visited yet, check if we want to show 'Not Answered' (Red)
    // For simplicity, if index < currentQuestion and not answered, it is Red
    if (idx < currentQuestion && !attempted[idx]) return "not-answered"
    return "not-visited"
  }

  return (
    <div className="h-screen flex flex-col bg-slate-100 font-sans text-sm">
      {/* Header */}
      <header className="bg-slate-800 text-white px-6 py-3 flex justify-between items-center shadow-md">
        <h1 className="font-bold tracking-wider">ONLINE EXAMINATION TERMINAL</h1>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 bg-slate-900 px-4 py-1.5 rounded border border-slate-700 font-mono">
            <Clock className="w-4 h-4 text-blue-400" />
            {Math.floor(timeLeft / 3600)}:{(Math.floor((timeLeft % 3600) / 60)).toString().padStart(2, '0')}:{(timeLeft % 60).toString().padStart(2, '0')}
          </div>
          <button onClick={() => setShowSubmitModal(true)} className="bg-emerald-600 hover:bg-emerald-700 px-6 py-1.5 rounded font-bold uppercase transition-all">Submit</button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="bg-white border border-slate-300 p-8 min-h-[400px]">
            <div className="flex justify-between items-center mb-8 border-b pb-4">
              <span className="font-bold text-slate-600">Question {currentQuestion + 1}</span>
              <button onClick={() => setMarkedForReview({...markedForReview, [currentQuestion]: !markedForReview[currentQuestion]})}
                className={`flex items-center gap-1 font-bold ${markedForReview[currentQuestion] ? 'text-purple-600' : 'text-slate-400'}`}>
                <Bookmark className="w-4 h-4" /> MARK FOR REVIEW
              </button>
            </div>
            
            <p className="text-lg text-slate-800 mb-8">{questions[currentQuestion].question}</p>
            
            <div className="space-y-4">
              {questions[currentQuestion].options.map((opt, idx) => (
                <button key={idx} onClick={() => handleOptionSelect(idx)}
                  className={`w-full text-left p-4 border transition-all ${selectedAnswers[currentQuestion] === idx ? 'border-blue-600 bg-blue-50' : 'border-slate-300 hover:bg-slate-50'}`}>
                  {opt}
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-3 mt-6">
            <button disabled={currentQuestion === 0} onClick={() => setCurrentQuestion(p => p - 1)} className="px-8 py-2 bg-slate-200 font-bold hover:bg-slate-300">PREV</button>
            <button disabled={currentQuestion === 29} onClick={() => setCurrentQuestion(p => p + 1)} className="px-8 py-2 bg-blue-700 text-white font-bold hover:bg-blue-800">SAVE & NEXT</button>
          </div>
        </main>

        <aside className="w-80 bg-white border-l border-slate-300 p-6">
          <div className="text-xs font-bold text-slate-500 mb-4 uppercase">Question Palette</div>
          <div className="grid grid-cols-5 gap-2 mb-10">
            {questions.map((_, idx) => {
              const status = getStatus(idx);
              const styles = {
                current: "bg-blue-700 text-white",
                answered: "bg-emerald-600 text-white",
                marked: "bg-purple-600 text-white",
                "not-answered": "bg-red-600 text-white",
                "not-visited": "bg-slate-100 text-slate-600 border border-slate-300"
              };
              return (
                <button key={idx} onClick={() => setCurrentQuestion(idx)} className={`w-10 h-10 font-bold text-xs ${styles[status]}`}>{idx + 1}</button>
              )
            })}
          </div>

          <div className="space-y-3 text-[11px] font-bold text-slate-600 uppercase border-t pt-6">
            <div className="flex items-center gap-2"><div className="w-4 h-4 bg-emerald-600"></div> Answered</div>
            <div className="flex items-center gap-2"><div className="w-4 h-4 bg-red-600"></div> Not Answered</div>
            <div className="flex items-center gap-2"><div className="w-4 h-4 bg-purple-600"></div> Marked for Review</div>
            <div className="flex items-center gap-2"><div className="w-4 h-4 bg-slate-100 border border-slate-300"></div> Not Visited</div>
          </div>
        </aside>
      </div>

      {/* Submit Modal */}
      {showSubmitModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-8 max-w-xs shadow-2xl">
            <h3 className="font-black text-lg mb-4 flex items-center gap-2"><AlertTriangle className="text-amber-500" /> Submit?</h3>
            <p className="mb-6 text-slate-600">Are you sure? Once submitted, results will be generated.</p>
            <div className="flex gap-3">
              <button onClick={() => setShowSubmitModal(false)} className="flex-1 py-2 bg-slate-200 font-bold">CANCEL</button>
              <button onClick={() => navigate("/result")} className="flex-1 py-2 bg-blue-700 text-white font-bold">CONFIRM</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}