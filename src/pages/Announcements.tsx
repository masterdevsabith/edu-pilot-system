
import { useState } from "react";
import { Plus, Edit, Trash2, Filter, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

interface Announcement {
  id: number;
  title: string;
  body: string;
  class: string;
  subject: string;
  date: string;
  status: "Published" | "Draft" | "Scheduled";
}

const Announcements = () => {
  const [announcements] = useState<Announcement[]>([
    {
      id: 1,
      title: "Mid-term Examination Schedule",
      body: "The mid-term examinations will commence from March 15th, 2024. Students are advised to prepare accordingly.",
      class: "All Classes",
      subject: "General",
      date: "2024-03-01",
      status: "Published"
    },
    {
      id: 2,
      title: "Science Fair Registration",
      body: "Registration for the annual science fair is now open. Deadline for submission is March 20th.",
      class: "Class 9-12",
      subject: "Science",
      date: "2024-02-28",
      status: "Published"
    },
    {
      id: 3,
      title: "Parent-Teacher Meeting",
      body: "Monthly parent-teacher meeting scheduled for March 25th. Please confirm your attendance.",
      class: "All Classes",
      subject: "General",
      date: "2024-03-05",
      status: "Draft"
    }
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedClass, setSelectedClass] = useState("All");

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Published":
        return "bg-green-100 text-green-800";
      case "Draft":
        return "bg-yellow-100 text-yellow-800";
      case "Scheduled":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Announcements</h1>
          <p className="text-gray-600 mt-1">Manage and create announcements for students.</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus size={16} className="mr-2" />
          New Announcement
        </Button>
      </div>

      {/* Filters */}
      <Card className="p-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search size={16} className="absolute left-3 top-3 text-gray-400" />
              <Input
                placeholder="Search announcements..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Filter size={16} className="mr-2" />
              Filter by Class
            </Button>
            <Button variant="outline" size="sm">
              <Filter size={16} className="mr-2" />
              Filter by Subject
            </Button>
          </div>
        </div>
      </Card>

      {/* Announcements List */}
      <div className="space-y-4">
        {announcements.map((announcement) => (
          <Card key={announcement.id} className="p-6 hover:shadow-md transition-shadow duration-200">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">{announcement.title}</h3>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(announcement.status)}`}>
                    {announcement.status}
                  </span>
                </div>
                <p className="text-gray-600 mb-3">{announcement.body}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>Class: {announcement.class}</span>
                  <span>Subject: {announcement.subject}</span>
                  <span>Date: {new Date(announcement.date).toLocaleDateString()}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 ml-4">
                <Button variant="outline" size="sm">
                  <Edit size={16} />
                </Button>
                <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                  <Trash2 size={16} />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Announcements;
