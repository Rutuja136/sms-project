import React, { useState } from "react";
import { mockUsers } from "../data/users"; // Mock database import kela

const Students = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const studentsList = mockUsers.students;

  // Search Filter Logic
  const filteredStudents = studentsList.filter(
    (student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.id.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header and Search Bar Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900">My Students</h1>
          <p className="text-gray-500 text-sm mt-1">
            Tumchya haakhali shikna-ya saglya students chi list aani academic
            status.
          </p>
        </div>

        {/* Search Input Box */}
        <div className="relative w-full md:w-80">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
            🔍
          </span>
          <input
            type="text"
            placeholder="Search student by name or ID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm text-gray-700"
          />
        </div>
      </div>

      {/* Main Table Container */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-gray-500 uppercase text-xs font-bold tracking-wider border-b border-gray-100">
                <th className="p-4 pl-6">Roll No</th>
                <th className="p-4">Student Name</th>
                <th className="p-4">Student ID</th>
                <th className="p-4">Class</th>
                <th className="p-4">Attendance</th>
                <th className="p-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 text-sm divide-y divide-gray-100">
              {filteredStudents.length > 0 ? (
                filteredStudents.map((student) => (
                  <tr
                    key={student.id}
                    className="hover:bg-gray-50/80 transition duration-150"
                  >
                    {/* Roll No */}
                    <td className="p-4 pl-6 font-bold text-gray-500">
                      {student.rollNo}
                    </td>

                    {/* Name with initials avatar */}
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 bg-gradient-to-tr from-indigo-500 to-purple-600 rounded-full flex items-center justify-center font-bold text-white text-xs shadow-sm">
                          {student.name.charAt(0)}
                        </div>
                        <span className="font-semibold text-gray-800">
                          {student.name}
                        </span>
                      </div>
                    </td>

                    {/* Student ID */}
                    <td className="p-4">
                      <span className="px-2 py-1 bg-gray-100 rounded-lg text-xs font-medium text-gray-600">
                        {student.id}
                      </span>
                    </td>

                    {/* Class */}
                    <td className="p-4 text-gray-600 font-medium">
                      {student.class}
                    </td>

                    {/* Attendance with pill status */}
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <span
                          className={`w-2 h-2 rounded-full ${parseInt(student.attendance) >= 90 ? "bg-green-500" : "bg-amber-500"}`}
                        ></span>
                        <span className="font-semibold text-gray-900">
                          {student.attendance}
                        </span>
                      </div>
                    </td>

                    {/* Action Button */}
                    <td className="p-4 text-center">
                      <button className="px-4 py-1.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-600 hover:text-indigo-700 font-bold text-xs rounded-xl transition">
                        View Details →
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="6"
                    className="p-8 text-center text-gray-500 font-medium"
                  >
                    No students found matching "{searchTerm}"
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Students;
