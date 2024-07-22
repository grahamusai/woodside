import React from "react";

const Contact = () => {
  return (
    <div className="px-24 mt-8">
      <h2 class="mt-6 px-[18rem] text-2xl text-center font-bold leading-tight text-blue-600 sm:text-4xl lg:text-3xl">
        We would also appreciate your help with these few tasks
      </h2>
      <p className="text-center">
        Please register by sending your details on the Contact Us page. Click
        'im in' below.
      </p>

      <section className="py-10 bg-white sm:py-16 lg:py-24">
        <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-20">
          <div className="flex flex-col items-center justify-center text-center">
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                Civil Engineer needed
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                One of the walls on our bulding is damaged. We would appreciate
                the advice of a civil engineer on how we can proceed in fixing
                the problem
              </p>
              <a
                href="https://www.payfast.co.za/donate/go/woodsidesanctuary"
                title=""
                className="inline-flex items-center px-6 py-4 mt-2 font-semibold text-black transition-all duration-200 bg-blue-500 rounded-full lg:mt-16 hover:bg-yellow-400 focus:bg-yellow-400"
                role="button"
                target="_blank"
              >
                Support us
                
              </a>
            </div>

            <div className="flex flex-col items-center justify-center text-center">
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                Civil Engineer needed
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                One of the walls on our bulding is damaged. We would appreciate
                the advice of a civil engineer on how we can proceed in fixing
                the problem
              </p>
              <a
                href="https://www.payfast.co.za/donate/go/woodsidesanctuary"
                title=""
                className="inline-flex items-center px-6 py-4 mt-2 font-semibold text-black transition-all duration-200 bg-blue-500 rounded-full lg:mt-16 hover:bg-yellow-400 focus:bg-yellow-400"
                role="button"
                target="_blank"
              >
                Support us
                
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
