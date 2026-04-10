import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
function TestimonailCard() {
  return (
    <div className="h-56 w-70 mt-10 bg-[#F4F4F4] rounded-lg hover:-translate-y-3 duration-200">
      <div className="p-6">
        <div className="flex justify-between">
          <div className="flex">
            <div className="h-10 w-10 bg-pink-300 rounded-full mr-4 mb-2"></div>
            <div>
              <h2>Sagun S.</h2>
              <p className="text-sm text-[#5f5f5f]">6 months ago</p>
            </div>
          </div>

          <div>
            <Image src={"/google.png"} alt="google" height={30} width={30} />
          </div>
        </div>

        <div className="flex mb-2 mt-2 text-yellow-500">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <div className="text-blue-500 ml-2">
            <MdVerified />
          </div>
        </div>
        <div>
          <p className="text-sm ">
            Nice and pleasant photo’s all events are covered exactly final Album
            is super 👌 Thanks for memorable coverage
          </p>
        </div>
        <p className="text-sm text-[#808080] mt-1">Read more</p>
      </div>
    </div>
  );
}
export default TestimonailCard;
