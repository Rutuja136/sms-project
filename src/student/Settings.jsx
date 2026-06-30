import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { ArrowLeft, Bell, Moon, Sun, Lock, Shield, Eye, EyeOff } from "lucide-react"
import { useState } from "react"

export default function Settings() {
  const navigate = useNavigate()
  const [darkMode, setDarkMode] = useState(false)
  const [emailNotif, setEmailNotif] = useState(true)
  const [smsNotif, setSmsNotif] = useState(false)
  const [openAccount, setOpenAccount] = useState(true)
  const [twoFactor, setTwoFactor] = useState(false)

  // Password states
  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [errors, setErrors] = useState("")
  const [showCurrent, setShowCurrent] = useState(false)
  const [showNew, setShowNew] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)

  const handleSavePassword = (e) => {
    e.preventDefault()
    setErrors("")

    if (currentPassword === newPassword) {
      setErrors("❌ New password must be different from current password.")
      return
    }
    if (newPassword !== confirmPassword) {
      setErrors("❌ New password and confirm password do not match.")
      return
    }
    if (newPassword.length < 6) {
      setErrors("❌ Password must be at least 6 characters long.")
      return
    }

    alert("✅ Password changed successfully!")
    setCurrentPassword("")
    setNewPassword("")
    setConfirmPassword("")
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className={`min-h-screen ${darkMode ? "bg-slate-900 text-white" : "bg-slate-50 text-slate-800"} p-6 md:p-10 relative overflow-hidden`}
    >
      {/* Ambient Glow */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] rounded-full bg-purple-200/30 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] rounded-full bg-indigo-200/30 blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto space-y-8 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`rounded-[2rem] p-8 md:p-12 shadow-xl flex justify-between items-center ${darkMode ? "bg-gradient-to-r from-slate-800 via-indigo-900 to-purple-900" : "bg-gradient-to-r from-slate-900 via-indigo-900 to-purple-900"} text-white`}
        >
          <div>
            <h1 className="text-3xl md:text-4xl font-black tracking-tight bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Settings</h1>
            <p className="text-sm opacity-80 mt-2">Manage your preferences and account options.</p>
          </div>
          <Shield className="w-12 h-12 text-indigo-400 animate-pulse"/>
        </motion.div>

        {/* Theme Toggle */}
        <motion.div whileHover={{ scale: 1.02 }} className={`rounded-2xl border shadow-md p-6 flex justify-between items-center ${darkMode ? "bg-slate-800 text-white" : "bg-white"}`}>
          <div className="flex items-center gap-3">
            {darkMode ? <Moon className="w-6 h-6 text-indigo-400"/> : <Sun className="w-6 h-6 text-yellow-500"/>}
            <span className="font-bold">Theme Mode</span>
          </div>
          <button 
            onClick={() => setDarkMode(!darkMode)} 
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold shadow-md hover:shadow-lg transition-all"
          >
            {darkMode ? "Dark" : "Light"}
          </button>
        </motion.div>

        {/* Notifications */}
        <motion.div whileHover={{ scale: 1.02 }} className={`rounded-2xl border shadow-md p-6 space-y-4 ${darkMode ? "bg-slate-800 text-white" : "bg-white"}`}>
          <h3 className="font-bold flex items-center gap-2"><Bell className="w-5 h-5 text-indigo-600"/> Notifications</h3>
          <div className="flex justify-between items-center">
            <span>Email Notifications</span>
            <input type="checkbox" checked={emailNotif} onChange={() => setEmailNotif(!emailNotif)} className="w-5 h-5 accent-indigo-600"/>
          </div>
          <div className="flex justify-between items-center">
            <span>SMS Notifications</span>
            <input type="checkbox" checked={smsNotif} onChange={() => setSmsNotif(!smsNotif)} className="w-5 h-5 accent-indigo-600"/>
          </div>
        </motion.div>

        {/* Account Section */}
        <motion.div className={`rounded-2xl border shadow-md ${darkMode ? "bg-slate-800 text-white" : "bg-white"}`}>
          <button 
            onClick={() => setOpenAccount(!openAccount)} 
            className="w-full flex justify-between items-center px-6 py-4 font-bold hover:bg-slate-100 rounded-t-2xl"
          >
            <span className="flex items-center gap-2"><Lock className="w-5 h-5 text-indigo-600"/> Account Settings</span>
            {openAccount ? "▲" : "▼"}
          </button>

          {openAccount && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="p-6 space-y-6">
              {/* Change Password */}
              <form onSubmit={handleSavePassword} className="space-y-4">
                <h4 className="font-bold text-lg flex items-center gap-2">
                  <Lock className="w-5 h-5 text-indigo-500"/> Change Password
                </h4>

                {/* Current Password */}
                <div className="relative">
                  <input 
                    type={showCurrent ? "text" : "password"} 
                    placeholder="Current Password" 
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    className="w-full px-4 py-2 rounded-xl border focus:ring-2 focus:ring-indigo-500 shadow-sm"
                  />
                  <button type="button" onClick={() => setShowCurrent(!showCurrent)} className="absolute right-3 top-2 text-slate-500">
                    {showCurrent ? <EyeOff/> : <Eye/>}
                  </button>
                </div>

                {/* New Password */}
                <div className="relative">
                  <input 
                    type={showNew ? "text" : "password"} 
                    placeholder="New Password" 
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="w-full px-4 py-2 rounded-xl border focus:ring-2 focus:ring-indigo-500 shadow-sm"
                  />
                  <button type="button" onClick={() => setShowNew(!showNew)} className="absolute right-3 top-2 text-slate-500">
                    {showNew ? <EyeOff/> : <Eye/>}
                  </button>
                </div>

                                {/* Confirm Password */}
                <div className="relative">
                  <input 
                    type={showConfirm ? "text" : "password"} 
                    placeholder="Confirm New Password" 
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full px-4 py-2 rounded-xl border focus:ring-2 focus:ring-indigo-500 shadow-sm"
                  />
                  <button 
                    type="button" 
                    onClick={() => setShowConfirm(!showConfirm)} 
                    className="absolute right-3 top-2 text-slate-500"
                  >
                    {showConfirm ? <EyeOff/> : <Eye/>}
                  </button>
                </div>

                {/* Error Message */}
                {errors && <p className="text-red-500 font-bold text-sm">{errors}</p>}

                {/* Save Button */}
                <button 
                  type="submit" 
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl font-bold shadow-md hover:shadow-lg transition-all"
                >
                  <Lock className="w-4 h-4"/> Save Changes
                </button>
              </form>

              {/* Two-Factor Authentication */}
              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-4 rounded-xl shadow-md flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <Shield className="w-6 h-6"/>
                  <div>
                    <p className="text-xs">Security</p>
                    <p className="font-bold">Two-Factor Authentication</p>
                  </div>
                </div>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={twoFactor} 
                    onChange={() => setTwoFactor(!twoFactor)} 
                    className="w-5 h-5 accent-white"
                  />
                  <span>{twoFactor ? "Enabled" : "Disabled"}</span>
                </label>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Global Save All Changes */}
        <div className="flex justify-center mt-8">
          <button 
            onClick={() => {
              // येथे तू backend API call करू शकतेस
              alert("✅ All settings saved successfully!")
            }} 
            className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl font-bold shadow-md hover:shadow-lg transition-all"
          >
            Save All Changes
          </button>
        </div>

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
