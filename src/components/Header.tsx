
import { Menu, User, Sun } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto w-full max-w-7xl">
        <div className="relative">
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-secondary/30 to-primary/30 animate-gradient overflow-hidden blur-[100px]" />
          
          {/* Glossy container */}
          <div className="relative mx-4 my-4 rounded-lg border border-white/10 bg-white/5 backdrop-blur-xl shadow-lg">
            <nav className="flex items-center justify-between px-4 py-4">
              {/* Logo/Brand */}
              <div className="flex items-center">
                <h1 className="text-xl font-semibold gradient-text">Brand</h1>
              </div>

              {/* Navigation Links */}
              <div className="hidden md:flex items-center space-x-6">
                <a href="#" className="text-sm text-foreground/80 hover:text-foreground transition-colors">
                  Home
                </a>
                <a href="#" className="text-sm text-foreground/80 hover:text-foreground transition-colors">
                  Features
                </a>
                <a href="#" className="text-sm text-foreground/80 hover:text-foreground transition-colors">
                  About
                </a>
                <a href="#" className="text-sm text-foreground/80 hover:text-foreground transition-colors">
                  Contact
                </a>
              </div>

              {/* Actions */}
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="icon">
                  <Sun className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <User className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-4 w-4" />
                </Button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
