import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  return NextResponse.json(
    await prisma.order.findUnique({
      where: { id },
    })
  );
}

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const body = await req.json();

  return NextResponse.json(
    await prisma.order.update({
      where: { id },
      data: body,
    })
  );
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  await prisma.order.delete({
    where: { id },
  });

  return NextResponse.json({
    success: true,
  });
}
