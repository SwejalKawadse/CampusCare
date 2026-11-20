import { useParams, Link } from "react-router-dom";

function ComplaintDetails({ complaints }) {
  const { id } = useParams();

  const complaint = complaints.find(c => String(c.id) === id);

  if (!complaint) {
    return (
      <div className="page-container">
        <h2>Complaint Not Found</h2>
        <Link to="/complaints">Back to Complaints</Link>
      </div>
    );
  }

  return (
    <div className="page-container">
      <h2>Complaint Details</h2>

      <div className="content-card details-card">
        <h3>{complaint.title}</h3>
        <p><strong>Student Name:</strong> {complaint.studentName}</p>
        <p><strong>PRN:</strong> {complaint.prn}</p>
        <p><strong>Email:</strong> {complaint.email}</p>
        <p><strong>Category:</strong> {complaint.category}</p>
        <p><strong>Priority:</strong> {complaint.priority}</p>
        <p><strong>Date:</strong> {complaint.date}</p>
        <p><strong>Status:</strong> {complaint.status}</p>
        <p><strong>Description:</strong> {complaint.description}</p>

        <Link to="/complaints" className="primary-button">
          Back to Complaints
        </Link>
      </div>
    </div>
  );
}

export default ComplaintDetails;