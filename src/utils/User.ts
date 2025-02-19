import { User as NextAuthUser } from "next-auth";

export interface User extends NextAuthUser {
  _id?: string; // MongoDB ObjectID as string
  email: string;
  password?: string;
  name?: string;
  image?: string;
}
