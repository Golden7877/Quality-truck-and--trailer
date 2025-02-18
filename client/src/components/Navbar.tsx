import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" }
  ];

  return (
    <nav className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <a className="text-2xl font-bold text-primary">Truck Service Co.</a>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => (
              <Link key={item.href} href={item.href}>
                <a className={`px-3 py-2 text-base font-medium transition-colors ${
                  location === item.href 
                    ? 'text-primary font-semibold' 
                    : 'text-gray-600 hover:text-primary'
                }`}>
                  {item.label}
                </a>
              </Link>
            ))}
            <Button className="gap-2">
              <Phone className="h-4 w-4" />
              <a href="tel:1-800-TRUCK-SERVICE">1-800-TRUCK-SERVICE</a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
            {navItems.map(item => (
              <Link key={item.href} href={item.href}>
                <a className={`block px-3 py-2 text-base font-medium ${
                  location === item.href 
                    ? 'text-primary font-semibold' 
                    : 'text-gray-600 hover:text-primary'
                }`}>
                  {item.label}
                </a>
              </Link>
            ))}
            <Button className="w-full gap-2 mt-4">
              <Phone className="h-4 w-4" />
              <a href="tel:1-800-TRUCK-SERVICE">1-800-TRUCK-SERVICE</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}