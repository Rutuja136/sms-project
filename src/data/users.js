// Mock Data for Student Management System

export const mockUsers = {
  // 1. Teachers Data
  teachers: [
    {
      id: "TCH001",
      name: "Prof. Nitin Deshmukh",
      email: "nitin.teacher@sms.com",
      role: "teacher",
      department: "Computer Science",
      joinedDate: "2024-06-15",
      classesHandled: ["10th A", "11th B"],
    },
    {
      id: "TCH002",
      name: "Dr. Anjali Patil",
      email: "anjali.teacher@sms.com",
      role: "teacher",
      department: "Mathematics",
      joinedDate: "2023-08-20",
      classesHandled: ["10th B", "12th A"],
    },
  ],

  // 2. Students Data (Je tula Students.jsx aani StudentDetails.jsx madhe lagel)
  students: [
    {
      id: "STU001",
      name: "Rahul Sharma",
      email: "rahul@mail.com",
      role: "student",
      class: "10th A",
      rollNo: 12,
      gender: "Male",
      contact: "9876543210",
      attendance: "92%",
      grades: { Math: "A", Science: "B+", English: "A" },
    },
    {
      id: "STU002",
      name: "Sneha Patil",
      email: "sneha@mail.com",
      role: "student",
      class: "10th A",
      rollNo: 24,
      gender: "Female",
      contact: "9876543211",
      attendance: "88%",
      grades: { Math: "O", Science: "A", English: "A+" },
    },
    {
      id: "STU003",
      name: "Amit Desai",
      email: "amit@mail.com",
      role: "student",
      class: "10th B",
      rollNo: 5,
      gender: "Male",
      contact: "9876543212",
      attendance: "95%",
      grades: { Math: "B", Science: "B", English: "A" },
    },
  ],

  // 3. Admin Data (Jar garaj padli tar)
  admins: [
    {
      id: "ADM001",
      name: "System Admin",
      email: "admin@sms.com",
      role: "admin",
    },
  ],
};
