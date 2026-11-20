function Header() {
  return (
    <header className="header">
      <div>
        <h3>Student Grievance Portal</h3>
        <p>Manage your complaints easily</p>
      </div>

      <div className="profile">
        <span>S</span>
        <div>
          <strong>Student</strong>
          <small>Student Account</small>
        </div>
      </div>
    </header>
  );
}

export default Header;