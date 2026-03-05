/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import Lenis from 'lenis';
import Hero from './components/Hero';

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.05,
      wheelMultiplier: 1,
    });
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <div className="bg-[#020617] min-h-[300vh] text-white selection:bg-indigo-500/30 font-sans">
      <Hero />
      <div className="h-screen flex items-center justify-center bg-[#020617] relative z-10 border-t border-white/5">
        <h2 className="text-4xl md:text-6xl font-serif italic text-white/50 tracking-tight">
          The Journey Continues
        </h2>
      </div>
    </div>
  );
}
