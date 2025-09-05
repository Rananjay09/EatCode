import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Navigation from "@/components/Navigation";
import { 
  Users, 
  GraduationCap, 
  BookOpen, 
  MessageSquare, 
  TrendingUp, 
  AlertTriangle,
  CheckCircle,
  Clock,
  Send,
  Bell
} from "lucide-react";

const AdminDashboard = () => {
  const overviewStats = [
    { title: "Total Students", value: "1,245", change: "+12%", icon: Users, color: "text-primary" },
    { title: "Active Teachers", value: "42", change: "+3%", icon: GraduationCap, color: "text-secondary" },
    { title: "Live Classes", value: "8", change: "0%", icon: BookOpen, color: "text-accent" },
    { title: "Colleges Connected", value: "15", change: "+2", icon: TrendingUp, color: "text-primary" }
  ];

  const recentActivity = [
    { type: "class", teacher: "Prof. Sarah Johnson", action: "started live class", subject: "Mathematics", time: "10 mins ago", status: "active" },
    { type: "alert", message: "SMS reminder sent to 245 students", time: "15 mins ago", status: "sent" },
    { type: "test", teacher: "Dr. Michael Chen", action: "created new test", subject: "Physics", time: "30 mins ago", status: "created" },
    { type: "attendance", message: "Low attendance alert for Chemistry class", time: "45 mins ago", status: "warning" }
  ];

  const collegePerformance = [
    { name: "Rural College A", students: 156, attendance: 87, tests: 24, status: "excellent" },
    { name: "Rural College B", students: 134, attendance: 82, tests: 18, status: "good" },
    { name: "Rural College C", students: 98, attendance: 76, tests: 15, status: "fair" },
    { name: "Rural College D", students: 89, attendance: 91, tests: 21, status: "excellent" }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "excellent":
        return <Badge className="bg-secondary">Excellent</Badge>;
      case "good":
        return <Badge className="bg-primary">Good</Badge>;
      case "fair":
        return <Badge className="bg-accent">Fair</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "class":
        return <BookOpen className="h-4 w-4 text-primary" />;
      case "alert":
        return <Bell className="h-4 w-4 text-secondary" />;
      case "test":
        return <CheckCircle className="h-4 w-4 text-accent" />;
      case "attendance":
        return <AlertTriangle className="h-4 w-4 text-destructive" />;
      default:
        return <Clock className="h-4 w-4 text-muted-foreground" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation showAuthButtons={false} />
      
      <div className="max-w-7xl mx-auto p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Admin Dashboard</h1>
            <p className="text-muted-foreground">System overview and management</p>
          </div>
          <div className="flex gap-3">
            <Button variant="secondary" className="flex items-center gap-2">
              <Send className="h-4 w-4" />
              Send SMS Alert
            </Button>
            <Button variant="hero" className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              WhatsApp Broadcast
            </Button>
          </div>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {overviewStats.map((stat, index) => (
            <Card key={index} className="bg-gradient-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  {stat.change} from last month
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                Recent Activity
              </CardTitle>
              <CardDescription>
                Latest system activities and alerts
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 border border-border rounded-lg">
                  <div className="flex-shrink-0 mt-1">
                    {getActivityIcon(activity.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    {activity.teacher ? (
                      <div>
                        <p className="text-sm font-medium">
                          {activity.teacher} {activity.action}
                        </p>
                        <p className="text-xs text-muted-foreground">{activity.subject}</p>
                      </div>
                    ) : (
                      <p className="text-sm font-medium">{activity.message}</p>
                    )}
                    <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                  </div>
                  <div className="flex-shrink-0">
                    {activity.status === "active" && <Badge className="bg-secondary">Active</Badge>}
                    {activity.status === "sent" && <Badge className="bg-primary">Sent</Badge>}
                    {activity.status === "created" && <Badge className="bg-accent">Created</Badge>}
                    {activity.status === "warning" && <Badge variant="destructive">Warning</Badge>}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* College Performance */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-secondary" />
                College Performance
              </CardTitle>
              <CardDescription>
                Overview of connected colleges and their metrics
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {collegePerformance.map((college, index) => (
                <div key={index} className="space-y-3 p-3 border border-border rounded-lg">
                  <div className="flex justify-between items-center">
                    <h4 className="font-medium">{college.name}</h4>
                    {getStatusBadge(college.status)}
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Students</p>
                      <p className="font-semibold">{college.students}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Attendance</p>
                      <p className="font-semibold">{college.attendance}%</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Tests</p>
                      <p className="font-semibold">{college.tests}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span>Overall Performance</span>
                      <span>{college.attendance}%</span>
                    </div>
                    <Progress value={college.attendance} className="h-2" />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Communication Center */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-accent" />
              Communication Center
            </CardTitle>
            <CardDescription>
              Send SMS and WhatsApp alerts to students and teachers
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Bell className="h-5 w-5 text-primary" />
                    Class Reminders
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Send automatic reminders 30 minutes before class starts
                  </p>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      Configure
                    </Button>
                    <Button variant="default" size="sm" className="flex-1">
                      Send Now
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-secondary/20">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-secondary" />
                    Attendance Alerts
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Alert students with low attendance rates
                  </p>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      View List
                    </Button>
                    <Button variant="secondary" size="sm" className="flex-1">
                      Send Alert
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-accent/20">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Send className="h-5 w-5 text-accent" />
                    Custom Messages
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Send custom announcements and updates
                  </p>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      Compose
                    </Button>
                    <Button variant="accent" size="sm" className="flex-1">
                      Broadcast
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;