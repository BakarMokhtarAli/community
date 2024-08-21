import React from "react";

export const TeamMember = ({ imgSrc, name, position }) => {
  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md">
      <img
        className="w-full h-auto object-fit mb-4"
        src={imgSrc}
        alt={`${name}'s profile`}
      />
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-gray-500">{position}</p>
    </div>
  );
};
