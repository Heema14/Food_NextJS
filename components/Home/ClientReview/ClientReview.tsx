"use client";

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReviewCards from "./ReviewCards";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 764 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
  },
};

const ClientReview = () => {
  return (
    <section className="py-16">
      <h1 className="text-xl sm:text-2xl text-center font-extrabold">
        What people say about us
      </h1>
      <div className="mt-16 container mx-auto">
        <Carousel
          showDots={false}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={4000}
        >
          <ReviewCards
            reviewTitle="Great Work"
            userName="Heema Joker"
            userImg="/images/c1.png"
            role="UI UX Designer"
          />
          <ReviewCards
            reviewTitle="Creative Work"
            userName="Will smith"
            userImg="/images/c2.png"
            role="Web Developer"
          />
          <ReviewCards
            reviewTitle="Awesam Work"
            userName="Joe Htabe"
            userImg="/images/c3.png"
            role="Full Stack Developer"
          />
          <ReviewCards
            reviewTitle="Awesam Work"
            userName="Memo"
            userImg="/images/c1.png"
            role="Full Stack Developer"
          />
          <ReviewCards
            reviewTitle="Awesam Work"
            userName="Ibrahim"
            userImg="/images/c2.png"
            role="Full Stack Developer"
          />
          <ReviewCards
            reviewTitle="Awesam Work"
            userName="Teta"
            userImg="/images/c1.png"
            role="Full Stack Developer"
          />
        </Carousel>
      </div>
    </section>
  );
};

export default ClientReview;
