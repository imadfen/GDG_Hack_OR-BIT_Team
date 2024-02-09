import { NextResponse } from "next/server";
import addSubmissionFeedback from "../../../../utils/addSubmissionFeedback";

export async function POST(req) {
  const { team_id, feedback } = await req.json();
  try {
    await addSubmissionFeedback(team_id, feedback);
    return NextResponse.json({ message: "Feedback Added" });
  } catch (error) {
    return NextResponse.json({ message:error.message });
  }
}
