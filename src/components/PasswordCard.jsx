import React from 'react';

export const PasswordCard = ({ id, password, username, website, onDelete, onCopy }) => {
  const handleDeleteClick = () => {
    if (onDelete) {
      onDelete(id); 
    }
  };

  const handleCopyClick = () => {
    if (onCopy) {
      onCopy(password);
    }
  };

  return (
    <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-gray-100 rounded-lg shadow-md p-5 m-5">
      <div className="mb-4">
        <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
          <svg
            className="w-8 h-8 text-deep-purple-accent-400"
            stroke="currentColor"
            viewBox="0 0 52 52"
          >
            <polygon
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              points="29 13 14 29 25 29 23 39 38 23 27 23"
            />
          </svg>
        </div>
        <p className="mb-1 font-semibold text-lg ml-5">Website: {website}</p>
        <p className="mb-1 text-lg ml-5">Username: {username}</p>
        <p className="mb-1 text-lg ml-5">Username: {username}</p>
   
      </div>
      <div className="flex justify-between">
        <button
          className="bg-red-500 text-white px-4 py-2 mx-4 rounded-md hover:bg-red-600 transition-colors"
          onClick={handleDeleteClick}
        >
          Delete
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
          onClick={handleCopyClick}
        >
          Copy 
        </button>
      </div>
    </div>
  );
};

 
