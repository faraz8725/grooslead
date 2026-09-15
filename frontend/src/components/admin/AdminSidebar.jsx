import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  BriefcaseBusiness,
  Users,
  MessageSquare,
  LogOut,
  X,
} from "lucide-react";

import "../../styles/admin/AdminSidebar.css";

const AdminSidebar = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <>
      {isOpen && (
        <div
          className="admin-sidebar-overlay"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside className={`admin-sidebar ${isOpen ? "sidebar-open" : ""}`}>
        <div className="admin-logo">
          <div className="admin-logo-icon">G</div>

          <div>
            <h2>Grosslead</h2>
            <span>Admin Panel</span>
          </div>

          <button
            className="sidebar-close"
            onClick={() => setIsOpen(false)}
          >
            <X size={20} />
          </button>
        </div>

        <nav className="admin-nav">
          <p className="nav-title">MAIN MENU</p>

          <NavLink
            to="/admin"
            end
            className={({ isActive }) =>
              `admin-nav-link ${isActive ? "active" : ""}`
            }
            onClick={() => setIsOpen(false)}
          >
            <LayoutDashboard size={19} />
            <span>Dashboard</span>
          </NavLink>

          <NavLink
            to="/admin/services"
            className={({ isActive }) =>
              `admin-nav-link ${isActive ? "active" : ""}`
            }
            onClick={() => setIsOpen(false)}
          >
            <BriefcaseBusiness size={19} />
            <span>Services</span>
          </NavLink>

          <NavLink
            to="/admin/careers"
            className={({ isActive }) =>
              `admin-nav-link ${isActive ? "active" : ""}`
            }
            onClick={() => setIsOpen(false)}
          >
            <Users size={19} />
            <span>Careers</span>
          </NavLink>

          <NavLink
            to="/admin/messages"
            className={({ isActive }) =>
              `admin-nav-link ${isActive ? "active" : ""}`
            }
            onClick={() => setIsOpen(false)}
          >
            <MessageSquare size={19} />
            <span>Messages</span>
          </NavLink>
        </nav>

        <div className="sidebar-bottom">
          <button className="logout-btn" onClick={handleLogout}>
            <LogOut size={19} />
            <span>Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default AdminSidebar;