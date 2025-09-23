import { useState, useCallback } from 'react';

interface SettingsData {
  profile: {
    name: string;
    email: string;
    role: string;
    avatar: string;
  };
  security: {
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
    twoFactorEnabled: boolean;
    sessionTimeout: number;
  };
  notifications: {
    emailNotifications: boolean;
    newBookings: boolean;
    newContacts: boolean;
    systemAlerts: boolean;
    weeklyReports: boolean;
  };
  system: {
    siteName: string;
    siteDescription: string;
    maintenanceMode: boolean;
    allowRegistrations: boolean;
    maxFileSize: number;
    timezone: string;
  };
  email: {
    smtpHost: string;
    smtpPort: number;
    smtpUser: string;
    smtpPassword: string;
    fromEmail: string;
    fromName: string;
  };
}

interface UseSettingsReturn {
  // State
  settings: SettingsData;
  activeTab: string;
  showPassword: boolean;
  loading: boolean;
  error: string | null;
  
  // Actions
  setActiveTab: (tab: string) => void;
  setShowPassword: (show: boolean) => void;
  handleInputChange: (section: string, field: string, value: any) => void;
  handleSave: (section: string) => Promise<void>;
  handleTestEmail: () => Promise<void>;
  
  // Computed values
  tabs: Array<{
    id: string;
    name: string;
    icon: any;
  }>;
}

// Settings will be loaded from API
const defaultSettings: SettingsData = {
  profile: {
    name: 'Admin User',
    email: 'admin@heritagetriage.com',
    role: 'admin',
    avatar: ''
  },
  security: {
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    twoFactorEnabled: false,
    sessionTimeout: 60
  },
  notifications: {
    emailNotifications: true,
    newBookings: true,
    newContacts: true,
    systemAlerts: true,
    weeklyReports: false
  },
  system: {
    siteName: '',
    siteDescription: '',
    maintenanceMode: false,
    allowRegistrations: true,
    maxFileSize: 10,
    timezone: 'UTC'
  },
  email: {
    smtpHost: '',
    smtpPort: 587,
    smtpUser: '',
    smtpPassword: '',
    fromEmail: '',
    fromName: ''
  }
};

export const useSettings = (): UseSettingsReturn => {
  const [settings, setSettings] = useState<SettingsData>(defaultSettings);
  const [activeTab, setActiveTab] = useState('profile');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Tab configuration
  const tabs = [
    { id: 'profile', name: 'Profile', icon: 'User' },
    { id: 'security', name: 'Security', icon: 'Shield' },
    { id: 'notifications', name: 'Notifications', icon: 'Bell' },
    { id: 'system', name: 'System', icon: 'Globe' },
    { id: 'email', name: 'Email', icon: 'Mail' }
  ];

  // Handle input changes
  const handleInputChange = useCallback((section: string, field: string, value: any) => {
    setSettings(prev => ({
      ...prev,
      [section]: {
        ...prev[section as keyof SettingsData],
        [field]: value
      }
    }));
    
    // Clear error when user makes changes
    if (error) {
      setError(null);
    }
  }, [error]);

  // Save settings section
  const handleSave = useCallback(async (section: string) => {
    setLoading(true);
    setError(null);

    try {
      // Validate section-specific requirements
      if (section === 'security') {
        const { currentPassword, newPassword, confirmPassword } = settings.security;
        
        if (newPassword && !currentPassword) {
          throw new Error('Current password is required to set a new password');
        }
        
        if (newPassword && newPassword !== confirmPassword) {
          throw new Error('New passwords do not match');
        }
        
        if (newPassword && newPassword.length < 8) {
          throw new Error('New password must be at least 8 characters long');
        }
      }
      
      if (section === 'profile') {
        const { name, email } = settings.profile;
        
        if (!name.trim()) {
          throw new Error('Name is required');
        }
        
        if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
          throw new Error('Valid email address is required');
        }
      }
      
      if (section === 'system') {
        const { siteName, maxFileSize } = settings.system;
        
        if (!siteName.trim()) {
          throw new Error('Site name is required');
        }
        
        if (maxFileSize < 1 || maxFileSize > 100) {
          throw new Error('Max file size must be between 1 and 100 MB');
        }
      }
      
      if (section === 'email') {
        const { smtpHost, smtpPort, fromEmail } = settings.email;
        
        if (smtpHost && (!smtpPort || smtpPort < 1 || smtpPort > 65535)) {
          throw new Error('Valid SMTP port is required (1-65535)');
        }
        
        if (fromEmail && !/\S+@\S+\.\S+/.test(fromEmail)) {
          throw new Error('Valid from email address is required');
        }
      }

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Clear password fields after successful save
      if (section === 'security') {
        setSettings(prev => ({
          ...prev,
          security: {
            ...prev.security,
            currentPassword: '',
            newPassword: '',
            confirmPassword: ''
          }
        }));
      }
      
      // Show success message (in a real app, this might be handled by a toast notification)
      console.log(`${section.charAt(0).toUpperCase() + section.slice(1)} settings saved successfully!`);
      
    } catch (err) {
      setError(err instanceof Error ? err.message : `Failed to save ${section} settings`);
    } finally {
      setLoading(false);
    }
  }, [settings]);

  // Test email configuration
  const handleTestEmail = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const { smtpHost, smtpPort, smtpUser, fromEmail } = settings.email;
      
      if (!smtpHost || !smtpPort || !fromEmail) {
        throw new Error('Please configure SMTP settings before testing');
      }

      // Simulate test email API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Test email sent successfully!');
      
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send test email');
    } finally {
      setLoading(false);
    }
  }, [settings.email]);

  return {
    // State
    settings,
    activeTab,
    showPassword,
    loading,
    error,
    
    // Actions
    setActiveTab,
    setShowPassword,
    handleInputChange,
    handleSave,
    handleTestEmail,
    
    // Computed values
    tabs
  };
};
