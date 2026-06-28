import React, { createContext, useContext, useState } from "react";
// Path Fixed: Context madhun data directory madhe janyasathi perfect path
import { mockUsers } from "../data/users";

// 1. Context Create kela
const TeacherContext = createContext();

// 2. Provider Component banvla
export const TeacherProvider = ({ children }) => {
  // Safe initialization jar mockUsers undefined asel tri app crash honar nahi
  const initialStudents =
    mockUsers && mockUsers.students ? mockUsers.students : [];
  const initialTeacher =
    mockUsers && mockUsers.teachers && mockUsers.teachers[0]
      ? mockUsers.teachers[0]
      : {
          id: "TCH001",
          name: "Prof. Nitin Deshmukh",
          email: "nitin.teacher@sms.com",
          role: "teacher",
          department: "Computer Science",
          classesHandled: ["10th A"],
        };

  // States
  const [students, setStudents] = useState(initialStudents);
  const [teacherProfile, setTeacherProfile] = useState(initialTeacher);

  const [exams, setExams] = useState([
    {
      id: "EXM01",
      title: "Unit Test 1",
      subject: "Computer Science",
      date: "2026-06-15",
      duration: "60",
      totalMarks: "50",
    },
    {
      id: "EXM02",
      title: "Surprise Quiz",
      subject: "Mathematics",
      date: "2026-06-20",
      duration: "30",
      totalMarks: "20",
    },
  ]);

  const [reports, setReports] = useState([
    {
      id: "REP01",
      title: "Mid-Term Results 2026",
      class: "10th A",
      averageScore: "84%",
      status: "Generated",
    },
    {
      id: "REP02",
      title: "Monthly Attendance Summary",
      class: "10th A",
      averageScore: "91%",
      status: "Generated",
    },
  ]);

  // --- ACTIONS (FUNCTIONS) ---

  // Teacher profile update karnya sathi
  const updateProfile = (updatedData) => {
    setTeacherProfile((prev) => ({
      ...prev,
      ...updatedData,
    }));
  };

  // Navin Exam add karnya sathi
  const addExam = (newExam) => {
    const examId = `EXM0${exams.length + 1}`;
    const formattedExam = {
      id: examId,
      title: newExam.title,
      subject: newExam.subject,
      date: newExam.date,
      duration: newExam.duration,
      totalMarks: newExam.totalMarks,
    };

    // Exam array madhe top var add karne
    setExams((prevExams) => [formattedExam, ...prevExams]);

    // Exam generate jhalyavar auto-report map karne
    const newReport = {
      id: `REP0${reports.length + 1}`,
      title: `${newExam.title} Performance Analysis`,
      class: "10th A",
      averageScore: "--",
      status: "Pending",
    };
    setReports((prevReports) => [newReport, ...prevReports]);
  };

  // Student details update karnya sathi
  const updateStudentAttendance = (studentId, newAttendance) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === studentId
          ? { ...student, attendance: newAttendance }
          : student,
      ),
    );
  };

  return (
    <TeacherContext.Provider
      value={{
        students,
        teacherProfile,
        exams,
        reports,
        updateProfile,
        addExam,
        updateStudentAttendance,
      }}
    >
      {children}
    </TeacherContext.Provider>
  );
};

// 3. Custom Hook Export kela
export const useTeacher = () => {
  const context = useContext(TeacherContext);
  if (!context) {
    throw new Error("useTeacher must be used within a TeacherProvider");
  }
  return context;
};
