import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand">
        <h2>CampusCare</h2>
        <p>Student Portal</p>
      </div>

      <nav>
        <NavLink to="/" end>Dashboard</NavLink>
        <NavLink to="/new-complaint">New Complaint</NavLink>
        <NavLink to="/complaints">All Complaints</NavLink>
      </nav>

      <div className="sidebar-bottom">
        Student Grievance System
      </div>
    </aside>
  );
}

export default Sidebar;