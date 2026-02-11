import React from "react";
import ShortenLinkForm from "./ShortenLinkForm.jsx";
import InfoPanel from "./InfoPanel.jsx";

const Features = () => {
  return (
    <section id="features" className="flex flex-col md:flex-row items-start md:items-center my-10 px-4 gap-10">
      <InfoPanel />
      <ShortenLinkForm />
    </section>
  );
};

export default Features;
