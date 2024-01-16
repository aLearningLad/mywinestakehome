import TestGetAll from "@/components/TestGetAll";
import { Navbar } from "@/components/commonUI";
import { DBWineCard } from "@/components/forallwinespage";
import { Idbwinecard } from "@/types";
import Link from "next/link";

const fetchTable = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/get-all-wines", {
      cache: "no-store",
    });

    if (response.ok) {
      const data = await response.json();
      const wines = data.wines.rows;
      console.log(data.wines.rows);
      return wines;
    } else {
      console.error("Failed to fetch wines:", response.statusText);
    }
  } catch (error) {
    console.error("Error fetching wines:", error);
  }
};

const AllWines = async () => {
  const wines = await fetchTable();

  return (
    <div className=" w-full h-screen bg-black flex justify-center items-center flex-col">
      <header className=" w-full h-[10vh] px-10">
        <Navbar />
      </header>
      <div className="h-[80vh] p-3 md:p-8 grid gap-4 md:gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 overflow-auto w-full">
        {/* {wines?.map((wine: any) => (
          <Link
            href={`/edit-wine/${wine.id}`}
            className=" text-white text-xl"
            key={wine.id}
          >
            {wine.name}
          </Link>
        ))} */}

        {wines.map((item: Idbwinecard) => (
          <DBWineCard
            alcoholcontent={item.alcoholcontent}
            bottlesize={item.bottlesize}
            consumed={item.consumed}
            dateconsumed={item.dateconsumed}
            foodpairings={item.foodpairings}
            id={item.id}
            name={item.name}
            oakaging={item.oakaging}
            rating={item.rating}
            region={item.region}
            tastingnotes={item.tastingnotes}
            type={item.type}
            varietal={item.varietal}
            vintner={item.vintner}
            winecolor={item.winecolor}
            winestyle={item.winestyle}
            year={item.year}
          />
        ))}
      </div>
    </div>
    // <TestGetAll />
  );
};

export default AllWines;
