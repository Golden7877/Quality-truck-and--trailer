import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
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
    <nav className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <a className="text-2xl font-bold">Truck Service Co.</a>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map(item => (
              <Link key={item.href} href={item.href}>
                <a className={`px-3 py-2 rounded-md text-sm font-medium ${
                  location === item.href ? 'bg-primary-foreground/10' : 'hover:bg-primary-foreground/5'
                }`}>
                  {item.label}
                </a>
              </Link>
            ))}
            <Button variant="secondary">
              <a href="tel:1-800-TRUCK-SERVICE">Call Now</a>
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
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map(item => (
              <Link key={item.href} href={item.href}>
                <a className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location === item.href ? 'bg-primary-foreground/10' : 'hover:bg-primary-foreground/5'
                }`}>
                  {item.label}
                </a>
              </Link>
            ))}
            <Button variant="secondary" className="w-full mt-4">
              <a href="tel:1-800-TRUCK-SERVICE">Call Now</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
