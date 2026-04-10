import { clients } from "@/data/clients";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from "next/image";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Link from "next/link";
import { TfiClose } from "react-icons/tfi";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = ({ clientData }: { clientData: any }) => {
  return (
    <div className="bg-transparent absolute z-10 w-full text-white border-b-2 border-white">
      <div className="flex justify-between h-full">
        <div className="w-1/2 max-lg:w-full border-r-2 flex items-center justify-center">
          <h1 className="text-3xl">{clientData?.name}</h1>
        </div>
        {/* phone hamburger menu */}
        <div className="lg:hidden h-20 w-20 flex items-center justify-center">
          <Drawer direction="right" shouldScaleBackground={false}>
            <DrawerTrigger className="outline-none">
              <RxHamburgerMenu size={30} />
            </DrawerTrigger>
            <DrawerContent className="fixed right-0 top-0 bottom-0 h-full w-[85vw] bg-white border-none rounded-none z-[100] flex flex-col text-black">
              <DrawerTitle className="sr-only">Menu</DrawerTitle>
              <DrawerDescription className="sr-only">
                Browse our photography categories, films, and contact
                information.
              </DrawerDescription>
              <div className="flex justify-end p-6">
                <DrawerClose className="flex items-center gap-2 text-black/50 outline-none">
                  <span className="text-sm">CLOSE</span>
                  <TfiClose size={18} />
                </DrawerClose>
              </div>

              <div className="flex-1 overflow-y-auto px-10 py-4">
                <div className="flex flex-col gap-4 font-bold uppercase text-lg">
                  <Link href="/">HOME</Link>
                  <Link href="/">Projects</Link>
                  <Link href="/">Services</Link>
                  <div className="h-[1px] bg-gray-100 my-1" />
                  <Link href="/">About Us</Link>
                  <Link href="/">Contact Us</Link>
                </div>
              </div>

              <DrawerFooter className="px-10 py-8 text-center bg-gray-50 border-t">
                <h1 className={` text-2xl tracking-widest`}>Follow Us</h1>
                {/* <div className="mt-4 flex justify-center">
                  <SocialIcons />
                </div> */}
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>

        {/* desktop navigation */}
        <div className="w-1/2 max-lg:hidden">
          <div className="grid grid-rows-4 grid-cols-3 h-40">
            <div className="border-r-2 border-b-2 row-span-2 hover:bg-white duration-300 hover:text-black flex items-center justify-center">
              Home
            </div>
            <div className=" border-b-2 row-span-2 flex items-center justify-center hover:bg-white hover:text-black duration-300">
              Projects
            </div>
            <div className="border-l-2 border-r-2 row-span-4 flex items-center justify-center hover:bg-white hover:text-black duration-300">
              Contact Us
            </div>
            <div className="border-r-2 row-span-2 flex items-center justify-center hover:bg-white hover:text-black duration-300">
              About Us
            </div>
            <div className=" row-span-2 flex items-center justify-center hover:bg-white hover:text-black duration-300">
              Services
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;

//  <div>{client?.name}</div>
//       <div>
//         <Image src={client?.logo} alt="banana" height={100} width={100}></Image>
//       </div>

{
  /* <div className=" h-20 max-w-400 mx-auto flex justify-between items-center ">
        <div className="flex gap-10 text-black">
          <p>logo</p>
          <p>{client?.name}</p>
        </div>
        <div className="flex gap-10">
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Search</p>
        </div>
      </div> */
}
