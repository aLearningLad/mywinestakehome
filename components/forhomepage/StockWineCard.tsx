import { Istockwines } from "@/types";
import Image from "next/image";
import Link from "next/link";

const StockWineCard: React.FC<Istockwines> = ({
  avgrating,
  by,
  color,
  concentr,
  extLink,
  flavournotes,
  from,
  id,
  img,
  review,
  title,
}) => {
  return (
    <div className="w-full hover:scale-90 transition duration-500 ease-in-out rounded-xl relative md:rounded-3xl flex flex-col items-center justify-end overflow-clip p-3 md:py-5 h-[80vh]">
      <div className="absolute z-10 flex justify-center items-center right-[10%] top-[10%] w-[200px] h-[200px] rounded-full border-[8px] border-white bg-black pb-3 ">
        <Image src={img} width={36} height={40} alt="wineImg" className="" />
      </div>
      <div className="w-full relative p-3 md:p-5 h-[80%] flex flex-col items-start bg-[#BDA789] rounded-2xl">
        <h1 className="text-black text-xl flex-col flex items-start justify-center">
          {title}
          <Link
            className="text-black bg-white hover:bg-transparent hover:text-white transition duration-500 ease-in-out rounded-md md:rounded-lg text-[10px] border-2 w-fit h-fit px-6 py-1"
            href={extLink}
          >
            Learn more
          </Link>
        </h1>
        <div className=" mt-8 flex flex-col items-start h-full w-full relative">
          <h3 className="text-[16px] font-semibold absolute bottom-[50%]">
            Flavour Notes:
            <p className="text-[14px] font-light">{flavournotes}</p>
          </h3>
          <h3 className="text-[16px] font-semibold absolute bottom-[30%]">
            Alcohol %:
            <p className="text-[14px] font-light">{concentr}</p>
          </h3>
          <h3 className="text-[16px] font-semibold absolute bottom-[5%]">
            <p className="text-[14px] font-light">"{review}"</p>-{by}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default StockWineCard;
