import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import { 
  Video, 
  Users, 
  Upload, 
  QrCode, 
  FileText, 
  Calendar,
  Play,
  BookOpen,
  Award,
  Clock
} from "lucide-react";
import { Link } from "react-router-dom";

const TeacherDashboard = () => {
  const upcomingClasses = [
    { subject: "Mathematics", time: "10:00 AM", colleges: ["Rural College A", "Rural College B"], students: 45 },
    { subject: "Physics", time: "2:00 PM", colleges: ["Rural College C"], students: 22 },
    { subject: "Chemistry", time: "4:00 PM", colleges: ["Rural College A", "Rural College D"], students: 38 }
  ];

  const recentContent = [
    { name: "Calculus Chapter 5 Notes", type: "PDF", uploads: 3, downloads: 124 },
    { name: "Physics Lab Demonstration", type: "Video", uploads: 1, downloads: 89 },
    { name: "Chemistry Assignment", type: "Document", uploads: 2, downloads: 67 },
    { name: "Biology Quiz", type: "Test", uploads: 1, responses: 45 }
  ];

  const attendanceData = [
    { college: "Rural College A", present: 23, total: 25, qrScanned: 20, otpUsed: 3 },
    { college: "Rural College B", present: 18, total: 20, qrScanned: 15, otpUsed: 3 },
    { college: "Rural College C", present: 19, total: 22, qrScanned: 16, otpUsed: 3 }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation showAuthButtons={false} />
      
      <div className="max-w-7xl mx-auto p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Teacher Dashboard</h1>
            <p className="text-muted-foreground">Welcome back, Prof. Sarah Johnson</p>
          </div>
          <div className="flex gap-3">
            <Link to="/live-classroom">
              <Button variant="hero" className="flex items-center gap-2">
                <Video className="h-4 w-4" />
                Start Live Class
              </Button>
            </Link>
            <Button variant="secondary" className="flex items-center gap-2">
              <Upload className="h-4 w-4" />
              Upload Content
            </Button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-gradient-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Students</CardTitle>
              <Users className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">245</div>
              <p className="text-xs text-muted-foreground">Across 4 colleges</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Classes This Week</CardTitle>
              <Calendar className="h-4 w-4 text-secondary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">3 scheduled today</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Content Uploads</CardTitle>
              <Upload className="h-4 w-4 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-muted-foreground">This month</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg Attendance</CardTitle>
              <Award className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">87%</div>
              <p className="text-xs text-muted-foreground">This semester</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Today's Classes */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                Today's Schedule
              </CardTitle>
              <CardDescription>
                Upcoming classes and connected colleges
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingClasses.map((classItem, index) => (
                <div key={index} className="p-4 border border-border rounded-lg space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold">{classItem.subject}</h4>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        {classItem.time}
                      </div>
                    </div>
                    <Badge variant="outline">{classItem.students} students</Badge>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Connected Colleges:</p>
                    <div className="flex flex-wrap gap-1">
                      {classItem.colleges.map((college, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {college}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Link to="/live-classroom">
                      <Button variant="default" size="sm" className="flex items-center gap-1">
                        <Play className="h-3 w-3" />
                        Start Class
                      </Button>
                    </Link>
                    <Button variant="outline" size="sm" className="flex items-center gap-1">
                      <QrCode className="h-3 w-3" />
                      Generate QR
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Attendance Overview */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <QrCode className="h-5 w-5 text-secondary" />
                Attendance Tracking
              </CardTitle>
              <CardDescription>
                Latest attendance from QR codes and OTP
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {attendanceData.map((college, index) => (
                <div key={index} className="p-3 border border-border rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium">{college.college}</h4>
                    <Badge variant={college.present / college.total > 0.8 ? "default" : "secondary"}>
                      {Math.round((college.present / college.total) * 100)}%
                    </Badge>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Present</p>
                      <p className="font-semibold">{college.present}/{college.total}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">QR Scanned</p>
                      <p className="font-semibold">{college.qrScanned}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">OTP Used</p>
                      <p className="font-semibold">{college.otpUsed}</p>
                    </div>
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full">
                View Full Attendance Report
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Content Management */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-accent" />
              Content Management
            </CardTitle>
            <CardDescription>
              Upload and manage your teaching materials
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {recentContent.map((content, index) => (
                <div key={index} className="flex items-center space-x-4 p-3 border border-border rounded-lg">
                  <div className="flex-shrink-0">
                    {content.type === "Video" ? (
                      <Play className="h-8 w-8 text-primary" />
                    ) : content.type === "Test" ? (
                      <Award className="h-8 w-8 text-secondary" />
                    ) : (
                      <FileText className="h-8 w-8 text-accent" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm">{content.name}</p>
                    <p className="text-xs text-muted-foreground">{content.type}</p>
                    <div className="flex gap-4 text-xs text-muted-foreground mt-1">
                      {content.type === "Test" ? (
                        <span>{content.responses} responses</span>
                      ) : (
                        <span>{content.downloads} downloads</span>
                      )}
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    Edit
                  </Button>
                </div>
              ))}
            </div>
            
            <div className="flex gap-3">
              <Button variant="secondary" className="flex items-center gap-2">
                <Upload className="h-4 w-4" />
                Upload Video
              </Button>
              <Button variant="secondary" className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                Upload Document
              </Button>
              <Button variant="secondary" className="flex items-center gap-2">
                <Award className="h-4 w-4" />
                Create Test
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TeacherDashboard;