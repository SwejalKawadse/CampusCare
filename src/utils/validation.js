export function validateComplaint(data) {
  const errors = {};

  if (!data.studentName.trim()) {
    errors.studentName = "Student name is required";
  } else if (data.studentName.trim().length < 3) {
    errors.studentName = "Name must contain at least 3 characters";
  }

  if (!/^\d{10,13}$/.test(data.prn)) {
    errors.prn = "PRN must contain 10-13 digits";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Enter a valid email address";
  }

  if (data.title.trim().length < 5) {
    errors.title = "Title must contain at least 5 characters";
  }

  if (!data.category) {
    errors.category = "Please select a category";
  }

  if (data.description.trim().length < 20) {
    errors.description = "Description must contain at least 20 characters";
  }

  if (!data.priority) {
    errors.priority = "Please select priority";
  }

  if (!data.date) {
    errors.date = "Please select a date";
  } else if (data.date > new Date().toISOString().split("T")[0]) {
    errors.date = "Future dates are not allowed";
  }

  return errors;
}