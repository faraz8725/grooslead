
import React, { useEffect, useState } from "react";
import { Plus, Edit, Trash2, X } from "lucide-react";

import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminTopbar from "../../components/admin/AdminTopbar";

import { API_URL } from "../../config/api";

import "../../styles/admin/AdminServices.css";

const AdminServices = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [editingId, setEditingId] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    icon: "",
  });

  // Fetch services
  const fetchServices = async () => {
    try {
      setLoading(true);

      const response = await fetch(`${API_URL}/services`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch services");
      }

      setServices(data.services || data);
    } catch (error) {
      console.error("Fetch services error:", error);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  // Input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Open add modal
  const handleAddClick = () => {
    setEditingId(null);

    setFormData({
      title: "",
      description: "",
      icon: "",
    });

    setShowModal(true);
  };

  // Open edit modal
  const handleEdit = (service) => {
    setEditingId(service._id);

    setFormData({
      title: service.title,
      description: service.description,
      icon: service.icon || "",
    });

    setShowModal(true);
  };

  // Add / Update service
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.title || !formData.description) {
      alert("Please fill all required fields.");
      return;
    }

    try {
      setSaving(true);

      const token = localStorage.getItem("token");

      const url = editingId
        ? `${API_URL}/services/${editingId}`
        : `${API_URL}/services`;

      const method = editingId ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      alert(
        editingId
          ? "Service updated successfully!"
          : "Service added successfully!"
      );

      setShowModal(false);

      setFormData({
        title: "",
        description: "",
        icon: "",
      });

      setEditingId(null);

      fetchServices();
    } catch (error) {
      console.error("Save service error:", error);
      alert(error.message);
    } finally {
      setSaving(false);
    }
  };

  // Delete service
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this service?"
    );

    if (!confirmDelete) return;

    try {
      const token = localStorage.getItem("token");

      const response = await fetch(`${API_URL}/services/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to delete service");
      }

      alert("Service deleted successfully!");

      fetchServices();
    } catch (error) {
      console.error("Delete service error:", error);
      alert(error.message);
    }
  };

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
              onClick={handleAddClick}
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
                  {loading ? (
                    <tr>
                      <td colSpan="4" style={{ textAlign: "center" }}>
                        Loading services...
                      </td>
                    </tr>
                  ) : services.length === 0 ? (
                    <tr>
                      <td colSpan="4" style={{ textAlign: "center" }}>
                        No services found.
                      </td>
                    </tr>
                  ) : (
                    services.map((service) => (
                      <tr key={service._id}>
                        <td>
                          <strong>{service.title}</strong>
                        </td>

                        <td>
                          <span className="description-text">
                            {service.description}
                          </span>
                        </td>

                        <td>
                          <span className="status-badge">
                            {service.icon || "—"}
                          </span>
                        </td>

                        <td>
                          <div className="table-actions">
                            <button
                              className="edit-btn"
                              onClick={() => handleEdit(service)}
                            >
                              <Edit size={17} />
                            </button>

                            <button
                              className="delete-btn"
                              onClick={() => handleDelete(service._id)}
                            >
                              <Trash2 size={17} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
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
                <h2>
                  {editingId ? "Edit Service" : "Add New Service"}
                </h2>

                <p>
                  {editingId
                    ? "Update service details."
                    : "Add a service to your website."}
                </p>
              </div>

              <button
                className="modal-close"
                onClick={() => setShowModal(false)}
              >
                <X size={20} />
              </button>
            </div>

            <form className="admin-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Service Title</label>

                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="e.g. Digital Marketing"
                  required
                />
              </div>

              <div className="form-group">
                <label>Description</label>

                <textarea
                  rows="4"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Enter service description"
                  required
                ></textarea>
              </div>

              <div className="form-group">
                <label>Icon</label>

                <input
                  type="text"
                  name="icon"
                  value={formData.icon}
                  onChange={handleChange}
                  placeholder="e.g. Marketing"
                />
              </div>

              <button
                type="submit"
                className="save-admin-btn"
                disabled={saving}
              >
                {saving
                  ? "Saving..."
                  : editingId
                  ? "Update Service"
                  : "Add Service"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminServices;

