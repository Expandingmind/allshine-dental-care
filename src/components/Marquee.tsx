"use client";

import { Children, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  direction?: "left" | "right";
  durationSeconds?: number;
  className?: string;
};

export function Marquee({
  children,
  direction = "left",
  durationSeconds = 80,
  className = "",
}: Props) {
  const items = Children.toArray(children);
  const animation =
    direction === "left"
      ? "animate-[marquee_var(--d)_linear_infinite]"
      : "animate-[marquee-reverse_var(--d)_linear_infinite]";

  return (
    <div
      className={`relative overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,black_8%,black_92%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_8%,black_92%,transparent_100%)] ${className}`}
    >
      <div
        className={`flex w-max ${animation} hover:[animation-play-state:paused] motion-reduce:animate-none`}
        style={{ ["--d" as string]: `${durationSeconds}s` } as React.CSSProperties}
      >
        {items.map((node, i) => (
          <div key={`a-${i}`} className="shrink-0 pr-6">
            {node}
          </div>
        ))}
        {items.map((node, i) => (
          <div key={`b-${i}`} className="shrink-0 pr-6" aria-hidden>
            {node}
          </div>
        ))}
      </div>
    </div>
  );
}
