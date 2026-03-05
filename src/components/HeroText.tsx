import { motion, MotionValue, useTransform } from 'motion/react';

export default function HeroText({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '-300%']);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);

  return (
    <motion.div 
      style={{ y, opacity, scale }}
      className="absolute inset-0 flex flex-col items-center justify-center text-center z-20 px-4 pointer-events-none"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-auto flex flex-col items-center"
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
          className="px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 shadow-[0_0_30px_rgba(255,255,255,0.05)]"
        >
          <span className="text-xs font-semibold tracking-[0.2em] text-white/80 uppercase">
            Introducing the Next Generation
          </span>
        </motion.div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white/90 to-white/40 mb-6 max-w-5xl mx-auto leading-[1.05]">
          Designing the <span className="font-serif italic font-normal text-white">Future</span> of <br className="hidden md:block" /> Digital Experiences
        </h1>
        
        <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-10 font-light tracking-wide leading-relaxed">
          We craft award-winning digital products, cinematic interfaces, and immersive web experiences for forward-thinking brands.
        </p>
        
        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.9)" }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 rounded-full bg-white text-black font-medium tracking-wide transition-colors shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.4)] flex items-center gap-3"
        >
          Explore Our Work
          <div className="w-2 h-2 rounded-full bg-black animate-pulse" />
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
