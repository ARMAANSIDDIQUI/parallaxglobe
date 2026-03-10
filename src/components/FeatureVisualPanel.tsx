import { motion, AnimatePresence, MotionValue, useTransform } from 'motion/react';

// Visual 1: Spatial Computing (Floating Glass Cards)
const SpatialVisual = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
    exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
    className="absolute inset-0 flex items-center justify-center perspective-[1000px]"
  >
    <motion.div
      animate={{ y: [-15, 15, -15], rotateX: [5, -5, 5] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="absolute w-64 h-80 p-[1px] rounded-2xl bg-gradient-to-br from-gozoom-blue/50 via-gozoom-blue/20 to-transparent z-20 shadow-[0_0_50px_rgba(0,163,255,0.15)]"
    >
      <div className="w-full h-full bg-[#020617]/80 backdrop-blur-xl rounded-2xl flex flex-col p-6 justify-between border border-white/5">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gozoom-blue/20 to-gozoom-green/20 border border-white/10" />
        <div className="space-y-3">
          <div className="h-4 w-3/4 bg-white/20 rounded-full" />
          <div className="h-4 w-1/2 bg-white/10 rounded-full" />
        </div>
      </div>
    </motion.div>
    <motion.div
      animate={{ y: [15, -15, 15], rotateZ: [-5, 5, -5] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      className="absolute w-64 h-80 p-[1px] rounded-2xl bg-gradient-to-br from-gozoom-blue/30 to-transparent translate-x-16 translate-y-12 z-10"
    >
      <div className="w-full h-full bg-[#020617]/60 backdrop-blur-md rounded-2xl border border-white/5" />
    </motion.div>
    <motion.div
      animate={{ y: [-10, 10, -10], rotateZ: [5, -5, 5] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      className="absolute w-64 h-80 p-[1px] rounded-2xl bg-gradient-to-br from-gozoom-green/30 to-transparent -translate-x-16 -translate-y-12 z-0"
    >
      <div className="w-full h-full bg-[#020617]/40 backdrop-blur-sm rounded-2xl border border-white/5" />
    </motion.div>
  </motion.div>
);

// Visual 2: Neural Interfaces (Connecting Nodes)
const NeuralVisual = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9, filter: "blur(20px)" }}
    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
    exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
    className="absolute inset-0 flex items-center justify-center"
  >
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,163,255,0.15)_0%,transparent_60%)]" />
    {Array.from({ length: 15 }).map((_, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: [0.2, 1, 0.2], scale: [1, 1.5, 1] }}
        transition={{ duration: Math.random() * 3 + 2, repeat: Infinity, delay: Math.random() * 2 }}
        className="absolute w-2 h-2 bg-gozoom-blue rounded-full shadow-[0_0_15px_rgba(0,163,255,0.8)]"
        style={{
          left: `${Math.random() * 80 + 10}%`,
          top: `${Math.random() * 80 + 10}%`,
        }}
      />
    ))}
    <svg className="absolute inset-0 w-full h-full opacity-40" viewBox="0 0 100 100" preserveAspectRatio="none">
      <motion.path
        d="M20,30 L50,50 L80,20 L70,80 L30,70 Z"
        fill="none"
        stroke="url(#grad)"
        strokeWidth="0.5"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      />
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00A3FF" />
          <stop offset="100%" stopColor="#00F5A0" />
        </linearGradient>
      </defs>
    </svg>
  </motion.div>
);

// Visual 3: Quantum Rendering (Concentric 3D Rings)
const QuantumVisual = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5, rotateX: 90 }}
    animate={{ opacity: 1, scale: 1, rotateX: 0 }}
    exit={{ opacity: 0, scale: 1.5, rotateX: -90 }}
    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
    className="absolute inset-0 flex items-center justify-center perspective-[1000px]"
  >
    <motion.div animate={{ rotateX: 360, rotateY: 180 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute w-64 h-64 border-2 border-gozoom-green/30 rounded-full transform-style-3d shadow-[inset_0_0_30px_rgba(0,245,160,0.2),0_0_20px_rgba(0,245,160,0.1)]" />
    <motion.div animate={{ rotateY: 360, rotateZ: 180 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="absolute w-48 h-48 border-2 border-gozoom-blue/40 rounded-full transform-style-3d shadow-[inset_0_0_30px_rgba(0,163,255,0.2),0_0_20px_rgba(0,163,255,0.1)]" />
    <motion.div animate={{ rotateZ: 360, rotateX: 180 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="absolute w-32 h-32 border-2 border-gozoom-blue/50 rounded-full transform-style-3d shadow-[inset_0_0_30px_rgba(0,163,255,0.3),0_0_20px_rgba(0,163,255,0.2)]" />
    <div className="absolute w-8 h-8 bg-white rounded-full shadow-[0_0_50px_rgba(255,255,255,1)] animate-pulse" />
  </motion.div>
);

// Visual 4: Holographic UI (Wireframe with Scanner)
const HolographicVisual = () => (
  <motion.div
    initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
    exit={{ opacity: 0, y: -50, filter: "blur(10px)" }}
    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
    className="absolute inset-0 flex items-center justify-center"
  >
    <div className="relative w-72 h-72 p-[1px] rounded-xl bg-gradient-to-b from-gozoom-blue/50 to-transparent shadow-[0_0_40px_rgba(0,163,255,0.2)]">
      <div className="w-full h-full bg-[#020617]/80 backdrop-blur-md rounded-xl overflow-hidden relative">
        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00A3FF20_1px,transparent_1px),linear-gradient(to_bottom,#00A3FF20_1px,transparent_1px)] bg-[size:2rem_2rem]" />

        {/* Scanner Line */}
        <motion.div
          animate={{ y: ['0%', '100%', '0%'] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 w-full h-[2px] bg-gozoom-blue shadow-[0_0_20px_rgba(0,163,255,1)] z-10"
        />

        {/* Holographic Content */}
        <div className="absolute inset-8 border border-gozoom-blue/30 rounded-lg p-4 flex flex-col gap-4 bg-gozoom-blue/5">
          <div className="w-full h-1/2 bg-gozoom-blue/20 rounded border border-gozoom-blue/30" />
          <div className="flex gap-4 h-1/2">
            <div className="w-1/2 h-full bg-gozoom-blue/20 rounded border border-gozoom-blue/30" />
            <div className="w-1/2 h-full bg-gozoom-blue/20 rounded border border-gozoom-blue/30" />
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

const visuals = [SpatialVisual, NeuralVisual, QuantumVisual, HolographicVisual];

export default function FeatureVisualPanel({
  activeIndex,
  mouseX,
  mouseY
}: {
  activeIndex: number,
  mouseX: MotionValue<number>,
  mouseY: MotionValue<number>
}) {
  const ActiveVisual = visuals[activeIndex];

  const rotateX = useTransform(mouseY, [-1, 1], [10, -10]);
  const rotateY = useTransform(mouseX, [-1, 1], [-10, 10]);

  return (
    <motion.div
      style={{ rotateX, rotateY }}
      className="relative w-full h-full max-w-[500px] max-h-[500px] perspective-[1000px] transform-style-3d"
    >
      <AnimatePresence mode="popLayout">
        <ActiveVisual key={activeIndex} />
      </AnimatePresence>
    </motion.div>
  );
}
