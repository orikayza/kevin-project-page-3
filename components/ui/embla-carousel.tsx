"use client";

import Image from "next/image";

import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
// import { DotButton, useDotButton } from "./embla-carousel-dot-botton";

// import { cn } from "@/lib/utils";

type PropType = {
  options?: EmblaOptionsType;
};

export function EmblaCarousel(props: PropType) {
  const { options } = props;
  const imgObjInfo = [
    {
      imgSrc: "/south-korea.jpg",
      originalWidth: 564,
      originalHeight: 705,
      altTitle: "Corea",
    },

    {
      imgSrc: "/coffee.jpg",
      originalWidth: 736,
      originalHeight: 1308,
      altTitle: "Coffee",
    },

    {
      imgSrc: "/bed.png",
      originalWidth: 477,
      originalHeight: 728,
      altTitle: "Enjoy",
    },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  // const { selectedIndex, scrollSnaps, onDotButtonClick } =
  //   useDotButton(emblaApi);

  return (
    <div>
      {/* Carousel viewport */}
      <div className="relative overflow-hidden rounded-md" ref={emblaRef}>
        {/* Carousel container */}
        <div className="flex touch-pan-y touch-pinch-zoom">
          {imgObjInfo.map((val, i) => (
            // Carousel slide-transforming
            <div
              className="flex-[0_0_100%] transform-[translate3d(0,0,0)]"
              key={i}
            >
              {/* Carousel slide-itself */}
              <div className="h-100">
                <Image
                  src={val.imgSrc}
                  width={val.originalWidth}
                  height={val.originalHeight}
                  alt={val.altTitle}
                />
              </div>

              {/* Carousel faded-overlay */}
              <div className="absolute inset-0 cursor-grab bg-linear-to-t from-black/90 via-transparent to-transparent" />

              {/* Carousel slide-context per image */}
              <figure className="absolute bottom-0 left-0">
                <figcaption className="p-3">
                  <h4 className="font-raleway mb-0.5 text-xl font-semibold">
                    {val.altTitle}
                  </h4>

                  <p className="text-sm text-neutral-200">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Temporibus voluptatem cumque totam dolorem, unde harum
                  </p>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>

      {/* Carousel dots-button container
      <div className="flex justify-center gap-x-5.5 pt-6">
        {scrollSnaps.map((_, i) => (
          <DotButton
            key={i}
            onClick={() => onDotButtonClick(i)}
            className={cn(
              Carousel each-dots
              "cursor-pointer rounded-full border-2 border-white p-1.5",
              Carousel selected-dot which current slide
              i === selectedIndex && "border-cyan-400",
            )}
          />
        ))}
      </div> */}
    </div>
  );
}
