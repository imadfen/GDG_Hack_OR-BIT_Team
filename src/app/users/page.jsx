import mongoCollection from "@/utils/mongoCollection";
import Link from "next/link";

export default async function page() {
    const usersCollection = await mongoCollection("users");
    const users = await usersCollection.find({}).toArray();

    return (
        <div>
            <Link href="/">Home</Link>
            <h2 className="text-5xl font-bold mb-10">Users Page</h2>
            <h5 className="text-2xl my-5">This is a test to the mongodb</h5>
            <ul>
                {users.map((user, i) => (
                        <li key={i} className="border-y px-5">
                            <p className="font-bold">{user.name}</p>
                            <p className="">{user.email}</p>
                            <p className="">{user.age}</p>
                        </li>
                ))}
            </ul>
        </div>
    )
}
