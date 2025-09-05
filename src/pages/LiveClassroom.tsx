import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import Navigation from "@/components/Navigation";
import { 
  Video, 
  VideoOff, 
  Mic, 
  MicOff, 
  Users, 
  MessageSquare, 
  Share, 
  Settings,
  Wifi,
  WifiOff,
  Signal,
  Volume2,
  VolumeX,
  PhoneOff,
  UserPlus
} from "lucide-react";

const LiveClassroom = () => {
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isAudioOn, setIsAudioOn] = useState(true);
  const [connectionQuality, setConnectionQuality] = useState("good");
  const [audioVolume, setAudioVolume] = useState([80]);

  const connectedColleges = [
    { name: "Rural College A", students: 23, signal: "strong" },
    { name: "Rural College B", students: 18, signal: "medium" },
    { name: "Rural College C", students: 19, signal: "weak" }
  ];

  const chatMessages = [
    { user: "Alex Kumar", college: "Rural College A", message: "Can you repeat the last formula?" },
    { user: "Priya Singh", college: "Rural College B", message: "Thank you for the explanation!" },
    { user: "System", message: "John Doe joined from Rural College C" }
  ];

  const getSignalIcon = (signal: string) => {
    if (signal === "strong") return <Signal className="h-4 w-4 text-secondary" />;
    if (signal === "medium") return <Wifi className="h-4 w-4 text-accent" />;
    return <WifiOff className="h-4 w-4 text-destructive" />;
  };

  const getConnectionBadge = (quality: string) => {
    if (quality === "good") return <Badge className="bg-secondary">Good Connection</Badge>;
    if (quality === "fair") return <Badge className="bg-accent">Fair Connection</Badge>;
    return <Badge variant="destructive">Poor Connection</Badge>;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation showAuthButtons={false} />
      
      <div className="max-w-7xl mx-auto p-4 space-y-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Live Classroom - Mathematics</h1>
            <p className="text-muted-foreground">Connected to 3 colleges • 60 students online</p>
          </div>
          <div className="flex items-center gap-2">
            {getConnectionBadge(connectionQuality)}
            <Badge variant="outline" className="flex items-center gap-1">
              <Wifi className="h-3 w-3" />
              2G/3G Optimized
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 h-[calc(100vh-200px)]">
          {/* Main Video Area */}
          <div className="lg:col-span-3 space-y-4">
            {/* Teacher Video */}
            <Card className="flex-1">
              <CardContent className="p-4 h-full">
                <div className="relative h-full bg-muted rounded-lg flex items-center justify-center min-h-[400px]">
                  {isVideoOn ? (
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <Video className="h-16 w-16 text-primary mx-auto mb-4" />
                        <p className="text-lg font-medium">Prof. Sarah Johnson</p>
                        <p className="text-sm text-muted-foreground">Mathematics Teacher</p>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center">
                      <VideoOff className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                      <p className="text-lg font-medium">Video Off</p>
                      <p className="text-sm text-muted-foreground">Audio-only mode for better connection</p>
                    </div>
                  )}
                  
                  {/* Video Controls Overlay */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-2 bg-card/90 backdrop-blur-sm rounded-lg p-2">
                    <Button
                      variant={isVideoOn ? "default" : "destructive"}
                      size="sm"
                      onClick={() => setIsVideoOn(!isVideoOn)}
                    >
                      {isVideoOn ? <Video className="h-4 w-4" /> : <VideoOff className="h-4 w-4" />}
                    </Button>
                    <Button
                      variant={isAudioOn ? "default" : "destructive"}
                      size="sm"
                      onClick={() => setIsAudioOn(!isAudioOn)}
                    >
                      {isAudioOn ? <Mic className="h-4 w-4" /> : <MicOff className="h-4 w-4" />}
                    </Button>
                    <Button variant="secondary" size="sm">
                      <Share className="h-4 w-4" />
                    </Button>
                    <Button variant="secondary" size="sm">
                      <Settings className="h-4 w-4" />
                    </Button>
                    <Button variant="destructive" size="sm">
                      <PhoneOff className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Connection Status & Controls */}
            <Card>
              <CardContent className="p-4">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div className="space-y-2">
                    <h3 className="font-medium">Connection Quality</h3>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Signal className="h-4 w-4 text-secondary" />
                        <span>Bandwidth: 2.5 Mbps</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-primary" />
                        <span>Latency: 150ms</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      {isAudioOn ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
                      <Slider
                        value={audioVolume}
                        onValueChange={setAudioVolume}
                        max={100}
                        step={1}
                        className="w-20"
                      />
                    </div>
                    <Button variant="outline" size="sm">
                      Auto-Adjust Quality
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            {/* Connected Colleges */}
            <Card>
              <CardHeader>
                <CardTitle className="text-sm flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  Connected Colleges
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {connectedColleges.map((college, index) => (
                  <div key={index} className="flex items-center justify-between p-2 border border-border rounded">
                    <div>
                      <p className="font-medium text-sm">{college.name}</p>
                      <p className="text-xs text-muted-foreground">{college.students} students</p>
                    </div>
                    <div className="flex items-center gap-1">
                      {getSignalIcon(college.signal)}
                    </div>
                  </div>
                ))}
                <Button variant="outline" size="sm" className="w-full">
                  <UserPlus className="h-3 w-3 mr-1" />
                  Add College
                </Button>
              </CardContent>
            </Card>

            {/* Chat */}
            <Card className="flex-1">
              <CardHeader>
                <CardTitle className="text-sm flex items-center gap-2">
                  <MessageSquare className="h-4 w-4" />
                  Live Chat
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 max-h-96 overflow-y-auto">
                {chatMessages.map((msg, index) => (
                  <div key={index} className="space-y-1">
                    <div className="flex items-center gap-2">
                      <p className="text-xs font-medium">{msg.user}</p>
                      {msg.college && (
                        <Badge variant="outline" className="text-xs">{msg.college}</Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{msg.message}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Share className="h-3 w-3 mr-2" />
                  Share Screen
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Users className="h-3 w-3 mr-2" />
                  Take Attendance
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <MessageSquare className="h-3 w-3 mr-2" />
                  Start Poll
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveClassroom;