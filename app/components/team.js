import React from "react";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Team = () => {
  return (
    <section className="bg-white ">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
        <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-black">
            Our team
          </h2>
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Explore the whole collection of open-source web components and
            elements built with the utility classes from Tailwind
          </p>
        </div>
        <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="text-center text-gray-500 dark:text-gray-400">
            <img
              className="mx-auto mb-4 w-36 h-36 rounded-full"
              src="images/team1.png"
              alt="Neil Avatar"
            ></img>
            <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
              <a href="#">Ms K Williams</a>
            </h3>
            <p>General Manager</p>
          </div>
          <div className="text-center text-gray-500 dark:text-gray-400">
            <img
              className="mx-auto mb-4 w-36 h-36 rounded-full"
              src="images/team2.png"
              alt="Michael Avatar"
            ></img>
            <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
              <a href="#">Mrs. M. Leatswe</a>
            </h3>
            <p>Programme and Operations Administrator</p>
          </div>
          <div className="text-center text-gray-500 dark:text-gray-400">
            <img
              className="mx-auto mb-4 w-36 h-36 rounded-full"
              src="images/team3.png"
              alt="Leslie Avatar"
            ></img>
            <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
              <a href="#">Lone Lourens</a>
            </h3>
            <p>Marketing and Fundraising Manager</p>
          </div>
          <div className="text-center text-gray-500 dark:text-gray-400">
            <img
              className="mx-auto mb-4 w-36 h-36 rounded-full"
              src="images/team4.png"
              alt="Sofia Avatar"
            ></img>
            <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
              <a href="#">Sr. R. Maarman</a>
            </h3>
            <p>Nursing Services Manager</p>
          </div>
          <div className="text-center text-gray-500 dark:text-gray-400">
            <img
              className="mx-auto mb-4 w-36 h-36 rounded-full"
              src="images/team5.png"
              alt="Joseph Avatar"
            ></img>
            <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
              <a href="#">Mrs. D. Khophe</a>
            </h3>
            <p>Catering Manager</p>
          </div>
          <div className="text-center text-gray-500 dark:text-gray-400">
            <img
              className="mx-auto mb-4 w-36 h-36 rounded-full"
              src="images/team6.png"
              alt="Jese Avatar"
            ></img>
            <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
              <a href="#">Mrs. J. Mkhwanazi</a>
            </h3>
            <p>Staff Coordinator</p>
          </div>
          <div className="text-center text-gray-500 dark:text-gray-400">
            <img
              className="mx-auto mb-4 w-36 h-36 rounded-full"
              src="images/team7.png"
              alt="Helene Avatar"
            ></img>
            <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
              <a href="#">Ms. B. Mdunge</a>
            </h3>
            <p>Staff Coordinator</p>
          </div>
          <div className="text-center text-gray-500 dark:text-gray-400">
            <img
              className="mx-auto mb-4 w-36 h-36 rounded-full"
              src="images/team8.png"
              alt="Bonnie Avatar"
            ></img>
            <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
              <a href="#">Mr. P. Ngwenya</a>
            </h3>
            <p>Social Worker</p>
          </div>
        </div>
      </div>
      <div className="px-32 md:px-10 flex flex-col justify-center items-center ">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-black">
          Addmission
        </h2>
        <p className="font-light text-black sm:text-xl px-24 py-5">
          All children and adults that are referred to Woodside are assessed
          prior to being admitted as residents. A gradual introductory trial
          period to the Sanctuary is normally recommended; with strict admission
          criteria needing to be met by the Department of Mental Health, so that
          the Sanctuary can be assured that the placement of a resident is
          appropriate for the family and for the person impacted by the
          placement themselves. Due to the complexity involved in the placement
          of a person with profound disability at Woodside, approval is not
          always guaranteed. Parents/ family/ or legal guardians are encouraged
          to give their loved ones care at home for as long as possible, but
          they are also encouraged to bring their family members to our
          Sanctuary for short holiday periods. This lessens the trauma for
          parents/ family/ or legal guardians when the time comes for the child
          to be placed within the Sanctuary on a permanent basis. Parents/
          family/ or legal guardians are encouraged to visit as and when they
          wish.
        </p>
        <button className="bg-blue-500 px-5 py-3 text-white my-2 rounded-md">
          Apply for Addmission
        </button>
      </div>
      <div className="social flex justify-center items-center text-3xl gap-3 my-5 text-blue-600">
        <div>
          <FaFacebookSquare />
        </div>
        <div>
          <FaSquareXTwitter />
        </div>
        <div>
          <FaYoutube />
        </div>
      </div>
    </section>
  );
};

export default Team;
