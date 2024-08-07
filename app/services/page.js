import React from "react";
import Image from "next/image";
import Navbar from "../components/navbar";
import Hero from "../components/services/hero";

const Services = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="pt-10 overflow-hidden bg-gray-50 md:pt-6 sm:pt-16 2xl:pt-16">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid items-center grid-cols-1 md:grid-cols-2">
            <div className="bg-blue-500 p-10">
              <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                Hey 👋 I am <br className="block sm:hidden" />
                Jenny Carter
              </h2>
              <p className="max-w-lg mt-3 text-xl leading-relaxed text-white md:mt-8">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>

              <p className="mt-4 text-xl text-white md:mt-8">
                
                <br className="block sm:hidden" />
                Ask me on{" "}
                <a
                  href="#"
                  title=""
                  className="transition-all duration-200 text-sky-500 hover:text-sky-600 hover:underline"
                >
                  Twitter
                </a>
              </p>
            </div>

            <div className="">
             <Image src="/images/image15.png" alt="Background Image" width={400} height={400} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
