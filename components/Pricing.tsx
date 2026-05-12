'use client';

import { motion } from 'framer-motion';
import { Check, Mic, Zap, Users, MessageSquare, FileText, MapPin, Trophy, Sparkles } from 'lucide-react';

type Feature = { label: string; standard: boolean | string; unlimited: boolean | string };

const features: Feature[] = [
  { label: 'Voice-to-Invoice (12 languages)',  standard: true,           unlimited: true },
  { label: 'CRM integrations (HubSpot, Jobber, ServiceTitan, +5)', standard: true, unlimited: true },
  { label: 'QR-code payments (15+ gateways)',  standard: true,           unlimited: true },
  { label: 'AI Lead Responder (<60s SMS reply)', standard: true,         unlimited: true },
  { label: 'Bulk invoice generator (CSV / PDF / image)', standard: '50 / mo', unlimited: 'Unlimited' },
  { label: 'Fleet GPS tracking + route history', standard: true,         unlimited: true },
  { label: 'Smart contracts + auto-payout',    standard: false,          unlimited: true },
  { label: 'Team leaderboard + drill-down',    standard: 'Basic',        unlimited: 'Advanced' },
  { label: 'Job profitability tracker',        standard: false,          unlimited: true },
  { label: 'Priority support · dedicated CSM', standard: 'Email',        unlimited: '24/7 + CSM' },
];

const standardHighlights = [
  { icon: Mic,           text: 'Voice-to-Invoice in 5 seconds' },
  { icon: Zap,           text: '7 native CRM integrations' },
  { icon: MessageSquare, text: 'AI Lead Responder' },
  { icon: FileText,      text: 'QR-code payments · 15+ gateways' },
];

