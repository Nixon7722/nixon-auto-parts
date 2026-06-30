import { NextResponse } from "next/server";

let suppliers: any[] = [];

export async function GET() {
  return NextResponse.json(suppliers);
}

export async function POST(req: Request) {
  const body = await req.json();

  suppliers.push(body);

  return NextResponse.json(body);
}
