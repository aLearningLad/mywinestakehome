"use client";

import Link from "next/link";
import { WineFooter } from "../commonUI";
import { EditModalHeader } from ".";
import { ChangeEvent, useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

interface EditModalProps {
  handleModal: (e: React.MouseEvent<HTMLButtonElement>) => void;
  res: any;
  id: string;
}

const EditModal: React.FC<EditModalProps> = ({ handleModal, res, id }) => {
  const router = useRouter();

  //ALL MY STATES
  const [newWineName, setNewWineName] = useState<string>(res.name);
  const [newWineYear, setNewWineYear] = useState<number>(res.year);
  const [newWineType, setNewWineType] = useState<string>(res.type);
  const [newWineVarietal, setNewWineVarietal] = useState<string>(res.varietal);
  const [newWineRating, setNewWineRating] = useState<number>(res.rating);
  const [newWineConsumed, setNewWineConsumed] = useState<boolean>(res.consumed);
  const [newWineDateConsumed, setNewWineDateConsumed] =
    useState<string>("12-04-2022");
  const [newRegion, setNewRegion] = useState<string>(res.region);
  const [newWineStyle, setNewWineStyle] = useState<string>(res.winestyle);
  const [newFoodPairings, setNewFoodPairings] = useState<string>(
    res.foodpairings
  );
  const [newWineColor, setNewWineColor] = useState<string>(res.winecolor);
  const [newBottleSize, setNewBottleSize] = useState<number>(res.bottlesize);
  const [newTastingNotes, setNewTastingNotes] = useState<string>(
    res.tastingnotes
  );
  const [newOakAging, setNewOakAging] = useState<boolean>(true);
  const [newAlcoholContent, setNewAlcoholContent] = useState<number>(
    res.alcoholcontent
  );
  const [newVintner, setNewVinter] = useState<string>(res.vintner);

  // ALL MY CHANGE HANDLERS

  // HANDLE NAME
  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setNewWineName(e.target.value);
  };
  // HANDLE YEAR
  const handleYearChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setNewWineName(e.target.value);
  };

  //HANDLE WINE TYPE
  const handleTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setNewWineType(e.target.value);
  };

  // HANDLE VARIETAL CHANGE
  const handleVarietalChange = (e: ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setNewWineVarietal(e.target.value);
  };

  // HANDLE RATING CHANGE
  const handleRatingChange = (e: any) => {
    e.preventDefault();
    setNewWineRating(e.target.value);
  };

  // DATE ALERT
  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setNewWineDateConsumed(e.target.value);
  };

  // HANDLE REGION CHANGE
  const handleRegionChange = (e: ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setNewRegion(e.target.value);
  };

  // HANDLE STYLE CHANGE
  const handleStyleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setNewWineStyle(e.target.value);
  };

  // HANDLE PAIRINGS CHANGE
  const handlePairingsChagne = (e: ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setNewFoodPairings(e.target.value);
  };

  // HANDLE WINE COLOR CHANGE
  const handleColorChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setNewWineColor(e.target.value);
  };

  // BOTTLE SIZE CHANGE
  const handleBottleSizeChange = (e: any) => {
    e.preventDefault();
    setNewBottleSize(e.target.value);
  };

  const handleNotesChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    setNewTastingNotes(e.target.value);
  };

  //HANDLE OAK AGING
  const handleOakAgingChange = (e: any) => {
    e.preventDefault();
    setNewOakAging(e.target.value);
  };

  // HANDLE ALCOHOL CHANGE
  const handleAlcoholChange = (e: any) => {
    e.preventDefault();
    setNewAlcoholContent(e.target.value);
  };

  // HANDLE VINTNER
  const handleVintnerChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setNewVinter(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/edit-wine/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            wineName: newWineName,
            wineYear: newWineYear,
            wineType: newWineType,
            wineVarietal: newWineVarietal,
            wineRating: newWineRating,
            wineConsumed: newWineConsumed,
            wineDateConsumed: newWineDateConsumed,
            region: newRegion,
            wineStyle: newWineStyle,
            foodPairings: newFoodPairings,
            wineColor: newWineColor,
            bottleSize: newBottleSize,
            tastingNotes: newTastingNotes,
            oakAging: newOakAging,
            alcoholContent: newAlcoholContent,
            vintner: newVintner,
          }),
        }
      );

      if (!response.ok) {
        console.error("Failed to save updates");
        toast.error("Please try again");
        return;
      }

      toast.success("Wine details updated!");
      router.push("/allwines");

      const data = await response.json();
      console.log("Wine details updated successfully:", data);
    } catch (error) {
      console.error("Error while updating wine:", error);
    }
  };

  return (
    <div className="fixed overflow-clip flex gap-3 h-screen md:gap-5 lg:gap-8 flex-col items-center z-10 top-0 bottom-0 left-0 right-0 bg-black/50 backdrop-blur-md p-2 md:p-5">
      <EditModalHeader handleModal={handleModal} />
      {/* EDIT SCROLL  */}
      <div className="w-full h-fit overflow-auto flex flex-col items-center gap-3 md:gap-5 bg-neutral-300/20 lg:py-6 rounded-md md:rounded-xl py-4">
        {/* NAME  */}
        <input
          type="text"
          placeholder="Name"
          value={newWineName}
          className="editInputs"
          onChange={handleNameChange}
        />

        {/* YEAR  */}
        <input
          type="text"
          value={newWineYear}
          placeholder="Year"
          className="editInputs"
          onChange={handleYearChange}
        />

        {/* TYPE  */}
        <div className="w-full md:w-8/12 lg:w-6/12 h-fit py-3 flex flex-col items-center">
          <h3>Type</h3>
          <select
            onChange={handleTypeChange}
            className="selections"
            name=""
            id=""
          >
            <option value={newWineType}>{newWineType}</option>
            <option value="Red">Red</option>
            <option value="White">White</option>
            <option value="Rosé">Rosé</option>
            <option value="White Blend">White Blend</option>
            <option value="Red Blend">Red Blend</option>
          </select>{" "}
        </div>

        {/* VARIETAL  */}

        <div className="w-full md:w-8/12 lg:w-6/12 h-fit py-3 flex flex-col items-center">
          <h3>Varietal</h3>
          <select
            onChange={handleVarietalChange}
            className="selections"
            name=""
            id=""
          >
            <option value={newWineVarietal}>{newWineVarietal}</option>
            <option value="Cabernet Sauvignon">Cabernet Sauvignon</option>
            <option value="Merlot">Merlot</option>
            <option value="Shiraz">Shiraz</option>
            <option value="Chenin Blanc">Chenin Blanc</option>
            <option value="Sauvignon Blanc">Sauvignon Blanc</option>
            <option value="Verdelho">Verdelho</option>
            <option value="Chardonnay">Chardonnay</option>
            <option value="Durif">Durif</option>
          </select>{" "}
        </div>

        {/* RATING */}
        <div className="w-full md:w-8/12 lg:w-6/12 h-fit py-3 flex flex-col items-center">
          <h3>Rating</h3>
          <select
            onChange={handleRatingChange}
            className="selections"
            name=""
            id=""
          >
            <option value={newWineRating}>{newWineRating}</option>
            <option value={1}>1</option>
            <option value={1.5}>1.5</option>
            <option value={2}>2</option>
            <option value={2.5}>2.5</option>
            <option value={3}>3</option>
            <option value={3.5}>3.5</option>
            <option value={4}>4</option>
            <option value={4.5}>4.5</option>
            <option value={5}>5</option>
          </select>
        </div>

        {/* CONSUMED  */}
        <div className="w-full md:w-8/12 lg:w-6/12 h-fit py-3 flex flex-col items-center">
          <h3>Have you tried it?</h3>
          <select className="selections" name="" id="">
            <option value={newWineConsumed ? "Yes" : "No"}>
              {newWineConsumed ? "Yes!" : "Not yet"}
            </option>
            <option value="Yes">1. Yes!</option>
            <option value="No">2. Not yet</option>
          </select>
        </div>

        {/* DATE CONSUMED CANNOT BE EDITED  */}
        <input
          type="text"
          value={newWineDateConsumed}
          placeholder="Date consumed"
          className="editInputs"
          onChange={handleDateChange}
        />

        {/* REGION */}
        <div className="w-full md:w-8/12 lg:w-6/12 h-fit py-3 flex flex-col items-center">
          <h3>Region</h3>
          <select
            onChange={handleRegionChange}
            className="selections"
            name=""
            id=""
          >
            <option value={newRegion}>{newRegion}</option>
            <option value="Bordeaux, France">1. Bordeaux, France</option>
            <option value="Torino, Italy">2. Torino, Italy</option>
            <option value="Napa Valley, United States">
              3. Napa Valley, United States
            </option>
            <option value="Tuscany, Italy">4. Tuscany, Italy</option>
            <option value="Rioja, Spain">5. Rioja, Spain</option>
            <option value="Barossa Valley, Australia">
              6. Barossa Valley, Australia
            </option>
            <option value="Mendoza, Argentina">7. Mendoza, Argentina</option>
            <option value="Cape Winelands, South Africa">
              8. Cape Winelands, South Africa
            </option>
            <option value="Douro Valley, Portugal">
              9. Douro Valley, Portugal
            </option>
            <option value="Burgundy, France">10. Burgundy, France</option>
            <option value="Champagne, France">11. Champagne, France</option>
          </select>
        </div>

        {/* WINESTYLE  */}
        <div className="w-full md:w-8/12 lg:w-6/12 h-fit py-3 flex flex-col items-center">
          <h3>Style</h3>
          <select
            onChange={handleStyleChange}
            className="selections"
            name=""
            id=""
          >
            <option value={newWineStyle}>{newWineStyle}</option>
            <option value="Full-bodied">1. Full-bodied</option>
            <option value="Crisp">2. Crisp</option>
            <option value="Velvety">3. Velvety</option>
            <option value="Zesty">4. Zesty</option>
            <option value="Elegant">5. Elegant</option>
            <option value="Robust">6. Robust</option>
          </select>
        </div>

        {/* FOODPAIRINGS  */}
        <div className="w-full md:w-8/12 lg:w-6/12 h-fit py-3 flex flex-col items-center">
          <h3>Pair it with...</h3>
          <select
            onChange={handlePairingsChagne}
            className="selections"
            name=""
            id=""
          >
            <option value={newFoodPairings}>{newFoodPairings}</option>
            <option value="Grilled Meats">1. Grilled Meats</option>
            <option value="Seafood & Citrus">2. Seafood & Citrus</option>
            <option value="Cheese & Charcuterie">
              3. Cheese & Charcuterie
            </option>
            <option value="Vegetarian Dishes">4. Vegetarian Dishes</option>
            <option value="Spicy Cuisine">5. Spicy Cuisine</option>
          </select>
        </div>

        {/* WINE COLOR  */}
        <input
          type="text"
          className="editInputs"
          value={newWineColor}
          placeholder="Wine color"
          onChange={handleColorChange}
        />

        {/* BOTTLESIZE  */}
        <div className="w-full md:w-8/12 lg:w-6/12 h-fit py-3 flex flex-col items-center">
          <h3>Bottle Size</h3>
          <select
            onChange={handleBottleSizeChange}
            className="selections"
            name=""
            id=""
          >
            <option value={newBottleSize}>{newBottleSize}L</option>
            <option value={0.375}>Size: 0.375L (Half Bottle)</option>
            <option value={0.75}>Size: 0.75L (Standard Bottle)</option>
            <option value={1.5}>Size: 1.5L (Magnum)</option>
            <option value={3}>Size: 3L (Double Magnum)</option>
            <option value={6}>Size: 6L (Jeroboam)</option>
          </select>
        </div>

        {/* TASTING NOTES  */}
        <div className="w-full h-[60vh] flex justify-center flex-col gap-2 items-center p-1 md:p-2 lg:p-4 xl:p-5">
          <h3>Tasting notes</h3>
          <textarea
            placeholder="It tastes a lot like..."
            className=" focus:outline-none focus:scale-95 transition duration-500 ease-in-out rounded-md md:rounded-lg lg:rounded-xl w-full h-[80%] bg-white/30 p-4 text-[18px] lg:text-[26px] placeholder:text-white text-white"
            value={newTastingNotes}
            onChange={handleNotesChange}
          />
        </div>

        {/* OKE AGING  */}
        <div className="w-full md:w-8/12 lg:w-6/12 h-fit py-3 flex flex-col items-center">
          <h3>Was it aged in Oak casks?</h3>
          <select
            onChange={handleOakAgingChange}
            className="selections"
            name=""
            id=""
          >
            <option value={newOakAging ? "Yes" : "No"}>Select...</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            <option value="No">I {"don't"} know</option>
          </select>
        </div>

        {/* ALCOHOL CONTENT  */}
        <input
          type="text"
          placeholder="Alchol content %"
          className="editInputs"
          value={`${newAlcoholContent}%`}
          onChange={handleAlcoholChange}
        />

        {/* VINTER  */}
        <div className="w-full md:w-8/12 lg:w-6/12 h-fit py-3 flex flex-col items-center">
          <h3>Vintner</h3>

          <input
            type="text"
            className="editInputs"
            value={newVintner}
            placeholder="Vintner"
            onChange={handleVintnerChange}
          />
        </div>

        {/* SAVE BUTTON  */}
      </div>
      <button
        onClick={handleSubmit}
        className="w-full hover:bg-white hover:scale-95 transition duration-500 ease-in-out hover:text-black h-fit sm:w-10/12 md:w-8/12 lg:w-6/12 bg-transparent border-2 border-white rounded-md md:rounded-lg lg:rounded-xl py-3 lg:p-5 mt-3 lg:mt-5 mb-8"
      >
        Save my changes
      </button>
      <WineFooter dynamicTextColor="white" />
    </div>
  );
};

export default EditModal;