const unlimitedHighlights = [
  { icon: Users,   text: 'Unlimited team members' },
  { icon: Trophy,  text: 'Advanced leaderboard + profitability' },
  { icon: MapPin,  text: 'Fleet GPS + smart contracts' },
  { icon: Sparkles,text: 'Priority 24/7 support + CSM' },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 border border-amber-200 px-3 py-1 text-xs font-bold text-amber-800">
            <Sparkles className="h-3 w-3" /> 50% Early Bird · Limited time
          </div>
          <h2 className="mt-4 text-3xl md:text-5xl font-black tracking-tight text-slate-900">
            One price. <span className="gradient-text">Every feature.</span> No surprises.
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Built for how field technicians actually work. Cancel anytime — your data is always yours.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Standard */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft flex flex-col"
          >
            <div className="flex items-center justify-between">
              <div className="text-sm font-bold uppercase tracking-widest text-slate-500">Standard</div>
              <span className="inline-flex items-center rounded-full bg-slate-100 text-slate-600 text-[10px] font-bold px-2 py-1">
                Up to 5 members
              </span>
            </div>
            <div className="mt-5 flex items-baseline gap-2">
              <span className="text-5xl font-black tracking-tight text-slate-900">$200</span>
              <span className="text-slate-500 font-semibold">/ mo</span>
              <span className="ml-2 text-sm text-slate-400 line-through">$400</span>
            </div>
            <div className="mt-1 text-xs font-bold text-orange-700">
              50% Early Bird — save $2,400/yr
            </div>

            <p className="mt-5 text-sm text-slate-600">
              For solo operators and small crews ready to ditch the clipboard.
            </p>

            <ul className="mt-6 space-y-3 text-sm">
              {standardHighlights.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3 text-slate-700">
                  <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-lg bg-orange-100 text-orange-700">
                    <Icon className="h-3.5 w-3.5" />
                  </span>
                  {text}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex-1" />
            <a
              href="#"
              className="mt-2 inline-flex justify-center rounded-xl border border-slate-300 bg-white px-5 py-3.5 font-semibold text-slate-800 hover:border-slate-400"
            >
              Start 14-day free trial
            </a>
            <p className="mt-2 text-center text-xs text-slate-500">No credit card required</p>
          </motion.div>

          {/* Unlimited */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative rounded-3xl border-2 border-brand bg-gradient-to-br from-black to-slate-900 text-white p-8 shadow-xl shadow-brand/30 flex flex-col overflow-hidden"
          >
            <div className="absolute -top-3 right-6">
              <span className="inline-flex items-center rounded-full bg-gradient-to-r from-amber-400 to-amber-600 text-slate-900 text-[10px] font-black tracking-widest uppercase px-3 py-1 shadow-soft">
                Most Popular
              </span>
            </div>
            <div className="absolute -top-32 -right-32 h-72 w-72 rounded-full bg-brand/20 blur-3xl" aria-hidden />

            <div className="relative flex items-center justify-between">
              <div className="text-sm font-bold uppercase tracking-widest text-orange-300">Unlimited</div>
              <span className="inline-flex items-center rounded-full bg-brand/20 text-orange-300 text-[10px] font-bold px-2 py-1">
                Unlimited members
              </span>
            </div>
            <div className="relative mt-5 flex items-baseline gap-2">
              <span className="text-5xl font-black tracking-tight">$600</span>
              <span className="text-slate-300 font-semibold">/ mo</span>
              <span className="ml-2 text-sm text-slate-500 line-through">$1,200</span>
            </div>
            <div className="relative mt-1 text-xs font-bold text-orange-300">
              50% Early Bird — save $7,200/yr
            </div>

            <p className="relative mt-5 text-sm text-slate-300">
              For growing crews who want every FieldTech feature, unlocked.
            </p>

            <ul className="relative mt-6 space-y-3 text-sm">
              {unlimitedHighlights.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3 text-slate-100">
                  <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-lg bg-brand text-white">
                    <Icon className="h-3.5 w-3.5" />
                  </span>
                  {text}
                </li>
              ))}
            </ul>

            <div className="relative mt-8 flex-1" />
            <a
              href="#"
              className="relative mt-2 inline-flex justify-center rounded-xl bg-brand px-5 py-3.5 font-bold text-white hover:bg-orange-400 shadow-soft"
            >
              Start 14-day free trial
            </a>
            <p className="relative mt-2 text-center text-xs text-orange-200/80">No credit card required</p>
          </motion.div>
        </div>

        {/* Feature comparison */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="mt-12 max-w-5xl mx-auto rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-soft"
        >
          <div className="grid grid-cols-[1.6fr_1fr_1fr] bg-slate-50 border-b border-slate-200 text-xs font-bold uppercase tracking-widest text-slate-500">
            <div className="px-5 py-3">Feature</div>
            <div className="px-5 py-3 text-center">Standard</div>
            <div className="px-5 py-3 text-center bg-orange-50 text-orange-700">Unlimited</div>
          </div>
          {features.map((f, i) => (
            <div
              key={f.label}
              className={`grid grid-cols-[1.6fr_1fr_1fr] text-sm ${i % 2 ? 'bg-slate-50/40' : 'bg-white'}`}
            >
              <div className="px-5 py-3 text-slate-700">{f.label}</div>
              <Cell value={f.standard} />
              <Cell value={f.unlimited} accent />
            </div>
          ))}
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="mt-14 text-center max-w-3xl mx-auto"
        >
          <h3 className="text-2xl md:text-4xl font-black tracking-tight text-slate-900">
            Stop chasing invoices.<br /> Start <span className="gradient-text">getting paid.</span>
          </h3>
          <p className="mt-3 text-slate-600">
            Your next job could be your first FieldTech invoice. Try it free for 14 days.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-7 py-4 text-base font-bold text-white hover:bg-slate-800 shadow-soft"
            >
              Start your 14-day free trial
            </a>
            <span className="text-sm text-slate-500">No credit card required · Setup in under 5 minutes</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Cell({ value, accent }: { value: boolean | string; accent?: boolean }) {
  const base = `px-5 py-3 text-center font-semibold ${accent ? 'bg-orange-50/40' : ''}`;
  if (value === true) {
    return (
      <div className={base}>
        <span className={`inline-flex h-6 w-6 items-center justify-center rounded-full ${accent ? 'bg-brand text-white' : 'bg-orange-100 text-orange-700'}`}>
          <Check className="h-3.5 w-3.5" strokeWidth={3} />
        </span>
      </div>
    );
  }
  if (value === false) {
    return <div className={`${base} text-slate-300`}>—</div>;
  }
  return <div className={`${base} ${accent ? 'text-orange-700' : 'text-slate-700'}`}>{value}</div>;
}
