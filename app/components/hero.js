"use client";
import React from "react";
import Image from "next/image";
import ImageSlider from "./imageSlider";

const Hero = () => {
  return (
    <div className="bg-white">
      <section className="bg-[#FCF8F1] bg-opacity-30 py-10 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <p className="text-base font-semibold tracking-wider text-blue-600 uppercase">
                Save our santuary
              </p>
              <h1 className="mt-4 text-4xl font-bold text-black lg:mt-8 sm:text-6xl xl:text-8xl">
                Empathy Shapes Communities
              </h1>
              <p className="mt-4 text-base text-black lg:mt-8 sm:text-xl">
              Disabilities strengthens society. together, we flourish
              </p>
              <a
                href="https://www.payfast.co.za/donate/go/woodsidesanctuary"
                title=""
                className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-black transition-all duration-200 bg-yellow-300 rounded-full lg:mt-16 hover:bg-yellow-400 focus:bg-yellow-400"
                role="button"
                target="_blank"
              >
                Support us
                <svg
                  className="w-6 h-6 ml-8 -mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </a>

              
            </div>

            <div>
              <img className="w-full" src="/images/banner.png" alt="" />
            </div>
          </div>
        </div>
        
      </section>
      <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
  <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
    <div className="grid items-center grid-cols-2 gap-10 sm:gap-y-16 sm:grid-cols-3 xl:grid-cols-6">
      <div>
        <img
          className="object-contain w-auto mx-auto h-14"
          src="https://www.woodside.co.za/img/wesbank.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          className="object-contain w-auto mx-auto h-14"
          src="https://www.woodside.co.za/img/hollard.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          className="object-contain w-auto mx-auto h-14"
          src="https://www.firstforwomen.co.za/assets/Icons/brandsite/logo.png"
          alt=""
        />
      </div>
      <div>
        <img
          className="object-contain w-auto mx-auto h-14"
          src="https://www.woodside.co.za/img/absa.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          className="object-contain w-auto mx-auto h-14"
          src="https://www.woodside.co.za/img/anglo.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          className="object-contain w-auto mx-auto h-14"
          src="https://www.woodside.co.za/img/nlc.jpg"
          alt=""
        />
      </div>
    </div>
  </div>
</section>

    </div>
  );
};

export default Hero;
