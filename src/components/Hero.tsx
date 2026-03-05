import { useRef, useEffect } from 'react';
import { useScroll, useMotionValue, useSpring } from 'motion/react';
import ParallaxBackground from './ParallaxBackground';
import RotatingShape from './RotatingShape';
import HeroText from './HeroText';
import ScrollIndicator from './ScrollIndicator';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth) * 2 - 1;
      const y = (e.clientY / innerHeight) * 2 - 1;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div ref={containerRef} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-[#020617]">
        <ParallaxBackground scrollYProgress={scrollYProgress} mouseX={smoothMouseX} mouseY={smoothMouseY} />
        <RotatingShape scrollYProgress={scrollYProgress} mouseX={smoothMouseX} mouseY={smoothMouseY} />
        <HeroText scrollYProgress={scrollYProgress} />
        <ScrollIndicator scrollYProgress={scrollYProgress} />
      </div>
    </div>
  );
}
