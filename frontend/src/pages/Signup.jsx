
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, User, Mail, Lock } from "lucide-react";
import "../styles/Signup.css";

function Signup() {
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    // Backend connect hone ke baad yahan API call hogi
    alert("Account created successfully!");

    navigate("/login");
  };

  return (
    <div className="auth-page signup-page">
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
            <h1>Create account</h1>
            <p>Join Grosslead Media and get started.</p>
          </div>

          <form onSubmit={handleSignup}>

            <div className="input-group">
              <label>Full Name</label>

              <div className="input-wrapper">
                <User size={18} />

                <input
                  type="text"
                  placeholder="Enter your full name"
                  required
                />
              </div>
            </div>

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
                  placeholder="Create a password"
                  minLength="6"
                  required
                />
              </div>
            </div>

            <div className="input-group">
              <label>Confirm Password</label>

              <div className="input-wrapper">
                <Lock size={18} />

                <input
                  type="password"
                  placeholder="Confirm your password"
                  minLength="6"
                  required
                />
              </div>
            </div>

            <label className="terms-check">
              <input type="checkbox" required />
              <span>
                I agree to the Terms & Conditions and Privacy Policy.
              </span>
            </label>

            <button type="submit" className="auth-button">
              Create Account
            </button>

          </form>

          <div className="auth-divider">
            <span>OR</span>
          </div>

          <p className="auth-switch">
            Already have an account?
            <Link to="/login"> Login</Link>
          </p>

        </div>
      </div>
    </div>
  );
}

export default Signup;

