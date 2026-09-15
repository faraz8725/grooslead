
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Mail, Lock } from "lucide-react";
import "../styles/Login.css";

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Backend connect hone ke baad yahan API call hogi
    alert("Login successful!");

    navigate("/");
  };

  return (
    <div className="auth-page">
      <div className="auth-container">

        <button
          className="auth-back"
          onClick={() => navigate("/")}
        >
          <ArrowLeft size={17} />
          Back to Home
        </button>

        <div className="auth-card">

          <div className="auth-logo">
            <span>G</span>
            Grosslead Media
          </div>

          <div className="auth-heading">
            <h1>Welcome back</h1>
            <p>Login to continue to your account.</p>
          </div>

          <form onSubmit={handleLogin}>

            <div className="input-group">
              <label>Email Address</label>

              <div className="input-wrapper">
                <Mail size={18} />
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div className="input-group">
              <label>Password</label>

              <div className="input-wrapper">
                <Lock size={18} />
                <input
                  type="password"
                  placeholder="Enter your password"
                  required
                />
              </div>
            </div>

            <div className="auth-options">
              <label className="remember-me">
                <input type="checkbox" />
                Remember me
              </label>

              <button type="button" className="forgot-password">
                Forgot Password?
              </button>
            </div>

            <button type="submit" className="auth-button">
              Login
            </button>

          </form>

          <div className="auth-divider">
            <span>OR</span>
          </div>

          <p className="auth-switch">
            Don't have an account?
            <Link to="/signup"> Create Account</Link>
          </p>

        </div>
      </div>
    </div>
  );
}

export default Login;

