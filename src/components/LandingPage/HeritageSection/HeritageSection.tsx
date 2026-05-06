import React from "react";
import Container from "@/components/layouts/Container";
import GalleryCard from "./HeritageCard";
import SectionWrapper from "@/components/layouts/SectionWrapper";

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
        <SectionWrapper
          wrapperClassName="text-center"
          headerClassname="pb-8"
          eyebrowTitle="Our Heritage"
          className="before:left-1/2 before:-translate-x-1/2 "
          headingAs="h3"
          heading="Discover the pillars of Tharu culture"
          buttonText="See all Collections"
          variant="red"
          buttonWrapperClassName="flex justify-center w-full"
        >
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
        </SectionWrapper>
      </Container>
    </section>
  );
};

export default HeritageSection;
