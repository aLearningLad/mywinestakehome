import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const result = await sql`SELECT * FROM Wines;`;
    return NextResponse.json({ wines: result }, { status: 200 });
  } catch (error: any) {
    console.log(`Error occured while fetching all wines: ${error}`);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}