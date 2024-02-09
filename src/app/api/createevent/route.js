import { NextResponse } from "next/server";
import createEvent from "../../../utils/createEvent";

export async function POST(req) {
  const event = await req.json();
  const result = await createEvent(event);
  return NextResponse.json({ message: "Event Created"});
}
