import React from "react";

const News = () => {
  return (
    <div className="bg-blue-500">
      <div className="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="mt-6 text-2xl font-bold leading-tight text-white sm:text-4xl lg:text-4xl">
            Come and Join Us for our Fun Filled Events. See you there!
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 mt-12 sm:grid-cols-4 lg:mt-20 lg:gap-x-12">
        <div className="transition-all duration-200 bg-white rounded-md hover:shadow-xl">
            <div className="py-10 px-9">
              <h3 className="mt-3 text-lg font-semibold text-blue-500">
                Event Name
              </h3>
              <p className="mt-4 text-base text-black">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>
            </div>
          </div>

          <div className="transition-all duration-200 bg-white rounded-md hover:shadow-xl">
            <div className="py-10 px-9">
              <h3 className="mt-3 text-lg font-semibold text-blue-500">
                Event Name
              </h3>
              <p className="mt-4 text-base text-black">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>
            </div>
          </div>

          <div className="transition-all duration-200 bg-white rounded-md hover:shadow-xl">
            <div className="py-10 px-9">
              <h3 className="mt-3 text-lg font-semibold text-blue-500">
                Event Name
              </h3>
              <p className="mt-4 text-base text-black">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>
            </div>
          </div>

          <div className="transition-all duration-200 bg-white rounded-md hover:shadow-xl">
            <div className="py-10 px-9">
              <h3 className="mt-3 text-lg font-semibold text-blue-500">
                Event Name
              </h3>
              <p className="mt-4 text-base text-black">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
