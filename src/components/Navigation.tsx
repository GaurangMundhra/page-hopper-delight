import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Scale, Menu, X, ChevronDown } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from '@/lib/utils';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-legal-dark to-[#353535] text-white py-4 px-6 md:px-12 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between flex-wrap">
        <div className="flex items-center flex-shrink-0 mr-6">
          <Link to="/" className="flex items-center group">
            <Scale className="h-7 w-7 text-legal-gold mr-2 group-hover:scale-110 transition-transform" />
            <span className="font-semibold text-xl tracking-tight">Legal AI</span>
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <div className="block lg:hidden">
          <button 
            onClick={toggleMenu}
            className="flex items-center px-3 py-2 rounded text-white hover:text-legal-gold hover:bg-black/20 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:w-auto">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/" className="block px-4 py-2 text-white hover:text-legal-gold transition-colors">
                  Home
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white hover:bg-black/20 hover:text-legal-gold">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {[
                      { title: "Criminal Law", description: "Legal representation for criminal charges", url: "/services/criminal-law" },
                      { title: "Family Law", description: "Assistance with family legal matters", url: "/services/family-law" },
                      { title: "Corporate Law", description: "Legal services for businesses", url: "/services/corporate-law" },
                      { title: "Commercial Law", description: "Assistance for commercial transactions", url: "/services/commercial-law" }
                    ].map((service) => (
                      <li key={service.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={service.url}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{service.title}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {service.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/news" className="block px-4 py-2 text-white hover:text-legal-gold transition-colors">
                  News
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/categories" className="block px-4 py-2 text-white hover:text-legal-gold transition-colors">
                  Legal Categories
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/about" className="block px-4 py-2 text-white hover:text-legal-gold transition-colors">
                  About Us
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/contact" className="block px-4 py-2 text-white hover:text-legal-gold transition-colors">
                  Contact
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div className="ml-4">
            <Button asChild variant="outline" className="border border-legal-gold text-legal-gold hover:bg-legal-gold hover:text-legal-dark transition-colors">
              <Link to="/login">Login</Link>
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="w-full block lg:hidden mt-4 border-t border-gray-700 pt-4">
            <div className="flex flex-col">
              <Link to="/" className="block py-2 hover:text-legal-gold transition-colors" onClick={toggleMenu}>
                Home
              </Link>
              <Link to="/services" className="block py-2 hover:text-legal-gold transition-colors" onClick={toggleMenu}>
                Services
              </Link>
              <Link to="/news" className="block py-2 hover:text-legal-gold transition-colors" onClick={toggleMenu}>
                News
              </Link>
              <Link to="/categories" className="block py-2 hover:text-legal-gold transition-colors" onClick={toggleMenu}>
                Legal Categories
              </Link>
              <Link to="/about" className="block py-2 hover:text-legal-gold transition-colors" onClick={toggleMenu}>
                About Us
              </Link>
              <Link to="/contact" className="block py-2 hover:text-legal-gold transition-colors" onClick={toggleMenu}>
                Contact
              </Link>
              <Link to="/login" className="mt-4">
                <Button variant="outline" className="w-full border border-legal-gold text-legal-gold hover:bg-legal-gold hover:text-legal-dark">
                  Login
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
