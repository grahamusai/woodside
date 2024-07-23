import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BiSolidDonateHeart } from "react-icons/bi";
import { BsPersonArmsUp } from "react-icons/bs";
import { GiPayMoney } from "react-icons/gi";
import { MdSportsGolf } from "react-icons/md";

const About = () => {
  return (
    <div className="px-10 md:px-24 ">
      <h2 className="text-3xl text-center text-blue-500 py-5 font-bold">
        What About Us
      </h2>
      <div className="flex flex-col items-center justify-center my-5">
        <div className="w-full md:w-1/2">
          <Link href={"https://youtube.com"}>
            <Image src={"/images/video.png"} width={800} height={800}></Image>
          </Link>
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

      <section className="py-10  sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto text-center">
            <div className="inline-flex px-4 py-1.5 mx-auto rounded-full bg-gradient-to-r from-fuchsia-600 to-blue-600">
              <p className="text-xs font-semibold tracking-widest text-white uppercase">
                Community
              </p>
            </div>
            <h2 className="mt-6 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Join Our Community
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 mt-12 sm:grid-cols-4 lg:mt-20 lg:gap-x-12">
            <div className="transition-all duration-200 bg-[#FFA500] hover:shadow-xl rounded-md text-white">
              <div className="py-5 px-5 text-center">
                <div className="text-5xl flex flex-col items-center">
                  <GiPayMoney />
                </div>

                <h3 className="mt-8 text-lg font-bold text-white">Donate</h3>
                <p className="mt-4 text-sm text-white">
                  Your contribution goes a long way. Thank you. We have several
                  channels for donation including PayFast, SnapScan, Global
                  Giving, Given Gain and back a buddy. Click Get Involved to
                  proceed.
                </p>
              </div>
            </div>

            <div className="transition-all duration-200 bg-[#008000] rounded-md  hover:shadow-xl">
              <div className="py-5 px-5 text-center">
                <div className="text-5xl flex flex-col items-center text-white">
                  <BsPersonArmsUp />
                </div>
                <h3 className="mt-8 text-lg font-bold text-white ">
                  Volunteer
                </h3>
                <p className="mt-4 text-sm text-white">
                  We are extremely grateful to all our volunteers for their
                  kindness and dedication. Thank you. If you would like to join
                  us, explore our programs by clicking Get Involved below and
                  contact us for further steps
                </p>
              </div>
            </div>

            <div className="transition-all duration-200 bg-[#FF0000] rounded-md  hover:shadow-xl">
              <div className="py-5 px-5 text-center">
                <div className="text-5xl flex flex-col items-center text-white">
                  <BiSolidDonateHeart />
                </div>
                <h3 className="mt-8 text-lg font-bold text-white">Sponsor</h3>
                <p className="mt-4 text-sm text-white">
                  Taking care of our residents can be very expensive. Our
                  sponsors are crucial to our success as Woodside. Thank you. If
                  you would like to join our family as a sponsor, please click
                  the button below for more information
                </p>
              </div>
            </div>

            <div className="transition-all duration-200 bg-[#1480C9] rounded-md hover:shadow-xl">
              <div className="py-5 px-5 text-center">
                <div className="text-5xl flex flex-col items-center text-white">
                  <MdSportsGolf />
                </div>
                <h3 className="mt-8 text-lg font-bold text-white">
                  Join a Club
                </h3>
                <p className="mt-4 text-sm text-white">
                  It's all fun and games. Always. Our club members participate
                  in athletic events to raise funds and awareness for our cause.
                  Please click Get Involved to explore.
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
