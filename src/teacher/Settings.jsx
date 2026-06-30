import React, { useState } from "react";
import { useTeacher } from "../context/TeacherContext";

const Settings = () => {
  const { teacherProfile, updateProfile } = useTeacher();
  const [name, setName] = useState(teacherProfile.name);
  const [phone, setPhone] = useState(teacherProfile.phone || "9876543210");

  const handleSave = (e) => {
    e.preventDefault();
    updateProfile({ name, phone }); // Central context update kela
    alert("Profile changes saved successfully!");
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-6">
        <h1 className="text-3xl font-extrabold text-gray-900">
          Account Settings
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl border p-4 space-y-2 h-fit">
          <button className="w-full text-left px-4 py-2.5 bg-indigo-50 text-indigo-700 font-semibold rounded-xl">
            👤 Profile Information
          </button>
        </div>

        <div className="lg:col-span-2 bg-white rounded-2xl border p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-5 pb-3 border-b">
            Edit Profile
          </h2>
          <form onSubmit={handleSave} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  value={teacherProfile.email}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-xl bg-gray-50 cursor-not-allowed"
                  disabled
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Department
                </label>
                <input
                  type="text"
                  value={teacherProfile.department}
                  className="w-full px-4 py-2.5 border bg-gray-50 cursor-not-allowed"
                  disabled
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-xl"
                />
              </div>
            </div>
            <button
              type="submit"
              className="px-5 py-2.5 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition"
            >
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Settings;
