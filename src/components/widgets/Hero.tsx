'use client';

import Image from 'next/image';
import { HeroProps } from '~/shared/types';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';

const Hero = ({ title, subtitle, tagline, callToAction, callToAction2, images = [] }: HeroProps) => {
  return (
    <section id="heroOne">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Ajoute ici les titres et boutons CTA si besoin */}
      </div>
      
      {images.length > 0 && (
        <div className="relative m-auto max-w-5xl">
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            autoplay={{ delay: 5000 }}
            loop
            className="w-full h-auto"
          >
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <Image
                  className="mx-auto h-auto w-full rounded-md bg-gray-400 dark:bg-slate-700"
                  src={img.src}
                  alt={img.alt}
                  width={1024}
                  height={207}
                  sizes="(max-width: 64rem) 50vw, 1024px"
                  loading="eager"
                  placeholder="blur"
                  priority
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </section>
  );
};

export default Hero;
