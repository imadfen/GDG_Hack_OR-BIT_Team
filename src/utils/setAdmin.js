import mongoCollection from "./mongoCollection";

export default async function setAdmin(user_id, state) {
  const adminsCollection = await mongoCollection("admins");
  if (state === true) {
    return await adminsCollection.insertOne({ user_id });
  } else {
    return await adminsCollection.deleteOne({ user_id });
  }
}
