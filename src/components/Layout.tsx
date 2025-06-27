
import { useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import {
  Calendar,
  Users,
  FileText,
  Book,
  Settings,
  Bell,
  BarChart,
  Dashboard,
  LogOut,
  Menu,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();

  const navigationItems = [
    { name: "Dashboard", href: "/", icon: Dashboard },
    { name: "Announcements", href: "/announcements", icon: Bell },
    { name: "Homework", href: "/homework", icon: FileText },
    { name: "Tests & Exams", href: "/tests", icon: Book },
    { name: "Student Management", href: "/students", icon: Users },
    { name: "Timetable", href: "/timetable", icon: Calendar },
    { name: "Analytics", href: "/analytics", icon: BarChart },
    { name: "Notifications", href: "/notifications", icon: Bell },
    { name: "Settings", href: "/settings", icon: Settings },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(href);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? "w-64" : "w-16"} bg-white shadow-lg transition-all duration-300 flex flex-col`}>
        {/* Header */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            {sidebarOpen && (
              <h1 className="text-xl font-bold text-blue-800">EduPilot</h1>
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="ml-auto"
            >
              {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`flex items-center px-3 py-2 rounded-lg transition-colors duration-200 ${
                isActive(item.href)
                  ? "bg-blue-100 text-blue-800 font-medium"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              }`}
            >
              <item.icon size={20} className={sidebarOpen ? "mr-3" : "mx-auto"} />
              {sidebarOpen && <span>{item.name}</span>}
            </Link>
          ))}
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-gray-200">
          <button className="flex items-center w-full px-3 py-2 text-gray-600 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors duration-200">
            <LogOut size={20} className={sidebarOpen ? "mr-3" : "mx-auto"} />
            {sidebarOpen && <span>Logout</span>}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
