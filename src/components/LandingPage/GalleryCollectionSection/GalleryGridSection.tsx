import { useMemo } from "react";
import Image from "next/image";
import Container from "@/components/layouts/Container";

const COLUMN_LAYOUT = [4, 3, 2, 3]; // Items per column: 1st(4), 2nd(3), 3rd(2), 4th(3)

const GalleryGridSection = ({ images }) => {
  const columns = useMemo(() => {
    let lastIndex = 0;
    return COLUMN_LAYOUT.map((count) => {
      const columnImages = images.slice(lastIndex, lastIndex + count);
      lastIndex += count;
      return columnImages;
    });
  }, [images]);

  return (
    <Container>
      <section className="h-241 w-full mt-9">
        <div className="grid grid-cols-4 gap-4 h-full">
          {columns.map((col, idx) => (
            <div
              key={idx}
              className="flex flex-col gap-4 h-full overflow-y-auto no-scrollbar"
            >
              {col.map((img) => (
                <div
                  key={img.id}
                  className="relative overflow-hidden rounded-2xl w-full"
                  style={{ height: `${100 / COLUMN_LAYOUT[idx]}%` }}
                >
                  <div className="relative h-full w-full">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                      sizes="(max-w-768px) 100vw, 25vw"
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
