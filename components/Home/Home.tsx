import React from "react";
import Hero from "./Hero/Hero";
import Restaurant from "./Restaurant/Restaurant";
import Categoer from "./Categoer/Categoer";
import HowItWork from "./HowItWork/HowItWork";
import About from "./About/About";
import Feature from "./Feature/Feature";
import MobileApp from "./MobileApp/MobileApp";
import ClientReview from "./ClientReview/ClientReview";

const Home = () => {
  return (
    <main className="overflow-hidden px-2.5 sm:px-0">
      <Hero />
      <Restaurant />
      <Categoer />
      <HowItWork />
      <About />
      <Feature />
      <ClientReview />
      <MobileApp />
    </main>
  );
};

export default Home;
