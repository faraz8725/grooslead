import React, { useState } from "react";
import {
  BriefcaseBusiness,
  Users,
  MessageSquare,
  UserCheck,
  Plus,
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminTopbar from "../../components/admin/AdminTopbar";
import StatCard from "../../components/admin/StatCard";

import "../../styles/admin/AdminDashboard.css";

const AdminDashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="admin-layout">
      <AdminSidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="admin-main">
        <AdminTopbar setIsOpen={setIsOpen} />

        <main className="dashboard-content">
          <div className="dashboard-heading">
            <div>
              <span className="dashboard-label">ADMIN DASHBOARD</span>
              <h1>Welcome back, Admin 👋</h1>
              <p>
                Manage your Grosslead Media website from one place.
              </p>
            </div>
          </div>

          <section className="stats-grid">
            <StatCard
              title="Total Services"
              value="12"
              description="Services available"
              icon={<BriefcaseBusiness size={22} />}
            />

            <StatCard
              title="Open Careers"
              value="08"
              description="Active job openings"
              icon={<Users size={22} />}
            />

            <StatCard
              title="Messages"
              value="24"
              description="New inquiries"
              icon={<MessageSquare size={22} />}
            />

            <StatCard
              title="Total Users"
              value="156"
              description="Registered users"
              icon={<UserCheck size={22} />}
            />
          </section>

          <section className="dashboard-grid">
            <div className="quick-actions-card">
              <div className="section-heading">
                <div>
                  <h2>Quick Actions</h2>
                  <p>Manage your website content quickly.</p>
                </div>
              </div>

              <div className="quick-actions">
                <button
                  className="quick-action"
                  onClick={() => navigate("/admin/services")}
                >
                  <div className="quick-icon">
                    <Plus size={21} />
                  </div>

                  <div>
                    <strong>Add Service</strong>
                    <span>Create a new company service</span>
                  </div>

                  <ArrowRight size={18} />
                </button>

                <button
                  className="quick-action"
                  onClick={() => navigate("/admin/careers")}
                >
                  <div className="quick-icon">
                    <Plus size={21} />
                  </div>

                  <div>
                    <strong>Add Career</strong>
                    <span>Create a new job opening</span>
                  </div>

                  <ArrowRight size={18} />
                </button>

                <button
                  className="quick-action"
                  onClick={() => navigate("/admin/messages")}
                >
                  <div className="quick-icon">
                    <MessageSquare size={21} />
                  </div>

                  <div>
                    <strong>View Messages</strong>
                    <span>Check customer inquiries</span>
                  </div>

                  <ArrowRight size={18} />
                </button>
              </div>
            </div>

            <div className="activity-card">
              <div className="section-heading">
                <div>
                  <h2>Recent Activity</h2>
                  <p>Latest admin activities.</p>
                </div>
              </div>

              <div className="activity-list">
                <div className="activity-item">
                  <div className="activity-dot"></div>
                  <div>
                    <strong>Service added</strong>
                    <p>Digital Marketing</p>
                    <small>Recently</small>
                  </div>
                </div>

                <div className="activity-item">
                  <div className="activity-dot"></div>
                  <div>
                    <strong>Career added</strong>
                    <p>Software Developer Intern</p>
                    <small>Recently</small>
                  </div>
                </div>

                <div className="activity-item">
                  <div className="activity-dot"></div>
                  <div>
                    <strong>Admin login</strong>
                    <p>Administrator logged in</p>
                    <small>Recently</small>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;