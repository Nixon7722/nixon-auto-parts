import { NextResponse } from "next/server";

let payments:any[]=[];

export async function GET(){
  return NextResponse.json(payments);
}

export async function POST(req:Request){
  const body=await req.json();
  payments.push(body);
  return NextResponse.json(body);
}
