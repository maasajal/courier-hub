import { MongoClient, ServerApiVersion, Db } from "mongodb";

let client: MongoClient | undefined;
let db: Db | undefined;

export const connectDB = async (): Promise<Db> => {
  if (db) return db; // Return the existing database instance if already connected

  try {
    const uri = process.env.NEXT_PUBLIC_MONGODB_URI;

    if (!uri) {
      throw new Error("MONGODB_URI is not defined in environment variables");
    }

    if (!client) {
      client = new MongoClient(uri, {
        serverApi: {
          version: ServerApiVersion.v1,
          strict: true,
          deprecationErrors: true,
        },
      });
      await client.connect(); // Ensure the client is connected
    }

    db = client.db("courierHub"); // Connect to the specific database
    return db;
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
    throw error; // Rethrow the error to handle it at a higher level
  }
};
