import { motion, MotionValue, useTransform } from 'motion/react';

export default function ParallaxBackground({
  scrollYProgress,
  mouseX,
  mouseY
}: {
  scrollYProgress: MotionValue<number>,
  mouseX: MotionValue<number>,
  mouseY: MotionValue<number>
}) {
  const gridY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const particlesY1 = useTransform(scrollYProgress, [0, 1], ['0%', '-80%']);
  const particlesY2 = useTransform(scrollYProgress, [0, 1], ['0%', '-40%']);
  const opacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);

  const bgX = useTransform(mouseX, [-1, 1], ['-2%', '2%']);
  const bgY = useTransform(mouseY, [-1, 1], ['-2%', '2%']);

  const lightX = useTransform(mouseX, [-1, 1], ['-20%', '20%']);
  const lightY = useTransform(mouseY, [-1, 1], ['-20%', '20%']);

  return (
    <motion.div style={{ opacity }} className="absolute inset-0 pointer-events-none">
      {/* Dynamic Gradient Lighting */}
      <motion.div
        style={{ x: lightX, y: lightY }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-[radial-gradient(circle_at_center,rgba(0,163,255,0.15)_0%,rgba(0,245,160,0.05)_40%,transparent_70%)] blur-[100px]"
      />

      {/* Grid */}
      <motion.div
        style={{ y: gridY, x: bgX }}
        className="absolute inset-[-5%] bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]"
      />

      {/* Noise Texture */}
      <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />

      {/* Particle Field - Layer 1 (Fast) */}
      <motion.div style={{ y: particlesY1, x: bgX }} className="absolute inset-[-10%]">
        {Array.from({ length: 40 }).map((_, i) => (
          <div
            key={`p1-${i}`}
            className="absolute rounded-full bg-white/40 blur-[0.5px]"
            style={{
              width: Math.random() * 2 + 1 + 'px',
              height: Math.random() * 2 + 1 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animation: `float ${Math.random() * 10 + 15}s linear infinite`,
              animationDelay: `-${Math.random() * 20}s`
            }}
          />
        ))}
      </motion.div>

      {/* Particle Field - Layer 2 (Slow, blurred) */}
      <motion.div style={{ y: particlesY2 }} className="absolute inset-[-10%]">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={`p2-${i}`}
            className="absolute rounded-full bg-gozoom-blue/20 blur-[2px]"
            style={{
              width: Math.random() * 4 + 2 + 'px',
              height: Math.random() * 4 + 2 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animation: `float ${Math.random() * 15 + 20}s linear infinite`,
              animationDelay: `-${Math.random() * 20}s`
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}
