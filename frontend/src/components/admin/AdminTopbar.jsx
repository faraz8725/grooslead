import React from "react";
import { Menu, Bell, Search } from "lucide-react";

import "../../styles/admin/AdminTopbar.css";

const AdminTopbar = ({ setIsOpen }) => {
  return (
    <header className="admin-topbar">
      <div className="topbar-left">
        <button className="menu-btn" onClick={() => setIsOpen(true)}>
          <Menu size={23} />
        </button>

        <div className="admin-search">
          <Search size={18} />
          <input type="text" placeholder="Search..." />
        </div>
      </div>

      <div className="topbar-right">
        <button className="notification-btn">
          <Bell size={20} />
          <span></span>
        </button>

        <div className="admin-profile">
          <div className="profile-avatar">A</div>

          <div className="profile-info">
            <strong>Admin</strong>
            <small>Administrator</small>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminTopbar;