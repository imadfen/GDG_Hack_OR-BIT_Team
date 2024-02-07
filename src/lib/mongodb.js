import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

export default async function connectToDb() {
  if (!uri) {
    throw new Error('No MongoDB URI provided.');
  }

  try {
    const client = await MongoClient.connect(uri, options);
    return client.db('orbit_db');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
}
