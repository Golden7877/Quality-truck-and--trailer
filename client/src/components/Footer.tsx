import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-8">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Truck Service Co.</h3>
            <p className="text-sm">Professional truck repair and maintenance services you can trust.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>Truck Repair</li>
              <li>Preventive Maintenance</li>
              <li>Emergency Service</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li>1234 Truck Street</li>
              <li>Anytown, ST 12345</li>
              <li>Phone: 1-800-TRUCK-SERVICE</li>
              <li>Email: info@truckserviceco.com</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/10 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Truck Service Co. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
