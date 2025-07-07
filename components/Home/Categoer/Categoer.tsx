import React from "react";

const categories = [
  { name: "Pizza" },
  { name: "Break Fast" },
  { name: "Jabanese" },
  { name: "Halal" },
  { name: "Dessert" },
  { name: "Lebanese" },
  { name: "American" },
  { name: "Sushi" },
  { name: "Greek" },
  { name: "Thai" },
  { name: "Vegetrain" },
  { name: "Italian" },
  { name: "Mexican" },
  { name: "Indian" },
  { name: "Chisese" },
  { name: "Break Fast" },
  { name: "Jabanese" },
  { name: "Break Fast" },
  { name: "Jabanese" },
];

const Categoer = () => {
  return (
    <section className="py-16" id="Categoer">
      <h1 className="text-xl sm:text-2xl text-center font-extrabold">
        Popular Categores by food
      </h1>
      <div className="container mx-auto mt-10">
        <div className="flex flex-wrap gap-4 justify-center textCard">
          {categories.map((cat, i) => {
            return (
              <span
                key={i}
                className="px-6 py-3 rounded-full cursor-pointer hover:bg-emerald-600 hover:text-white transition-all duration-200 bg-gray-100 dark:bg-gray-800 dark:text-white text-gray-900 font-semibold text-lg"
              >
                {cat.name}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categoer;
