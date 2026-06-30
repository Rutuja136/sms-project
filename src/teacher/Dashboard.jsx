import React from "react";
import { useTeacher } from "../context/TeacherContext";

const TeacherDashboard = () => {
  const { students, exams, reports, teacherProfile } = useTeacher();

  const stats = [
    {
      id: 1,
      title: "Total Students",
      count: students.length,
      icon: "👨‍🎓",
      color: "bg-blue-50 text-blue-600",
    },
    {
      id: 2,
      title: "Exams Conducted",
      count: exams.length,
      icon: "📝",
      color: "bg-emerald-50 text-emerald-600",
    },
    {
      id: 3,
      title: "Pending Reports",
      count: reports.filter((r) => r.status === "Pending").length,
      icon: "📊",
      color: "bg-amber-50 text-amber-600",
    },
    {
      id: 4,
      title: "Classes Handled",
      count: teacherProfile.classesHandled.length,
      icon: "🏫",
      color: "bg-indigo-50 text-indigo-600",
    },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-gray-900">
          Welcome Back, {teacherProfile.name}!
        </h1>
        <p className="text-gray-500 text-sm mt-1">
          Department: {teacherProfile.department}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between"
          >
            <div>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">
                {stat.title}
              </p>
              <h3 className="text-3xl font-black text-gray-800 mt-2">
                {stat.count}
              </h3>
            </div>
            <span className="text-3xl p-3 rounded-xl bg-gray-50">
              {stat.icon}
            </span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Students */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Enrolled Students
          </h2>
          <div className="divide-y divide-gray-100">
            {students.map((student) => (
              <div
                key={student.id}
                className="flex items-center justify-between py-3"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-indigo-50 rounded-full flex items-center justify-center font-bold text-indigo-600">
                    {student.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-800">
                      {student.name}
                    </h4>
                    <p className="text-xs text-gray-500">
                      Roll No: {student.rollNo} • Class: {student.class}
                    </p>
                  </div>
                </div>
                <span className="px-2.5 py-1 bg-green-50 text-green-700 text-xs font-bold rounded-lg">
                  Active
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Live Exams from Context */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Latest Exams</h2>
          <div className="space-y-4">
            {exams.slice(0, 3).map((exam) => (
              <div
                key={exam.id}
                className="p-4 bg-gray-50 rounded-xl border border-gray-100 relative overflow-hidden"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-indigo-600"></div>
                <h4 className="text-sm font-bold text-gray-800">
                  {exam.subject}
                </h4>
                <p className="text-xs text-indigo-600 font-semibold">
                  {exam.title} ({exam.totalMarks} Marks)
                </p>
                <p className="text-xs text-gray-400 mt-2">
                  📅 {exam.date} • ⏰ {exam.duration} Mins
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
