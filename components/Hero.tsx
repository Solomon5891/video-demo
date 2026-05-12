'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Mic, Check } from 'lucide-react';

const bars = [0.4, 0.7, 1, 0.85, 0.55, 0.9, 0.65, 0.4, 0.75, 1, 0.5, 0.8, 0.45, 0.7];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-white via-orange-50/40 to-white"
    >
      <div className="absolute inset-0 bg-grid opacity-50" aria-hidden />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[520px] w-[520px] rounded-full bg-orange-200/40 blur-3xl" aria-hidden />

      <nav className="absolute top-0 inset-x-0 z-20">
        <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-2 group" aria-label="FieldTech home">
            <img
              src="/logo.png"
              alt="FieldTech logo"
              className="h-10 w-10 object-contain group-hover:scale-105 transition-transform"
            />
            <span className="font-black text-lg text-slate-900 tracking-tight">FieldTech</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#integrations" className="hover:text-slate-900">Integrations</a>
            <a href="#walkthrough" className="hover:text-slate-900">How it works</a>
            <a href="#pricing" className="hover:text-slate-900">Pricing</a>
          </div>
          <a
            href="#pricing"
            className="hidden sm:inline-flex items-center rounded-lg bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
          >
            Start free trial
          </a>
        </div>
      </nav>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center pt-24">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-4 py-1.5 text-xs font-semibold text-orange-700 shadow-sm"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse" />
          Trusted by 2,500+ field service businesses
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 text-5xl md:text-7xl font-black tracking-tight text-slate-900 leading-[1.05]"
        >
          You fix the problem.<br />
          <span className="gradient-text">We write the invoice.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto"
        >
          Voice-to-Invoice in 5 seconds. Powered by AI. Built for the field.
        </motion.p>

        {/* Animated waveform → check */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 mx-auto flex items-center justify-center gap-6"
        >
          <div className="flex items-center justify-center h-20 w-20 rounded-2xl bg-white border border-slate-200 shadow-soft">
            <Mic className="h-9 w-9 text-brand" strokeWidth={2.2} />
          </div>

          <div className="flex items-end gap-1 h-16">
            {bars.map((h, i) => (
              <span
                key={i}
                className="w-1.5 rounded-full bg-gradient-to-t from-brand to-amber-400 animate-wave"
                style={{ height: `${h * 100}%`, animationDelay: `${i * 70}ms` }}
              />
            ))}
          </div>

          <div className="relative flex items-center justify-center h-20 w-20 rounded-2xl bg-brand shadow-xl shadow-brand/40">
            <span className="absolute inset-0 rounded-2xl bg-orange-400/60 animate-pulseRing" aria-hidden />
            <Check className="h-10 w-10 text-white" strokeWidth={3} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#integrations"
            className="group inline-flex items-center gap-2 rounded-xl bg-black px-6 py-3.5 text-base font-semibold text-white hover:bg-slate-800 shadow-soft"
          >
            See it in action
            <ArrowDown className="h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
          </a>
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-base font-semibold text-slate-700 hover:border-slate-400"
          >
            View pricing
          </a>
        </motion.div>

        <p className="mt-6 text-sm text-slate-500">
          14-day free trial · No credit card · Cancel anytime
        </p>
      </div>
    </section>
  );
}
