import React from 'react';

const StatsCard = ({ title, data, color }) => {
  const cardStyle = `card bg-${color}`;

  return (
    <div className="col-lg-3 mb-4">
      <div className={cardStyle}>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{data}</p>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;