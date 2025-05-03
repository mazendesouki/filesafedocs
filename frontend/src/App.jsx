import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import UserDashboard from "./components/UserDashboard";
import AdminDashboard from "./components/AdminDashboard";
import CompanyDashboard from "./components/CompanyDashboard";
import AcademyDashboard from "./components/AcademyDashboard";
import StoreDashboard from "./components/StoreDashboard";
import ConsultantDashboard from "./components/ConsultantDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/user" element={<UserDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/companies" element={<CompanyDashboard />} />
        <Route path="/admin/academies" element={<AcademyDashboard />} />
        <Route path="/admin/stores" element={<StoreDashboard />} />
        <Route path="/admin/consultants" element={<ConsultantDashboard />} />
        <Route path="/" element={<div className='p-10 text-center text-xl font-bold'>مرحبًا بك في FileSafeDocs</div>} />
      </Routes>
    </Router>
  );
}

export default App;