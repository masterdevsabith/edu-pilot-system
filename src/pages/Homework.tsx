
import { useState } from "react";
import { Plus, Edit, Trash2, Filter, Search, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

interface HomeworkItem {
  id: number;
  title: string;
  description: string;
  class: string;
  subject: string;
  dueDate: string;
  status: "Active" | "Expired" | "Draft";
  submissions: number;
  totalStudents: number;
}

const Homework = () => {
  const [homeworkList] = useState<HomeworkItem[]>([
    {
      id: 1,
      title: "Mathematics - Algebraic Equations",
      description: "Solve exercises 1-15 from Chapter 5. Show all working steps clearly.",
      class: "Class 10A",
      subject: "Mathematics",
      dueDate: "2024-03-15",
      status: "Active",
      submissions: 18,
      totalStudents: 25
    },
    {
      id: 2,
      title: "English Literature - Character Analysis",
      description: "Write a 500-word essay analyzing the main character in the assigned novel.",
      class: "Class 9B",
      subject: "English",
      dueDate: "2024-03-12",
      status: "Active",
      submissions: 22,
      totalStudents: 28
    },
    {
      id: 3,
      title: "Science - Plant Cell Structure",
      description: "Draw and label the parts of a plant cell. Include detailed descriptions.",
      class: "Class 8A",
      subject: "Science",
      dueDate: "2024-03-08",
      status: "Expired",
      submissions: 24,
      totalStudents: 26
    },
    {
      id: 4,
      title: "History - World War II Timeline",
      description: "Create a detailed timeline of major events during World War II.",
      class: "Class 11A",
      subject: "History",
      dueDate: "2024-03-20",
      status: "Draft",
      submissions: 0,
      totalStudents: 30
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800";
      case "Expired":
        return "bg-red-100 text-red-800";
      case "Draft":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getSubmissionRate = (submissions: number, total: number) => {
    return Math.round((submissions / total) * 100);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Homework</h1>
          <p className="text-gray-600 mt-1">Manage assignments and track student submissions.</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus size={16} className="mr-2" />
          Add New Homework
        </Button>
      </div>

      {/* Filters */}
      <Card className="p-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search size={16} className="absolute left-3 top-3 text-gray-400" />
              <Input
                placeholder="Search homework..."
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
            <Button variant="outline" size="sm">
              <Filter size={16} className="mr-2" />
              Filter by Status
            </Button>
          </div>
        </div>
      </Card>

      {/* Homework List */}
      <div className="space-y-4">
        {homeworkList.map((homework) => (
          <Card key={homework.id} className="p-6 hover:shadow-md transition-shadow duration-200">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">{homework.title}</h3>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(homework.status)}`}>
                    {homework.status}
                  </span>
                </div>
                <p className="text-gray-600 mb-3">{homework.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="font-medium">Class:</span>
                    <span className="ml-1">{homework.class}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="font-medium">Subject:</span>
                    <span className="ml-1">{homework.subject}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar size={14} className="mr-1" />
                    <span>Due: {new Date(homework.dueDate).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock size={14} className="mr-1" />
                    <span>
                      {homework.submissions}/{homework.totalStudents} submitted 
                      ({getSubmissionRate(homework.submissions, homework.totalStudents)}%)
                    </span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${getSubmissionRate(homework.submissions, homework.totalStudents)}%` }}
                  ></div>
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

export default Homework;
