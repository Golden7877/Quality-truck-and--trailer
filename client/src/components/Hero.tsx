import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Phone, ArrowRight, Clock, Users, Wrench } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative bg-[url('https://images.unsplash.com/photo-1599256871679-6a154745680b')] bg-cover bg-center bg-fixed">
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60" />
      <div className="relative max-w-7xl mx-auto px-4 py-32 sm:py-48 lg:py-56">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in">
            Professional Truck & Trailer Tire Solutions
          </h1>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Keeping America's trucks and trailers rolling with expert tire services, maintenance, and 24/7 emergency assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="gap-2 animate-pulse">
              <Phone className="h-5 w-5" />
              <a href="tel:1-800-TRUCK-SERVICE">Call Now</a>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/services" className="gap-2">
                Our Services <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Service Highlights */}
      <div className="relative max-w-7xl mx-auto px-4 -mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "24/7 Emergency Service",
              description: "Roadside assistance whenever you need it",
              icon: <Clock className="h-10 w-10" />
            },
            {
              title: "Expert Technicians",
              description: "ASE certified professionals you can trust",
              icon: <Users className="h-10 w-10" />
            },
            {
              title: "Full Service Repair",
              description: "Complete maintenance and repair solutions",
              icon: <Wrench className="h-10 w-10" />
            }
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-xl p-8 transform hover:-translate-y-1 transition-transform duration-300">
              <div className="text-primary mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}