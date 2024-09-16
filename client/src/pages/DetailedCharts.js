import React from 'react'
import NavbarDashboard from '../components/NavbarDashboard';

const DetailedCharts = () => {

    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.href = '/login';
      };

  return (
    <div>
        <NavbarDashboard handleLogout={handleLogout} />
        <div>
            DetailedCharts
        </div>
    </div>
  )
}

export default DetailedCharts