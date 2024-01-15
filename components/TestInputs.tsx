"use client";

import { useState } from "react";
import toast from "react-hot-toast";

const TestInputs = () => {
  const [wineName, setWineName] = useState<string>("Chateau Margaux");
  const [wineYear, setWineYear] = useState<number>(2016);
  const [wineType, setWineType] = useState<string>("Red");
  const [wineVarietal, setWineVarietal] = useState<string>("Durif");
  const [wineRating, setWineRating] = useState<number>(4.8);
  const [wineConsumed, setWineConsumed] = useState<boolean>(true);
  const [wineDateConsumed, setWineDateConsumed] =
    useState<string>("12-04-2022");
  const [region, setRegion] = useState<string>("Bordeaux, France");
  const [wineStyle, setWineStyle] = useState<string>("Full-bodied");
  const [foodPairings, setFoodPairings] = useState<string>("Grilled meats");
  const [wineColor, setWineColor] = useState<string>("Deep Ruby Red");
  const [bottleSize, setBottleSize] = useState<number>(0.75);
  const [tastingNotes, setTastingNotes] = useState<string>(
    "Aromatic and complex bouquet with notes of blackcurrant, plum, and blackberry."
  );
  const [oakAging, setOakAging] = useState<boolean>(true);
  const [alcoholContent, setAlcoholContent] = useState<number>(13.5);
  const [vintner, setVinter] = useState<string>("Chateau Margaux");

  const handleNewWine = async () => {
    const requestBody = {
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
      alcoholContent, // ====> CHECK TYPE ON DB
      vintner,
    };

    try {
      const response = await fetch("/api/add-wine", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        toast.success(`Adding ${wineName} ${wineYear} to your wines...`);
        const data = await response.json();
        console.log("Wine added successfully:", data);
      } else {
        console.log("Failed to add wine:", response.statusText);
      }
    } catch (error) {
      console.error("Error adding wine:", error);
    }
  };

  return (
    <div className=" w-full h-screen flex justify-center items-center">
      <button
        onClick={handleNewWine}
        className=" w-full lg:w-8/12 px-7 py-3 active:bg-black/60 text-xl text-white bg-black rounded-lg"
      >
        Save Wine
      </button>
    </div>
  );
};

export default TestInputs;
