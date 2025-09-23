import React from 'react';
import { Save, User, Eye, EyeOff } from 'lucide-react';
import { useSettings } from '../hooks/admin';

const AdminSettingsPage: React.FC = () => {
  const {
    settings,
    activeTab,
    showPassword,
    setActiveTab,
    setShowPassword,
    handleInputChange,
    handleSave,
    tabs
  } = useSettings();

  return (
    <div className="flex-1 p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Settings</h1>
        <p className="text-gray-600">Manage your admin account and system configuration</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <div className="lg:w-64">
          <nav className="space-y-1">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                    activeTab === tab.id
                      ? 'bg-blue-100 text-blue-700 border-r-2 border-blue-700'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  <Icon className="h-5 w-5 mr-3" />
                  {tab.name}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Content */}
        <div className="flex-1">
          {/* Profile Settings */}
          {activeTab === 'profile' && (
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Profile Settings</h2>
                <button
                  onClick={() => handleSave('profile')}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                >
                  <Save className="h-4 w-4" />
                  Save Changes
                </button>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-6">
                  <div className="flex-shrink-0">
                    <div className="h-20 w-20 rounded-full bg-gray-300 flex items-center justify-center">
                      <User className="h-8 w-8 text-gray-600" />
                    </div>
                  </div>
                  <div>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                      Change Avatar
                    </button>
                    <p className="text-sm text-gray-500 mt-1">JPG, GIF or PNG. 1MB max.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="profile-name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                      id="profile-name"
                      type="text"
                      value={settings.profile.name}
                      onChange={(e) => handleInputChange('profile', 'name', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="profile-email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input
                      id="profile-email"
                      type="email"
                      value={settings.profile.email}
                      onChange={(e) => handleInputChange('profile', 'email', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="profile-role" className="block text-sm font-medium text-gray-700 mb-2">Role</label>
                    <select
                      id="profile-role"
                      value={settings.profile.role}
                      onChange={(e) => handleInputChange('profile', 'role', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="admin">Administrator</option>
                      <option value="user">User</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Security Settings */}
          {activeTab === 'security' && (
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Security Settings</h2>
                <button
                  onClick={() => handleSave('security')}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                >
                  <Save className="h-4 w-4" />
                  Save Changes
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Change Password</h3>
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <label htmlFor="current-password" className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
                      <div className="relative">
                        <input
                          id="current-password"
                          type={showPassword ? 'text' : 'password'}
                          value={settings.security.currentPassword}
                          onChange={(e) => handleInputChange('security', 'currentPassword', e.target.value)}
                          className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute inset-y-0 right-0 pr-3 flex items-center"
                          title={showPassword ? "Hide password" : "Show password"}
                          aria-label={showPassword ? "Hide password" : "Show password"}
                        >
                          {showPassword ? <EyeOff className="h-4 w-4 text-gray-400" /> : <Eye className="h-4 w-4 text-gray-400" />}
                        </button>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="new-password" className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                      <input
                        id="new-password"
                        type="password"
                        value={settings.security.newPassword}
                        onChange={(e) => handleInputChange('security', 'newPassword', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>
                      <input
                        id="confirm-password"
                        type="password"
                        value={settings.security.confirmPassword}
                        onChange={(e) => handleInputChange('security', 'confirmPassword', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Two-Factor Authentication</h3>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Add an extra layer of security to your account</p>
                    </div>
                    <label htmlFor="two-factor-toggle" className="relative inline-flex items-center cursor-pointer">
                      <input
                        id="two-factor-toggle"
                        type="checkbox"
                        checked={settings.security.twoFactorEnabled}
                        onChange={(e) => handleInputChange('security', 'twoFactorEnabled', e.target.checked)}
                        className="sr-only peer"
                        aria-label="Enable two-factor authentication"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Session Settings</h3>
                  <div>
                    <label htmlFor="session-timeout" className="block text-sm font-medium text-gray-700 mb-2">Session Timeout (minutes)</label>
                    <input
                      id="session-timeout"
                      type="number"
                      value={settings.security.sessionTimeout}
                      onChange={(e) => handleInputChange('security', 'sessionTimeout', parseInt(e.target.value))}
                      className="w-32 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      min="15"
                      max="480"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Notification Settings */}
          {activeTab === 'notifications' && (
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Notification Settings</h2>
                <button
                  onClick={() => handleSave('notifications')}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                >
                  <Save className="h-4 w-4" />
                  Save Changes
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Email Notifications</h3>
                  <div className="space-y-4">
                    {[
                      { key: 'emailNotifications', label: 'Enable Email Notifications', description: 'Receive notifications via email' },
                      { key: 'newBookings', label: 'New Bookings', description: 'Get notified when new bookings are made' },
                      { key: 'newContacts', label: 'New Contact Messages', description: 'Get notified when someone submits a contact form' },
                      { key: 'systemAlerts', label: 'System Alerts', description: 'Receive important system notifications' },
                      { key: 'weeklyReports', label: 'Weekly Reports', description: 'Receive weekly summary reports' }
                    ].map(({ key, label, description }) => (
                      <div key={key} className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-900">{label}</p>
                          <p className="text-sm text-gray-500">{description}</p>
                        </div>
                        <label htmlFor={`notification-${key}`} className="relative inline-flex items-center cursor-pointer">
                          <input
                            id={`notification-${key}`}
                            type="checkbox"
                            checked={settings.notifications[key as keyof typeof settings.notifications] as boolean}
                            onChange={(e) => handleInputChange('notifications', key, e.target.checked)}
                            className="sr-only peer"
                            aria-label={label}
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* System Settings */}
          {activeTab === 'system' && (
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">System Settings</h2>
                <button
                  onClick={() => handleSave('system')}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                >
                  <Save className="h-4 w-4" />
                  Save Changes
                </button>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="site-name" className="block text-sm font-medium text-gray-700 mb-2">Site Name</label>
                    <input
                      id="site-name"
                      type="text"
                      value={settings.system.siteName}
                      onChange={(e) => handleInputChange('system', 'siteName', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="timezone-select" className="block text-sm font-medium text-gray-700 mb-2">Timezone</label>
                    <select
                      id="timezone-select"
                      value={settings.system.timezone}
                      onChange={(e) => handleInputChange('system', 'timezone', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="UTC">UTC</option>
                      <option value="America/New_York">Eastern Time</option>
                      <option value="America/Chicago">Central Time</option>
                      <option value="America/Denver">Mountain Time</option>
                      <option value="America/Los_Angeles">Pacific Time</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="site-description" className="block text-sm font-medium text-gray-700 mb-2">Site Description</label>
                  <textarea
                    id="site-description"
                    value={settings.system.siteDescription}
                    onChange={(e) => handleInputChange('system', 'siteDescription', e.target.value)}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-900">Maintenance Mode</p>
                      <p className="text-sm text-gray-500">Temporarily disable public access to the site</p>
                    </div>
                    <label htmlFor="maintenance-mode" className="relative inline-flex items-center cursor-pointer">
                      <input
                        id="maintenance-mode"
                        type="checkbox"
                        checked={settings.system.maintenanceMode}
                        onChange={(e) => handleInputChange('system', 'maintenanceMode', e.target.checked)}
                        className="sr-only peer"
                        aria-label="Enable maintenance mode"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-900">Allow Registrations</p>
                      <p className="text-sm text-gray-500">Allow new users to register accounts</p>
                    </div>
                    <label htmlFor="allow-registrations" className="relative inline-flex items-center cursor-pointer">
                      <input
                        id="allow-registrations"
                        type="checkbox"
                        checked={settings.system.allowRegistrations}
                        onChange={(e) => handleInputChange('system', 'allowRegistrations', e.target.checked)}
                        className="sr-only peer"
                        aria-label="Allow new user registrations"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>

                <div>
                  <label htmlFor="max-file-size" className="block text-sm font-medium text-gray-700 mb-2">Maximum File Upload Size (MB)</label>
                  <input
                    id="max-file-size"
                    type="number"
                    value={settings.system.maxFileSize}
                    onChange={(e) => handleInputChange('system', 'maxFileSize', parseInt(e.target.value))}
                    className="w-32 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    min="1"
                    max="100"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Email Settings */}
          {activeTab === 'email' && (
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Email Settings</h2>
                <button
                  onClick={() => handleSave('email')}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                >
                  <Save className="h-4 w-4" />
                  Save Changes
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">SMTP Configuration</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="smtp-host" className="block text-sm font-medium text-gray-700 mb-2">SMTP Host</label>
                      <input
                        id="smtp-host"
                        type="text"
                        value={settings.email.smtpHost}
                        onChange={(e) => handleInputChange('email', 'smtpHost', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label htmlFor="smtp-port" className="block text-sm font-medium text-gray-700 mb-2">SMTP Port</label>
                      <input
                        id="smtp-port"
                        type="number"
                        value={settings.email.smtpPort}
                        onChange={(e) => handleInputChange('email', 'smtpPort', parseInt(e.target.value))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label htmlFor="smtp-username" className="block text-sm font-medium text-gray-700 mb-2">SMTP Username</label>
                      <input
                        id="smtp-username"
                        type="text"
                        value={settings.email.smtpUser}
                        onChange={(e) => handleInputChange('email', 'smtpUser', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label htmlFor="smtp-password" className="block text-sm font-medium text-gray-700 mb-2">SMTP Password</label>
                      <input
                        id="smtp-password"
                        type="password"
                        value={settings.email.smtpPassword}
                        onChange={(e) => handleInputChange('email', 'smtpPassword', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Email Defaults</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="from-email" className="block text-sm font-medium text-gray-700 mb-2">From Email</label>
                      <input
                        id="from-email"
                        type="email"
                        value={settings.email.fromEmail}
                        onChange={(e) => handleInputChange('email', 'fromEmail', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label htmlFor="from-name" className="block text-sm font-medium text-gray-700 mb-2">From Name</label>
                      <input
                        id="from-name"
                        type="text"
                        value={settings.email.fromName}
                        onChange={(e) => handleInputChange('email', 'fromName', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <button className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors">
                    Test Email Configuration
                  </button>
                  <p className="text-sm text-gray-500 mt-2">Send a test email to verify your SMTP settings</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminSettingsPage;
