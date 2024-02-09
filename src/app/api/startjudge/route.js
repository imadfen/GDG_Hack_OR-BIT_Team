import { NextResponse } from "next/server";
import startjudjement from "../../../utils/startjudjement";

export async function POST(req) {
  const { eventId } = await req.json();
  try {
    await startjudjement(eventId);
    return NextResponse.json({ message: "Judjement Started" });
  } catch (error) {
    return NextResponse.json({ message: error.message});
  }
}
