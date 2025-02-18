import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">About Truck Service Co.</h1>
        <p className="text-xl text-muted-foreground">
          Your trusted partner in truck repair and maintenance
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <p className="text-lg mb-4">
            Since 1990, Truck Service Co. has been providing professional truck repair
            and maintenance services to fleet operators and independent drivers alike.
          </p>
          <p className="text-lg mb-4">
            Our commitment to quality service, fair pricing, and customer satisfaction
            has made us a leader in the truck service industry.
          </p>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1599256871679-6a154745680b"
            alt="Truck Service Workshop"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        {[
          {
            title: "Experience",
            value: "30+",
            description: "Years in Business"
          },
          {
            title: "Satisfied Customers",
            value: "10k+",
            description: "And Counting"
          },
          {
            title: "Expert Technicians",
            value: "25+",
            description: "ASE Certified"
          }
        ].map((stat, index) => (
          <Card key={index}>
            <CardContent className="pt-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <h3 className="text-xl font-semibold mb-2">{stat.title}</h3>
              <p className="text-muted-foreground">{stat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-muted rounded-lg p-8 mb-20">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Quality",
              description: "We never compromise on the quality of our service"
            },
            {
              title: "Integrity",
              description: "Honest service and transparent pricing"
            },
            {
              title: "Reliability",
              description: "Available 24/7 for when you need us most"
            },
            {
              title: "Excellence",
              description: "Continuous improvement in everything we do"
            }
          ].map((value, index) => (
            <div key={index} className="text-center">
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold mb-6 text-center">Our Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            "ASE Certified Technicians",
            "DOT Inspection Station",
            "EPA Certified"
          ].map((cert, index) => (
            <Card key={index}>
              <CardContent className="pt-6 text-center">
                <h3 className="text-xl font-semibold">{cert}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
