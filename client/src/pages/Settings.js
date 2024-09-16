import React from 'react'
import NavbarDashboard from '../components/NavbarDashboard';

const Settings = () => {

    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.href = '/login';
      };

  return (
    <div>
        <NavbarDashboard handleLogout={handleLogout} />
        <div>
            Settings
        </div>
    </div>
  )
}

export default Settings