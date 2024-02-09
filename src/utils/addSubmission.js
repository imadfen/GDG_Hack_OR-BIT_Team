import mongoCollection from "./mongoCollection";

export default async function addSubmission(event_id, team_id, readme) {
  const eventCollection = await mongoCollection("events");
  const submissoinsCollection = await mongoCollection("submissions");
  const newSubmission = await submissoinsCollection.insertOne({
    team_id,
    readme,
    feedbacks: [],
    rating: [],
  });

  await eventCollection.updateOne({event_id}, {$addToSet: {submissions: newSubmission.insertedId}})
}
