import mongoCollection from "./mongoCollection";

export default async function updateRating(team_id, criteria, rate) {
  const submissionsCollection = await mongoCollection("submissions");
  return await submissionsCollection.updateOne(
    { team_id },
    { $push: { rating: { criteria, rate } } }
  );
}
//skippit checking for now