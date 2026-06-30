import React, { useState } from "react";
import { useTeacher } from "../context/TeacherContext";

const CreateExam = () => {
  const { addExam } = useTeacher();
  const [formData, setFormData] = useState({
    title: "",
    subject: "Mathematics",
    date: "",
    duration: "",
    totalMarks: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addExam(formData); // Central Context madhe save kela!
    alert("Exam Created & Published successfully!");
    setFormData({
      title: "",
      subject: "Mathematics",
      date: "",
      duration: "",
      totalMarks: "",
    });
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen flex justify-center items-start">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-sm border border-gray-100 p-8">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-6">
          Create New Exam
        </h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Exam Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="e.g. Unit Test 3"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Subject
              </label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-xl bg-white"
              >
                <option value="Mathematics">Mathematics</option>
                <option value="Computer Science">Computer Science</option>
                <option value="English">English</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Exam Date
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-xl"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Duration (Mins)
              </label>
              <input
                type="number"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                placeholder="60"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-xl"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Total Marks
              </label>
              <input
                type="number"
                name="totalMarks"
                value={formData.totalMarks}
                onChange={handleChange}
                placeholder="100"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-xl"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 shadow-md transition"
          >
            Publish Exam
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateExam;
