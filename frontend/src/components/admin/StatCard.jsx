import React from "react";

import "../../styles/admin/StatCard.css";

const StatCard = ({ title, value, icon, description }) => {
  return (
    <div className="stat-card">
      <div className="stat-card-top">
        <div className="stat-icon">{icon}</div>

        <span className="stat-growth">+12%</span>
      </div>

      <div className="stat-content">
        <p>{title}</p>
        <h2>{value}</h2>
        <span>{description}</span>
      </div>
    </div>
  );
};

export default StatCard;