import mongoCollection from "./mongoCollection";

export default async function addSubmissionFeedback(team_id, feedback) {
  const submissoinsCollection = await mongoCollection("submissions");
  return await submissoinsCollection.updateOne(
    { team_id },
    { $addToSet: { feedbacks: feedback } }
  );
}
