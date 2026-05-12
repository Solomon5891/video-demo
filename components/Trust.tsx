'use client';

import { motion } from 'framer-motion';
import { Quote, Star, Globe2, Users, DollarSign } from 'lucide-react';

const customerLogos = [
  'Apex HVAC',
  'BlueLine Plumbing',
  'SunGrid Solar',
  'GreenLeaf Landscaping',
  'RoofRight',
  'Sparks Electrical',
  'PestStop',
  'IronGate Garage Doors',
  'ConcretePros',
  'TidyHome',
  'CoolStream HVAC',
  'PipeKings',
];

const marqueeLogos = [...customerLogos, ...customerLogos];

export default function Trust() {
  return (
    <section id="trust" className="relative py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-xs font-semibold text-orange-700">
            <Globe2 className="h-3 w-3" /> 40 countries · 12 languages
          </div>
          <h2 className="mt-4 text-3xl md:text-5xl font-black tracking-tight text-slate-900">
            Trusted by <span className="gradient-text">2,500+</span> field service businesses.
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            From a one-truck operator to a 50-tech roofing crew — FieldTech is built for how field technicians actually work.
          </p>
        </div>

        {/* Logo marquee */}
        <div className="mt-12 relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />
          <div className="flex gap-8 animate-marquee w-max">
            {marqueeLogos.map((name, i) => (
              <div
                key={`${name}-${i}`}
                className="flex items-center gap-2 text-slate-400 font-bold text-lg tracking-tight whitespace-nowrap"
              >
                <span className="h-2 w-2 rounded-full bg-slate-300" />
                {name}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 grid lg:grid-cols-3 gap-6">
          {/* Testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 rounded-3xl bg-gradient-to-br from-black to-slate-900 text-white p-8 md:p-10 shadow-soft relative overflow-hidden"
          >
            <Quote className="absolute -top-4 -left-4 h-32 w-32 text-white/5" />
            <div className="relative">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-amber text-amber" />
                ))}
              </div>
              <p className="mt-5 text-xl md:text-2xl font-semibold leading-snug">
                &ldquo;I used to spend my weekends invoicing. Now I spend them with my kids.
                FieldTech paid for itself the first week.&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-black">
                  MR
                </div>
                <div>
                  <div className="font-bold">Mark R.</div>
                  <div className="text-sm text-slate-300">HVAC Owner · Austin, TX · Apex HVAC</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats stack */}
          <div className="space-y-4">
            <StatCard
              icon={<Users className="h-5 w-5" />}
              big="2,500+"
              label="Field service businesses"
              sub="Across HVAC, plumbing, solar & 50+ trades"
            />
            <StatCard
              icon={<Globe2 className="h-5 w-5" />}
              big="40"
              label="Countries served"
              sub="12 languages including Spanish, Arabic, Portuguese"
            />
            <StatCard
              icon={<Star className="h-5 w-5" />}
              big="4.9 / 5"
              label="Avg. customer rating"
              sub="Based on 1,840 reviews"
            />
          </div>
        </div>

        {/* Referral banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="mt-10 rounded-3xl border border-orange-200 bg-gradient-to-r from-orange-50 to-amber-50 p-8 md:p-10 flex flex-col md:flex-row items-center gap-6"
        >
          <div className="h-16 w-16 rounded-2xl bg-brand flex items-center justify-center shrink-0 shadow-xl shadow-brand/40">
            <DollarSign className="h-8 w-8 text-white" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <div className="text-lg font-black text-slate-900">
              Join <span className="text-orange-700">127+ referral partners</span> earning 40% lifetime commission.
            </div>
            <div className="text-slate-600 mt-1">
              <span className="font-bold text-slate-900">$94,800</span> paid to partners to date.
            </div>
          </div>
          <a
            href="#pricing"
            className="inline-flex items-center rounded-xl bg-slate-900 px-5 py-3 font-semibold text-white hover:bg-slate-800"
          >
            Become a partner
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function StatCard({
  icon, big, label, sub,
}: { icon: React.ReactNode; big: string; label: string; sub: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
      <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-orange-100 text-orange-700">
        {icon}
      </div>
      <div className="mt-3 text-3xl font-black tracking-tight text-slate-900">{big}</div>
      <div className="text-sm font-semibold text-slate-700">{label}</div>
      <div className="text-xs text-slate-500 mt-1">{sub}</div>
    </div>
  );
}
