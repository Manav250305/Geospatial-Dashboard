// src/components/Navbar.jsx
import React from 'react';
import { Button } from "@/components/ui/button";

const Navbar = ({ user, onLogin, onLogout, onUpgrade }) => {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Geospatial Data Platform</h1>
      <div className="flex items-center gap-4">
        {user ? (
          <>
            <span>Welcome, {user.name}</span>
            <span className={`px-2 py-1 rounded text-xs ${user.paymentStatus === 'paid' ? 'bg-green-500' : 'bg-orange-500'}`}>
              {user.paymentStatus === 'paid' ? 'Premium' : 'Free'}
            </span>
            {user.paymentStatus !== 'paid' && (
              <Button onClick={onUpgrade} className="bg-green-500 hover:bg-green-600">
                Upgrade
              </Button>
            )}
            <Button onClick={onLogout} variant="destructive">
              Logout
            </Button>
          </>
        ) : (
          <Button onClick={onLogin} className="bg-green-500 hover:bg-green-600">
            Login
          </Button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;