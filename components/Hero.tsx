import Image from "next/image";

import { AnimatedBtn } from "@/components/ui/animated-btn";

export default function Hero() {
  return (
    <section className="border-b-4 border-dotted border-b-emerald-400 px-4 pt-14 pb-20 md:mx-auto md:max-w-300 md:px-6 md:pt-17 md:pb-23 lg:pt-16 lg:pb-21">
      <div className="mx-auto max-w-100 md:max-w-147.5 lg:max-w-160">
        <div className="px-4 pb-6">
          <Image
            src="/google-icons.png"
            alt=""
            width={500}
            height={369}
            priority
            className="md:mx-auto md:h-79.75 md:w-110"
          />
        </div>

        <div className="text-center">
          <h1 className="font-raleway py-7 text-2xl font-semibold md:py-12 md:text-[2.125rem] lg:text-4xl">
            All your project by
            <span className="font-semibold text-cyan-300"> "KEVIN" </span> in
            one secure location, accessible anywhere.
          </h1>

          <p className="text-cente pb-8.5 md:pb-15">
            Bring your projects and teams together in one unified platform.
            Organize tasks, streamline collaboration, monitor project progress,
            and manage essential resources securely, all in one centralized
            location accessible anytime and from anywhere.
          </p>

          <div className="pb-16 md:pb-20">
            <AnimatedBtn label="Get Started" />
          </div>

          <div className="lg:hidden">
            <Image
              src="/arrow.svg"
              width={40}
              height={40}
              alt=""
              className="animate-float mx-auto size-10 rotate-180"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
