import React from "react";
import RestaurantCards from "./RestaurantCards";

const Restaurant = () => {
  return (
    <section className="py-16">
      {/* heading section */}
      <div className="text-xl sm:text-2xl text-center font-extrabold">
        Avaliable Restaurant Nearby Area
      </div>
      {/* content divs */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-14">
        <RestaurantCards
          image="/images/r1.jpg"
          title="Pizza Hut Delicious Pizza"
        />
        <RestaurantCards
          image="/images/r2.jpg"
          title="Chipotle Maxican Girll (2675 Geary) Boulevard"
        />
        <RestaurantCards
          image="/images/r3.jpg"
          title="McDonald's Bugres (Filmore)"
        />
        <RestaurantCards
          image="/images/r4.jpg"
          title="The Baked Bear Sun Francisco"
        />
        <RestaurantCards
          image="/images/r5.jpg"
          title="Shacke Shack (3060 Fillmore Street)"
        />
        <RestaurantCards
          image="/images/r6.jpg"
          title="Chubby Noodle Chinese Takout"
        />
      </div>
      <div className="mt-16 text-center group">
        <button className="px-9 py-2.5 sm:px-12 sm:py-3.5 cursor-pointer rounded-full font-bold text-base sm:text-lg bg-cyan-700 text-white hover:bg-cyan-950 transition-all duration-200 dark:bg-cyan-300 dark:hover:bg-cyan-200 hover:scale-105">
          Discover More &rarr;
        </button>
      </div>
    </section>
  );
};

export default Restaurant;
