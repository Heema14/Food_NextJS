import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* image */}
        <div className="animate-pulse">
          <Image
            src="/images/a.png"
            alt=""
            width={800}
            height={800}
            className="duration-200 hover:scale-110 hover:rotate-3"
          />
        </div>
        {/* text content */}
        <div>
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold leading-8 md:leading-12">
            We deliver our products as fast as superman can do
          </h1>
          <p className="mt-4 leading-6 sm:leading-8 text-gray-800 dark:text-gray-300 font-medium text-sm sm:text-base">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Reprehenderit, incidunt dolores ab aliquid officiis iusto?
          </p>

          <div className="mt-8">
            <div className="flex mt-8 items-center space-x-6">
              <p className="text-3xl md:text-5xl opacity-40 font-bold">01</p>
              <div>
                <h1 className="text-base sm:text-lg font-extrabold">
                  Easy to use application
                </h1>
                <p className="mt-2 text-gray-800 dark:text-gray-300 font-medium sm:text-base">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Impedit, consectetur.
                </p>
              </div>
            </div>
            <div className="flex mt-8 items-center space-x-6">
              <p className="text-3xl md:text-5xl opacity-40 font-bold">02</p>
              <div>
                <h1 className="text-base sm:text-lg font-extrabold">
                  Deliver food within 30 min
                </h1>
                <p className="mt-2 text-gray-800 dark:text-gray-300 font-medium sm:text-base">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Impedit, consectetur.
                </p>
              </div>
            </div>
            <div className="flex mt-8 items-center space-x-6">
              <p className="text-3xl md:text-5xl opacity-40 font-bold">03</p>
              <div>
                <h1 className="text-base sm:text-lg font-extrabold">
                  100% Relible with Privacy
                </h1>
                <p className="mt-2 text-gray-800 dark:text-gray-300 font-medium sm:text-base">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Impedit, consectetur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
