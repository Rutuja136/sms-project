import React from "react";
import { mockUsers } from "../data/users"; // data import kela

const StudentDetails = () => {
  // Demo sathi pahila student gheu, real time madhe router cha useParams() lagel
  const student = mockUsers.students[0];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Back Button & Header */}
      <div className="flex items-center gap-4 mb-6">
        <button className="px-4 py-2 bg-white text-gray-700 font-medium rounded-lg shadow-sm border border-gray-200 hover:bg-gray-50 transition">
          ← Back to List
        </button>
        <h1 className="text-3xl font-extrabold text-gray-900">
          Student Profile
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Side: Profile Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col items-center text-center">
          <div className="w-24 h-24 bg-gradient-to-tr from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-md">
            {student.name.charAt(0)}
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mt-4">
            {student.name}
          </h2>
          <p className="text-sm font-semibold text-indigo-600 px-3 py-1 bg-indigo-50 rounded-full mt-2">
            {student.id}
          </p>

          <div className="w-full mt-6 space-y-3 text-left border-t border-gray-100 pt-4 text-sm text-gray-600">
            <div className="flex justify-between">
              <strong>Class:</strong> <span>{student.class}</span>
            </div>
            <div className="flex justify-between">
              <strong>Roll No:</strong> <span>{student.rollNo}</span>
            </div>
            <div className="flex justify-between">
              <strong>Email:</strong> <span>{student.email}</span>
            </div>
            <div className="flex justify-between">
              <strong>Contact:</strong> <span>{student.contact}</span>
            </div>
          </div>
        </div>

        {/* Right Side: Performance & Attendance */}
        <div className="lg:col-span-2 space-y-6">
          {/* Attendance Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 font-medium">
                Overall Attendance
              </p>
              <h3 className="text-4xl font-extrabold text-gray-900 mt-1">
                {student.attendance}
              </h3>
            </div>
            <div className="w-28 bg-gray-200 rounded-full h-3 overflow-hidden relative">
              <div
                className="bg-green-500 h-full rounded-full"
                style={{ width: student.attendance }}
              ></div>
            </div>
          </div>

          {/* Academic Grades Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Exam Performance
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {Object.entries(student.grades).map(([subject, grade]) => (
                <div
                  key={subject}
                  className="p-4 bg-gray-50 border border-gray-100 rounded-xl flex justify-between items-center"
                >
                  <span className="font-semibold text-gray-700">{subject}</span>
                  <span className="px-3 py-1 bg-blue-600 text-white font-bold rounded-lg text-sm">
                    {grade}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDetails;
