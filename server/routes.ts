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

  app.post("/api/contact", (req, res) => {
    try {
      const validatedData = contactFormSchema.parse(req.body);
      // In a real app, would store this in the database
      res.json({ success: true, message: "Message sent successfully" });
    } catch (error) {
      res.status(400).json({ error: "Invalid form data" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
