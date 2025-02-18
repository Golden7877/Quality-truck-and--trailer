import ContactForm from "@/components/ContactForm";
import LocationMap from "@/components/LocationMap";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, Clock, MapPin } from "lucide-react";

export default function Contact() {
  const businessHours = [
    { day: "Monday - Friday", hours: "7:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "8:00 AM - 2:00 PM" },
    { day: "Sunday", hours: "Closed" },
    { day: "Emergency Service", hours: "24/7 Available" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-xl text-muted-foreground">
          Get in touch with our expert team for all your truck service needs
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {[
              {
                icon: <Phone className="h-5 w-5" />,
                title: "Phone",
                content: "1-800-TRUCK-SERVICE",
                link: "tel:1-800-TRUCK-SERVICE"
              },
              {
                icon: <Mail className="h-5 w-5" />,
                title: "Email",
                content: "info@truckserviceco.com",
                link: "mailto:info@truckserviceco.com"
              },
              {
                icon: <MapPin className="h-5 w-5" />,
                title: "Address",
                content: "1234 Truck Street, Anytown, ST 12345",
                link: "https://maps.google.com/?q=1234+Truck+Street,Anytown,ST"
              },
              {
                icon: <Clock className="h-5 w-5" />,
                title: "Hours",
                content: "Mon-Fri: 7AM-6PM",
              }
            ].map((item, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-2 text-primary">
                    {item.icon}
                    <h3 className="font-semibold">{item.title}</h3>
                  </div>
                  {item.link ? (
                    <a 
                      href={item.link}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.content}
                    </a>
                  ) : (
                    <p className="text-muted-foreground">{item.content}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mb-8">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Business Hours
              </h3>
              <div className="space-y-2">
                {businessHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between">
                    <span className="text-muted-foreground">{schedule.day}</span>
                    <span className="font-medium">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <LocationMap />
        </div>

        <div>
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="bg-muted rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Emergency Service Available</h2>
        <p className="text-lg mb-4">
          Need immediate assistance? Our emergency service team is available 24/7.
        </p>
        <div className="text-2xl font-bold text-primary">
          <a href="tel:1-800-TRUCK-SERVICE">1-800-TRUCK-SERVICE</a>
        </div>
      </div>
    </div>
  );
}
