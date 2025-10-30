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
import MarketEntryPage from '../pages/MarketEntryPage';
import ProjectManagementPage from '../pages/ProjectManagementPage';
import AIOptimizationPage from '../pages/AIOptimizationPage';
import DigitalStrategyPage from '../pages/DigitalStrategyPage';
import ContentStrategyPage from '../pages/ContentStrategyPage';
import ClientCentricSolutionsPage from '../pages/ClientCentricSolutionsPage';
import InnovationEfficiencyPage from '../pages/InnovationEfficiencyPage';
import DataDrivenInsightsPage from '../pages/DataDrivenInsightsPage';
import ComplianceRiskPage from '../pages/ComplianceRiskPage';
import LongTermPartnershipsPage from '../pages/LongTermPartnershipsPage';
import IndustriesPage from '../pages/IndustriesPage';

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

      <Route path="/industries" element={
        <PublicLayout>
          <IndustriesPage />
        </PublicLayout>
      } />

      {/* Service Routes */}
      <Route path="/services/market-entry" element={
        <PublicLayout>
          <MarketEntryPage />
        </PublicLayout>
      } />

      <Route path="/services/project-management" element={
        <PublicLayout>
          <ProjectManagementPage />
        </PublicLayout>
      } />

      <Route path="/services/ai-optimization" element={
        <PublicLayout>
          <AIOptimizationPage />
        </PublicLayout>
      } />

      <Route path="/services/digital-strategy" element={
        <PublicLayout>
          <DigitalStrategyPage />
        </PublicLayout>
      } />

      <Route path="/services/content-strategy" element={
        <PublicLayout>
          <ContentStrategyPage />
        </PublicLayout>
      } />

      {/* Strategic Focus Routes */}
      <Route path="/strategic-focus/client-centric-solutions" element={
        <PublicLayout>
          <ClientCentricSolutionsPage />
        </PublicLayout>
      } />

      <Route path="/strategic-focus/innovation-efficiency" element={
        <PublicLayout>
          <InnovationEfficiencyPage />
        </PublicLayout>
      } />

      <Route path="/strategic-focus/data-driven-insights" element={
        <PublicLayout>
          <DataDrivenInsightsPage />
        </PublicLayout>
      } />

      <Route path="/strategic-focus/compliance-risk" element={
        <PublicLayout>
          <ComplianceRiskPage />
        </PublicLayout>
      } />

      <Route path="/strategic-focus/long-term-partnerships" element={
        <PublicLayout>
          <LongTermPartnershipsPage />
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
