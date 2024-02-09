import { NextResponse } from "next/server";
import createTeam from "../../../utils/createTeam";

export async function POST(req) {
  const { eventID, team_name, members, login, password } = await req.json();
  try {
    await createTeam({ eventID, team_name, members, login, password });
    return NextResponse.json({ message: "Team Created" });
  } catch (error) {
    return NextResponse.json({ message: "Error Adding team" });
  }
}
