import React from "react";
import FeatureCards from "./FeatureCards";

const Feature = () => {
  return (
    <section className="py-16" id="Features">
      <h1 className="text-xl sm:text-2xl text-center font-extrabold">
        Meet our Qualty Features
      </h1>
      <div className="container mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <FeatureCards icon="/images/f1.svg" title="Analytics Business" />
        <FeatureCards icon="/images/f2.svg" title="Wide Coverage Map" />
        <FeatureCards icon="/images/f3.svg" title="Largest People" />
        <FeatureCards icon="/images/f4.svg" title="Artifical Inteligance" />
        <FeatureCards icon="/images/f5.svg" title="Trusted & Secure" />
        <FeatureCards icon="/images/f6.svg" title="Mobile Apps" />
      </div>
    </section>
  );
};

export default Feature;
