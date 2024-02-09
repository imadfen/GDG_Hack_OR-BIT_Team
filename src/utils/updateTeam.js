import connectToDb from "@/lib/mongodb";
import mongoCollection from "./mongoCollection";
import { ObjectId } from "mongodb";

export default async function updateEvent(teamId, teamData) {
  const { eventID, team_name, members, login, password } = teamData;
  try {
    const client = await connectToDb();
    const teams = await mongoCollection("teams");
    // check if the team exists
    const team = await teams.findOne({ _id: ObjectId(teamId) });
    if (!team) {
      throw new Error("team not found");
    }
    team.eventID = eventID || team.eventID;
    team.team_name = team_name || team.team_name;
    team.members = members || team.members;
    team.login = login || team.login;
    team.password = password || team.password;
    const result = await teams.updateOne(
      { _id: ObjectId(teamId) },
      { $set: team }
    );
    //if its succeded in updating making sure its updated in the events collection
    if(result.modifiedCount > 0){
        const events = await mongoCollection("events");
        const event = await events.findOne({ _id: ObjectId(eventID) });
        if (!event) {
            throw new Error("Event not found");
        }
        event.teams.push(team.team_name);
        const result2 = await events.updateOne(
            { _id: ObjectId(eventID) },
            { $set: event }
        );
        return result2;
    }
  } catch (e) {
    console.log(e);
  }
}
