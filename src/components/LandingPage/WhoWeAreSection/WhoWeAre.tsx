import React from "react";
import Container from "@/components/layouts/Container.tsx";
import Button from "@/shared/Button";
import Image from "next/image";
import EyeBrowSection from "@/shared/EyeBrowSection.tsx";

const WhoWeAre = () => {
  return (
    <section className="py-40">
      <Container>
        <div className="flex justify-between">
          <div className="flex gap-0">
            <div className="max-w-110">
              <div className="flex flex-col gap-3.75 pb-8.5 mt-21">
                <EyeBrowSection
                  eyebrowTitle="Who We Are"
                  className="items-center"
                />
                {/* <span className="text-primary-color font-bold text-[20px] relative pb-2 before:absolute before:bottom-0 before:w-6.5 before:h-0.5 before:bg-primary-color ">
                  Who We Are
                </span> */}
                <h2 className="font-medium relative z-40 text-4xl leading-12.5 min-w-143">
                  Tharu Heritage Carried <br />
                  Through Time and Gene
                  <span className="text-white ps-1.25">rations</span>
                </h2>
                <p className="text-[15px] leading-6.75">
                  The Tharu community has historically flourished in the Terai,
                  building a way of life closely connected to land, wildlife,
                  and seasonal rhythms. Their knowledge of farming, craftwork,
                  architecture, and healing is passed down through family and
                  ritual.{" "}
                </p>
              </div>
              <Button
                buttonText="ABOUT US"
                className=" bg-red-400 max-w-39.5"
              />
            </div>

            <div className="relative">
              <Image
                src="/assets/images/about-img.png"
                width={500}
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
