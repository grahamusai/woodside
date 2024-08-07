import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center  bg-gray-800">
      <Image
        src="/images/Blue@2x.png"
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute inset-0 z-0"
      />
      <div className="relative z-10 py-4 px-10 md:px-32 text-white">
        <h1 className="text-base font-bold">
        SAVE OUR SANTUARY
        </h1>
        <p className="my-4 text-5xl font-bold">
          Empathy Shapes Communities: Supporting Disabilities Strengthens
          Society. Together, We Flourish
        </p>
        <p>Disabilities strengthens society. together, we flourish</p>
        <Link href="#about" target="_blank">
          <button className="mt-8 px-6 py-3 bg-orange-400 text-md hover:bg-orange-500 transition duration-300 rounded-full">
            Get Started
          </button>
        </Link>
      </div>
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
    </div>
  );
};

export default Hero;
