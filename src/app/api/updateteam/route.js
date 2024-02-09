import { NextResponse } from "next/server";
import updateTeam from "../../../utils/updateTeam";

export async function POST(req) {
  const { teamId, teamData} = await req.json();
  try {
    await updateTeam(teamId, teamData);
    return NextResponse.json({ message: "Team Updated" });
  } catch (error) {
    return NextResponse.json({ message: error.message });
  }
}
