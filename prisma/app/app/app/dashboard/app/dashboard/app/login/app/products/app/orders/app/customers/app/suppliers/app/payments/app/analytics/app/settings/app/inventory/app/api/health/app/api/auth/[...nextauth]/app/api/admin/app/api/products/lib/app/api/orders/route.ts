import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  return NextResponse.json(
    await prisma.order.findMany({
      orderBy: {
        createdAt: "desc",
      },
    })
  );
}

export async function POST(req: Request) {
  const body = await req.json();

  const order = await prisma.order.create({
    data: body,
  });

  return NextResponse.json(order);
}
