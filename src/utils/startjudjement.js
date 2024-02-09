import connectToDb from "@/lib/mongodb";
import mongoCollection from "./mongoCollection";
import { ObjectId } from "mongodb";
export default async function startjudjement(eventId) {
  try {
    const client = await connectToDb();
    const events = await mongoCollection("events");
    // check if the event exists
    const event = await events.findOne({ _id: ObjectId(eventId) });
    if (!event) {
      throw new Error("Event not found");
    }
    event.judgement = true;
    const result = await events.updateOne(
      { _id: ObjectId(eventId) },
      { $set: event }
    );
    return result;
  } catch (e) {
    console.log(e);
  }
}
