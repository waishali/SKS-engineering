import React, { useEffect, useState } from "react";
import "./Admin.css";

const API_BASE = "https://sks-engineering-3.onrender.com/api";

function Admin() {
  const [loggedIn, setLoggedIn] = useState(
    !!localStorage.getItem("sks_admin_token")
  );

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginError, setLoginError] = useState("");

  const [projects, setProjects] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginLoading(true);
    setLoginError("");

    try {
      const response = await fetch(`${API_BASE}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Invalid email or password");
      }

      localStorage.setItem("sks_admin_token", data.token);
      setLoggedIn(true);
      setEmail("");
      setPassword("");
    } catch (error) {
      setLoginError(error.message || "Login failed");
    } finally {
      setLoginLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("sks_admin_token");
    setLoggedIn(false);
    setProjects([]);
    setContacts([]);
    setQuotes([]);
  };

  const loadData = async () => {
    try {
      setLoading(true);

      const token = localStorage.getItem("sks_admin_token");

      const headers = {
        Authorization: `Bearer ${token}`,
      };

      const [projectsRes, contactsRes, quotesRes] =
        await Promise.all([
          fetch(`${API_BASE}/projects`, { headers }),
          fetch(`${API_BASE}/contact`, { headers }),
          fetch(`${API_BASE}/quotes`, { headers }),
        ]);

      if (
        projectsRes.status === 401 ||
        contactsRes.status === 401 ||
        quotesRes.status === 401
      ) {
        logout();
        return;
      }

      const projectsData = await projectsRes.json();
      const contactsData = await contactsRes.json();
      const quotesData = await quotesRes.json();

      setProjects(projectsData.data || []);
      setContacts(contactsData.data || []);
      setQuotes(quotesData.data || []);
    } catch (error) {
      console.error("Admin data error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (loggedIn) {
      loadData();
    }
  }, [loggedIn]);

  if (!loggedIn) {
    return (
      <section className="admin-login-section">
        <div className="admin-login-box">

          <div className="admin-login-brand">
            <span>SKS</span> ENGINEERING
          </div>

          <p className="admin-login-label">
            ADMINISTRATOR
          </p>

          <h1>Admin Login</h1>

          <p className="admin-login-subtitle">
            Sign in to access the SKS ENGINEERING dashboard.
          </p>

          <form onSubmit={handleLogin}>

            <label>Email Address</label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@sksengineering.co.in"
              required
            />

            <label>Password</label>

            <div className="password-field">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                required
              />

              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            {loginError && (
              <p className="admin-login-error">
                {loginError}
              </p>
            )}

            <button
              type="submit"
              disabled={loginLoading}
            >
              {loginLoading ? "Signing In..." : "Sign In"}
            </button>

          </form>

          <a href="/" className="back-home">
            ← Back to Website
          </a>

        </div>
      </section>
    );
  }

  return (
    <section className="admin-section">
      <div className="admin-container">

        <div className="admin-header">

          <div>
            <p className="admin-label">
              SKS ENGINEERING
            </p>

            <h1>Admin Dashboard</h1>

            <p>
              Manage projects, contact messages and quote requests.
            </p>
          </div>

          <div className="admin-actions">

            <button
              className="refresh-btn"
              onClick={loadData}
            >
              ↻ Refresh
            </button>

            <button
              className="logout-btn"
              onClick={logout}
            >
              Logout
            </button>

          </div>

        </div>

        {loading ? (
          <div className="admin-loading">
            Loading dashboard...
          </div>
        ) : (
          <>
            <div className="admin-stats">

              <div className="stat-card">
                <span>Projects</span>
                <strong>{projects.length}</strong>
              </div>

              <div className="stat-card">
                <span>Contact Messages</span>
                <strong>{contacts.length}</strong>
              </div>

              <div className="stat-card">
                <span>Quote Requests</span>
                <strong>{quotes.length}</strong>
              </div>

            </div>

            <div className="admin-card">

              <div className="admin-card-header">
                <h2>Projects</h2>
                <span>{projects.length}</span>
              </div>

              {projects.length === 0 ? (
                <p className="empty-message">
                  No projects found.
                </p>
              ) : (
                <div className="admin-table-wrapper">

                  <table className="admin-table">

                    <thead>
                      <tr>
                        <th>Title</th>
                        <th>Client</th>
                        <th>Category</th>
                        <th>Description</th>
                      </tr>
                    </thead>

                    <tbody>
                      {projects.map((project) => (
                        <tr key={project._id}>
                          <td>{project.title}</td>
                          <td>{project.client}</td>
                          <td>{project.category}</td>
                          <td>{project.description}</td>
                        </tr>
                      ))}
                    </tbody>

                  </table>

                </div>
              )}

            </div>

            <div className="admin-card">

              <div className="admin-card-header">
                <h2>Contact Messages</h2>
                <span>{contacts.length}</span>
              </div>

              {contacts.length === 0 ? (
                <p className="empty-message">
                  No contact messages.
                </p>
              ) : (
                <div className="admin-message-list">

                  {contacts.map((contact) => (
                    <div
                      className="admin-message"
                      key={contact._id}
                    >

                      <h3>{contact.name}</h3>

                      <p>
                        <strong>Email:</strong>{" "}
                        {contact.email}
                      </p>

                      <p>
                        <strong>Phone:</strong>{" "}
                        {contact.phone}
                      </p>

                      <p>
                        <strong>Subject:</strong>{" "}
                        {contact.subject || "Website Contact"}
                      </p>

                      <div className="message-content">
                        {contact.message}
                      </div>

                      <small>
                        {new Date(
                          contact.createdAt
                        ).toLocaleString()}
                      </small>

                    </div>
                  ))}

                </div>
              )}

            </div>

            <div className="admin-card">

              <div className="admin-card-header">
                <h2>Quote Requests</h2>
                <span>{quotes.length}</span>
              </div>

              {quotes.length === 0 ? (
                <p className="empty-message">
                  No quote requests.
                </p>
              ) : (
                <div className="admin-message-list">

                  {quotes.map((quote) => (
                    <div
                      className="admin-message"
                      key={quote._id}
                    >

                      <h3>{quote.name}</h3>

                      <p>
                        <strong>Email:</strong>{" "}
                        {quote.email}
                      </p>

                      <p>
                        <strong>Phone:</strong>{" "}
                        {quote.phone}
                      </p>

                      <p>
                        <strong>Service:</strong>{" "}
                        {quote.service}
                      </p>

                      <div className="message-content">
                        {quote.message}
                      </div>

                      <small>
                        {new Date(
                          quote.createdAt
                        ).toLocaleString()}
                      </small>

                    </div>
                  ))}

                </div>
              )}

            </div>
          </>
        )}

      </div>
    </section>
  );
}

export default Admin;
