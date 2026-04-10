import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full">
      <div className="h-screen mx-auto relative w-full">
        {/* background image */}
        <Image
          src="/hero/hero.png"
          alt="Hero Image"
          fill
          loading="eager"
          className="object-cover  absolute"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
        {/* overlay content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/30">
          <div className="max-w-400 w-full ">
            <div className="w-1/2 max-lg:w-full max-lg:text-center">
              <h1 className="text-6xl max-lg:text-4xl font-bold uppercase tracking-wide mb-10">
                Invest in your <br /> future property
              </h1>
              <p className="text-xl mt-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus amet commodi, soluta eos voluptatibus voluptate
                quibusdam libero ab. Voluptatibus, ea.
              </p>
              <div className="mt-10">
                <button className="px-4 py-2 bg-white text-black rounded-ms">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#343434] w-full h-20 z-10 absolute bottom-0 flex justify-between items-center lg:px-20 max-lg:px-2 max-lg:gap-2">
          <Image
            src="/herologos/image1.png"
            alt="Logo"
            width={100}
            height={100}
          />
          <Image
            src="/herologos/image2.png"
            alt="Logo"
            width={100}
            height={100}
          />
          <Image
            src="/herologos/image3.png"
            alt="Logo"
            width={100}
            height={100}
          />
          <Image
            src="/herologos/image4.png"
            alt="Logo"
            width={100}
            height={100}
          />

          <Image
            className="max-lg:hidden"
            src="/herologos/image5.png"
            alt="Logo"
            width={100}
            height={100}
          />

          <Image
            className="max-lg:hidden"
            src="/herologos/image1.png"
            alt="Logo"
            width={100}
            height={100}
          />
          <Image
            className="max-lg:hidden"
            src="/herologos/image2.png"
            alt="Logo"
            width={100}
            height={100}
          />
          <Image
            className="max-lg:hidden"
            src="/herologos/image3.png"
            alt="Logo"
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
  );
};
export default Hero;
