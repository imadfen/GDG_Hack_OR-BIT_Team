import mongoCollection from "./mongoCollection";

export default async function updateRating(team_id, criteria, rate) {
  const submissoinsCollection = await mongoCollection("submissions");
  return await submissoinsCollection.updateOne(
    { team_id, "rating.criteria": criteria },
    { $set: { "rating.$.rate": rate } },
    { upsert: true }
  );
}
