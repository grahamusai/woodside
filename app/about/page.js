import React from "react";
import Navbar from "../components/navbar";
import Image from "next/image";
import Footer from "../components/footer";
import Team from "../components/team"
import Link from "next/link";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="">
        <section className="py-10 sm:py-16 lg:py-10 bg-gradient-to-b from-blue-200 to-green-100">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
              <div>
                <h1 className="text-4xl font-bold text-black sm:text-6xl lg:text-7xl">
                  <div className="relative inline-flex">
                    <span className="absolute inset-x-0 bottom-0 border-b-[30px] border-[#4ADE80]"></span>
                    <h1 className="relative text-4xl font-bold text-black sm:text-6xl lg:text-7xl">
                      69 years
                    </h1>
                  </div>
                  &nbsp;of caring of our own
                </h1>

                <p className="mt-8 text-sm text-black sm:text-xl">
                  Woodside Sanctuary, established in 1955 by Vernon and Norah
                  Veale, is a registered PBO and NPO. The Veales, along with
                  other concerned parents, sought a “home from home” for their
                  children with special care needs, providing a healthy and
                  happy alternative to institutional life.
                </p>

                <div className="mt-10 sm:flex sm:items-center sm:space-x-8">
                  <a
                    href="#"
                    title=""
                    className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 bg-orange-500 hover:bg-orange-600 focus:bg-orange-600"
                    role="button"
                  >
                    Get involved
                  </a>

                  <a
                    href="#"
                    title=""
                    className="inline-flex items-center mt-6 text-base font-semibold transition-all duration-200 sm:mt-0 hover:opacity-80"
                  >
                    <svg
                      className="w-10 h-10 mr-3"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        fill="#F97316"
                        stroke="#F97316"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Watch video
                  </a>
                </div>
              </div>

              <div>
                <Image
                  className="w-full"
                  src="/images/image54.png"
                  width={347}
                  height={396}
                  alt=""
                ></Image>
              </div>
            </div>
          </div>
        </section>
        <section className="px-10 md:px-24 my-20">
          <h2 className="text-center font-bold text-3xl text-blue-500">
            About us
          </h2>
          <h3 className="font-bold text-center text-xl">History</h3>
          <p>
            Woodside Sanctuary is a registered PBO and NPO which was established
            in 1955, over 64 years ago, by Vernon and Norah Veale following the
            birth of their son Barry Robin. Vernon and Norah were part of a
            group of concerned parents looking for a “home from home”
            environment for their children with special care needs. These
            parents could not bare the thought of placing their children in an
            institution and wanted a residential care home that could offer
            their children a healthy and happy alternative to institutional
            life.
          </p>

          <s></s>
          <div className="flex flex-col gap-10 md:flex-row w-full">
            <div className="w-1/2">
            <Link href="https://www.youtube.com/watch?v=P2eGUn9fb-k&t=2s" target="_blank">
            <Image
                className="w-full"
                src="/images/image49.png"
                width={350}
                height={350}
                alt=""
              ></Image>
            </Link>
              
            </div>
            <div className="w-full md:1/2 flex flex-col justify-center items-center">
              <h2 className=" font-bold text-3xl text-blue-500 pb-3">
                Vision and Mission
              </h2>
              <h3 className="font-bold text-left text-xl pb-5">Vision</h3>
              <p>
                To significantly contribute towards the Social Development of
                South Africas disability services by providing a centre of
                safety and excellence in holistic nursing care and stimulation
                for profoundly intellectually disabled persons. To offer help
                and hope to discouraged families and inspiration, encouragement
                and training to our dedicated staff and students in caring for
                our Residents.
              </p>
              <h3 className="font-bold text-3xl text-blue-500 py-5">Mission</h3>
              <p>
                To offer the highest standards of holistic nursing care for our
                residents with service models designed to deliver a tailored
                package of care to each individual. This service is given within
                a respectful and caring service-orientated environment creating
                a culture of continuous professional development, we always
                share our knowledge and expertise with other agencies in this
                field. Always being accountable to our staff, residents, parents
                and donors through an accessible open door policy.
              </p>
            </div>
          </div>
        </section>
        <Team />
      </div>
      <Footer />
    </div>
  );
};

export default About;
