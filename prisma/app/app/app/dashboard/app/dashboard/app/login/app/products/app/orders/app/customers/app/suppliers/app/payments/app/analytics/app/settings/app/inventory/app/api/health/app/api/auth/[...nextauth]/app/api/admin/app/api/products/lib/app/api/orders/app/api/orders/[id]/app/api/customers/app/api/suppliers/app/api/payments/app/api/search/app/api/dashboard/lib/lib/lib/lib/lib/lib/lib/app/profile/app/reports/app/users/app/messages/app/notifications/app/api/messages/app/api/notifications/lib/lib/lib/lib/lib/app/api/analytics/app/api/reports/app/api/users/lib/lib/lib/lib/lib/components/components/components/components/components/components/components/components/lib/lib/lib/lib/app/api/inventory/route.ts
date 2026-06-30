import { NextResponse } from "next/server";

let inventory: any[] = [];

export async function GET() {
  return NextResponse.json(inventory);
}

export async function POST(req: Request) {
  const body = await req.json();

  inventory.push(body);

  return NextResponse.json(body);
}
