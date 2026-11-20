import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar.jsx";
import Header from "./components/Header.jsx";

import Dashboard from "./pages/Dashboard.jsx";
import NewComplaint from "./pages/NewComplaint.jsx";
import Complaints from "./pages/Complaints.jsx";
import ComplaintDetails from "./pages/ComplaintDetails.jsx";

import "./App.css";

function App() {
  const [complaints, setComplaints] = useState(() => {
    return JSON.parse(localStorage.getItem("campusComplaints") || "[]");
  });

  function saveComplaints(updated) {
    setComplaints(updated);
    localStorage.setItem("campusComplaints", JSON.stringify(updated));
  }

  function addComplaint(complaint) {
    saveComplaints([...complaints, complaint]);
  }

  function deleteComplaint(id) {
    saveComplaints(complaints.filter(c => c.id !== id));
  }

  function updateStatus(id, status) {
    saveComplaints(
      complaints.map(c => c.id === id ? { ...c, status } : c)
    );
  }

  return (
    <BrowserRouter>
      <div className="app-layout">
        <Sidebar />

        <div className="main-section">
          <Header />

          <Routes>
            <Route path="/" element={<Dashboard complaints={complaints} />} />
            <Route path="/new-complaint"
              element={<NewComplaint onAdd={addComplaint} />} />
            <Route path="/complaints"
              element={
                <Complaints
                  complaints={complaints}
                  onDelete={deleteComplaint}
                  onStatusChange={updateStatus}
                />
              } />
            <Route path="/complaints/:id"
              element={<ComplaintDetails complaints={complaints} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;