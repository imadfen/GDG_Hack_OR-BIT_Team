import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <p className="text-center text-blue-500 font-bold">Hello Or-Bit</p>
      <Link href="/users">Users Page</Link>
    </div>
  );
}