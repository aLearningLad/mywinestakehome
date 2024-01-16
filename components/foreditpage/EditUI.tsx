"use client";

import Link from "next/link";
import { Navbar, WineFooter } from "../commonUI";
import { GiQuill } from "react-icons/gi";
import Image from "next/image";
import { ChangeEvent, MouseEventHandler, useState } from "react";
import { EditModal } from ".";

interface EditUIProps {
  res: any;
  id: string;
}

const EditUI: React.FC<EditUIProps> = ({ res, id }) => {
  // console.log(res);

  const [modalOpen, setModalOpen] = useState(true);

  const handleModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    setModalOpen((prev) => !prev);
  };

  const bgImageUrl = "/assets/cellar1.png";

  return (
    <div className="w-full h-full flex flex-col justify-center items-center text-white relative">
      {/* MODAL  */}

      {modalOpen && (
        <EditModal id={res.id} handleModal={handleModal} res={res} />
      )}
      {/* TOP SECTION  */}
      <section
        className="w-full h-[80vh] relative"
        style={{
          backgroundImage: `url(${bgImageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "60% 80%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <header className="w-full h-[20%] px-12">
          <Navbar />
        </header>
        <div className=" h-[80%] w-full flex flex-col justify-start pl-10 items-start pt-12">
          <h2 className="text-2xl">Your favourite wines, all in one place</h2>
          <h1 className=" text-[60px]">Fermented grapes & vibes</h1>
        </div>

        <div className="w-full h-fit absolute bottom-4 md:bottom-6 lg:bottom-8 flex justify-center">
          <button
            className="text-2xl flex justify-center hover:scale-95 border-2 border-white bg-transparent text-white transition duration-500 h-fit w-full sm:w-10/12 md:w-8/12 lg:w-6/12 py-3 md:py-5 hover:bg-white hover:text-black rounded-md md:rounded-lg"
            onClick={handleModal}
          >
            <GiQuill size={30} />
            Curate {res.name} details
          </button>
        </div>
      </section>

      {/* BOTTOM SECTION  */}
      <section className="w-full h-[80vh] bg-white flex flex-col lg:flex-row px-2 md:px-5 lg:px-8 py-4 md:py-12">
        <div className="h-full flex flex-col w-8/12 items-start ">
          <h2 className="text-2xl  lg:text-4xl text-[#615547]">
            Explore, curate, and share <br /> your wine journey effortlessly
          </h2>
          <h4 className="text-[#615547]">
            {" "}
            Learn about fine wines, craft your perfect collection, and share{" "}
            <br /> the experience with fellow enthusiasts. Elevate your wine
            adventure now. <br /> Browse regions, read about wine types and
            much, much more.
          </h4>
          <button className=" w-full h-fit sm:w-10/12 md:w-8/12 lg:w-fit text-[#615547] lg:px-5 py-3 mt-3 border-2 border-[#615547] rounded-md md:rounded-lg">
            Learn more
          </button>
          <div className="w-full justify-between md:w-8/12 px-4 py-4 h-[30vh] mt-4 bg-[#BDA781]/60 xl:rounded-xl flex flex-col items-start rounded-md md:rounded-lg">
            <h1 className=" text-2xl text-black/70">
              Chenin Blanc with sweet meats, Shiraz at sunset, or Sauvignon
              Blanc by the hearth. Learn more about where each wine is best
              served
            </h1>

            <button className="w-full md:w-fit py-2 md:py-4 rounded-md md:rounded-lg md:px-4 lg:px-5 border-2 border-black/70 text-black/70">
              About wines
            </button>
          </div>
        </div>
        <div className="h-full w-full flex flex-col gap-3 lg:w-4/12">
          <div className="w-full h-[50%] relative overflow-clip rounded-md md:rounded-lg lg:rounded-xl">
            <Image
              src="/assets/cellarhallway.png"
              fill
              objectFit="cover"
              alt="cellarhallway"
              className="absolute"
            />
          </div>
          <div className="w-full h-[50%] relative overflow-clip bg-black rounded-md md:rounded-lg lg:rounded-xl">
            <Image
              src="/assets/topview.png"
              fill
              alt="topdownview"
              objectFit="cover"
              className="absolute"
            />
          </div>
        </div>
      </section>
      <WineFooter dynamicTextColor="#615547" />
    </div>
  );
};

export default EditUI;
