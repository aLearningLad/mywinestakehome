import { NextRequest, NextResponse } from "next/server";
import { db, sql } from "@vercel/postgres";
import { error } from "console";

export async function PUT(req: any) {
  const client = await db.connect();

  try {
    const { id }: { id: string } = req.query;

    if (!id) {
      return NextResponse.json({ error: "Invalid request, 'id' is missing" });
    }

    const requestBody = await req.json();

    const {
      wineName,
      wineYear,
      wineType,
      wineVarietal,
      wineRating,
      wineConsumed,
      wineDateConsumed,
      region,
      wineStyle,
      foodPairings,
      wineColor,
      bottleSize,
      tastingNotes,
      oakAging,
      alcoholContent,
      vintner,
    } = requestBody;

    const result = await sql`
UPDATE Wines
SET 
Name = ${wineName},
Year = ${wineYear},
Type = ${wineType},
Varietal = ${wineVarietal},
Rating = ${wineRating},
Consumed = ${wineConsumed},
DateConsumed = ${wineDateConsumed},
Region = ${region},
WineStyle = ${wineStyle},
FoodPairings = ${foodPairings},
WineColor = ${wineColor},
BottleSize = ${bottleSize},
TastingNotes = ${tastingNotes},
OakAging = ${oakAging},
AlcoholContent = ${alcoholContent},
AlcoholContent = ${alcoholContent},
Vintner = ${vintner},

WHERE id = ${id}
RETURNING *
      `;

    if (result.rowCount === 0) {
      return NextResponse.json({ error: "Wine not found" }, { status: 404 });
    }

    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    console.error(`Error updating wine: ${error}`);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
