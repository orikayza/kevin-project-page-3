import Image from "next/image";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ShineBorder } from "@/components/ui/shine-border";
import { SparklesText } from "@/components/ui/sparkles-text";

export default function CTA() {
  return (
    <section className="font-raleway px-4 py-24 md:px-6">
      <div className="mx-auto max-w-100 md:max-w-186">
        <div className="mb-4 flex flex-col gap-y-4 md:flex-row md:gap-x-4">
          <div className="bg-navy-850 relative rounded-md p-4 md:w-[60%]">
            <ShineBorder shineColor={["#666"]} />

            <div className="mb-6 text-center">
              <div className="mb-4 flex items-center gap-x-3.5">
                <div className="flex gap-x-3">
                  <Image
                    src="/grocery.svg"
                    width={28}
                    height={28}
                    alt=""
                    className="size-7"
                  />

                  <Image
                    src="/walmart.svg"
                    width={28}
                    height={28}
                    alt=""
                    className="size-7"
                  />
                </div>

                <h2 className="font-raleway text-base font-semibold text-emerald-400">
                  Get early planning today
                </h2>
              </div>

              <p className="text-sm text-neutral-200">
                It only takes a minute to sign up and our free starter tier is
                extremely generous. If you have any questions, our support team
                would be happy to help you.
              </p>
            </div>

            <div className="flex flex-col gap-y-5">
              <Input
                className="h-10.5 bg-white text-[0.84375rem] text-black"
                placeholder="email@example.com"
                autoComplete="off"
                required
              />

              <Button className="focus-visible:ring-offset-navy-850 h-10.5 cursor-pointer bg-cyan-300 text-[0.8125rem] font-bold hover:bg-cyan-300/90 focus-visible:ring-2 focus-visible:ring-cyan-600 focus-visible:ring-offset-2">
                Get Started For Free
              </Button>
            </div>
          </div>

          <div className="bg-navy-800 rounded-md border border-white/10 p-2 pb-0 md:w-[40%]">
            <Image
              src="/kevin.png"
              width={500}
              height={500}
              alt="CTA - by Kevin"
              className="rounded-sm"
            />

            <SparklesText className="font-superadorable py-2.5 text-center text-[1.375rem] tracking-wider text-cyan-300">
              CTA - by "Kevin"
            </SparklesText>
          </div>
        </div>

        <div className="flex flex-col gap-y-4 md:flex-row md:gap-x-4">
          <div className="bg-navy-850 rounded-md border border-white/10 p-4 md:w-[60%]">
            <div className="">
              <ul className="space-y-2 divide-y divide-cyan-200/40 text-[0.84375rem]">
                <li className="pb-2">
                  <span className="font-semibold text-cyan-300">💛 CIO</span> -
                  Project initialized by -
                  <span className="font-semibold text-cyan-300"> Kevin</span>
                </li>

                <li className="pb-2">
                  <span className="font-semibold text-cyan-300">
                    💛 74-Star
                  </span>{" "}
                  - Project suggested by -
                  <span className="font-semibold text-cyan-300"> Kevin</span>
                </li>

                <li className="pb-2">
                  <span className="font-semibold text-cyan-300">💛 Time</span> -
                  Project developed by -
                  <span className="font-semibold text-cyan-300"> Kevin</span>
                </li>

                <li className="pb-2">
                  <span className="font-semibold text-cyan-300">
                    💛 Gravity
                  </span>{" "}
                  - Project designed architectured by -
                  <span className="font-semibold text-cyan-300"> Kevin</span>
                </li>

                <li className="pb-2">
                  <span className="font-semibold text-cyan-300">💛 Cheng</span>{" "}
                  - Project designed validated by -
                  <span className="font-semibold text-cyan-300"> Kevin</span>
                </li>

                <li className="font-semibold">
                  <p className="mb-2">
                    Never let distance slow down your productivity. Access your
                    projects, manage tasks, and keep your workflow moving
                    wherever you go.
                  </p>

                  <p>
                    Stay connected to your work from any device. Organize
                    projects, collaborate with your team, and keep everything
                    within reach wherever life takes you.
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-navy-800 flex flex-col justify-between rounded-md border border-white/10 p-2 pb-0 md:w-[40%]">
            <Image
              src="/states-united-flag.jpg"
              width={1080}
              height={1080}
              alt="SU - States United Flag"
              className="rounded-sm"
            />

            <SparklesText className="font-superadorable py-2.5 text-center text-[1.375rem] tracking-wider text-cyan-300 md:border-t-2 md:border-dashed md:border-t-white">
              "States United Flag"
            </SparklesText>
          </div>
        </div>
      </div>
    </section>
  );
}
