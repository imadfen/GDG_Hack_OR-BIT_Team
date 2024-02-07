import connectToDb from "@/lib/mongodb";

export default async function mongoCollection(collectionName) {
  const client = await connectToDb();
  return client.collection(collectionName);
}
