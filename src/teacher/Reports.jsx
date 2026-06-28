import React from "react";
import { useTeacher } from "../context/TeacherContext";

const Reports = () => {
  const { reports } = useTeacher();

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-6">
        Academic Reports
      </h1>
      <div className="bg-white rounded-2xl border overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 text-gray-500 text-xs font-bold border-b">
              <th className="p-4 pl-6">Report Title</th>
              <th className="p-4">Class</th>
              <th className="p-4">Avg Performance</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm divide-y divide-gray-100">
            {reports.map((report) => (
              <tr key={report.id} className="hover:bg-gray-50/70">
                <td className="p-4 pl-6 font-semibold text-gray-800">
                  {report.title}
                </td>
                <td className="p-4 text-gray-500">{report.class}</td>
                <td className="p-4 font-medium text-gray-900">
                  {report.averageScore}
                </td>
                <td className="p-4">
                  <span
                    className={`px-2.5 py-1 text-xs font-bold rounded-full ${report.status === "Generated" ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"}`}
                  >
                    {report.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reports;
