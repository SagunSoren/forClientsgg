import { FaHouseFlag } from "react-icons/fa6";
import { FaHouseCircleCheck } from "react-icons/fa6";
import { FaHandHoldingHeart } from "react-icons/fa";
import { FaAward } from "react-icons/fa";
const Sales = () => {
  return (
    <div className=" bg-black/80">
      <div className="grid grid-cols-4 max-md:grid-cols-2 max-md:px-2 max-md:gap-1 justify-between max-w-7xl w-full mx-auto h-full py-10 gap-4">
        <div className="bg-white h-80 flex flex-col items-center justify-center rounded-lg gap-4">
          <FaHouseFlag size={100} className="text-yellow-500" />
          <h1 className="text-2xl font-bold">750+</h1>
          <p className="text-black/50 ">Properties Listed</p>
        </div>
        <div className="bg-white h-80 flex flex-col items-center justify-center rounded-lg gap-4">
          <FaHouseCircleCheck size={100} className="text-green-500" />
          <h1 className="text-2xl font-bold">720+</h1>
          <p className="text-black/50 ">Properties Sold</p>
        </div>
        <div className="bg-white h-80 flex flex-col items-center justify-center rounded-lg gap-4">
          <FaHandHoldingHeart size={100} className="text-pink-500" />
          <h1 className="text-2xl font-bold">745+</h1>
          <p className="text-black/50 ">Satisfied Clients</p>
        </div>
        <div className="bg-white h-80 flex flex-col items-center justify-center rounded-lg gap-4">
          <FaAward size={100} className="text-indigo-500" />
          <h1 className="text-2xl font-bold">10+</h1>
          <p className="text-black/50 ">Realtor Awards</p>
        </div>
      </div>
    </div>
  );
};
export default Sales;
