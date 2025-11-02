import type { CSSProperties, ElementType, ReactNode } from 'react';
import { useEffect, useRef } from 'react';

interface RevealProps {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
  style?: CSSProperties;
}

export default function Reveal({
  as: Component = 'div',
  children,
  className,
  delay = 0,
  once = true,
  style
}: RevealProps) {
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = elementRef.current;
    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
            if (once) {
              observer.unobserve(entry.target);
            }
          } else if (!once) {
            entry.target.classList.remove('reveal-visible');
          }
        });
      },
      {
        threshold: 0.2
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [once]);

  return (
    <Component
      ref={elementRef as never}
      className={`reveal-element ${className ?? ''}`.trim()}
      style={{ ...(style ?? {}), transitionDelay: `${delay}s` }}
    >
      {children}
    </Component>
  );
}
