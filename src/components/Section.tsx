import { Children, useEffect, useRef } from "react";
import { ReactNode } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

interface SectionProps {
  title: string;
  icon?: ReactNode;
  children: ReactNode;
  showViewAll?: boolean;
}

const Section = ({ title, icon, children }: SectionProps) => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            {icon && <div className="text-2xl">{icon}</div>}
            <h2 className="text-2xl font-bold text-foreground">{title}</h2>
          </div>
        </div>

        {/* Continuous Auto-Scrolling Carousel with outside arrows */}
        <div className="relative">
          <CarouselStrip>
            {children}
          </CarouselStrip>
        </div>
      </div>
    </section>
  );
};

export default Section;

function CarouselStrip({ children }: { children: React.ReactNode }) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const offsetElRef = useRef<HTMLDivElement | null>(null);
  const offsetRef = useRef<number>(0);
  const speed = 40; // base px/s
  const isHovering = useRef<boolean>(false);
  const rafRef = useRef<number | null>(null);
  const groupWidthRef = useRef<number>(0);
  const nudgeRemainingRef = useRef<number>(0);
  const nudgeSpeed = 600; // px/s for nudge animation
  const dragRef = useRef<{ active: boolean; lastX: number; } | null>({ active: false, lastX: 0 });

  useEffect(() => {
    const measure = () => {
      if (!trackRef.current) return;
      const firstGroup = trackRef.current.children.item(0) as HTMLDivElement | null;
      if (firstGroup) {
        groupWidthRef.current = firstGroup.scrollWidth;
      }
    };

    measure();
    const onResize = () => measure();
    window.addEventListener("resize", onResize);

    let last = performance.now();
    const tick = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;

      if (!isHovering.current) {
        // continuous scroll
        offsetRef.current -= speed * dt;
      }

      // apply nudge animation smoothly
      if (nudgeRemainingRef.current !== 0) {
        const dir = Math.sign(nudgeRemainingRef.current);
        const step = dir * Math.min(Math.abs(nudgeRemainingRef.current), nudgeSpeed * dt);
        offsetRef.current += step; // positive moves content right, negative left
        nudgeRemainingRef.current -= step;
      }

      // wrap seamlessly
      const groupWidth = groupWidthRef.current;
      if (groupWidth > 0) {
        if (offsetRef.current <= -groupWidth) {
          offsetRef.current += groupWidth;
        } else if (offsetRef.current >= groupWidth) {
          offsetRef.current -= groupWidth;
        }
      }

      if (offsetElRef.current) {
        (offsetElRef.current as HTMLDivElement).style.setProperty("--offset-x", `${offsetRef.current}px`);
      }

      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    const node = wrapperRef.current;
    if (node) {
      const onEnter = () => (isHovering.current = true);
      const onLeave = () => (isHovering.current = false);
      node.addEventListener("mouseenter", onEnter);
      node.addEventListener("mouseleave", onLeave);
      return () => {
        node.removeEventListener("mouseenter", onEnter);
        node.removeEventListener("mouseleave", onLeave);
      };
    }
    return () => {
      window.removeEventListener("resize", onResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const nudge = (dir: -1 | 1) => {
    nudgeRemainingRef.current += dir * 300; // animate ~300px per click
  };

  return (
    <div className="relative">
      <div
        ref={wrapperRef}
        className="auto-carousel touch-pan-y select-none cursor-grab"
        onPointerDown={(e) => {
          dragRef.current = { active: true, lastX: e.clientX };
          isHovering.current = true; // pause while holding
          try { (e.target as Element).setPointerCapture?.(e.pointerId); } catch {}
        }}
        onPointerMove={(e) => {
          if (!dragRef.current?.active) return;
          const dx = e.clientX - (dragRef.current?.lastX || e.clientX);
          dragRef.current.lastX = e.clientX;
          offsetRef.current += dx;
          if (offsetElRef.current) {
            (offsetElRef.current as HTMLDivElement).style.setProperty("--offset-x", `${offsetRef.current}px`);
          }
        }}
        onPointerUp={(e) => {
          if (dragRef.current) dragRef.current.active = false;
          isHovering.current = false; // resume after releasing
          try { (e.target as Element).releasePointerCapture?.(e.pointerId); } catch {}
        }}
        onPointerCancel={() => { if (dragRef.current) dragRef.current.active = false; isHovering.current = false; }}
        onPointerLeave={() => { if (dragRef.current) dragRef.current.active = false; isHovering.current = false; }}
      >
        <div ref={offsetElRef} className="auto-carousel-offset">
          <div ref={trackRef} className="auto-carousel-track items-stretch">
            <div className="flex space-x-4 pb-4 pr-4">{children}</div>
            <div className="flex space-x-4 pb-4 pr-4">{children}</div>
          </div>
        </div>
      </div>
      <button aria-label="scroll left" onClick={() => nudge(1)} className="hidden md:block absolute -left-8 top-1/2 -translate-y-1/2 z-10 text-white/70 hover:text-white">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6"><path d="m15 18-6-6 6-6"/></svg>
      </button>
      <button aria-label="scroll right" onClick={() => nudge(-1)} className="hidden md:block absolute -right-8 top-1/2 -translate-y-1/2 z-10 text-white/70 hover:text-white">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6"><path d="m9 18 6-6-6-6"/></svg>
      </button>
    </div>
  );
}
