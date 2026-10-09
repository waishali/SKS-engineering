
import React, { useState } from "react";
import "./Admin.css";

const API_URL = "https://sks-engineering-1.onrender.com/api/admin";

export default function Admin({ onBack }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin(event) {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Invalid email or password.");
      }

      // Backend should establish a secure authenticated session.
      setLoggedIn(true);
      setPassword("");
    } catch (err) {
      setError(
        err.message === "Failed to fetch"
          ? "Server connection failed. Check your backend."
          : err.message || "Unable to sign in."
      );
    } finally {
      setLoading(false);
    }
  }

  async function handleLogout() {
    try {
      const response = await fetch(`${API_URL}/logout`, {
        method: "POST",
        credentials: "include",
      });

      if (!response.ok) {
        setError("Logout failed. Please try again.");
        return;
      }

      setLoggedIn(false);
      setEmail("");
      setPassword("");
      setError("");
    } catch {
      setError("Could not contact the server to log out.");
    }
  }

  if (loggedIn) {
    return (
      <div className="admin-page">
        <section className="admin-login-card admin-dashboard">
          <div className="admin-brand">
            <span>SKS</span> ENGINEERING
          </div>

          <div className="admin-label">ADMINISTRATOR</div>
          <h1>Admin Dashboard</h1>

          <p className="admin-description">
            Welcome to the SKS ENGINEERING administration panel.
          </p>

          <p>
            <strong>Signed in as:</strong> {email}
          </p>

          {error && (
            <p className="admin-error" role="alert">
              {error}
            </p>
          )}

          <button
            className="admin-submit"
            type="button"
            onClick={handleLogout}
          >
            Logout
          </button>

          <button
            className="admin-back"
            type="button"
            onClick={onBack}
          >
            ← Back to Website
          </button>
        </section>
      </div>
    );
  }

  return (
    <div className="admin-page">
      <section className="admin-login-card">
        <div className="admin-brand">
          <span>SKS</span> ENGINEERING
        </div>

        <div className="admin-label">ADMINISTRATOR</div>
        <h1>Admin Login</h1>

        <p className="admin-description">
          Sign in to access the SKS ENGINEERING dashboard.
        </p>

        <form onSubmit={handleLogin}>
          <div className="admin-form-group">
            <label htmlFor="admin-email">Email Address</label>
            <input
              id="admin-email"
              type="email"
              placeholder="Enter admin email"
              autoComplete="username"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>

          <div className="admin-form-group">
            <label htmlFor="admin-password">Password</label>

            <div className="admin-password-wrap">
              <input
                id="admin-password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                autoComplete="current-password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />

              <button
                className="admin-show-password"
                type="button"
                onClick={() => setShowPassword((value) => !value)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {error && (
            <p className="admin-error" role="alert">
              {error}
            </p>
          )}

          <button
            className="admin-submit"
            type="submit"
            disabled={loading}
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>

        <button
          className="admin-back"
          type="button"
          onClick={onBack}
        >
          ← Back to Website
        </button>
      </section>
    </div>
  );
}
