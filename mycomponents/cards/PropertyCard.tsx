import Image from "next/image";

const PropertyCard = () => {
  return (
    <div className="h-100 w-100 rounded-2xl overflow-hidden shadow-lg">
      <div className="relative h-3/5 w-100">
        <Image
          src={"/hero/hero.png"}
          alt="banner"
          fill
          className="object-cover absolute"
        ></Image>
      </div>
      <div className="p-4">
        <h1 className="font-semibold">Property for Sale in Jalandar</h1>
        <p>location</p>
        <div className="flex flex-wrap space-x-2 border-b-2">
          <div className="flex">
            <h1>Bedroom icon</h1>
            <p>6 beds</p>
          </div>
          <div className="flex">
            <h1>Bedroom icon</h1>
            <p>6 beds</p>
          </div>
          <div className="flex mb-1">
            <h1>Bedroom icon</h1>
            <p>6 beds</p>
          </div>
        </div>
        <div className="flex justify-between mt-1">
          <h1>For Sale</h1>
          <p>Contact</p>
        </div>
      </div>
    </div>
  );
};
export default PropertyCard;
