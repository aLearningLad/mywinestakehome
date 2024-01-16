import { EditUI } from "@/components/foreditpage";
import { Iparams } from "@/types";

const getWineById = async (id: string) => {
  try {
    const res = await fetch(`http://localhost:3000/api/get-a-wine/${id}`);

    if (!res.ok) {
      console.log("Something went wrong");
    } else {
      // const data = res.json();
      // console.log(`You fetched this wine: ${data}`);
      console.log("Bro");
    }
    return res.json();
  } catch (error) {
    console.error(`This error occured: ${error}`);
  }
};

const EditWinePage = async ({ params }: { params: Iparams }) => {
  const { id } = params;
  // console.log(`This is the id: ${id}`);

  const res = await getWineById(id);
  // const { wine } = await getWineById(id);
  // const { wineName } = wine;
  console.log("This is the wine, bruv:", res);

  return (
    <div className="bg-black w-full h-fit">
      <EditUI res={res.wine} id={id} />
    </div>
  );
};

export default EditWinePage;
