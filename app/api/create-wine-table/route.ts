// api/migrate.js
import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    // Creating the Wines table with additional columns
    const result = await sql`
      CREATE TABLE IF NOT EXISTS Wines (
        id serial PRIMARY KEY,
        Name varchar(50) NOT NULL,
        Year integer NOT NULL,
        Type varchar(20) CHECK (Type IN ('Red', 'White', 'Rosé', 'White Blend', 'Red Blend')) NOT NULL,
        Varietal varchar(50) CHECK (Varietal IN (
          'Cabernet Sauvignon', 'Merlot', 'Shiraz', 'Chenin Blanc', 'Sauvignon Blanc', 'Verdelho', 'Chardonnay', 'Durif'
        )) NOT NULL,
        Rating numeric CHECK (Rating >= 1 AND Rating <= 5),
        Consumed boolean,
        DateConsumed date,
        Region varchar(60),
        WineStyle varchar(60),
        FoodPairings varchar(60),
        WineColor varchar(60),
        BottleSize numeric CHECK (BottleSize > 0),
        TastingNotes varchar(200),
        OakAging boolean,
        AlcoholContent numeric CHECK (AlcoholContent >= 0 AND AlcoholContent <= 100),
        Vintner varchar(50),
        CONSTRAINT consumed_date_check CHECK (Consumed IS NULL OR (Consumed = true AND DateConsumed IS NOT NULL))
      );
    `;

    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    console.error(`Error creating Wines table: ${error}`);
    return NextResponse.json({ error }, { status: 500 });
  }
}
