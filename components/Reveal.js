"use client";

import { useEffect, useRef, useState } from "react";

export default function Reveal({
  as: Tag = "div",
  className = "",
  delay = 0,
  children,
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
      },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, []);

  const baseClasses =
    "transform-gpu transition-all duration-500 ease-out motion-reduce:transform-none motion-reduce:transition-none";
  const hiddenClasses = "translate-y-5 opacity-0";
  const shownClasses = "translate-y-0 opacity-100";

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`${baseClasses} ${isVisible ? shownClasses : hiddenClasses} ${className}`.trim()}
    >
      {children}
    </Tag>
  );
}