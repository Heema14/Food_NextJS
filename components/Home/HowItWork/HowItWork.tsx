import React from "react";
import HowItWorkCard from "./HowItWorkCard";

const HowItWork = () => {
  return (
    <section className="py-16">
      <h1 className="text-xl sm:text-2xl text-center font-extrabold">
        Let's see how it work
      </h1>
      <div className="container mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        <div>
          <HowItWorkCard
            num="01"
            image="/images/w1.png"
            title="Become a Devilvery Man"
            des="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, reprehenderit?"
          />
        </div>
        <div>
          <HowItWorkCard
            num="02"
            image="/images/w2.png"
            title="Become a Partner"
            des="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, reprehenderit?"
          />
        </div>
        <div>
          <HowItWorkCard
            num="03"
            image="/images/w3.png"
            title="Try Android/IOS App"
            des="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, reprehenderit?"
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWork;
