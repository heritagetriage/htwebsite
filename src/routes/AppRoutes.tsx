import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from '../components/Auth/ProtectedRoute';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import Sidebar from '../components/Admin/Sidebar';
import HomePage from '../pages/HomePage';
import BookingPage from '../pages/BookingPage';
import MarketInsightsPage from '../pages/MarketInsightsPage';
import ContactPage from '../pages/ContactPage';
import AdminLoginPage from '../pages/AdminLoginPage';
import AdminDashboard from '../pages/AdminDashboard';
import AdminEventsPage from '../pages/AdminEventsPage';
import AdminSessionsPage from '../pages/AdminSessionsPage';
import AdminBookingsPage from '../pages/AdminBookingsPage';
import AdminContactsPage from '../pages/AdminContactsPage';
import AdminSettingsPage from '../pages/AdminSettingsPage';
import AdminDelegatesPage from '../pages/AdminDelegatesPage';

// Layout wrapper for public pages
const PublicLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="min-h-screen bg-white">
    <Header />
    <main>
      {children}
    </main>
    <Footer />
  </div>
);

// Layout wrapper for admin pages
const AdminLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex min-h-screen bg-gray-100">
    <Sidebar />
    {children}
  </div>
);

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={
        <PublicLayout>
          <HomePage />
        </PublicLayout>
      } />

      <Route path="/booking" element={
        <PublicLayout>
          <BookingPage />
        </PublicLayout>
      } />

      <Route path="/booking/:eventId" element={
        <PublicLayout>
          <BookingPage />
        </PublicLayout>
      } />

      <Route path="/market-insights" element={
        <PublicLayout>
          <MarketInsightsPage />
        </PublicLayout>
      } />

      <Route path="/contact" element={
        <PublicLayout>
          <ContactPage />
        </PublicLayout>
      } />

      {/* Admin Login Route */}
      <Route path="/admin/login" element={<AdminLoginPage />} />

      {/* Protected Admin Routes */}
      <Route path="/admin/*" element={
        <ProtectedRoute>
          <AdminLayout>
            <Routes>
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="events" element={<AdminEventsPage />} />
              <Route path="sessions" element={<AdminSessionsPage />} />
              <Route path="delegates" element={<AdminDelegatesPage />} />
              <Route path="bookings" element={<AdminBookingsPage />} />
              <Route path="contacts" element={<AdminContactsPage />} />
              <Route path="settings" element={<AdminSettingsPage />} />
              <Route path="" element={<Navigate to="dashboard" replace />} />
            </Routes>
          </AdminLayout>
        </ProtectedRoute>
      } />

      {/* Catch all route */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
