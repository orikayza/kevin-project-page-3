import Image from "next/image";

import { EmblaCarousel } from "@/components/ui/embla-carousel";
import ProjectActivityDemo from "@/components/ui/project-activity-demo";

export default function Testimonials() {
  return (
    <section className="border-b-4 border-dotted border-b-emerald-400 px-4 py-24 md:mx-auto md:max-w-300 md:px-6">
      <div className="mx-auto max-w-100 md:max-w-186">
        <div className="bg-navy-800 mb-6 flex items-center gap-x-3.5 rounded-md border border-l-3 border-white/10 border-l-cyan-300 p-3">
          <Image src="/group.svg" width={35} height={35} alt="" className="" />

          <div>
            <h4 className="font-superadorable inline-block align-bottom text-3xl leading-[0.6] tracking-wider">
              Testimonials
            </h4>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-y-8 pb-16 md:grid-cols-2 md:gap-x-8">
          <div className="bg-navy-800 rounded-md border border-l-3 border-white/10 border-l-pink-300/80 p-6">
            <blockquote>
              <p className="mb-6 text-sm">
                Fylo has improved our team productivity by an order of
                magnitude. Since making the switch our team has become a
                well-oiled collaboration machine.
              </p>

              <div className="flex items-center gap-x-2.5">
                <Image
                  src="/profile-1.jpg"
                  width={50}
                  height={50}
                  alt=""
                  className="rounded-full border-2 border-dashed border-pink-400 p-1.5"
                />

                <div className="flex flex-col">
                  <h3 className="text-sm">Satish Patel</h3>

                  <span className="text-[0.8125rem] text-neutral-200">
                    Founder & CEO, Huddle
                  </span>
                </div>
              </div>
            </blockquote>
          </div>

          <div className="bg-navy-800 rounded-md border border-l-3 border-white/10 border-l-orange-300/80 p-6">
            <blockquote>
              <p className="mb-6 text-sm">
                Fylo has improved our team productivity by an order of
                magnitude. Since making the switch our team has become a
                well-oiled collaboration machine.
              </p>

              <div className="flex items-center gap-x-2.5">
                <Image
                  src="/profile-2.jpg"
                  width={50}
                  height={50}
                  alt=""
                  className="rounded-full border-2 border-dashed border-orange-400 p-1.5"
                />

                <div className="flex flex-col">
                  <h3 className="text-sm">Bruce Mckenzie</h3>

                  <span className="text-[0.8125rem] text-neutral-200">
                    Founder & CEO, Huddle
                  </span>
                </div>
              </div>
            </blockquote>
          </div>

          <div>
            <div className="bg-navy-800 mb-8 rounded-md border border-l-3 border-white/10 border-l-emerald-300/80 p-6">
              <blockquote>
                <p className="mb-6 text-sm">
                  Fylo has improved our team productivity by an order of
                  magnitude. Since making the switch our team has become a
                  well-oiled collaboration machine.
                </p>

                <div className="flex items-center gap-x-2.5">
                  <Image
                    src="/profile-3.jpg"
                    width={50}
                    height={50}
                    alt=""
                    className="rounded-full border-2 border-dashed border-emerald-400 p-1.5"
                  />

                  <div className="flex flex-col">
                    <h3 className="text-sm">Iva Boyd</h3>

                    <span className="text-[0.8125rem] text-neutral-200">
                      Founder & CEO, Huddle
                    </span>
                  </div>
                </div>
              </blockquote>
            </div>

            <div>
              <div className="bg-navy-800 mb-6 flex items-center gap-x-3.5 rounded-md border border-l-3 border-white/10 border-l-cyan-300 p-3">
                <Image src="/amusement.svg" width={35} height={35} alt="" />

                <div>
                  <h4 className="font-superadorable inline-block align-bottom text-3xl leading-[0.6] tracking-wider">
                    Offices
                  </h4>
                </div>
              </div>

              <EmblaCarousel />
            </div>
          </div>

          <div>
            <div className="futuristic-fragment">
              <header className="futuristic-fragment__upper">
                <div className="futuristic-fragment__header">
                  <span className="futuristic-fragment__category-wrap">
                    <span
                      className="futuristic-fragment__fiducial"
                      aria-hidden="true"
                    />

                    <span className="futuristic-fragment__category">
                      PROJECT MANAGERS CITATION
                    </span>
                  </span>

                  <span
                    className="futuristic-fragment__emblem"
                    aria-hidden="true"
                  >
                    <span className="futuristic-fragment__emblem-line" />
                    <span className="futuristic-fragment__emblem-glyph" />
                  </span>
                </div>

                <div
                  className="futuristic-fragment__datum"
                  aria-hidden="true"
                />

                <div className="futuristic-fragment__body">
                  <ProjectActivityDemo />
                </div>
              </header>

              <div className="futuristic-fragment__joint" aria-hidden="true">
                <div className="futuristic-fragment__bridge">
                  <span className="futuristic-fragment__bridge-slot">
                    <span className="futuristic-fragment__bridge-bar"></span>
                  </span>
                </div>
              </div>

              <div className="futuristic-fragment__lower">
                <div className="futuristic-fragment__footer">
                  <span className="futuristic-fragment__meta">
                    2027 — VOL. 01
                  </span>

                  <span className="futuristic-fragment__status">
                    <span
                      className="futuristic-fragment__idle-tick"
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
