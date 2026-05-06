import { useMemo } from "react";
import Image from "next/image";
import Container from "@/components/layouts/Container";

// type define for gallery image
interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  customHeight?: string; // Optional custom height for each image
}

const COLUMN_LAYOUT = [4, 3, 2, 3]; // Items per column: 1st(4), 2nd(3), 3rd(2), 4th(3)

const GalleryGridSection: React.FC<{ images: GalleryImage[] }> = ({
  images,
}) => {
  const columns = useMemo(() => {
    return COLUMN_LAYOUT.reduce((acc, count, idx) => {
      const startIndex = COLUMN_LAYOUT.slice(0, idx).reduce(
        (sum, c) => sum + c,
        0,
      );
      const columnImages = images.slice(startIndex, startIndex + count);
      acc.push(columnImages);
      return acc;
    }, [] as GalleryImage[][]);
  }, [images]);

  return (
    <Container>
      <section className="h-241 w-full mt-9">
        <div className="grid grid-cols-4 gap-4 h-full">
          {columns.map((col, idx) => (
            <div key={idx} className="flex flex-col gap-4 h-full justify-around">
              {col.map((img) => (
                <div
                  key={img.id}
                  className="relative overflow-hidden rounded-2xl w-full"
                  style={{
                    height: img.customHeight || `${100 / COLUMN_LAYOUT[idx]}%`,
                  }}
                >
                  <div className="relative h-full w-full">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
};

export default GalleryGridSection;
