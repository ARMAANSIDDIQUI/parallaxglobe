import { motion, MotionValue, useTransform } from 'motion/react';

export default function PostHeroBackground({ 
  scrollYProgress,
  mouseX,
  mouseY
}: { 
  scrollYProgress: MotionValue<number>,
  mouseX: MotionValue<number>,
  mouseY: MotionValue<number>
}) {
  const gridY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const particlesY1 = useTransform(scrollYProgress, [0, 1], ['0%', '-50%']);
  const particlesY2 = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  const bgX = useTransform(mouseX, [-1, 1], ['-2%', '2%']);
  const bgY = useTransform(mouseY, [-1, 1], ['-2%', '2%']);

  const lightX = useTransform(mouseX, [-1, 1], ['-10%', '10%']);
  const lightY = useTransform(mouseY, [-1, 1], ['-10%', '10%']);

  return (
    <motion.div style={{ opacity }} className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Ambient Gradient Lights */}
      <motion.div style={{ x: lightX, y: lightY }} className="absolute top-0 right-0 w-[80vw] h-[80vw] bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.08)_0%,transparent_60%)] blur-[100px] -translate-y-1/2 translate-x-1/4" />
      <motion.div style={{ x: useTransform(lightX, v => -v), y: useTransform(lightY, v => -v) }} className="absolute bottom-0 left-0 w-[60vw] h-[60vw] bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.05)_0%,transparent_60%)] blur-[100px] translate-y-1/4 -translate-x-1/4" />

      {/* Subtle Animated Grid */}
      <motion.div 
        style={{ y: gridY, x: bgX }} 
        className="absolute inset-[-5%] bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:linear-gradient(to_bottom,transparent_0%,#000_20%,#000_80%,transparent_100%)]" 
      />

      {/* Floating Particle Field 1 */}
      <motion.div style={{ y: particlesY1, x: bgX }} className="absolute inset-[-10%]">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={`ph-p1-${i}`}
            className="absolute rounded-full bg-indigo-400/30 blur-[1px]"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animation: `float ${Math.random() * 15 + 15}s linear infinite`,
              animationDelay: `-${Math.random() * 20}s`
            }}
          />
        ))}
      </motion.div>

      {/* Floating Particle Field 2 */}
      <motion.div style={{ y: particlesY2, x: bgY }} className="absolute inset-[-10%]">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={`ph-p2-${i}`}
            className="absolute rounded-full bg-purple-400/20 blur-[2px]"
            style={{
              width: Math.random() * 5 + 2 + 'px',
              height: Math.random() * 5 + 2 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animation: `float ${Math.random() * 20 + 20}s linear infinite`,
              animationDelay: `-${Math.random() * 20}s`
            }}
          />
        ))}
      </motion.div>

      {/* Very Light Blur Noise */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />
    </motion.div>
  );
}
