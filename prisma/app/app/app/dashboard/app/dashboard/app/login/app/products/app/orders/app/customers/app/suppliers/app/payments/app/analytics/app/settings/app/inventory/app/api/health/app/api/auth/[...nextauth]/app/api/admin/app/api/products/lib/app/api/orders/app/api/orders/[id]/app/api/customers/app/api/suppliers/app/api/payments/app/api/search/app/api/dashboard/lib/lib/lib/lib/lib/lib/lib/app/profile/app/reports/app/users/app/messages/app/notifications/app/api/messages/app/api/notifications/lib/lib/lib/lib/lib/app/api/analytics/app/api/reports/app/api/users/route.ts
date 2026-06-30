import { NextResponse } from "next/server";

let users:any[]=[];

export async function GET(){

 return NextResponse.json(users);

}

export async function POST(req:Request){

 const body=await req.json();

 users.push(body);

 return NextResponse.json(body);

}
