import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    company: "Nixon Auto Parts",
    currency: "EUR",
    timezone: "Europe/Berlin",
  });
}
