import connectToDb from "@/lib/mongodb";
import mongoCollection from "./mongoCollection";
import { ObjectId } from "mongodb";

export default async function updateEvent(eventId, eventData) {
  const { name, edition, description, start_date, end_date } = eventData;
  try {
    const client = await connectToDb();
    const events = await mongoCollection("events");
    // check if the event exists
    const event = await events.findOne({ _id: new ObjectId(eventId) });
    if (!event) {
      throw new Error("Event not found");
    }
    event.name = name || event.name;
    event.edition = edition || event.edition;
    event.description = description || event.description;
    event.start_date = start_date || event.start_date;
    event.end_date = end_date || event.end_date;
    const result = await events.updateOne(
      { _id: new ObjectId(eventId) },
      { $set: event }
    );
    return result;
  } catch (e) {
    console.log(e);
  }
}
