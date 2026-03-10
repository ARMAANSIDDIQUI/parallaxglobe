import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent, useSpring, useMotionValue } from 'motion/react';
import { Box, Cpu, Layers, Eye } from 'lucide-react';
import PostHeroBackground from './PostHeroBackground';
import FeatureItem, { Feature } from './FeatureItem';
import FeatureVisualPanel from './FeatureVisualPanel';

const features: Feature[] = [
  {
    id: 1,
    title: "Spatial Computing",
    description: "Break the boundaries of flat screens. We build immersive 3D environments that blend digital content with physical space seamlessly.",
    icon: Box
  },
  {
    id: 2,
    title: "Neural Interfaces",
    description: "The next frontier of interaction. Intuitive, thought-driven interfaces that anticipate user needs before they even click.",
    icon: Cpu
  },
  {
    id: 3,
    title: "Quantum Rendering",
    description: "Photorealistic graphics rendered in milliseconds. Experience unparalleled visual fidelity powered by next-gen processing.",
    icon: Layers
  },
  {
    id: 4,
    title: "Holographic UI",
    description: "Interfaces that float in mid-air. Interact with data in a completely new dimension with our proprietary holographic engine.",
    icon: Eye
  },
];

export default function PostHeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  const [activeIndex, setActiveIndex] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const index = Math.min(
      features.length - 1,
      Math.max(0, Math.floor(latest * features.length))
    );
    setActiveIndex(index);
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

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
    <section ref={containerRef} className="relative bg-[#020617] text-white">
      <PostHeroBackground scrollYProgress={scrollYProgress} mouseX={smoothMouseX} mouseY={smoothMouseY} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row">

        {/* Progress Indicator (Desktop) */}
        <div className="hidden md:flex flex-col items-center w-12 py-[50vh] sticky top-0 h-screen z-20">
          <div className="w-[1px] h-full bg-white/10 relative overflow-hidden rounded-full">
            <motion.div
              style={{ scaleY: smoothProgress, transformOrigin: 'top' }}
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gozoom-blue via-gozoom-blue to-gozoom-green shadow-[0_0_15px_rgba(0,163,255,0.5)]"
            />
          </div>
        </div>

        {/* Left: Scrollable Features */}
        <div className="w-full md:w-5/12 pt-[30vh] pb-[50vh] z-10">
          {features.map((f, i) => (
            <FeatureItem key={f.id} feature={f} isActive={i === activeIndex} />
          ))}
        </div>

        {/* Right: Sticky Visuals */}
        <div className="w-full md:w-6/12 h-[50vh] md:h-screen sticky top-[10vh] md:top-0 flex items-center justify-center overflow-hidden z-0">
          <FeatureVisualPanel activeIndex={activeIndex} mouseX={smoothMouseX} mouseY={smoothMouseY} />
        </div>
      </div>
    </section>
  );
}
