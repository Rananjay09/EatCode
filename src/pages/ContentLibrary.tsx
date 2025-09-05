import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navigation from "@/components/Navigation";
import { 
  Search, 
  Download, 
  Play, 
  FileText, 
  BookOpen, 
  Filter,
  GraduationCap,
  Calendar,
  Eye,
  Star
} from "lucide-react";

const ContentLibrary = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedTeacher, setSelectedTeacher] = useState("");

  const contentItems = [
    {
      id: 1,
      title: "Advanced Calculus - Integration Techniques",
      teacher: "Prof. Sarah Johnson",
      subject: "Mathematics",
      type: "video",
      duration: "45 mins",
      size: "280 MB",
      downloads: 156,
      rating: 4.8,
      date: "2024-01-15",
      description: "Comprehensive guide to various integration techniques including substitution and integration by parts."
    },
    {
      id: 2,
      title: "Quantum Physics - Wave-Particle Duality",
      teacher: "Dr. Michael Chen",
      subject: "Physics",
      type: "pdf",
      duration: null,
      size: "12 MB",
      downloads: 124,
      rating: 4.9,
      date: "2024-01-14",
      description: "Detailed notes on the fundamental concept of wave-particle duality in quantum mechanics."
    },
    {
      id: 3,
      title: "Organic Chemistry Lab Manual",
      teacher: "Prof. Emily Davis",
      subject: "Chemistry",
      type: "pdf",
      duration: null,
      size: "8.5 MB",
      downloads: 203,
      rating: 4.7,
      date: "2024-01-13",
      description: "Complete laboratory manual with experiments and safety procedures for organic chemistry."
    },
    {
      id: 4,
      title: "Cell Biology - Mitosis and Meiosis",
      teacher: "Dr. Robert Wilson",
      subject: "Biology",
      type: "video",
      duration: "32 mins",
      size: "195 MB",
      downloads: 187,
      rating: 4.6,
      date: "2024-01-12",
      description: "Visual explanation of cell division processes with detailed animations and diagrams."
    },
    {
      id: 5,
      title: "Linear Algebra Notes - Chapter 4",
      teacher: "Prof. Sarah Johnson",
      subject: "Mathematics",
      type: "pdf",
      duration: null,
      size: "6.2 MB",
      downloads: 98,
      rating: 4.5,
      date: "2024-01-11",
      description: "Comprehensive notes on vector spaces, linear transformations, and eigenvalues."
    },
    {
      id: 6,
      title: "Environmental Science Presentation",
      teacher: "Dr. Lisa Anderson",
      subject: "Environmental Science",
      type: "presentation",
      duration: null,
      size: "15 MB",
      downloads: 145,
      rating: 4.8,
      date: "2024-01-10",
      description: "Interactive presentation on climate change impacts and sustainability solutions."
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "video":
        return <Play className="h-5 w-5 text-primary" />;
      case "pdf":
        return <FileText className="h-5 w-5 text-accent" />;
      case "presentation":
        return <BookOpen className="h-5 w-5 text-secondary" />;
      default:
        return <FileText className="h-5 w-5 text-muted-foreground" />;
    }
  };

  const getTypeBadge = (type: string) => {
    switch (type) {
      case "video":
        return <Badge className="bg-primary">Video</Badge>;
      case "pdf":
        return <Badge className="bg-accent">PDF</Badge>;
      case "presentation":
        return <Badge className="bg-secondary">PPT</Badge>;
      default:
        return <Badge variant="outline">{type}</Badge>;
    }
  };

  const filteredContent = contentItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.teacher.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.subject.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSubject = !selectedSubject || selectedSubject === "all" || item.subject === selectedSubject;
    const matchesTeacher = !selectedTeacher || selectedTeacher === "all" || item.teacher === selectedTeacher;
    
    return matchesSearch && matchesSubject && matchesTeacher;
  });

  const subjects = Array.from(new Set(contentItems.map(item => item.subject)));
  const teachers = Array.from(new Set(contentItems.map(item => item.teacher)));

  return (
    <div className="min-h-screen bg-background">
      <Navigation showAuthButtons={false} />
      
      <div className="max-w-7xl mx-auto p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Content Library</h1>
            <p className="text-muted-foreground">Access lectures, notes, and study materials</p>
          </div>
          <Button variant="hero" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            Download All Selected
          </Button>
        </div>

        {/* Search and Filters */}
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by title, teacher, or subject..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select value={selectedSubject} onValueChange={setSelectedSubject}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Filter by Subject" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Subjects</SelectItem>
                  {subjects.map(subject => (
                    <SelectItem key={subject} value={subject}>{subject}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedTeacher} onValueChange={setSelectedTeacher}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Filter by Teacher" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Teachers</SelectItem>
                  {teachers.map(teacher => (
                    <SelectItem key={teacher} value={teacher}>{teacher}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                More Filters
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredContent.map((item) => (
            <Card key={item.id} className="hover:shadow-elegant transition-smooth bg-gradient-card">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      {getTypeIcon(item.type)}
                      {getTypeBadge(item.type)}
                    </div>
                    <CardTitle className="text-lg leading-tight">{item.title}</CardTitle>
                  </div>
                </div>
                <CardDescription className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <GraduationCap className="h-4 w-4" />
                    <span>{item.teacher}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <BookOpen className="h-4 w-4" />
                    <span>{item.subject}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4" />
                    <span>{item.date}</span>
                  </div>
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">{item.description}</p>
                
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Download className="h-3 w-3" />
                      <span>{item.downloads}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 fill-current text-accent" />
                      <span>{item.rating}</span>
                    </div>
                  </div>
                  <div className="text-muted-foreground">
                    {item.duration || item.size}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button variant="default" size="sm" className="flex-1">
                    <Download className="h-3 w-3 mr-1" />
                    Download
                  </Button>
                  <Button variant="outline" size="sm">
                    <Eye className="h-3 w-3" />
                  </Button>
                  {item.type === "video" && (
                    <Button variant="secondary" size="sm">
                      <Play className="h-3 w-3" />
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Results Summary */}
        <div className="text-center text-muted-foreground">
          Showing {filteredContent.length} of {contentItems.length} items
        </div>
      </div>
    </div>
  );
};

export default ContentLibrary;