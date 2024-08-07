import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative h-[80vh] flex items-center  bg-gray-800">
      <Image
        src="/images/bg.png"
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute inset-0 z-0"
      />
      <div className="relative z-10 py-4 px-10 md:px-32 text-white">
        <div className="flex flex-col md:flex-row gap-7">
          <div className="w-full md:w-3/5 flex flex-col justify-center ">
            <h1 className="text-base font-bold">SAVE OUR SANTUARY</h1>
            <p className="my-4 text-5xl font-bold">
              We equip our residents with the skills they need to live full and
              meaningful lives.
            </p>
            <p>Disabilities strengthens society. together, we flourish</p>
            <Link href="#about" target="_blank">
              <button className="mt-8 px-6 py-3 bg-white text-md text-blue-600 hover:bg-blue-200 transition duration-300 rounded-full">
                Get Started
              </button>
            </Link>
          </div>
       <div className="w-full md:w-2/5">
            <Image src="/images/Group.png" alt="Background Image" width={400} height={400} />
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
    </div>
  );
};

export default Hero;
