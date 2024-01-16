import Link from "next/link";
import React from "react";

interface DBWineCardProps {
  id: number;
  name: string;
  year: number;
  type: string;
  varietal: string;
  rating: string;
  consumed: true;
  dateconsumed: string;
  region: string;
  winestyle: string;
  foodpairings: string;
  winecolor: string;
  bottlesize: string;
  tastingnotes: string;
  oakaging: boolean;
  alcoholcontent: string;
  vintner: string;
}

const DBWineCard: React.FC<DBWineCardProps> = ({
  alcoholcontent,
  bottlesize,
  consumed,
  dateconsumed,
  foodpairings,
  id,
  name,
  oakaging,
  rating,
  region,
  tastingnotes,
  type,
  varietal,
  vintner,
  winecolor,
  winestyle,
  year,
}) => {
  return (
    <div className="w-full relative h-[70vh] bg-white items-center flex flex-col rounded-md md:rounded-lg lg:rounded-xl p-3 md:p-5">
      <h3 className=" text-xl font-semibold">{name}</h3>
      <p>Type: {type}</p>
      <p>Year:{year}</p>
      <p>Style: {winestyle}</p>
      <p>Color: {winecolor}</p>
      <p>Varietal: {varietal}</p>
      <p>Aged in Oke: {oakaging ? "Yes" : "No"}</p>
      <div className=" w-full flex flex-col text-center ">
        <h2 className=" text-xl font-semibold">About this wine</h2>
        It is from {region}, by {vintner}. The tasting notes read: "
        {tastingnotes}."
      </div>
      <div className=" w-full flex flex-col text-center ">
        <h2 className=" text-xl font-semibold">Best paired with:</h2>
        {foodpairings}
      </div>
      <p>Bottle size: {bottlesize}</p>
      <p>Concentration: {alcoholcontent}</p>
      <p>Rated {rating}/5</p>

      <Link
        className="flex absolute bottom-3 justify-center w-10/12 py-2 bg-black text-white rounded-lg"
        href={`/edit-wine/${id}`}
      >
        Edit {name}
      </Link>
    </div>
  );
};

export default DBWineCard;
