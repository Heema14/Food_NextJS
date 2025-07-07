import React from "react";

const ServicesDetailsPage = async ({ params }) => {
  const id = (await params).id;

  return <div>ServicesDetailsPage {id}</div>;
};

export default ServicesDetailsPage;
