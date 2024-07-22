import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="px-10 md:px-24 ">
      <h2 className="text-3xl text-center text-blue-500 py-5 font-bold">
        What About Us
      </h2>
      <div className="flex flex-col items-center justify-center my-5">
        <div className="w-full md:w-1/2">
          <Image src={"/images/video.png"} width={800} height={800}></Image>
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center">
          <p>
            Woodside is a home for the intellectually disabled members of our
            country. A comfort for their families and a place of purpose for our
            staff, volunteers and sponsors
          </p>
          <a
            href="https://www.payfast.co.za/donate/go/woodsidesanctuary"
            title=""
            className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-black transition-all duration-200 bg-yellow-300 rounded-full lg:mt-16 hover:bg-yellow-400 focus:bg-yellow-400"
            role="button"
            target="_blank"
          >
            Support us
          </a>
        </div>
      </div>

      <section class="py-10  sm:py-16 lg:py-24">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div class="max-w-xl mx-auto text-center">
            <div class="inline-flex px-4 py-1.5 mx-auto rounded-full bg-gradient-to-r from-fuchsia-600 to-blue-600">
              <p class="text-xs font-semibold tracking-widest text-white uppercase">
                Community
              </p>
            </div>
            <h2 class="mt-6 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Join Our Community
            </h2>
          </div>

          <div class="grid grid-cols-1 gap-5 mt-12 sm:grid-cols-4 lg:mt-20 lg:gap-x-12">
            <div class="transition-all duration-200 bg-[#FFA500] hover:shadow-xl rounded-md text-white">
              <div class="py-10 px-9">
                <svg
                  class="w-16 h-16 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <h3 class="mt-8 text-lg font-semibold text-black">Donate</h3>
                <p class="mt-4 text-base text-white">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>
            </div>

            <div class="transition-all duration-200 bg-[#008000] rounded-md  hover:shadow-xl">
              <div class="py-10 px-9">
                <svg
                  class="w-16 h-16 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                  />
                </svg>
                <h3 class="mt-8 text-lg font-semibold text-black">Volunteer</h3>
                <p class="mt-4 text-base text-white">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>
            </div>

            <div class="transition-all duration-200 bg-[#FF0000] rounded-md  hover:shadow-xl">
              <div class="py-10 px-9">
                <svg
                  class="w-16 h-16 text-gray-100"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                <h3 class="mt-8 text-lg font-semibold text-black">Sponsor</h3>
                <p class="mt-4 text-base text-white">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>
            </div>

            <div class="transition-all duration-200 bg-[#1480C9] rounded-md hover:shadow-xl">
              <div class="py-10 px-9">
                <svg
                  class="w-16 h-16 text-gray-100"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                <h3 class="mt-8 text-lg font-semibold text-black">
                  Join a Club
                </h3>
                <p class="mt-4 text-base text-white">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>
            </div>
          </div>
        </div>
        <section>
          <div className="flex justify-center items-center">
            <a
              href="https://www.payfast.co.za/donate/go/woodsidesanctuary"
              title=""
              className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-black transition-all duration-200 bg-yellow-300 rounded-full lg:mt-16 hover:bg-yellow-400 focus:bg-yellow-400"
              role="button"
              target="_blank"
            >
              Support us
            </a>
          </div>
          <div className="flex justify-center items-center mt-8 lg:mt-16">
            <Image
              src="/images/image55.png"
              width={663}
              height={326}
              alt="Support Image"
            />
          </div>
        </section>
      </section>
    </div>
  );
};

export default About;
