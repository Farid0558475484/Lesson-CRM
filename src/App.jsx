import { BrowserRouter, Routes, Route } from "react-router-dom";
import TeacherTable from "./pages/TeacherTable/TeacherTable";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TeacherTable />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard/*" element={<Dashboard />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
