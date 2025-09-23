import React, { useState, useEffect } from 'react';
import { Calendar, MessageSquare, Clock, User, Plus, Eye } from 'lucide-react';
import { getEvents, getContactForms } from '../services/api';
import { ContactFormData } from '../types';

const AdminDashboard: React.FC = () => {
  const [stats, setStats] = useState({
    totalEvents: 0,
    totalContacts: 0,
    daysUntilNextEvent: 0,
    lastLogin: new Date().toLocaleDateString()
  });
  const [recentContacts, setRecentContacts] = useState<ContactFormData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    try {
      const [events, contacts] = await Promise.all([
        getEvents(),
        getContactForms()
      ]);

      setStats({
        totalEvents: events.length,
        totalContacts: contacts.length,
        daysUntilNextEvent: 7, // Placeholder
        lastLogin: new Date().toLocaleDateString()
      });

      setRecentContacts(contacts.slice(0, 5));
    } catch (error) {
      console.error('Error loading dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  const statCards = [
    {
      title: 'Total Events',
      value: stats.totalEvents,
      icon: Calendar,
      color: 'bg-blue-500'
    },
    {
      title: 'Total Contacts',
      value: stats.totalContacts,
      icon: MessageSquare,
      color: 'bg-green-500'
    },
    {
      title: 'Days Until Next Event',
      value: stats.daysUntilNextEvent,
      icon: Clock,
      color: 'bg-yellow-500'
    },
    {
      title: 'Last Login',
      value: stats.lastLogin,
      icon: User,
      color: 'bg-purple-500'
    }
  ];

  if (loading) {
    return (
      <div className="flex-1 p-8">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-300 rounded w-64 mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow">
                <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                <div className="h-8 bg-gray-300 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Welcome back to Heritage Triage Admin</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statCards.map((stat) => (
          <div key={stat.title} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className={`${stat.color} p-3 rounded-lg mr-4`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Quick Actions</h2>
          </div>
          <div className="p-6 space-y-4">
            <button className="w-full flex items-center justify-between p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
              <div className="flex items-center">
                <Plus className="h-5 w-5 text-blue-600 mr-3" />
                <span className="text-blue-600 font-medium">Create New Event</span>
              </div>
            </button>
            <button className="w-full flex items-center justify-between p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
              <div className="flex items-center">
                <Eye className="h-5 w-5 text-green-600 mr-3" />
                <span className="text-green-600 font-medium">View All Bookings</span>
              </div>
            </button>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Recent Contact Submissions</h2>
          </div>
          <div className="p-6">
            {recentContacts.length === 0 ? (
              <p className="text-gray-500 text-center py-4">No recent contact submissions</p>
            ) : (
              <div className="space-y-4">
                {recentContacts.map((contact, index) => (
                  <div key={contact.id || index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">{contact.name}</p>
                      <p className="text-sm text-gray-600">{contact.email}</p>
                      <p className="text-xs text-gray-500">
                        {contact.created_at ? new Date(contact.created_at).toLocaleDateString() : 'Recently'}
                      </p>
                    </div>
                    <button 
                      className="text-blue-600 hover:text-blue-800"
                      title="View contact details"
                      aria-label={`View details for ${contact.name}`}
                    >
                      <Eye className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;