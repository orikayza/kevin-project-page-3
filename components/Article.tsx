import Link from "next/link";
import Image from "next/image";

export default function Article() {
  return (
    <section className="border-b-4 border-dotted border-b-emerald-400 px-4 py-30 md:mx-auto md:max-w-300 md:px-6 md:py-36">
      <article className="mx-auto max-w-100 lg:grid lg:max-w-220 lg:grid-cols-2 lg:gap-x-8">
        <div className="mb-8 md:max-w-120 lg:order-2 lg:mb-0">
          <div className="mb-4 h-auto rounded-sm border-5 border-t-pink-400/90 border-r-orange-400/90 border-b-cyan-400/90 border-l-emerald-400/90 p-2 lg:mb-6">
            <Image
              src="/white-board-planning.png"
              width={1400}
              height={720}
              alt="Project Planning"
              className="rounded-md"
            />
          </div>

          <ul className="space-y-2 divide-y divide-cyan-200/40 text-[0.84375rem]">
            <li className="pb-2">
              <span className="font-semibold text-cyan-300">Kevin-Bluey</span> -
              Life is Great by -
              <span className="font-semibold text-cyan-300"> Kevin</span>
            </li>

            <li className="pb-2">
              <span className="font-semibold text-cyan-300">Kevin-Bluey</span> -
              Time is Gold by -
              <span className="font-semibold text-cyan-300"> Kevin</span>
            </li>

            <li className="pb-2">
              <span className="font-semibold text-cyan-300">Kevin-Bluey</span> -
              What are you eating at by -
              <span className="font-semibold text-cyan-300"> Kevin</span>
            </li>

            <li>
              <span className="font-semibold text-cyan-300">Kevin-Bluey</span> -
              What are you doing by -
              <span className="font-semibold text-cyan-300"> Kevin</span>
            </li>
          </ul>
        </div>

        <div className="lg:order-1">
          <div className="mb-3.5 flex items-center gap-x-2.5 md:mb-4.5">
            <Image
              src="/walmart.svg"
              width={32}
              height={32}
              alt=""
              className="size-8"
            />

            <h2 className="font-raleway text-[1.25rem] font-semibold md:text-[1.5rem]">
              Project Plan by
              <span className="font-semibold text-cyan-300"> Kevin</span>
            </h2>
          </div>

          <div className="mb-4 text-neutral-200 md:mb-6">
            <p className="mb-3.5 md:mb-4.5">
              Never let distance slow down your productivity. Access your
              projects, manage tasks, and keep your workflow moving wherever you
              go.
            </p>

            <p>
              Stay connected to your work from any device. Organize projects,
              collaborate with your team, and keep everything within reach
              wherever life takes you.
            </p>
          </div>

          <div className="inline-block">
            <Link href="#" className="text-cyan-200 hover:text-blue-400">
              <div className="inline-block border-b-2 border-b-cyan-200 pb-2.5">
                <span className="inline-block pr-1.5">See how it works</span>

                <span className="inline-block align-middle">
                  <Image
                    src="/icon-arrow.svg"
                    width={20}
                    height={20}
                    alt=""
                    className="size-5"
                  />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </article>
    </section>
  );
}
