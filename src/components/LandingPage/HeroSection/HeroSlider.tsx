"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
const HERO_BG_OVERLAY = ["bg-banner-one", "bg-banner-two"];

const HeroSlider = () => {
  return (
    <Swiper
      modules={[Autoplay, EffectFade]}
      autoplay={{ delay: 4000 }}
      loop={false}
      effect={"fade"}
      // fadeEffect={{ crossFade: true }}
      speed={2000}
      className="w-full h-full"
    >
      {HERO_BG_OVERLAY.map((bg, index) => (
        <SwiperSlide key={index}>
          <div
            className={`w-full h-full ${bg} bg-cover bg-no-repeat bg-center `}
          ></div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSlider;
