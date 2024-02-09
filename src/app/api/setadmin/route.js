import { NextResponse } from "next/server";
import setAdmin from "../../../utils/setAdmin";

export async function POST(req) {
  const { user_id, state } = await req.json();
  try {
    await setAdmin(user_id, state);
    return NextResponse.json({ message: "Admin Status Changed" });
  } catch (error) {
    return NextResponse.json({ message: "somthing went wrong" });
  }
}
