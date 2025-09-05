import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Navigation from "@/components/Navigation";
import { 
  BookOpen, 
  Calendar, 
  Download, 
  Play, 
  FileText, 
  Clock, 
  Award,
  Users,
  TrendingUp
} from "lucide-react";

const StudentDashboard = () => {
  const attendanceData = [
    { teacher: "Prof. Sarah Johnson", subject: "Mathematics", attended: 15, total: 18, percentage: 83 },
    { teacher: "Dr. Michael Chen", subject: "Physics", attended: 12, total: 15, percentage: 80 },
    { teacher: "Prof. Emily Davis", subject: "Chemistry", attended: 20, total: 22, percentage: 91 },
    { teacher: "Dr. Robert Wilson", subject: "Biology", attended: 16, total: 20, percentage: 80 }
  ];

  const testsData = [
    { subject: "Mathematics", score: 85, date: "2024-01-15", status: "completed" },
    { subject: "Physics", score: 78, date: "2024-01-12", status: "completed" },
    { subject: "Chemistry", score: 92, date: "2024-01-10", status: "completed" },
    { subject: "Biology", score: null, date: "2024-01-18", status: "pending" }
  ];

  const downloads = [
    { name: "Calculus Notes - Chapter 5", teacher: "Prof. Sarah Johnson", type: "PDF", date: "2024-01-16" },
    { name: "Physics Lab Manual", teacher: "Dr. Michael Chen", type: "PDF", date: "2024-01-15" },
    { name: "Organic Chemistry Lecture", teacher: "Prof. Emily Davis", type: "Video", date: "2024-01-14" },
    { name: "Cell Biology Presentation", teacher: "Dr. Robert Wilson", type: "PPT", date: "2024-01-13" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation showAuthButtons={false} />
      
      <div className="max-w-7xl mx-auto p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Student Dashboard</h1>
            <p className="text-muted-foreground">Welcome back, Alex Kumar</p>
          </div>
          <Button variant="hero" className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            Join Live Class
          </Button>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-gradient-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Classes</CardTitle>
              <BookOpen className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">75</div>
              <p className="text-xs text-muted-foreground">Classes attended</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Tests Completed</CardTitle>
              <Award className="h-4 w-4 text-secondary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">Average score: 85%</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Downloads</CardTitle>
              <Download className="h-4 w-4 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-muted-foreground">Files downloaded</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Attendance Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">84%</div>
              <p className="text-xs text-muted-foreground">This semester</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Attendance by Teacher */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Class Attendance
              </CardTitle>
              <CardDescription>
                Your attendance record with different teachers
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {attendanceData.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <div>
                      <p className="font-medium">{item.subject}</p>
                      <p className="text-muted-foreground">{item.teacher}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">{item.attended}/{item.total}</p>
                      <p className="text-muted-foreground">{item.percentage}%</p>
                    </div>
                  </div>
                  <Progress value={item.percentage} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Recent Tests */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-secondary" />
                Test Results
              </CardTitle>
              <CardDescription>
                Your recent test scores and upcoming tests
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {testsData.map((test, index) => (
                <div key={index} className="flex items-center justify-between p-3 border border-border rounded-lg">
                  <div>
                    <p className="font-medium">{test.subject}</p>
                    <p className="text-sm text-muted-foreground">{test.date}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    {test.status === "completed" ? (
                      <div className="text-right">
                        <p className="font-medium text-primary">{test.score}%</p>
                        <p className="text-xs text-muted-foreground">Completed</p>
                      </div>
                    ) : (
                      <div className="text-right">
                        <p className="font-medium text-accent">Pending</p>
                        <p className="text-xs text-muted-foreground">Take test</p>
                      </div>
                    )}
                    <Button variant="outline" size="sm">
                      {test.status === "completed" ? "View" : "Start"}
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Downloaded Content */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Download className="h-5 w-5 text-accent" />
              Downloaded Content
            </CardTitle>
            <CardDescription>
              Recently downloaded lectures, notes, and materials
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {downloads.map((item, index) => (
                <div key={index} className="flex items-center space-x-4 p-3 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex-shrink-0">
                    {item.type === "Video" ? (
                      <Play className="h-8 w-8 text-primary" />
                    ) : (
                      <FileText className="h-8 w-8 text-primary" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm truncate">{item.name}</p>
                    <p className="text-xs text-muted-foreground">{item.teacher}</p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                      <Clock className="h-3 w-3" />
                      {item.date}
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    Open
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StudentDashboard;