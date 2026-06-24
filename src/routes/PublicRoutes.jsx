import { Route } from "react-router-dom";

import Home from "../pages/public/Home";
import About from "../pages/public/About";
import Course from "../pages/public/Course";
import CourseDetails from "../pages/public/CourseDetails";
import Contact from "../pages/public/Contact";
import NotFound from "../pages/public/NotFound";
const PublicRoutes = () => {
  return (
    <>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/course" element={<Course />} />
      <Route path="/courses/:id" element={<CourseDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/NotFound" element={<NotFound/>}/>
    </>
  );
};

export default PublicRoutes;