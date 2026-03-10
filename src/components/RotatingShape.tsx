import { motion, MotionValue, useTransform } from 'motion/react';

export default function RotatingShape({
  scrollYProgress,
  mouseX,
  mouseY
}: {
  scrollYProgress: MotionValue<number>,
  mouseX: MotionValue<number>,
  mouseY: MotionValue<number>
}) {
  const scrollRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.2]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], ['0%', '0%', '-200%']);
  const opacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);

  // 3D Tilt effect based on mouse
  const rotateX = useTransform(mouseY, [-1, 1], [15, -15]);
  const rotateY = useTransform(mouseX, [-1, 1], [-15, 15]);

  return (
    <motion.div
      style={{ scale, y, opacity }}
      className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 perspective-[1000px]"
    >
      <motion.div
        style={{ rotateX, rotateY }}
        className="relative w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] min-w-[300px] min-h-[300px] transform-style-3d"
      >
        <motion.div
          style={{ rotate: scrollRotate }}
          className="absolute inset-0 flex items-center justify-center transform-style-3d"
        >
          {/* Core Glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-gozoom-blue via-gozoom-blue to-gozoom-green rounded-full blur-[100px] opacity-30 animate-pulse" />

          {/* Abstract Sphere */}
          <div className="relative w-3/4 h-3/4 rounded-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-3xl border border-white/20 shadow-[inset_0_0_100px_rgba(255,255,255,0.1),0_0_40px_rgba(0,163,255,0.2)] flex items-center justify-center overflow-hidden">
            {/* Inner texture */}
            <div className="absolute inset-0 opacity-40 mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />

            {/* Inner floating light */}
            <motion.div
              animate={{
                x: ['-25%', '25%', '-25%'],
                y: ['-25%', '25%', '-25%'],
                scale: [1, 1.3, 1]
              }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-3/5 h-3/5 bg-gozoom-blue/40 rounded-full blur-[50px]"
            />
          </div>

          {/* Orbiting Rings */}
          <motion.div
            animate={{ rotateX: 360, rotateY: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.05)]"
            style={{ transformStyle: 'preserve-3d' }}
          />
          <motion.div
            animate={{ rotateX: -360, rotateZ: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute inset-4 rounded-full border border-gozoom-blue/30 shadow-[0_0_20px_rgba(0,163,255,0.1)]"
            style={{ transformStyle: 'preserve-3d' }}
          />
          <motion.div
            animate={{ rotateY: -360, rotateZ: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute inset-8 rounded-full border border-gozoom-green/30 shadow-[0_0_20px_rgba(0,245,160,0.1)]"
            style={{ transformStyle: 'preserve-3d' }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
