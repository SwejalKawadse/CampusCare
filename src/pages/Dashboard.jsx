import { Link } from "react-router-dom";
import StatusBadge from "../components/StatusBadge";

function Dashboard({ complaints }) {
  const total = complaints.length;
  const pending = complaints.filter(c => c.status === "Pending").length;
  const progress = complaints.filter(c => c.status === "In Progress").length;
  const resolved = complaints.filter(c => c.status === "Resolved").length;

  return (
    <div className="page-container">
      <div className="page-heading">
        <div>
          <h2>Dashboard</h2>
          <p>Welcome to your CampusCare dashboard.</p>
        </div>
        <Link to="/new-complaint" className="primary-button">
          + New Complaint
        </Link>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Complaints</h3>
          <h1>{total}</h1>
        </div>
        <div className="stat-card">
          <h3>Pending</h3>
          <h1>{pending}</h1>
        </div>
        <div className="stat-card">
          <h3>In Progress</h3>
          <h1>{progress}</h1>
        </div>
        <div className="stat-card">
          <h3>Resolved</h3>
          <h1>{resolved}</h1>
        </div>
      </div>

      <div className="content-card">
        <h3>Recent Complaints</h3>

        {complaints.length === 0 ? (
          <p className="empty-message">No complaints submitted yet.</p>
        ) : (
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {[...complaints].reverse().slice(0, 5).map(c => (
                  <tr key={c.id}>
                    <td>{c.title}</td>
                    <td>{c.category}</td>
                    <td>{c.date}</td>
                    <td><StatusBadge status={c.status} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;