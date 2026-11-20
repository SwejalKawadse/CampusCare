import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validateComplaint } from "../utils/validation.js";

function NewComplaint({ onAdd }) {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    studentName: "",
    prn: "",
    email: "",
    title: "",
    category: "",
    description: "",
    priority: "",
    date: new Date().toISOString().split("T")[0]
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const validationErrors = validateComplaint(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    onAdd({
      ...form,
      id: Date.now(),
      status: "Pending",
      createdAt: new Date().toISOString()
    });

    setSuccess("Complaint submitted successfully!");

    setTimeout(() => {
      navigate("/complaints");
    }, 1000);
  }

  return (
    <div className="page-container">
      <div className="page-heading">
        <div>
          <h2>Submit New Complaint</h2>
          <p>Fill in the details to register your grievance.</p>
        </div>
      </div>

      <form className="complaint-form" onSubmit={handleSubmit} noValidate>
        <div className="form-grid">
          <div className="form-group">
            <label>Student Name</label>
            <input name="studentName" value={form.studentName}
              onChange={handleChange} placeholder="Enter your name" />
            <small>{errors.studentName}</small>
          </div>

          <div className="form-group">
            <label>PRN Number</label>
            <input name="prn" value={form.prn}
              onChange={handleChange} placeholder="Enter PRN" />
            <small>{errors.prn}</small>
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input name="email" type="email" value={form.email}
              onChange={handleChange} placeholder="Enter email" />
            <small>{errors.email}</small>
          </div>

          <div className="form-group">
            <label>Complaint Title</label>
            <input name="title" value={form.title}
              onChange={handleChange} placeholder="Enter complaint title" />
            <small>{errors.title}</small>
          </div>

          <div className="form-group">
            <label>Category</label>
            <select name="category" value={form.category} onChange={handleChange}>
              <option value="">Select Category</option>
              <option>Academic</option>
              <option>Infrastructure</option>
              <option>Hostel</option>
              <option>Transport</option>
              <option>Administration</option>
              <option>Other</option>
            </select>
            <small>{errors.category}</small>
          </div>

          <div className="form-group">
            <label>Priority</label>
            <select name="priority" value={form.priority} onChange={handleChange}>
              <option value="">Select Priority</option>
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
            <small>{errors.priority}</small>
          </div>

          <div className="form-group">
            <label>Complaint Date</label>
            <input type="date" name="date" value={form.date}
              onChange={handleChange} />
            <small>{errors.date}</small>
          </div>

          <div className="form-group full-width">
            <label>Description</label>
            <textarea name="description" rows="5"
              value={form.description} onChange={handleChange}
              placeholder="Describe your complaint in detail..." />
            <small>{errors.description}</small>
          </div>
        </div>

        {success && <p className="success-message">{success}</p>}

        <button type="submit" className="primary-button">
          Submit Complaint
        </button>
      </form>
    </div>
  );
}

export default NewComplaint;