import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    auth: "Authentication module placeholder"
  });
}

export async function POST() {
  return NextResponse.json({
    success: true
  });
}
