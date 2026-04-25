import React from "react";
import EyeBrowSection from "@/shared/EyeBrowSection";
import Container from "@/components/layouts/Container";
import GalleryCard from "./HeritageCard";
import Button from "@/shared/Button";

const HERITAGE_CONTENT = [
  {
    category: "Cuisines",
    title: "Flavors of Tharus",
    image: "/assets/images/gallery/flavor-of-tharu.svg",
  },
  {
    category: "Attires",
    title: "Dressed in Tradition",
    image: "/assets/images/gallery/tradition-dress.svg",
  },
  {
    category: "Tools/Crafts",
    title: "Built by Hands",
    image: "/assets/images/gallery/build-by-hands.svg",
  },
];

const HeritageSection = () => {
  return (
    <section className="py-[80px] bg-[#030712] mb-20">
      <Container>
        <div className="flex flex-col gap-2 pb-8 text-center">
          <EyeBrowSection
            eyebrowTitle="Our Heritage"
            className="before:left-1/2 before:-translate-x-1/2 "
          />
          <h3 className="text-4xl text-white">
            Discover the pillars of Tharu culture
          </h3>
        </div>
        <div className="flex gap-7 mb-25">
          {HERITAGE_CONTENT.map((item, index) => (
            <GalleryCard
              key={index}
              category={item.category}
              title={item.title}
              image={item.image}
            />
          ))}
        </div>

        <div className="flex justify-center w-full">
          <Button
            buttonText="See all Collections"
            className="max-w-60.5"
            variant="red"
          />
        </div>
      </Container>
    </section>
  );
};

export default HeritageSection;
