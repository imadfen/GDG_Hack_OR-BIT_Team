import { NextResponse } from "next/server";

const ENV_VAR = process.env.ENV_VAR;

export async function GET() {
  console.log(`the example env value is: "${ENV_VAR}"`);

  return NextResponse.json({ message: "Hello Or-Bit" });
}

export async function POST(req) {
  const { name } = await req.json();

  if (!name) {
    return NextResponse.json(
      { message: "invalid request body" },
      { status: 400 }
    );
  }

  return NextResponse.json({ message: `Hello ${name}` });
}
