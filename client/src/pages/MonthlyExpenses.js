import React from 'react'
import NavbarDashboard from '../components/NavbarDashboard';

const MonthlyExpenses = () => {

    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.href = '/login';
      };

  return (
    <div>
        <NavbarDashboard handleLogout={handleLogout} />
        <div>
            MonthlyExpenses
        </div>
    </div>
  )
}

export default MonthlyExpenses