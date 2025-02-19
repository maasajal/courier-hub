import { connectDB } from "@/lib/connectDB";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

interface User {
  name: string;
  email: string;
  password: string;
}

export const POST = async (request: Request): Promise<NextResponse> => {
  try {
    // Parse the incoming request body
    const newUser: User = await request.json();
    console.log(newUser);

    // Connect to the database
    const db = await connectDB();
    const userCollection = db.collection("users");

    // Check if the user already exists
    const exist = await userCollection.findOne({ email: newUser.email });
    if (exist) {
      return NextResponse.json({ message: "User Exists" }, { status: 304 });
    }

    // Hash the password
    const hashedPassword = bcrypt.hashSync(newUser.password, 14);

    // Insert the new user into the database
    await userCollection.insertOne({
      ...newUser,
      password: hashedPassword,
    });

    // Return success response
    return NextResponse.json(
      { message: "User Created Successfully!" },
      { status: 200 }
    );
  } catch (error: unknown) {
    // Handle errors
    console.error("Error in POST handler:", error);
    return NextResponse.json(
      { message: "Something went wrong!", error: (error as Error).message },
      { status: 500 }
    );
  }
};
