"use client";

import {
  useEffect,
  useRef,
  useState,
  type ElementType,
  type ReactNode,
} from "react";

type Props = {
  children: ReactNode;
  /** Animation kind. */
  as?: "fade-up" | "fade-in" | "fade-left" | "fade-right";
  /** Delay in milliseconds. */
  delay?: number;
  /** Render as another tag. */
  tag?: ElementType;
  className?: string;
  /** Only animate once (default true). */
  once?: boolean;
};

export function Reveal({
  children,
  as = "fade-up",
  delay = 0,
  tag: Tag = "div",
  className = "",
  once = true,
}: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) obs.disconnect();
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [once]);

  const initial = {
    "fade-up": "opacity-0 translate-y-6",
    "fade-in": "opacity-0",
    "fade-left": "opacity-0 -translate-x-6",
    "fade-right": "opacity-0 translate-x-6",
  }[as];

  return (
    <Tag
      ref={ref as never}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:translate-x-0 motion-reduce:opacity-100 motion-reduce:transition-none ${
        visible ? "opacity-100 translate-x-0 translate-y-0" : initial
      } ${className}`}
    >
      {children}
    </Tag>
  );
}
