import { contact, type ContactForm } from "@shared/schema";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from 'postgres';

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  createContact(data: ContactForm): Promise<ContactForm>;
  getContacts(): Promise<ContactForm[]>;
}

// Create the database connection
const sql = postgres(process.env.DATABASE_URL!);
const db = drizzle(sql);

export class DbStorage implements IStorage {
  async createContact(data: ContactForm): Promise<ContactForm> {
    const [newContact] = await db.insert(contact).values(data).returning();
    return newContact;
  }

  async getContacts(): Promise<ContactForm[]> {
    return await db.select().from(contact);
  }
}

// Export an instance of DbStorage
export const storage = new DbStorage();