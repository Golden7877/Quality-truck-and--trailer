import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="bg-primary h-[600px] flex items-center">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-2xl text-primary-foreground">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional Truck Service & Repair
            </h1>
            <p className="text-xl mb-8">
              Keeping your fleet on the road with expert maintenance and repair services
            </p>
            <div className="flex gap-4">
              <Button asChild size="lg">
                <Link href="/contact">Schedule Service</Link>
              </Button>
              <Button variant="secondary" size="lg">
                <Link href="/services">Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Service Highlights */}
      <div className="max-w-7xl mx-auto px-4 -mt-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "24/7 Emergency Service",
              description: "Always here when you need us most",
              image: "https://images.unsplash.com/photo-1597423498089-af6fa7d122bf"
            },
            {
              title: "Expert Technicians",
              description: "Certified professionals you can trust",
              image: "https://images.unsplash.com/photo-1599256871679-6a154745680b"
            },
            {
              title: "Full Service Repair",
              description: "Complete maintenance and repair solutions",
              image: "https://images.unsplash.com/photo-1597423498323-e7e7554b83c6"
            }
          ].map((item, index) => (
            <div key={index} className="bg-background rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
