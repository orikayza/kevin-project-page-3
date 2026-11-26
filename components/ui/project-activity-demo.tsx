"use client";

import {
  ProjectActivityCard,
  ProjectActivityCardProps,
} from "@/components/ui/project-activity";

import { Clock, MessageSquare, User, CheckCircle2 } from "lucide-react";

export default function ProjectActivityDemo() {
  const orderData: Omit<ProjectActivityCardProps, "onContinue"> = {
    title: "Project managers citation",
    description:
      "Project has been completed and feedback request sent to their respective project managers.",
    timelineItems: [
      {
        icon: <Clock className="size-5 text-emerald-300/80" />,
        title: "Project by Kevin",
      },
      {
        icon: <MessageSquare className="size-5 text-orange-300/80" />,
        title: "Project Planning",
        details: "28 February 2026, 9:6 • Huddle",
        subItems: [
          {
            icon: <User className="size-4" />,
            text: "Sent to: Satish Patel",
          },
        ],
      },
      {
        icon: <CheckCircle2 className="size-5 text-pink-300/80" />,
        title: "Project Completed",
        details: "28 June 2026, 6:9 • Bruce Mckenzie",
        statusChange: {
          from: "In progress",
          to: "Completed",
        },
      },
    ],
  };

  return <ProjectActivityCard {...orderData} />;
}
