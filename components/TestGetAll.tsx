import Link from "next/link";
import toast from "react-hot-toast";

const fetchTable = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/get-all-wines");

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

const TestGetAll = async () => {
  const wines = await fetchTable();

  return (
    <div className=" w-full h-screen bg-black flex justify-center items-center flex-col">
      <h1 className=" text-2xl text-white">Wines List</h1>
      <div>
        {wines?.map((wine: any) => (
          <Link
            href={`/edit-wine/${wine.id}`}
            className=" text-white text-xl"
            key={wine.id}
          >
            {wine.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TestGetAll;
