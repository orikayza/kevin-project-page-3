import Image from "next/image";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

type StatusChange = {
  from: string;
  to: string;
};

type TimelineSubItem = {
  icon: React.ReactNode;
  text: string;
};

type TimelineItemProps = {
  icon: React.ReactNode;
  title: string;
  details?: string;
  statusChange?: StatusChange;
  subItems?: TimelineSubItem[];
  isLast?: boolean;
};

export type ProjectActivityCardProps = {
  title: string;
  description: string;
  timelineItems: Omit<TimelineItemProps, "isLast">[];
};

const TimelineItem = function ({
  icon,
  title,
  details,
  statusChange,
  subItems,
  isLast = false,
}: TimelineItemProps) {
  return (
    <div className="relative flex items-start">
      {/* Dotted line connecting timeline items */}
      {!isLast && (
        <div
          className="absolute top-9 left-3.5 h-[calc(100%-0.625rem)] w-px border-l-2 border-dashed border-emerald-300/80"
          aria-hidden="true"
        />
      )}

      {/* Icon */}
      <div className="bg-background ring-background flex size-7 items-center justify-center rounded-full ring-4">
        {icon}
      </div>

      {/* Content */}
      <div className="ml-4 flex-1">
        <p className="text-foreground font-semibold">{title}</p>

        {details && <p className="text-muted-foreground text-sm">{details}</p>}

        {/* Status Change Indicator */}
        {statusChange && (
          <div className="mt-2 inline-flex items-center gap-2 border-l-3 border-l-emerald-300/80 bg-neutral-950 px-2 py-1 text-xs font-medium">
            <span>{statusChange.from}</span>

            <ArrowRight className="size-3" />

            <span>{statusChange.to}</span>
          </div>
        )}

        {/* Sub-items list */}
        {subItems && (
          <ul className="mt-2 space-y-2">
            {subItems.map((item, index) => (
              <li
                key={index}
                className="text-muted-foreground flex items-center gap-2 text-sm"
              >
                {item.icon}

                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export function ProjectActivityCard({
  description,
  timelineItems,
}: ProjectActivityCardProps) {
  return (
    <Card className="font-opensans rounded-none border-b-3 border-dashed border-orange-400 pt-4 shadow-none ring-0">
      <CardHeader className="px-4 py-2">
        <div className="flex items-start justify-between">
          <div>
            <div className="mb-2.5 flex gap-x-4 border-b pb-2.5">
              <div className="rounded-sm bg-white p-1">
                <Image src="/aws.svg" width={35} height={35} alt="" />
              </div>

              <div className="rounded-sm border px-3 py-1">
                <span className="font-raleway inline-block align-bottom text-xl leading-[1.6] font-semibold text-emerald-400">
                  SpaceX
                </span>
              </div>
            </div>

            <p className="text-neutral-200">{description}</p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="px-4 pb-6">
        <div className="space-y-6">
          {timelineItems.map((val, i) => (
            <div key={i}>
              <TimelineItem {...val} isLast={i === timelineItems.length - 1} />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
