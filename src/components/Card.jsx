import React from 'react';

export default function Card({ children, className = '', ...props }) {
  return (
    <div
      className={`rounded-xl border border-gray-200 bg-white p-6 text-gray-950 shadow-sm ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
