import Image from "next/image";

export default function Features() {
  return (
    <section className="border-b-4 border-dotted border-b-emerald-400 px-4 py-30 md:mx-auto md:max-w-300 md:px-6 md:py-36">
      <div className="mx-auto max-w-100 md:max-w-220">
        <div className="mx-auto mb-10 max-w-100">
          <Image
            src="/aws-features/aws-background.png"
            width={799}
            height={760}
            alt="AWS - All around certified of certificate"
          />
        </div>

        <ul className="grid grid-cols-1 gap-y-25 text-center md:grid-cols-2 md:gap-20">
          <li>
            <div className="flex h-full flex-col justify-between gap-y-6">
              <Image
                src="/aws-features/aws-business.png"
                width={1080}
                height={1080}
                alt="AWS - Business"
                className="mx-auto size-60"
              />

              <div>
                <h2 className="font-raleway mb-3.5 text-[1.25rem] font-semibold md:mb-4 md:text-[1.5rem]">
                  Access your project, anywhere
                </h2>

                <p className="text-neutral-200">
                  Access your projects from any smartphone, tablet, or computer,
                  giving you the flexibility to stay connected and manage your
                  work wherever you go.
                </p>
              </div>
            </div>
          </li>

          <li>
            <div className="flex h-full flex-col justify-between gap-y-6 md:gap-y-0">
              <Image
                src="/aws-features/aws-devops.png"
                width={672}
                height={352}
                alt="AWS - AI Business Strategist"
                className="mx-auto h-31.25 w-60 md:mt-10 md:h-45 md:w-86.25"
              />

              <div>
                <h2 className="font-raleway mb-3.5 text-[1.25rem] font-semibold md:mb-4 md:text-[1.5rem]">
                  Project you can trust
                </h2>

                <p className="text-neutral-200">
                  Keep your projects and important files protected with reliable
                  security, giving you peace of mind and confidence in every
                  step of your workflow.
                </p>
              </div>
            </div>
          </li>

          <li>
            <div className="flex h-full flex-col justify-between gap-y-6">
              <Image
                src="/aws-features/aws-networking.png"
                width={600}
                height={600}
                alt="AWS - Advanced Networking"
                className="mx-auto size-31.25 md:size-45"
              />

              <div>
                <h2 className="font-raleway mb-3.5 text-[1.25rem] font-semibold md:mb-4 md:text-[1.5rem]">
                  Real-time project collaboration
                </h2>

                <p className="text-neutral-200">
                  Stay connected with your team through seamless real-time
                  collaboration. Share updates, exchange ideas, coordinate
                  tasks, and keep everyone aligned as your projects move
                  forward.
                </p>
              </div>
            </div>
          </li>

          <li>
            <div className="flex h-full flex-col justify-between gap-y-6">
              <Image
                src="/aws-features/aws-security.png"
                width={600}
                height={600}
                alt="AWS - Security"
                className="mx-auto size-31.25 md:size-45"
              />

              <div>
                <h2 className="font-raleway mb-3.5 text-[1.25rem] font-semibold md:mb-4 md:text-[1.5rem]">
                  Store and type of project
                </h2>

                <p className="text-neutral-200">
                  Organize and store different types of projects in one
                  centralized workspace. Keep your files, resources, and
                  important information structured, secure, and easy to access
                  whenever needed.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
