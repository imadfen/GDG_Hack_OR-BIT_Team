import { NextResponse } from "next/server";
import createUser from "../../../utils/createUser";

export async function POST(req) {
  const { fname, lname, username, email, phone } = await req.json();
  try {
    await createUser(fname, lname, username, email, phone);
    return NextResponse.json({ message: "User Created" });
  } catch (error) {
    return NextResponse.json({ message: error.message });
  }
}
