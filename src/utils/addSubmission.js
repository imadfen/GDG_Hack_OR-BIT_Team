import mongoCollection from "./mongoCollection";
import { ObjectId } from "mongodb";

export default async function addSubmission(event_id, team_id, readme) {
  try {
    const eventCollection = await mongoCollection("events");
    const submissoinsCollection = await mongoCollection("submissions");
    const newSubmission = await submissoinsCollection.updateOne(
      { team_id },
      {
        $set: {
          team_id,
          readme,
          feedbacks: [],
          rating: [],
        }
      },
      {
        upsert: true,
      }
    );
    if (newSubmission.insertedId) {
      await eventCollection.updateOne(
        { _id: new ObjectId(event_id) },
        { $push: { Submissions: newSubmission.insertedId } }
      );
    }
  } catch (error) {
    throw new Error(error.message);
  }
}
