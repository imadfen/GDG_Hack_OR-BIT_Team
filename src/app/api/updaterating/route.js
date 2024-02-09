import { NextResponse } from "next/server";
import updateRating from "../../../utils/updateRating";

export async function POST(req) {
  const { team_id, criteria, rate } = await req.json();
  try {
    await updateRating(team_id, criteria, rate);
    return NextResponse.json({ message: "Rating Updated" });
  } catch (error) {
    return NextResponse.json({ message: error.message });
  }
}
