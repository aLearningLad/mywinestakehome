import { footerlinks } from "@/devdata/navlinks";
import Link from "next/link";

interface WineFooterProps {
  dynamicTextColor: string;
}

const WineFooter: React.FC<WineFooterProps> = ({ dynamicTextColor }) => {
  return (
    <footer
      className={`w-full h-[8vh] flex justify-center text-{${dynamicTextColor}} items-center text-[12px] gap-3  font-semibold`}
    >
      <span className="flex w-fit">My Wines&copy; 2024</span>
      {footerlinks.map((item) => (
        <Link key={item.id} href={item.link}>
          {item.title}
        </Link>
      ))}
    </footer>
  );
};

export default WineFooter;
