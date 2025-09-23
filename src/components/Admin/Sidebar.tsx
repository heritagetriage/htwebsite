import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Calendar,
  Users,
  BookOpen,
  MessageSquare,
  Settings,
  LogOut,
  Globe,
} from "lucide-react";
import { signOut } from "../../services/api";

const navigation = [
  { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { name: "Events", href: "/admin/events", icon: Calendar },
  { name: "Sessions", href: "/admin/sessions", icon: BookOpen },
  // { name: 'Delegates', href: '/admin/delegates', icon: UserCircle },
  { name: "Bookings", href: "/admin/bookings", icon: Users },
  { name: "Contacts", href: "/admin/contacts", icon: MessageSquare },
  { name: "Settings", href: "/admin/settings", icon: Settings },
];

const Sidebar: React.FC = () => {
  const location = useLocation();

  const handleSignOut = async () => {
    try {
      await signOut();
      window.location.href = "/admin/login";
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div className="bg-gray-900 text-white w-64 min-h-screen flex flex-col">
      <div className="p-6">
        <div className="flex items-center space-x-2">
          <Globe className="h-8 w-8 text-blue-400" />
          <span className="text-xl font-bold">Heritage Triage</span>
        </div>
        <p className="text-gray-400 text-sm mt-2">Admin Dashboard</p>
      </div>

      <nav className="flex-1 px-4 space-y-2">
        {navigation.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <Link
              key={item.name}
              to={item.href}
              className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? "bg-blue-700 text-white"
                  : "text-gray-300 hover:bg-gray-800 hover:text-white"
              }`}
            >
              <item.icon className="h-5 w-5 mr-3" />
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-gray-800">
        <button
          onClick={handleSignOut}
          className="flex items-center w-full px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-white rounded-lg transition-colors"
        >
          <LogOut className="h-5 w-5 mr-3" />
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
