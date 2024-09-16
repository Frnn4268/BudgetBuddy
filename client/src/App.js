import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import DetailedCharts from './pages/DetailedCharts';
import MonthlyExpenses from './pages/MonthlyExpenses';
import Settings from './pages/Settings';
import Navbar from './components/Navbar';

const App = () => {
  const location = useLocation();
  const noNavbarPaths = ['/dashboard', '/detailed-charts', '/monthly-expenses', '/settings'];

  return (
    <div>
      {!noNavbarPaths.includes(location.pathname) && <Navbar />}
      <div className="w-full flex flex-col">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/detailed-charts" element={<DetailedCharts />} />
          <Route path="/monthly-expenses" element={<MonthlyExpenses />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;