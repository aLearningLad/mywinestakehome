import Link from "next/link";
import React from "react";
import { GiReturnArrow } from "react-icons/gi";

interface EditModalHeaderProps {
  handleModal: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const EditModalHeader: React.FC<EditModalHeaderProps> = ({ handleModal }) => {
  return (
    <header className="w-full h-[20vh] flex justify-start items-center">
      <button
        onClick={handleModal}
        className="text-xl flex flex-col items-center border-2 border-white py-2 px-4 hover:bg-white hover:text-black transition duration-500 ease-in-out active:scale-90 rounded-md md:rounded-lg"
      >
        Return
        <GiReturnArrow size={14} />
      </button>
    </header>
  );
};

export default EditModalHeader;
