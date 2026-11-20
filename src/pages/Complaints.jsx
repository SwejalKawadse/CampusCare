import { useState } from "react";
import { Link } from "react-router-dom";
import StatusBadge from "../components/StatusBadge";

function Complaints({ complaints, onDelete, onStatusChange }) {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filtered = complaints.filter(c => {
    const matchesSearch =
      c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.studentName.toLowerCase().includes(search.toLowerCase()) ||
      c.prn.includes(search);

    const matchesStatus = filter === "All" || c.status === filter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="page-container">
      <div className="page-heading">
        <div>
          <h2>All Complaints</h2>
          <p>View and manage submitted complaints.</p>
        </div>
        <Link to="/new-complaint" className="primary-button">
          + New Complaint
        </Link>
      </div>

      <div className="filter-bar">
        <input
          placeholder="Search complaints..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />

        <select value={filter} onChange={e => setFilter(e.target.value)}>
          <option value="All">All Statuses</option>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Resolved">Resolved</option>
        </select>
      </div>

      <div className="content-card table-container">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Student</th>
              <th>Category</th>
              <th>Priority</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {filtered.length === 0 ? (
              <tr><td colSpan="6">No complaints found.</td></tr>
            ) : (
              filtered.map(c => (
                <tr key={c.id}>
                  <td>{c.title}</td>
                  <td>{c.studentName}</td>
                  <td>{c.category}</td>
                  <td>{c.priority}</td>
                  <td><StatusBadge status={c.status} /></td>
                  <td className="actions">
                    <Link to={`/complaints/${c.id}`}>View</Link>

                    <select
                      value={c.status}
                      onChange={e => onStatusChange(c.id, e.target.value)}
                    >
                      <option>Pending</option>
                      <option>In Progress</option>
                      <option>Resolved</option>
                    </select>

                    <button className="delete-button"
                      onClick={() => onDelete(c.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Complaints;