import React from 'react';

const Card = ({ title, description, image }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={image} alt={title} className="w-full" />
      <div className="px-6 py-4">
        <h2 className="font-bold text-lg">{title}</h2>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
};

export default Card;