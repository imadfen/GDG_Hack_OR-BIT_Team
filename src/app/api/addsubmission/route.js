import { NextResponse } from "next/server";
import addSubmission from "../../../utils/addSubmission";

export async function POST(req) {
  const { event_id, team_id, readme } = await req.json();
  try {
    await addSubmission(event_id, team_id, readme);
    return NextResponse.json({ message: "Submission Added" });
  } catch (error) {
    return NextResponse.json({ message: error.message });
  }
}
