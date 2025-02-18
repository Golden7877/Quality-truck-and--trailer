import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import { useQuery } from "@tanstack/react-query";
import type { Service } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Wrench, Settings, Battery, Gauge, Check } from "lucide-react";

export default function Home() {
  const { data: services, isLoading } = useQuery<Service[]>({
    queryKey: ["/api/services"]
  });

  const dieselServices = [
    {
      title: "Engine Diagnostics & Repair",
      description: "Advanced computer diagnostics and expert engine repair services",
      icon: <Gauge className="w-8 h-8" />,
      features: ["ECM Diagnostics", "Fuel System Repair", "Engine Overhaul"]
    },
    {
      title: "Preventive Maintenance",
      description: "Comprehensive maintenance to prevent costly breakdowns",
      icon: <Wrench className="w-8 h-8" />,
      features: ["Oil Analysis", "Filter Changes", "System Inspections"]
    },
    {
      title: "Electrical Systems",
      description: "Complete electrical diagnostics and repair solutions",
      icon: <Battery className="w-8 h-8" />,
      features: ["Starting Systems", "Charging Systems", "Wiring Repairs"]
    },
    {
      title: "Performance Tuning",
      description: "Optimize your engine's performance and efficiency",
      icon: <Settings className="w-8 h-8" />,
      features: ["Power Enhancement", "Fuel Efficiency", "Emissions Control"]
    }
  ];

  return (
    <div>
      <Hero />

      {/* Why Choose Us */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { title: "Expert Technicians", description: "ASE certified professionals" },
              { title: "24/7 Service", description: "Always here when you need us" },
              { title: "Fair Pricing", description: "Transparent, competitive rates" },
              { title: "Quality Parts", description: "OEM and quality aftermarket" }
            ].map((item, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="w-full h-[400px] animate-pulse" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {services?.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          )}
          <div className="text-center mt-8">
            <Button asChild size="lg">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Additional Diesel Mechanic Services */}
      <section className="py-20 bg-[url('https://images.unsplash.com/photo-1597423498323-e7e7554b83c6')] bg-fixed bg-cover relative">
        <div className="absolute inset-0 bg-black/75" />
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Diesel Mechanic Services</h2>
            <p className="text-xl text-gray-300">Comprehensive solutions for all your diesel engine needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {dieselServices.map((service, index) => (
              <div key={index} className="bg-white/95 backdrop-blur-sm rounded-lg p-6 transform hover:scale-105 transition-transform duration-300">
                <div className="text-primary mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <Check className="w-4 h-4 text-primary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="secondary" asChild className="font-semibold">
              <Link href="/contact">Schedule Diesel Service</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Emergency Service?</h2>
          <p className="text-xl mb-8">Our team is available 24/7 for emergency repairs</p>
          <Button size="lg" variant="secondary" asChild>
            <a href="tel:1-800-TRUCK-SERVICE">Call Now: 1-800-TRUCK-SERVICE</a>
          </Button>
        </div>
      </section>
    </div>
  );
}