import React from 'react';

export const ServiceCard = ({ header, info, icon }) => {
  return (
    <div className="service-card">
      <div className="icon">
        <i className={icon}></i>
      </div>
      <h2>{header}</h2>
      <p>{info}</p>
    </div>
  );
};