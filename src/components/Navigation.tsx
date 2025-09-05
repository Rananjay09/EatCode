import { Button } from "@/components/ui/button";
import { GraduationCap, Menu } from "lucide-react";
import { Link } from "react-router-dom";

interface NavigationProps {
  showAuthButtons?: boolean;
}

const Navigation = ({ showAuthButtons = true }: NavigationProps) => {
  return (
    <nav className="bg-card border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-card/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors">
            <GraduationCap className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">EduConnect</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link group">
              <span className="nav-text">Home</span>
            </Link>
            <Link to="/live-classroom" className="nav-link group">
              <span className="nav-text">Live Classroom</span>
            </Link>
            <Link to="/content-library" className="nav-link group">
              <span className="nav-text">Content Library</span>
            </Link>
            <Link to="/about" className="nav-link group">
              <span className="nav-text">About</span>
            </Link>
            <Link to="/contact" className="nav-link group">
              <span className="nav-text">Contact</span>
            </Link>
          </div>

          {showAuthButtons && (
            <div className="flex items-center space-x-4">
              <Link to="/auth">
                <Button variant="outline">Sign In</Button>
              </Link>
              <Link to="/auth">
                <Button variant="hero">Get Started</Button>
              </Link>
            </div>
          )}

          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;