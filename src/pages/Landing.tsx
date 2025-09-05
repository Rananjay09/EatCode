import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import { Video, Users, BookOpen, Smartphone, Wifi, Award, GraduationCap } from "lucide-react";
import heroImage from "@/assets/hero-education.jpg";

const Landing = () => {
  const features = [
    {
      icon: Video,
      title: "Low Bandwidth Video Classes",
      description: "Adaptive streaming that works smoothly on 2G/3G networks with audio-first approach"
    },
    {
      icon: Users,
      title: "Multi-College Connectivity",
      description: "Connect multiple rural colleges simultaneously for shared learning experiences"
    },
    {
      icon: BookOpen,
      title: "Rich Content Library",
      description: "Access lectures, notes, PDFs, and videos offline with powerful search capabilities"
    },
    {
      icon: Smartphone,
      title: "Mobile Optimized",
      description: "Designed for smartphones and tablets commonly used in rural areas"
    },
    {
      icon: Wifi,
      title: "Network Adaptive",
      description: "Automatically adjusts quality based on connection speed with fallback options"
    },
    {
      icon: Award,
      title: "Assessment Tools",
      description: "Built-in testing and assessment tools with real-time performance tracking"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Bridging the Digital 
                  <span className="bg-gradient-primary bg-clip-text text-transparent"> Education</span> Gap
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Empowering rural colleges with advanced remote classroom technology designed for low bandwidth environments. Connect, learn, and grow together.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/auth">
                  <Button variant="hero" size="lg" className="w-full sm:w-auto">
                    Start Learning Today
                  </Button>
                </Link>
                <Link to="/demo">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    Watch Demo
                  </Button>
                </Link>
              </div>

              <div className="flex items-center space-x-8 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span>Works on 2G/3G</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span>100+ Colleges</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span>10,000+ Students</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src={heroImage} 
                alt="Students learning remotely in rural classrooms" 
                className="rounded-2xl shadow-elegant w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Built for Rural Education
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our platform is specifically designed to overcome the unique challenges faced by rural educational institutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-border hover:shadow-elegant transition-smooth bg-gradient-card">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-foreground">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Ready to Transform Rural Education?
            </h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of students and teachers already using EduConnect to bridge the digital divide.
            </p>
            <Link to="/auth">
              <Button variant="hero" size="lg">
                Get Started Free
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <GraduationCap className="h-6 w-6 text-primary" />
              <span className="text-lg font-semibold text-foreground">EduConnect</span>
            </div>
            <p className="text-muted-foreground text-center md:text-right">
              © 2024 EduConnect. Empowering rural education through technology.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;