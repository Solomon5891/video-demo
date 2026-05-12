'use client';

import { motion } from 'framer-motion';
import { Calculator, FileWarning, Clock, ClipboardList, CheckCircle2, TrendingDown } from 'lucide-react';

export default function Problem() {
  return (
    <section id="problem" className="relative py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-rose-50 border border-rose-200 px-3 py-1 text-xs font-semibold text-rose-700">
            <TrendingDown className="h-3 w-3" /> The hidden cost of manual billing
          </div>
          <h2 className="mt-4 text-3xl md:text-5xl font-black tracking-tight text-slate-900">
            Before FieldTech vs. <span className="gradient-text">After FieldTech</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Most field service businesses lose entire weekends — and a chunk of revenue — to paperwork. Here&apos;s what changes.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {/* BEFORE */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl border border-rose-200 bg-gradient-to-br from-rose-50 to-amber-50/60 p-8"
          >
            <div className="absolute top-5 right-5 inline-flex items-center gap-1 rounded-full bg-rose-600 text-white text-[11px] font-bold px-2.5 py-1 tracking-wide uppercase">
              Before
            </div>

            <div className="flex items-center gap-2 text-rose-700 font-semibold">
              <ClipboardList className="h-5 w-5" />
              <span>The clipboard era</span>
            </div>

            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 rounded-xl bg-white/80 border border-rose-100 p-4">
                <div className="h-9 w-9 rounded-lg bg-rose-100 flex items-center justify-center">
                  <ClipboardList className="h-5 w-5 text-rose-600" />
                </div>
                <div className="text-sm text-slate-700">Handwritten work order, half-legible</div>
              </div>
              <div className="flex items-center gap-3 rounded-xl bg-white/80 border border-rose-100 p-4">
                <div className="h-9 w-9 rounded-lg bg-rose-100 flex items-center justify-center">
                  <Calculator className="h-5 w-5 text-rose-600" />
                </div>
                <div className="text-sm text-slate-700">Late-night math on parts + labor</div>
              </div>
              <div className="flex items-center gap-3 rounded-xl bg-white/80 border border-rose-100 p-4">
                <div className="h-9 w-9 rounded-lg bg-rose-100 flex items-center justify-center">
                  <Clock className="h-5 w-5 text-rose-600" />
                </div>
                <div className="text-sm text-slate-700">Avg time to invoice: <span className="font-bold text-rose-700">3.4 days</span></div>
              </div>
              <div className="flex items-center gap-3 rounded-xl bg-white border-2 border-dashed border-rose-400 p-4">
                <div className="h-9 w-9 rounded-lg bg-rose-600 flex items-center justify-center -rotate-6">
                  <FileWarning className="h-5 w-5 text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-xs font-bold uppercase tracking-wider text-rose-700">Past Due</div>
                  <div className="text-sm text-slate-700">Invoice #0921 — sent 14 days ago</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* AFTER */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative rounded-3xl border border-orange-200 bg-gradient-to-br from-orange-50 to-amber-50/60 p-8"
          >
            <div className="absolute top-5 right-5 inline-flex items-center gap-1 rounded-full bg-orange-600 text-white text-[11px] font-bold px-2.5 py-1 tracking-wide uppercase">
              After
            </div>

            <div className="flex items-center gap-2 text-orange-700 font-semibold">
              <CheckCircle2 className="h-5 w-5" />
              <span>The FieldTech flow</span>
            </div>

            <div className="mt-6 rounded-2xl bg-white border border-orange-100 shadow-soft overflow-hidden">
              <div className="flex items-center justify-between px-5 py-3 border-b border-slate-100 bg-slate-50/60">
                <div>
                  <div className="text-[10px] font-bold tracking-widest text-slate-500 uppercase">Invoice</div>
                  <div className="text-sm font-bold text-slate-900">#1429 · Apex HVAC</div>
                </div>
                <div className="relative">
                  <div className="rotate-[-8deg] border-2 border-orange-600 text-orange-700 font-black tracking-wider text-sm px-3 py-1 rounded">
                    PAID
                  </div>
                </div>
              </div>
              <div className="px-5 py-4 space-y-2 text-sm">
                <div className="flex justify-between text-slate-700">
                  <span>Condenser unit (3-ton)</span><span className="font-semibold">$2,400.00</span>
                </div>
                <div className="flex justify-between text-slate-700">
                  <span>R-410A refrigerant</span><span className="font-semibold">$180.00</span>
                </div>
                <div className="flex justify-between text-slate-700">
                  <span>Labor (2.5h)</span><span className="font-semibold">$325.00</span>
                </div>
                <div className="border-t border-dashed border-slate-200 pt-2 flex justify-between font-bold text-slate-900">
                  <span>Total</span><span className="text-orange-700">$2,905.00</span>
                </div>
              </div>
              <div className="px-5 py-3 bg-orange-50 border-t border-orange-100 text-xs font-semibold text-orange-800 flex items-center justify-between">
                <span>Paid in 4 min via QR</span>
                <span>Avg time to invoice: <span className="text-orange-700">5 sec</span></span>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-3">
              <div className="rounded-xl bg-white/80 border border-orange-100 p-3 text-center">
                <div className="text-xl font-black text-orange-700">5s</div>
                <div className="text-[11px] text-slate-500 mt-1">To invoice</div>
              </div>
              <div className="rounded-xl bg-white/80 border border-orange-100 p-3 text-center">
                <div className="text-xl font-black text-orange-700">4m</div>
                <div className="text-[11px] text-slate-500 mt-1">To paid</div>
              </div>
              <div className="rounded-xl bg-white/80 border border-orange-100 p-3 text-center">
                <div className="text-xl font-black text-orange-700">0</div>
                <div className="text-[11px] text-slate-500 mt-1">Past due</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stat card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="mt-10 mx-auto max-w-3xl rounded-2xl bg-black text-white p-6 md:p-8 shadow-soft flex flex-col md:flex-row items-center gap-6"
        >
          <div className="flex items-center justify-center h-16 w-16 rounded-2xl bg-rose-500/20 text-rose-300 shrink-0">
            <TrendingDown className="h-8 w-8" />
          </div>
          <div className="text-center md:text-left">
            <div className="text-4xl md:text-5xl font-black tracking-tight">
              23<span className="text-rose-400">%</span>
              <span className="text-base md:text-lg font-semibold text-slate-300 ml-3 align-middle">
                of revenue lost to manual billing errors
              </span>
            </div>
            <div className="mt-2 text-sm text-slate-400">
              Source: 2025 Field Service Operations Report · 1,800 SMB respondents
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
