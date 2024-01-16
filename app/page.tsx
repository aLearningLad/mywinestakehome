import TestGetAll from "@/components/TestGetAll";
import TestInputs from "@/components/TestInputs";
import { Navbar, WineFooter } from "@/components/commonUI";
import { StockWineCard } from "@/components/forhomepage";
import { sociallinks } from "@/devdata/sociallinks";
import { stockwines } from "@/devdata/stockwines";
import Link from "next/link";
import { FaAngleDoubleDown } from "react-icons/fa";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

export default function Home() {
  const homeBgUrl = "/assets/corks.png";

  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* TOP SECTION  */}
      <section
        style={{
          backgroundImage: `url(${homeBgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "60% 80%",
          backgroundRepeat: "no-repeat",
        }}
        className="w-full h-[70vh] relative"
      >
        <div className=" w-full h-full flex flex-col absolute top-0 bottom-0 left-0 right-0 bg-black/60">
          <header className="w-full h-[10vh] hidden  px-12 lg:flex ">
            <Navbar />
          </header>

          {/* MAIN CONTAINER  */}
          <div className=" h-fit lg:h-[60vh] w-full flex lg:flex-row flex-col">
            {/* LEFT SIDE  */}
            <div className="w-full relative lg:w-10/12 flex flex-col items-start justify-center py-2 md:py-5 px-1 lg:px-9">
              <div className=" h-[60%] w-full flex flex-col items-start">
                <h3 className=" text-2xl text-white">
                  Catalogue your wine discovery journey. Learn. Share. Drink!
                </h3>
                <Link
                  href="/allwines"
                  className=" text-white text-[48px] lg:text-[60px] flex items-center"
                >
                  Your Wine List
                  <MdOutlineKeyboardDoubleArrowRight size={24} />
                </Link>
              </div>
              <Link
                href="/regions"
                className="w-full group md:w-8/12 hover:bg-white hover:text-black transition duration-500 hover:scale-95 lg:w-fit px-24 lg:py-5 text-white h-fit py-3 border-2 border-white rounded-md md:rounded-lg lg:rounded-xl"
              >
                <p>Regions</p>
                <p className="text-[12px] text-white/60 group-hover:text-black transition duration-500 ease-in-out">
                  Learn about wine-producing regions
                </p>
              </Link>
            </div>
            <div className="w-full lg:w-2/12 flex flex-col items-center justify-center gap-2">
              {sociallinks.map((item) => (
                <Link
                  className="flex flex-col items-center gap-1 group hover:scale-105 transition ease-in-out duration-500"
                  href={item.link}
                  target="_blank"
                >
                  {item.icon}
                  <p className="text-[10px] text-transparent group-hover:text-white transition duration-500 ease-in-out ">
                    {item.title}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* BOTTOM SECTION  */}
      <section className="w-full lg:h-[120vh] flex flex-col lg:px-9 items-center pt-16">
        <h1 className=" text-2xl lg:text-4xl">
          Knowledge on incredible wines for every occasion, at your fingertips
        </h1>
        <p className=" text-center text-lg">
          Discover extraordinary wines, perfect for any moment. Whether {"it's"}{" "}
          <br /> a celebration, cozy night by the fire, or a quiet dinner, our
          selection ensures a memorable experience.
        </p>
        <p className="text-lg mt-9 flex flex-col items-center gap-1 mb-6">
          Read more
          <FaAngleDoubleDown size={12} />
        </p>

        <div className="p-3 w-full lg:w-8/12 grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-8">
          {stockwines.map((card) => (
            <StockWineCard
              key={card.id}
              avgrating={card.avgrating}
              by={card.by}
              color={card.color}
              concentr={card.concentr}
              extLink={card.extLink}
              flavournotes={card.flavournotes}
              from={card.from}
              id={card.id}
              img={card.img}
              review={card.review}
              title={card.title}
            />
          ))}
        </div>
      </section>
      {/* <TestInputs /> */}
      {/* <TestGetAll /> */}
      {/* <WineFooter dynamicTextColor="black" /> */}
    </main>
  );
}
