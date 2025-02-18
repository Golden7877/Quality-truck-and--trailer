import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  const servicesData = [
    {
      id: 1,
      title: "Truck Repair",
      description: "Professional truck repair services for all makes and models.",
      imageUrl: "https://images.unsplash.com/photo-1597423498323-e7e7554b83c6",
      icon: "wrench"
    },
    {
      id: 2,
      title: "Preventive Maintenance",
      description: "Regular maintenance to keep your fleet running smoothly.",
      imageUrl: "https://images.unsplash.com/photo-1599256871679-6a154745680b",
      icon: "settings"
    },
    {
      id: 3,
      title: "Emergency Service",
      description: "24/7 emergency roadside assistance when you need it most.",
      imageUrl: "https://images.unsplash.com/photo-1597423498089-af6fa7d122bf",
      icon: "alert-circle"
    }
  ];

  app.get("/api/services", (_req, res) => {
    res.json(servicesData);
  });

  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = contactFormSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      res.json({ 
        success: true, 
        message: "Message sent successfully",
        contact 
      });
    } catch (error) {
      console.error('Contact form submission error:', error);
      res.status(400).json({ 
        success: false,
        error: "Failed to submit contact form. Please try again." 
      });
    }
  });

  // Admin route to get all contacts
  app.get("/api/contacts", async (_req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json(contacts);
    } catch (error) {
      console.error('Error fetching contacts:', error);
      res.status(500).json({ 
        success: false,
        error: "Failed to fetch contacts" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}