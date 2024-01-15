import { Iparams } from "@/types";
import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: Iparams }) {
  const { id } = params;

  try {
    const result = await sql`
          SELECT * FROM Wines
          WHERE id = ${id}
        `;

    if (result.rows.length === 0) {
      return NextResponse.json({ error: "Wine not found" }, { status: 404 });
    }

    const wine = result.rows[0];
    console.log("wine  sent to frontend:", wine);
    return NextResponse.json({ wine }, { status: 200 });
  } catch (error) {
    console.error(`Error fetching wine details: ${error}`);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
