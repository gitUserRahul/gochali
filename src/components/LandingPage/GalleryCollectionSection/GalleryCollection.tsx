import GalleryGridSection from "./GalleryGridSection";
import SectionWrapper from "@/components/layouts/SectionWrapper";

const GalleryCollection = () => {
  const GALLERY_IMAGES = [
    {
      id: 1,
      src: "/assets/images/gallery-grid/image 1.svg",
      alt: "Tharu Culture 1",
    },
    {
      id: 2,
      src: "/assets/images/gallery-grid/image 2.svg",
      alt: "Tharu Culture 2",
    },
    {
      id: 3,
      src: "/assets/images/gallery-grid/image 3.svg",
      alt: "Tharu Culture 2",
    },
    {
      id: 4,
      src: "/assets/images/gallery-grid/image 4.svg",
      alt: "Tharu Culture 2",
    },
    {
      id: 5,
      src: "/assets/images/gallery-grid/image 5.svg",
      alt: "Tharu Culture 2",
    },
    {
      id: 6,
      src: "/assets/images/gallery-grid/image 6.svg",
      alt: "Tharu Culture 2",
    },
    {
      id: 7,
      src: "/assets/images/gallery-grid/image 7.svg",
      alt: "Tharu Culture 2",
    },
    {
      id: 8,
      src: "/assets/images/gallery-grid/image 8.svg",
      alt: "Tharu Culture 2",
    },
    {
      id: 9,
      src: "/assets/images/gallery-grid/image 9.svg",
      alt: "Tharu Culture 2",
    },
    {
      id: 10,
      src: "/assets/images/gallery-grid/image 10.svg",
      alt: "Tharu Culture 2",
    },
    {
      id: 11,
      src: "/assets/images/gallery-grid/image 11.svg",
      alt: "Tharu Culture 2",
    },
    {
      id: 12,
      src: "/assets/images/gallery-grid/image 12.svg",
      alt: "Tharu Culture 2",
    },
  ];
  return (
    <section className="mb-[80px] text-center">
      <div className="flex flex-col gap-2">
        <SectionWrapper
          eyebrowTitle="Gallery"
          className="before:-translate-x-1/2 before:left-1/2"
          heading="From our Collections"
          headingClassName="text-black"
        />
        <GalleryGridSection images={GALLERY_IMAGES} />
      </div>
    </section>
  );
};

export default GalleryCollection;
