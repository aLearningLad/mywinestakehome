import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
import { db } from "@vercel/postgres";

export async function POST(request: Request) {
  const client = await db.connect();

  try {
    const requestBody = await request.json(); // Parse JSON body

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

    if (
      !wineName ||
      isNaN(wineYear) ||
      !wineType ||
      !wineVarietal ||
      isNaN(wineRating) ||
      wineDateConsumed === ""
    ) {
      throw new Error("Wine details are incomplete!");
    }

    const WINE_TYPE_OPTIONS = [
      "Red",
      "White",
      "Rosé",
      "White Blend",
      "Red Blend",
    ];
    if (!WINE_TYPE_OPTIONS.includes(wineType)) {
      throw new Error("Invalid wine type");
    }

    const result = await client.sql`
      INSERT INTO Wines (
        Name,
        Year,
        Type,
        Varietal,
        Rating,
        Consumed,
        Dateconsumed,
        Region,
        WineStyle,
        FoodPairings,
        WineColor,
        BottleSize,
        TastingNotes,
        OakAging,
        AlcoholContent,
        Vintner
      )
      VALUES (
        ${wineName},
        ${wineYear},
        ${wineType},
        ${wineVarietal},
        ${wineRating},
        ${wineConsumed},
        ${wineDateConsumed},
        ${region},
        ${wineStyle},
        ${foodPairings},
        ${wineColor},
        ${bottleSize},
        ${tastingNotes},
        ${oakAging},
        ${alcoholContent},
        ${vintner}
      )
      RETURNING *;
    `;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error: any) {
    console.error(`Error while trying to add wine: ${error}`);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
