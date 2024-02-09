import generatePassword from "./generatePassword";
import mongoCollection from "./mongoCollection";

export default async function createUser(fname, lname, username, email, phone) {
  try {
    const usersCollection = await mongoCollection("users");
    const password = generatePassword();
    return await usersCollection.insertOne({
      fname,
      lname,
      username,
      email,
      phone,
      password,
    });
  } catch (error) {
    throw new Error(error.message);
  }
}
