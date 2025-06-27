
import { Users, Bell, FileText, Book, Plus, Calendar, BarChart } from "lucide-react";
import DashboardCard from "@/components/DashboardCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Dashboard = () => {
  const recentActivities = [
    { id: 1, type: "homework", message: "Math homework submitted by 25 students", time: "2 hours ago" },
    { id: 2, type: "announcement", message: "New announcement posted for Class 10A", time: "4 hours ago" },
    { id: 3, type: "test", message: "Science test completed by Class 9B", time: "6 hours ago" },
    { id: 4, type: "student", message: "New student registered: John Smith", time: "1 day ago" },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">Welcome back! Here's what's happening today.</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-600">Today</p>
          <p className="text-lg font-semibold text-gray-900">{new Date().toLocaleDateString()}</p>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard
          title="Total Students"
          value="248"
          icon={Users}
          color="blue"
          trend={{ value: "12% from last month", isPositive: true }}
        />
        <DashboardCard
          title="Announcements Posted"
          value="15"
          icon={Bell}
          color="green"
          trend={{ value: "3 this week", isPositive: true }}
        />
        <DashboardCard
          title="Pending Homeworks"
          value="8"
          icon={FileText}
          color="orange"
          trend={{ value: "2 due today", isPositive: false }}
        />
        <DashboardCard
          title="Upcoming Tests"
          value="5"
          icon={Book}
          color="purple"
          trend={{ value: "Next: Tomorrow", isPositive: true }}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Quick Actions */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <Button className="w-full justify-start" variant="outline">
              <Plus size={16} className="mr-2" />
              Add Homework
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Plus size={16} className="mr-2" />
              Create Announcement
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Plus size={16} className="mr-2" />
              Create Test
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Calendar size={16} className="mr-2" />
              View Timetable
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <BarChart size={16} className="mr-2" />
              View Analytics
            </Button>
          </div>
        </Card>

        {/* Recent Activities */}
        <Card className="p-6 lg:col-span-2">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activities</h3>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-900">{activity.message}</p>
                  <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
