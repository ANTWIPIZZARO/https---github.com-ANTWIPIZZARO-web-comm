import React from "react";
import Header from "../../Components/Header/Head";
import { placeholder, placeholder2 } from "../../assets/images";
import Card from "../../Components/Cards/Card";
import { FAQ, ABOUT_DATA } from "../../Components/Data/About";
import Faq from "../../Components/Faq/index";

function About() {
  return (
    <div className="flex flex-col my-20 w-full">
      
      <Header
        title="Make corporate communication simple and productive"
        message="Deliver standout customer service by putting experts, tools and information that your agents needs at their fingertips."
        icon={placeholder}
        styling="max-w-6xl m-auto max-lg:px-5"
      />
      {/* about list section */}
      <section className="flex flex-col items-center justify-start px-10 mt-20 max-md:p-0">
        <Card
          cardData={ABOUT_DATA}
          icon={placeholder2}
          size="w-full h-96 max-lg:h-80 bg-base-200"
          hasList
        />
      </section>
      
      <section className="my-28 px-10 flex flex-col max-lg:p-0">
        <Faq data={FAQ} />
      </section>
    </div>
  );
}

export default About;
