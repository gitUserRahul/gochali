import React from "react";
import Container from "@/components/layouts/Container";
import Image from "next/image";
import SectionWrapper from "@/components/layouts/SectionWrapper";

const WhoWeAre = () => {
  return (
    <section className="py-20">
      <Container>
        <div className="flex justify-between">
          <div className="flex gap-4">
            {/* left content section */}
            <div className="max-w-105 w-full flex flex-col gap-4  mt-21">
              <SectionWrapper
                eyebrowTitle="Who we are"
                headerClassname="gap-0"
                heading={
                  <>
                    Tharu Heritage Carried <br />
                    Through Time and Gene
                    <span className="text-white">rations</span>
                  </>
                }
                headingClassName="relative z-40 font-medium mt-3 text-black leading-12.5"
                paragraph="The Tharu community has historically flourished in the Terai,
                  building a way of life closely connected to land, wildlife,
                  and seasonal rhythms. Their knowledge of farming, craftwork,
                  architecture, and healing is passed down through family and
                  ritual."
                buttonText="ABOUT US"
                variant="dark"
                buttonClassName=" bg-secondary-color"
                wrapperClassName="flex flex-col gap-[32px]"
              />
            </div>

            {/* right content section  */}
            <div className="relative">
              <Image
                src="/assets/images/about-img.png"
                width={474}
                height={500}
                alt="Tharu women photo"
              />

              <div className="max-w-83 flex gap-4.75 absolute bottom-17 -right-54 border border-[#DADADA]  bg-white rounded-[16px] p-5">
                <Image
                  src="/assets/images/frame.svg"
                  alt="Tharu Heritage history"
                  width={56}
                  height={56}
                />
                <div>
                  <h3 className="font-medium text-xl leading-5 pb-2.75">
                    Rooted in Nature
                  </h3>
                  <p className="text-[15px] leading-5 tracking-[1.5%] text-[#555555]">
                    Each tradition blooms like the forests we inherit.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* center image of who we are */}
          <div className="flex flex-col gap-3.75 max-w-65 w-full pe-9.5 mt-7.75">
            <Image
              width={1000}
              height={1000}
              src="/assets/images/who-we-are.svg"
              alt="Tharu Heritage"
              className="border rounded-[16px] border-[#DADADA]"
            />
            <p className="text-[15px] text-[#555555]">
              Handcrafted in Tradition — Every weave carries skill, patience,
              and ancestral wisdom.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhoWeAre;
