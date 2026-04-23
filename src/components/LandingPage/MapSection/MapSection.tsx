import Image from "next/image";

const MapSection = () => {
  return (
    <section className="relative min-h-150 h-full mb-20">
      <Image
        fill
        className="object-cover"
        alt="showing Tharu settlements across the map"
        src="/assets/images/tharu-map.svg"
      />
    </section>
  );
};

export default MapSection;
