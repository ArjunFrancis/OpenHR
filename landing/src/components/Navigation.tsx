import React from 'react';
export default function Navigation() {
  return (
    <nav className="flex justify-between items-center py-8 px-6">
      <div className="font-bold text-2xl text-cyan-600">OpenHR</div>
      <button className="bg-cyan-500 hover:bg-cyan-700 text-white px-4 py-2 rounded">Sign In</button>
    </nav>
  );
}
