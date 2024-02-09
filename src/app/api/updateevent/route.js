import { NextResponse } from "next/server";
import updateEvent from "../../../utils/updateEvent";

export async function POST(req) {
  const { eventId, eventData } = await req.json();
  try {
    await updateEvent(eventId, eventData);
    return NextResponse.json({ message: "Event Updated" });
  } catch (error) {
    return NextResponse.json({ message: "Error in updating event" });
  }
}
