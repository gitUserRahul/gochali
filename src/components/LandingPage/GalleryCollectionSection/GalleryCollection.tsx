import Image from "next/image";
import EyeBrowSection from "@/shared/EyeBrowSection";
import Container from "@/components/layouts/Container";

const galleryImages = [
  "/assets/images/gallery/img-1.png",
  "/assets/images/gallery/img-2.png",
  "/assets/images/gallery/img-3.png",
  "/assets/images/gallery/img-4.png",
  "/assets/images/gallery/img-5.png",
  "/assets/images/gallery/img-6.png",
  "/assets/images/gallery/img-7.png",
  "/assets/images/gallery/img-8.png",
  "/assets/images/gallery/img-9.png",
  "/assets/images/gallery/img-10.png",
  "/assets/images/gallery/img-11.png",
  "/assets/images/gallery/img-12.png",
];

const GalleryCollection = () => {
  return (
    <section className="mb-[80px] text-center px-4">
      <Container>
      {/* Heading */}
      <div className="flex flex-col gap-2 mb-10">
        <EyeBrowSection
          eyebrowTitle="Gallery"
          className="before:-translate-x-1/2 before:left-1/2"
        />
        <h3 className="text-4xl small-caps">From our Collections</h3>
      </div>

      {/* Pinterest Grid */}
      <div className="columns-2 sm:columns-3 lg:columns-4 gap-5 space-y-5">
        {galleryImages.map((img, index) => (
          <div
            key={index}
            className="break-inside-avoid overflow-hidden rounded-sm"
          >
            <Image
              src={img}
              alt={`Gallery ${index + 1}`}
              width={500}
              height={700}
              className="w-full h-auto object-cover rounded-2xl hover:scale-105 transition duration-500"
            />
          </div>
        ))}
      </div>
      </Container>
    </section>
  );
};

export default GalleryCollection;