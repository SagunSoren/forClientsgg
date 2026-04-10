import Image from "next/image";
import { FaLongArrowAltRight } from "react-icons/fa";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { LiaBedSolid } from "react-icons/lia";
import { FaShower } from "react-icons/fa6";
import { FaCar } from "react-icons/fa6";
import { TfiRulerAlt2 } from "react-icons/tfi";

//             //             carpetarea:"1952 sqft",
// builtuparea:"2213.74 sqft",
// superarea:"2638 sqft",
const Card = ({
  images,
  title,
  location,
  beds,
  baths,
  parking,
  // area,
  type,
  price,
  carpetarea,
  builtuparea,
  superarea,
}: {
  images: string[];
  title: string;
  location: string;
  beds: string;
  baths: string;
  parking: string;
  // area: string;
  type?: string;
  price: string;
  carpetarea: string;
  builtuparea: string;
  superarea: string;
}) => {
  return (
    <div className="h-100 w-full bg-white border rounded-lg ">
      <div className=" w-full">
        {/* Carousel */}
        <Carousel className="relative w-full group">
          <CarouselContent>
            {images.map((src, index) => (
              <CarouselItem key={index}>
                <div className="relative h-64 w-full">
                  <Image
                    src={src}
                    alt={`${title} - view ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(min-width: 1024px) 25vw, 100vw"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* overlay */}
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-black/80 to-transparent pointer-events-none" />

          {/* text content */}
          {/* 2. The Text Content */}
          <div className="absolute bottom-4 right-6 z-20 pointer-events-none">
            {/* <p className="text-white text-lg font-bold uppercase tracking-widest drop-shadow-md">
              ₹{price}*
            </p> */}
          </div>

          {/* Navigation Buttons */}
          <CarouselPrevious className="absolute left-4 z-30 bg-transparent hover:bg-transparent text-white drop-shadow-lg" />
          <CarouselNext className="absolute right-4 z-30 bg-transparent hover:bg-transparent text-white drop-shadow-lg" />
        </Carousel>
      </div>

      {/* card text */}
      <div className="p-4">
        <h1 className="font-semibold">{title}</h1>
        <p className="text-black/50">{location}</p>
        <div className="flex flex-wrap  space-x-4 mt-2">
          <div className="flex items-center gap-2">
            <LiaBedSolid />
            <p>Beds: {beds}</p>
          </div>
          <div className="flex items-center gap-2">
            <FaShower />
            <p>Baths: {baths}</p>
          </div>
          <div className="flex items-center gap-2">
            <FaCar />
            <p>Parking: {parking}</p>
          </div>
          <div className=" flex gap-2 items-center text-sm">
            {/* <TfiRulerAlt2 /> */}
            <p>Area:</p>
            <p>{carpetarea}</p>
          </div>

          {/* <div className=" flex items-center gap-2 text-sm">
            <p>Buildup Area:</p>
            <p> {builtuparea}</p>
          </div> */}
          {/* 
          <div className=" flex items-center gap-2 text-sm">
            <p>Super Area:</p>
            <p>{superarea}</p>
          </div> */}
        </div>
        <p className="uppercase text-sm mt-2">{type}</p>
      </div>
    </div>
  );
};
export default Card;

{
  /* <Image src={"/hero.jpg"} alt="hero" fill className="object-cover"></Image>; */
}
