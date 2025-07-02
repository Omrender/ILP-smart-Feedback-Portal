import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import UserHome from "./pages/UserHome";
import AdminPanel from "./pages/AdminPanel";

function App() {
  const user = JSON.parse(localStorage.getItem("user") || "null");

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/user"
          element={user && user.role === "User" ? <UserHome userId={user.id} /> : <Navigate to="/login" />}
        />
        <Route
          path="/admin"
          element={user && user.role === "Admin" ? <AdminPanel /> : <Navigate to="/login" />}
        />
        {/* Add fallback */}
        <Route path="*" element={<p>Page Not Found</p>} />
      </Routes>
    </Router>
  );
}

export default App;
