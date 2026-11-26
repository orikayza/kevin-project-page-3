import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-navy-950">
      <div className="px-4 py-10 md:px-6">
        <div className="mx-auto grid max-w-100 grid-cols-1 md:max-w-186 md:grid-cols-2 md:gap-10 lg:max-w-300 lg:grid-cols-3">
          <ul className="pb-4 md:pb-0">
            <li className="pb-7">
              <div className="flex items-center gap-x-2.5">
                <Image
                  src="/logo.svg"
                  alt="IGYB"
                  width={43}
                  height={10}
                  className="size-8.75"
                />
                <span className="text-2xl font-semibold text-emerald-300">
                  I GOT YOU BRO
                </span>
              </div>
            </li>

            <li className="flex items-start gap-x-4">
              <Image
                src="/icon-location.svg"
                width={13}
                height={18}
                alt=""
                className="mt-1.5 h-4.75 w-3.5"
              />

              <p className="text-[0.9375rem] text-neutral-200">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium, aperiam unde vero asperiores suscipit alias tempore
                sunt non cupiditate.
              </p>
            </li>
          </ul>

          <div className="md:self-center md:justify-self-end lg:self-start lg:justify-self-center">
            <address className="pb-10 text-[0.9375rem] text-neutral-200 not-italic md:pb-0">
              <ul className="flex flex-col gap-y-3">
                <li className="flex items-center gap-x-4">
                  <Image
                    src="/icon-phone.svg"
                    width={18}
                    height={18}
                    alt=""
                    className="size-4.5"
                  />

                  <Link href="tel:+1-543-123-4567">+1-543-123-4567</Link>
                </li>

                <li className="flex items-center gap-x-4">
                  <Image
                    src="/icon-email.svg"
                    width={20}
                    height={16}
                    alt=""
                    className="h-3.5 w-4.5"
                  />

                  <div className="inline-block align-bottom leading-[1.3]">
                    <Link href="mailto:example@project.com">
                      example@project.com
                    </Link>
                  </div>
                </li>
              </ul>
            </address>
          </div>

          <div className="lg:place-items-end">
            <ul className="flex flex-col gap-y-3 pb-7 text-[0.9375rem] text-neutral-200 md:pb-0 lg:items-end">
              <li>
                <Link href="#">About Us</Link>
              </li>
              <li>
                <Link href="#">Jobs</Link>
              </li>
              <li>
                <Link href="#">Press</Link>
              </li>
              <li>
                <Link href="#">Blog</Link>
              </li>
            </ul>
          </div>

          <div>
            <ul className="flex flex-col gap-y-3 pb-14 text-[0.9375rem] text-neutral-200 md:items-end md:pb-0 lg:items-start">
              <li>
                <Link href="#">Contact Us</Link>
              </li>

              <li>
                <Link href="#">Terms</Link>
              </li>

              <li>
                <Link href="#">Privacy</Link>
              </li>
            </ul>
          </div>

          <div className="pb-10 md:pb-0 lg:place-content-end">
            <ul className="flex gap-x-3 lg:justify-center">
              <li className="rounded-md border border-white/10 p-1">
                <Link href="#">
                  <Image
                    src="/facebook.svg"
                    width={667}
                    height={667}
                    alt=""
                    className="size-6.25"
                  />
                </Link>
              </li>

              <li className="rounded-md border border-white/10 p-1">
                <Link href="#">
                  <Image
                    src="/twitter.svg"
                    width={1200}
                    height={1227}
                    alt=""
                    className="size-6.25"
                  />
                </Link>
              </li>

              <li className="rounded-md border border-white/10 p-1">
                <Link href="#">
                  <Image
                    src="/instagram.svg"
                    width={265}
                    height={265}
                    alt=""
                    className="size-6.25"
                  />
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:place-self-end">
            <p className="text-lg font-semibold text-emerald-400 lg:text-xl">
              ⏰ || 11 / 26 / 2026
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
