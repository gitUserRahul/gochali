import EyeBrowSection from "@/shared/EyeBrowSection.tsx";

const GalleryCollection = () => {
  return (
    <section className="mb-[80px] text-center">
      <div className="flex flex-col gap-2">
        <EyeBrowSection
          eyebrowTitle="Gallery"
          className="before:-translate-x-1/2 before:left-1/2"
        />
        <h3 className="text-4xl small-caps">From our Collections</h3>
      </div>
    </section>
  );
};

export default GalleryCollection;
