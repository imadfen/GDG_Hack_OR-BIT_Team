import { NextResponse } from "next/server";

export async function GET(req) {
  const id = req.url.slice(req.url.lastIndexOf("/") + 1);

  return NextResponse.json({
    message: `Hello Or-Bit member, you requested for id=${id}`,
  });
}
