import React, { useState } from "react";
import { Plus, Edit, Trash2, X } from "lucide-react";

import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminTopbar from "../../components/admin/AdminTopbar";

import "../../styles/admin/AdminCareers.css";

const AdminCareers = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const careers = [
    {
      id: 1,
      title: "Software Developer Intern",
      location: "Lucknow",
      type: "Internship",
      description: "Join our development team.",
    },
    {
      id: 2,
      title: "Digital Marketing Executive",
      location: "Lucknow",
      type: "Full Time",
      description: "Help us grow our digital presence.",
    },
  ];

  return (
    <div className="admin-layout">
      <AdminSidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="admin-main">
        <AdminTopbar setIsOpen={setIsOpen} />

        <main className="admin-page-content">
          <div className="page-header">
            <div>
              <span className="dashboard-label">CONTENT MANAGEMENT</span>
              <h1>Careers</h1>
              <p>Manage job openings and career opportunities.</p>
            </div>

            <button
              className="primary-admin-btn"
              onClick={() => setShowModal(true)}
            >
              <Plus size={18} />
              Add Career
            </button>
          </div>

          <div className="admin-table-card">
            <div className="table-wrapper">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Position</th>
                    <th>Location</th>
                    <th>Type</th>
                    <th>Description</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {careers.map((career) => (
                    <tr key={career.id}>
                      <td>
                        <strong>{career.title}</strong>
                      </td>

                      <td>{career.location}</td>

                      <td>
                        <span className="status-badge">
                          {career.type}
                        </span>
                      </td>

                      <td>
                        <span className="description-text">
                          {career.description}
                        </span>
                      </td>

                      <td>
                        <div className="table-actions">
                          <button className="edit-btn">
                            <Edit size={17} />
                          </button>

                          <button className="delete-btn">
                            <Trash2 size={17} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>

      {showModal && (
        <div className="admin-modal-overlay">
          <div className="admin-modal">
            <div className="modal-header">
              <div>
                <h2>Add New Career</h2>
                <p>Create a new job opening.</p>
              </div>

              <button
                className="modal-close"
                onClick={() => setShowModal(false)}
              >
                <X size={20} />
              </button>
            </div>

            <form className="admin-form">
              <div className="form-group">
                <label>Job Title</label>
                <input
                  type="text"
                  placeholder="e.g. Software Developer"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Location</label>
                  <input
                    type="text"
                    placeholder="e.g. Lucknow"
                  />
                </div>

                <div className="form-group">
                  <label>Job Type</label>
                  <select>
                    <option>Full Time</option>
                    <option>Part Time</option>
                    <option>Internship</option>
                    <option>Contract</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>Description</label>
                <textarea
                  rows="4"
                  placeholder="Enter job description"
                ></textarea>
              </div>

              <button type="button" className="save-admin-btn">
                Add Career
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminCareers;