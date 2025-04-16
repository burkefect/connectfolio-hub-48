
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Zap, LogOut, User, Home } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { toast } from 'sonner';
import { useTheme } from '@/contexts/ThemeContext';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, signOut } = useAuth();
  const { isDarkMode, toggleTheme } = useTheme();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSignOut = async () => {
    await signOut();
    toast.success("Logged out successfully");
    navigate('/');
  };

  const handleThemeToggle = () => {
    toggleTheme();
    toast.success(`${isDarkMode ? 'Light' : 'Dark'} mode activated!`);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all-300 ${
      scrolled ? 'bg-white/80 dark:bg-background/80 backdrop-blur-xl shadow-sm' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center">
            <Link to="/" className="font-bold text-xl tracking-tight flex items-center gap-1.5">
              <div className="bg-primary rounded-md p-1.5 text-primary-foreground flex items-center justify-center cursor-pointer" onClick={handleThemeToggle}>
                <Zap 
                  size={18} 
                  className="stroke-[2.5px]" 
                />
              </div>
              <span>Quikfolio</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground/80 hover:text-foreground transition-all-300 flex items-center gap-1">
              <Home size={16} />
              <span>Home</span>
            </Link>
            <Link to="/about" className="text-foreground/80 hover:text-foreground transition-all-300">
              About
            </Link>
            <a href="#features" className="text-foreground/80 hover:text-foreground transition-all-300">
              Features
            </a>
            <a href="#pricing" className="text-foreground/80 hover:text-foreground transition-all-300">
              Pricing
            </a>
            
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="gap-2">
                    <User size={16} />
                    <span className="max-w-28 truncate">{user.email}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/resume-builder" className="cursor-pointer">My Resumes</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleSignOut} className="cursor-pointer text-red-500">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Button variant="ghost" className="text-foreground/80 hover:text-foreground" onClick={() => navigate('/auth')}>
                  Log in
                </Button>
                <Button onClick={() => navigate('/auth?tab=signup')}>Get Started</Button>
              </>
            )}
          </nav>
          
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-foreground/80 focus:outline-none"
            >
              {mobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      <div 
        className={`md:hidden transition-all-300 overflow-hidden ${
          mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/90 dark:bg-background/90 backdrop-blur-xl">
          <Link 
            to="/" 
            className="flex items-center gap-1 px-3 py-2 rounded-md text-base font-medium text-foreground/80 hover:text-foreground"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Home size={16} />
            <span>Home</span>
          </Link>
          <Link 
            to="/about" 
            className="block px-3 py-2 rounded-md text-base font-medium text-foreground/80 hover:text-foreground"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </Link>
          <a 
            href="#features" 
            className="block px-3 py-2 rounded-md text-base font-medium text-foreground/80 hover:text-foreground"
            onClick={() => setMobileMenuOpen(false)}
          >
            Features
          </a>
          <a 
            href="#pricing" 
            className="block px-3 py-2 rounded-md text-base font-medium text-foreground/80 hover:text-foreground"
            onClick={() => setMobileMenuOpen(false)}
          >
            Pricing
          </a>
          
          {user ? (
            <>
              <Link
                to="/resume-builder"
                className="block px-3 py-2 rounded-md text-base font-medium text-foreground/80 hover:text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                My Resumes
              </Link>
              <button 
                onClick={() => {
                  handleSignOut();
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-red-500 hover:text-red-600"
              >
                Log out
              </button>
            </>
          ) : (
            <>
              <Link
                to="/auth"
                className="block px-3 py-2 rounded-md text-base font-medium text-foreground/80 hover:text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                Log in
              </Link>
              <div className="pt-2">
                <Button 
                  className="w-full"
                  onClick={() => {
                    navigate('/auth?tab=signup');
                    setMobileMenuOpen(false);
                  }}
                >
                  Get Started
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
