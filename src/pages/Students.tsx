
import { useState } from "react";
import { Plus, Edit, Trash2, Search, Mail, Phone, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface Student {
  id: number;
  name: string;
  class: string;
  email: string;
  guardianContact: string;
  attendance: number;
  profilePicture?: string;
}

const Students = () => {
  const [students] = useState<Student[]>([
    {
      id: 1,
      name: "Alice Johnson",
      class: "Class 10A",
      email: "alice.johnson@school.edu",
      guardianContact: "+1 234-567-8901",
      attendance: 95
    },
    {
      id: 2,
      name: "Bob Smith",
      class: "Class 10A",
      email: "bob.smith@school.edu",
      guardianContact: "+1 234-567-8902",
      attendance: 88
    },
    {
      id: 3,
      name: "Carol Davis",
      class: "Class 9B",
      email: "carol.davis@school.edu",
      guardianContact: "+1 234-567-8903",
      attendance: 92
    },
    {
      id: 4,
      name: "David Wilson",
      class: "Class 11A",
      email: "david.wilson@school.edu",
      guardianContact: "+1 234-567-8904",
      attendance: 85
    },
    {
      id: 5,
      name: "Emma Brown",
      class: "Class 9B",
      email: "emma.brown@school.edu",
      guardianContact: "+1 234-567-8905",
      attendance: 97
    },
    {
      id: 6,
      name: "Frank Miller",
      class: "Class 8A",
      email: "frank.miller@school.edu",
      guardianContact: "+1 234-567-8906",
      attendance: 91
    }
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const getAttendanceColor = (attendance: number) => {
    if (attendance >= 95) return "text-green-600 bg-green-100";
    if (attendance >= 85) return "text-yellow-600 bg-yellow-100";
    return "text-red-600 bg-red-100";
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.class.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Student Management</h1>
          <p className="text-gray-600 mt-1">Manage student profiles and track their progress.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <UserPlus size={16} className="mr-2" />
            Bulk Import
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Plus size={16} className="mr-2" />
            Add Student
          </Button>
        </div>
      </div>

      {/* Search */}
      <Card className="p-4">
        <div className="relative">
          <Search size={16} className="absolute left-3 top-3 text-gray-400" />
          <Input
            placeholder="Search students by name, class, or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </Card>

      {/* Students Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredStudents.map((student) => (
          <Card key={student.id} className="p-6 hover:shadow-md transition-shadow duration-200">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <Avatar className="w-12 h-12">
                  <AvatarFallback className="bg-blue-100 text-blue-600 font-semibold">
                    {getInitials(student.name)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold text-gray-900">{student.name}</h3>
                  <p className="text-sm text-gray-600">{student.class}</p>
                </div>
              </div>
              <div className="flex gap-1">
                <Button variant="outline" size="sm">
                  <Edit size={14} />
                </Button>
                <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                  <Trash2 size={14} />
                </Button>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center text-sm text-gray-600">
                <Mail size={14} className="mr-2" />
                <span className="truncate">{student.email}</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Phone size={14} className="mr-2" />
                <span>{student.guardianContact}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Attendance:</span>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${getAttendanceColor(student.attendance)}`}>
                  {student.attendance}%
                </span>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {filteredStudents.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No students found matching your search.</p>
        </div>
      )}
    </div>
  );
};

export default Students;
