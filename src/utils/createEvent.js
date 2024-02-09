import connectToDb from "@/lib/mongodb";
import mongoCollection from "./mongoCollection";

export default async function createEvent(event) {
  const { name, edition, description, start_date, end_date } = event;
  try {
    const client = await connectToDb();
  } catch (e) {
    console.log(e);
  }
  const events = await mongoCollection("events");
  const eventData = {
    name,
    edition,
    description,
    start_date,
    end_date,
    judges: [],
    teams: [],
    mentors: [],
    judgement: false,
    feedbacks: [],
    Submissions: [],
  };
  try {
    const result = await events.insertOne(eventData);
    return result;
  } catch (e) {
    console.log(e);
  }
}
