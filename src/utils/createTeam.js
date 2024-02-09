import connectToDb from "@/lib/mongodb";
import mongoCollection from "./mongoCollection";

export default async function createTeam(team) {
  const { eventID, team_name, members, login, password } = team;
  try {
    const client = await connectToDb();
  } catch (e) {
    console.log(e);
  }
  const teams = await mongoCollection("teams");
  const events = await mongoCollection("events");
  const teamData = {
    eventID,
    team_name,
    members,
    login,
    password,
  };
  try {
    const result = await teams.insertOne(teamData);
    //if its succeded in updating making sure its updated in the events collection
    if (result.insertedCount > 0) {
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
