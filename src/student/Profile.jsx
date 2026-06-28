import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { ArrowLeft, Mail, Phone, BookOpen, Calendar, Edit3, Save, ChevronDown, ChevronUp, Award, Activity } from "lucide-react"
import { useState } from "react"

export default function Profile() {
  const navigate = useNavigate()
  const [openEdit, setOpenEdit] = useState(false)
  const [studentData, setStudentData] = useState({
    name: "Devika Patil",
    rollNo: "STU-2026",
    email: "devika@example.com",
    phone: "+91 9876543210",
    course: "B.Tech Computer Science",
    year: "Final Year",
    avatar: "https://ui-avatars.com/api/?name=Devika+Patil&background=6366F1&color=fff&size=128"
  })

  const handleSave = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    setStudentData({
      ...studentData,
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      course: formData.get("course"),
      year: formData.get("year")
    })
    setOpenEdit(false)
    alert("✅ Profile Updated Successfully!")
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

      <div className="max-w-5xl mx-auto space-y-8 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-slate-900 via-indigo-900 to-purple-900 text-white rounded-[2rem] p-8 md:p-12 shadow-2xl flex items-center gap-6 relative overflow-hidden"
        >
          <motion.img 
            src={studentData.avatar} 
            alt="avatar" 
            className="w-28 h-28 rounded-full border-4 border-indigo-500 shadow-lg animate-pulse"
          />
          <div>
            <h1 className="text-3xl md:text-4xl font-black tracking-tight">{studentData.name}</h1>
            <p className="text-sm text-slate-300 mt-1">Roll No: {studentData.rollNo}</p>
            <span className="text-xs font-black uppercase tracking-widest bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 px-3 py-1 rounded-full mt-3 inline-block">
              Student Profile
            </span>
          </div>
        </motion.div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {icon: <Mail className="w-6 h-6 text-indigo-600"/>, label:"Email", value:studentData.email},
            {icon: <Phone className="w-6 h-6 text-indigo-600"/>, label:"Phone", value:studentData.phone},
            {icon: <BookOpen className="w-6 h-6 text-indigo-600"/>, label:"Course", value:studentData.course},
            {icon: <Calendar className="w-6 h-6 text-indigo-600"/>, label:"Year", value:studentData.year}
          ].map((item, idx) => (
            <motion.div key={idx} whileHover={{ scale: 1.05, rotate: 1 }} className="bg-white/80 backdrop-blur-md p-6 rounded-2xl border shadow-md flex items-center gap-4">
              {item.icon}
              <div>
                <p className="text-xs text-slate-500">{item.label}</p>
                <p className="font-bold">{item.value}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements + Activity */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div whileHover={{ scale: 1.05 }} className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-6 rounded-2xl shadow-lg flex items-center gap-4">
            <Award className="w-8 h-8"/>
            <div>
              <p className="text-xs">Achievement</p>
              <p className="font-bold">Top Scorer</p>
            </div>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white p-6 rounded-2xl shadow-lg flex items-center gap-4">
            <Activity className="w-8 h-8"/>
            <div>
              <p className="text-xs">Recent Activity</p>
              <p className="font-bold">Last Exam: Algorithms</p>
            </div>
          </motion.div>
        </div>

        {/* Collapsible Edit Profile Section */}
        <motion.div className="bg-white rounded-[2rem] border shadow-sm">
          <button 
            onClick={() => setOpenEdit(!openEdit)} 
            className="w-full flex justify-between items-center px-6 py-4 font-bold text-slate-700 hover:bg-slate-100 rounded-t-[2rem]"
          >
            <span className="flex items-center gap-2"><Edit3 className="w-5 h-5 text-indigo-600"/> Edit Profile</span>
            {openEdit ? <ChevronUp className="w-5 h-5"/> : <ChevronDown className="w-5 h-5"/>}
          </button>

          {openEdit && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }} 
              animate={{ opacity: 1, height: "auto" }} 
              className="p-8 space-y-6"
            >
                            {/* Profile Pic Change */}
              <div className="flex flex-col items-center gap-3">
                <img src={studentData.avatar} alt="avatar" className="w-28 h-28 rounded-full border-4 border-indigo-500 shadow-lg"/>
                <label className="cursor-pointer px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl font-bold shadow-md hover:shadow-lg transition-all">
                  Change Photo
                  <input 
                    type="file" 
                    accept="image/*" 
                    className="hidden" 
                    onChange={(e) => {
                      const file = e.target.files[0]
                      if(file){
                        const url = URL.createObjectURL(file)
                        setStudentData({...studentData, avatar: url})
                      }
                    }}
                  />
                </label>
              </div>

              {/* Edit Form */}
              <form onSubmit={handleSave} className="space-y-4">
                <div>
                  <label className="text-xs font-bold text-slate-600 flex items-center gap-2">
                    <Edit3 className="w-4 h-4 text-indigo-500"/> Name
                  </label>
                  <input 
                    name="name" 
                    defaultValue={studentData.name} 
                    placeholder="Enter your full name" 
                    className="w-full px-4 py-2 rounded-xl border focus:ring-2 focus:ring-indigo-500 shadow-sm"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-600 flex items-center gap-2">
                    <Mail className="w-4 h-4 text-indigo-500"/> Email
                  </label>
                  <input 
                    name="email" 
                    defaultValue={studentData.email} 
                    placeholder="Enter your email" 
                    className="w-full px-4 py-2 rounded-xl border focus:ring-2 focus:ring-indigo-500 shadow-sm"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-600 flex items-center gap-2">
                    <Phone className="w-4 h-4 text-indigo-500"/> Phone
                  </label>
                  <input 
                    name="phone" 
                    defaultValue={studentData.phone} 
                    placeholder="Enter your phone number" 
                    className="w-full px-4 py-2 rounded-xl border focus:ring-2 focus:ring-indigo-500 shadow-sm"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-600 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-indigo-500"/> Course
                  </label>
                  <input 
                    name="course" 
                    defaultValue={studentData.course} 
                    placeholder="Enter your course" 
                    className="w-full px-4 py-2 rounded-xl border focus:ring-2 focus:ring-indigo-500 shadow-sm"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-600 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-indigo-500"/> Year
                  </label>
                  <input 
                    name="year" 
                    defaultValue={studentData.year} 
                    placeholder="Enter your academic year" 
                    className="w-full px-4 py-2 rounded-xl border focus:ring-2 focus:ring-indigo-500 shadow-sm"
                  />
                </div>
                <button 
                  type="submit" 
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl font-bold shadow-md hover:shadow-lg transition-all"
                >
                  <Save className="w-4 h-4"/> Save Changes
                </button>
              </form>
            </motion.div>
          )}
        </motion.div>

        {/* Back Button */}
        <div className="flex gap-4">
          <button 
            onClick={() => navigate("/student/dashboard")} 
            className="flex items-center gap-2 px-6 py-3 bg-slate-200 hover:bg-slate-300 rounded-xl font-bold text-slate-700 transition-all"
          >
            <ArrowLeft className="w-4 h-4"/> Back to Dashboard
          </button>
        </div>
      </div>
    </motion.div>
  )
}
