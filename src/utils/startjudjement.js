import connectToDb from "@/lib/mongodb";
import mongoCollection from "./mongoCollection";
import { ObjectId } from "mongodb";

export default async function startjudjement(eventId) {
  try {
    const client = await connectToDb();
    const events = await mongoCollection("events");
    // check if the event exists
    const event = await events.findOne({ _id: new ObjectId(eventId) });
    if (!event) {
      throw new Error("Event not found");
    }
    const result = await events.updateOne(
      { _id: new ObjectId(eventId) },
      { $set: { judgement: true } }
    );
    return result;
  } catch (e) {
    throw new Error(e);
  }
}
