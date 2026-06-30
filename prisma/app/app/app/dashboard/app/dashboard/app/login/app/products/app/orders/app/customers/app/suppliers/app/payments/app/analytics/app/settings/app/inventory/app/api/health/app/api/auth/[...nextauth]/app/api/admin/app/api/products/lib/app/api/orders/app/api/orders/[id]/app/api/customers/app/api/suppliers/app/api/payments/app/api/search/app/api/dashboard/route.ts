import { NextResponse } from "next/server";

export async function GET(){

 return NextResponse.json({

   revenue:125000,

   orders:534,

   customers:241,

   products:1420,

   suppliers:35,

   payments:430,

   alerts:0

 });

}
