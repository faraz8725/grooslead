
import React, { useEffect, useState } from "react";
import { Plus, Edit, Trash2, X } from "lucide-react";

import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminTopbar from "../../components/admin/AdminTopbar";

import { API_URL } from "../../config/api";

import "../../styles/admin/AdminCareers.css";

const AdminCareers = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const [careers, setCareers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [editingId, setEditingId] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    location: "",
    type: "Full Time",
    description: "",
  });

  // Fetch careers
  const fetchCareers = async () => {
    try {
      setLoading(true);

      const response = await fetch(`${API_URL}/careers`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch careers");
      }

      setCareers(data.careers || data);
    } catch (error) {
      console.error("Fetch careers error:", error);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCareers();
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
      location: "",
      type: "Full Time",
      description: "",
    });

    setShowModal(true);
  };

  // Open edit modal
  const handleEdit = (career) => {
    setEditingId(career._id);

    setFormData({
      title: career.title,
      location: career.location,
      type: career.type,
      description: career.description,
    });

    setShowModal(true);
  };

  // Add / Update career
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.title ||
      !formData.location ||
      !formData.type ||
      !formData.description
    ) {
      alert("Please fill all fields.");
      return;
    }

    try {
      setSaving(true);

      const token = localStorage.getItem("token");

      const url = editingId
        ? `${API_URL}/careers/${editingId}`
        : `${API_URL}/careers`;

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
          ? "Career updated successfully!"
          : "Career added successfully!"
      );

      setShowModal(false);

      setFormData({
        title: "",
        location: "",
        type: "Full Time",
        description: "",
      });

      setEditingId(null);

      fetchCareers();
    } catch (error) {
      console.error("Save career error:", error);
      alert(error.message);
    } finally {
      setSaving(false);
    }
  };

  // Delete career
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this career?"
    );

    if (!confirmDelete) return;

    try {
      const token = localStorage.getItem("token");

      const response = await fetch(`${API_URL}/careers/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to delete career");
      }

      alert("Career deleted successfully!");

      fetchCareers();
    } catch (error) {
      console.error("Delete career error:", error);
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
              <h1>Careers</h1>
              <p>Manage job openings and career opportunities.</p>
            </div>

            <button
              className="primary-admin-btn"
              onClick={handleAddClick}
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
                  {loading ? (
                    <tr>
                      <td colSpan="5" style={{ textAlign: "center" }}>
                        Loading careers...
                      </td>
                    </tr>
                  ) : careers.length === 0 ? (
                    <tr>
                      <td colSpan="5" style={{ textAlign: "center" }}>
                        No careers found.
                      </td>
                    </tr>
                  ) : (
                    careers.map((career) => (
                      <tr key={career._id}>
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
                            <button
                              className="edit-btn"
                              onClick={() => handleEdit(career)}
                            >
                              <Edit size={17} />
                            </button>

                            <button
                              className="delete-btn"
                              onClick={() => handleDelete(career._id)}
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
                  {editingId ? "Edit Career" : "Add New Career"}
                </h2>

                <p>
                  {editingId
                    ? "Update job opening details."
                    : "Create a new job opening."}
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
                <label>Job Title</label>

                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="e.g. Software Developer"
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Location</label>

                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="e.g. Lucknow"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Job Type</label>

                  <select
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                  >
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
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Enter job description"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="save-admin-btn"
                disabled={saving}
              >
                {saving
                  ? "Saving..."
                  : editingId
                  ? "Update Career"
                  : "Add Career"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminCareers;

