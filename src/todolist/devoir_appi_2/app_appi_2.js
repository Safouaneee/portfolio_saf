import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home_appi_2 from "./home_dev_2";
import StudentDetails_2 from "./details_students_2";

 function App_dev_2() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home_appi_2 />} />
        <Route path="/student/:CEF" element={<StudentDetails_2 />} />
      </Routes>
    </Router>
  );
}export default App_dev_2
