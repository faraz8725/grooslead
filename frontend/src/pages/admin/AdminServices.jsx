import React, { useState } from "react";
import { Plus, Edit, Trash2, X } from "lucide-react";

import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminTopbar from "../../components/admin/AdminTopbar";

import "../../styles/admin/AdminServices.css";

const AdminServices = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const services = [
    {
      id: 1,
      title: "Digital Marketing",
      description:
        "We help businesses grow through effective digital marketing strategies.",
      icon: "Marketing",
    },
    {
      id: 2,
      title: "Web Development",
      description:
        "Modern and responsive websites built for businesses and brands.",
      icon: "Web",
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
              <h1>Services</h1>
              <p>Manage the services displayed on your website.</p>
            </div>

            <button
              className="primary-admin-btn"
              onClick={() => setShowModal(true)}
            >
              <Plus size={18} />
              Add Service
            </button>
          </div>

          <div className="admin-table-card">
            <div className="table-wrapper">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Service</th>
                    <th>Description</th>
                    <th>Icon</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {services.map((service) => (
                    <tr key={service.id}>
                      <td>
                        <strong>{service.title}</strong>
                      </td>

                      <td>
                        <span className="description-text">
                          {service.description}
                        </span>
                      </td>

                      <td>
                        <span className="status-badge">{service.icon}</span>
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
                <h2>Add New Service</h2>
                <p>Add a service to your website.</p>
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
                <label>Service Title</label>
                <input
                  type="text"
                  placeholder="e.g. Digital Marketing"
                />
              </div>

              <div className="form-group">
                <label>Description</label>
                <textarea
                  rows="4"
                  placeholder="Enter service description"
                ></textarea>
              </div>

              <div className="form-group">
                <label>Icon</label>
                <input
                  type="text"
                  placeholder="e.g. marketing"
                />
              </div>

              <button type="button" className="save-admin-btn">
                Add Service
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminServices;