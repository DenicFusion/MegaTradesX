import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Register from './pages/Register';
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes with Main Layout */}
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/gallery" element={<Layout><Gallery /></Layout>} />
        <Route path="/register" element={<Layout><Register /></Layout>} />

        {/* Admin Routes (No Main Layout) */}
        <Route path="/myadmin" element={<AdminLogin />} />
        <Route path="/myadmin/dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;