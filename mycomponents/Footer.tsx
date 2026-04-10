import { MdOutlineLocationOn } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import { FaFacebook, FaLongArrowAltRight } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
const Footer = ({ clientData }: { clientData: any }) => {
  return (
    <div className="bg-black">
      <div className="py-20  text-white flex max-lg:flex-col max-lg:items-center max-w-7xl mx-auto justify-between">
        <div className="lg:w-100 max-lg:w-full max-lg:px-10">
          <div className="w-80">
            <div>
              <h1 className="text-2xl mb-4">{clientData?.name}</h1>
            </div>
            <p className="text-white/70">
              {clientData?.name} is a leading real estate agency dedicated to
              helping individuals, families, and investors find their dream
              properties.
            </p>
            <div className="flex items-center gap-2">
              <FaLongArrowAltRight />
              <p className="text-orange-600">Find more</p>
            </div>
          </div>
        </div>
        {/* contact us */}
        <div className=" lg:w-100 max-lg:w-full max-lg:px-10 max-lg:mt-10">
          <h1>Contact Us</h1>
          <div className="text-white/70 text-sm">
            <p className=" mt-6">Head office</p>
            <div className="flex gap-2 mt-2 items-center">
              <div>
                <MdOutlineLocationOn className="text-white text-2xl" />
              </div>
              <p>
                City Centre, F Block, Aerocity, Sahibzada Ajit Singh Nagar,
                Delhi 100806
              </p>
            </div>
            <div className="flex gap-2 items-center mt-2">
              <div>
                <MdLocalPhone className="text-white text-2xl" />{" "}
              </div>
              <a href="tel:+91 81466 87151">+91 88898 66523</a>
            </div>
            <div className="flex gap-2 mt-2 items-center">
              <div>
                <MdOutlineEmail className="text-white text-2xl" />{" "}
              </div>
              <p>{clientData?.name}@gmail.com</p>
            </div>
            {/* branch office */}
            <p className="mt-6">Branch Office</p>
            <div className="flex gap-2 mt-2 items-center">
              <div>
                <MdOutlineLocationOn className="text-white text-2xl" />
              </div>
              <p>
                Office No. 2003, Kamdhenu Commerz, Sector 14, Kharghar, Navi
                Mumbai, Maharashtra 410210
              </p>
            </div>
          </div>
        </div>
        {/* Follow Us */}
        <div className="lg:w-60 max-lg:mt-10">
          <p className="mb-4 max-lg:hidden">Follow Us</p>
          <div className="flex gap-1">
            <div className="h-12 flex items-center justify-center w-12 bg-blue-500 rounded-full text-2xl">
              <FaFacebook />
            </div>
            <div className="h-12 flex items-center justify-center w-12 bg-orange-500 rounded-full text-2xl">
              <Link
                target="blank"
                href={
                  "https://www.instagram.com/vaid.smyle?igsh=MXNvMmNkMzY5NTQ3Nw=="
                }
              >
                <FaInstagram />
              </Link>
            </div>
            <div className="h-12 flex items-center justify-center  w-12 bg-red-500 rounded-full text-2xl">
              <FaYoutube />
            </div>
            <div className="h-12 flex items-center justify-center  w-12 bg-blue-400 rounded-full text-2xl">
              <FaLinkedin />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 text-white/70 flex text-sm justify-between pb-4">
        <p>© 2026 {clientData?.name}</p>
        <div className="flex gap-8">
          <Link href="/">
            <p>Home</p>
          </Link>
          <Link href="/contactUs">
            <p>Contact</p>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Footer;
