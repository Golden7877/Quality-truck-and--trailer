import { useQuery } from "@tanstack/react-query";
import type { Service } from "@shared/schema";
import ServiceCard from "@/components/ServiceCard";
import { Card } from "@/components/ui/card";

export default function Services() {
  const { data: services, isLoading } = useQuery<Service[]>({
    queryKey: ["/api/services"]
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <p className="text-xl text-muted-foreground">
          Comprehensive truck repair and maintenance services
        </p>
      </div>

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

      <div className="mt-20">
        <h2 className="text-3xl font-bold mb-8">Additional Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Preventive Maintenance",
              items: ["Oil Changes", "Brake Service", "Tire Rotation", "Fluid Checks"]
            },
            {
              title: "Repair Services",
              items: ["Engine Repair", "Transmission Service", "Electrical Systems", "Suspension"]
            },
            {
              title: "Diagnostics",
              items: ["Computer Diagnostics", "Engine Analysis", "Electrical Testing", "Performance Testing"]
            },
            {
              title: "Fleet Services",
              items: ["Fleet Maintenance", "DOT Inspections", "Preventive Programs", "Fleet Management"]
            }
          ].map((service, index) => (
            <div key={index} className="p-6 bg-muted rounded-lg">
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <ul className="space-y-2">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
