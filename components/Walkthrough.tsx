'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mic, Loader2, Check, QrCode, Smartphone, CreditCard,
  TrendingUp, Trophy, RefreshCw, Globe2, Sparkles,
} from 'lucide-react';

type Step = 0 | 1 | 2 | 3;

const STEPS = [
  { key: 'speak',   label: '4A · Speak the job' },
  { key: 'invoice', label: '4B · Invoice generated' },
  { key: 'qr',      label: '4C · QR-code payment' },
  { key: 'confirm', label: '4D · Real-time confirmation' },
] as const;

const TRANSCRIPT_EN =
  'Replaced outdoor condenser unit, 3 ton. Added R-410A refrigerant. Total 2.5 hours at customer site.';
const TRANSCRIPT_ES =
  'Reemplacé la unidad condensadora exterior, 3 toneladas. Agregué refrigerante R-410A. Total 2.5 horas en sitio.';

const waveBars = Array.from({ length: 22 }, (_, i) => 0.35 + ((i * 37) % 11) / 16);

export default function Walkthrough() {
  const [step, setStep] = useState<Step>(0);
  const [lang, setLang] = useState<'en' | 'es'>('en');
  const [typed, setTyped] = useState('');
  const [autoplay, setAutoplay] = useState(true);
  const inViewRef = useRef<HTMLDivElement | null>(null);
  const [started, setStarted] = useState(false);

  // Trigger sequence when section enters viewport
  useEffect(() => {
    if (!inViewRef.current) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(inViewRef.current);
    return () => obs.disconnect();
  }, [started]);

  // Typewriter for transcript on step 0
  useEffect(() => {
    if (!started) return;
    if (step !== 0) return;
    const full = lang === 'en' ? TRANSCRIPT_EN : TRANSCRIPT_ES;
    setTyped('');
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setTyped(full.slice(0, i));
      if (i >= full.length) clearInterval(id);
    }, 35);
    return () => clearInterval(id);
  }, [step, lang, started]);

  // Auto-advance the steps
  useEffect(() => {
    if (!started || !autoplay) return;
    const durations = [5200, 4200, 4200, 4500];
    const id = setTimeout(() => {
      setStep(((step + 1) % 4) as Step);
    }, durations[step]);
    return () => clearTimeout(id);
  }, [step, started, autoplay]);

  const replay = () => {
    setStep(0);
    setAutoplay(true);
  };

  return (
    <section id="walkthrough" className="relative py-24 bg-slate-50 border-y border-slate-200" ref={inViewRef}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600">
            <Sparkles className="h-3 w-3 text-brand" /> The 60-second job
          </div>
          <h2 className="mt-4 text-3xl md:text-5xl font-black tracking-tight text-slate-900">
            From voice note to <span className="gradient-text">money in the bank.</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Watch a real job flow through FieldTech — from the truck to the bank account, in four short steps.
          </p>
        </div>

        {/* Stepper */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {STEPS.map((s, i) => (
            <button
              key={s.key}
              onClick={() => { setStep(i as Step); setAutoplay(false); }}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold border transition ${
                step === i
                  ? 'bg-slate-900 text-white border-slate-900'
                  : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
              }`}
            >
              {s.label}
            </button>
          ))}
          <button
            onClick={replay}
            className="ml-2 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border border-orange-200 bg-orange-50 text-orange-700 hover:bg-orange-100"
          >
            <RefreshCw className="h-3 w-3" /> Replay
          </button>
        </div>

        {/* Stage */}
        <div className="mt-10 rounded-3xl border border-slate-200 bg-white shadow-soft overflow-hidden">
          <div className="grid lg:grid-cols-2">
            {/* Left: scene */}
            <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 md:p-12 min-h-[560px] flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-grid opacity-10" aria-hidden />
              <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-brand/20 blur-3xl" aria-hidden />
              <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-amber-500/20 blur-3xl" aria-hidden />

              <AnimatePresence mode="wait">
                {step === 0 && <SpeakScene key="speak" typed={typed} lang={lang} setLang={setLang} />}
                {step === 1 && <InvoiceScene key="invoice" lang={lang} />}
                {step === 2 && <QRScene key="qr" />}
                {step === 3 && <ConfirmScene key="confirm" />}
              </AnimatePresence>
            </div>

            {/* Right: explainer */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35 }}
                >
                  {step === 0 && (
                    <Explainer
                      kicker="Step 1 · Speak"
                      title="One voice note. That's it."
                      body="Tap record. Describe the job in plain English — or one of 12 languages. FieldTech captures every part, every hour, every detail."
                      bullets={[
                        '12 languages supported (English, Spanish, Arabic, more)',
                        'Works offline — syncs when you have signal',
                        'Hands-free — keep your gloves on',
                      ]}
                    />
                  )}
                  {step === 1 && (
                    <Explainer
                      kicker="Step 2 · Generate"
                      title="An invoice — in 5 seconds."
                      body="FieldTech matches parts to your catalog, applies your labor rate, calculates tax, and brands the invoice with your logo. Ready to send."
                      bullets={[
                        'Pulls from your parts catalog automatically',
                        'Applies regional tax + service fees',
                        'Localized currency & language per customer',
                      ]}
                    />
                  )}
                  {step === 2 && (
                    <Explainer
                      kicker="Step 3 · Get paid"
                      title="Scan. Tap. Paid."
                      body="Every FieldTech invoice ships with a scannable QR code. Customers pay in seconds via Stripe, PayPal, Venmo, and 15+ gateways — no app, no login."
                      bullets={[
                        '15+ payment gateways out of the box',
                        'No customer app or sign-up required',
                        'Auto-receipt + tax record sent back',
                      ]}
                    />
                  )}
                  {step === 3 && (
                    <Explainer
                      kicker="Step 4 · Confirm"
                      title="Real-time confirmation. Everywhere."
                      body="The moment payment clears, your dashboard, your CRM, and your leaderboard all update. Your team sees the win in real time."
                      bullets={[
                        'Live dashboard + push notification',
                        'Auto-sync to your CRM of choice',
                        'Team leaderboard updates instantly',
                      ]}
                    />
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Explainer({
  kicker, title, body, bullets,
}: { kicker: string; title: string; body: string; bullets: string[] }) {
  return (
    <div>
      <div className="text-xs font-bold uppercase tracking-widest text-orange-600">{kicker}</div>
      <h3 className="mt-2 text-2xl md:text-3xl font-black tracking-tight text-slate-900">{title}</h3>
      <p className="mt-4 text-slate-600">{body}</p>
      <ul className="mt-6 space-y-3">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-3 text-sm text-slate-700">
            <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-orange-100 text-orange-700">
              <Check className="h-3.5 w-3.5" strokeWidth={3} />
            </span>
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------- SCENES ---------- */

function SpeakScene({
  typed, lang, setLang,
}: { typed: string; lang: 'en' | 'es'; setLang: (l: 'en' | 'es') => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="relative w-[300px] max-w-full"
    >
      {/* Phone frame */}
      <div className="rounded-[2.5rem] border-[10px] border-slate-700 bg-slate-950 shadow-2xl overflow-hidden">
        <div className="bg-slate-900 px-6 py-3 flex items-center justify-between text-[10px] text-slate-400 font-medium">
          <span>9:41</span>
          <span>FieldTech</span>
          <span>●●●</span>
        </div>
        <div className="px-6 py-8 bg-gradient-to-b from-slate-900 to-slate-950 min-h-[400px] flex flex-col items-center">
          <div className="text-[11px] uppercase tracking-widest text-orange-400 font-bold">Recording</div>
          <div className="mt-1 text-xs text-slate-400">Job · Apex HVAC · 4421 Oak St</div>

          {/* Mic + pulse */}
          <div className="mt-8 relative flex items-center justify-center">
            <span className="absolute h-24 w-24 rounded-full bg-brand/30 animate-pulseRing" />
            <span className="absolute h-24 w-24 rounded-full bg-brand/20 animate-pulseRing" style={{ animationDelay: '600ms' }} />
            <div className="relative h-20 w-20 rounded-full bg-brand shadow-xl shadow-brand/40 flex items-center justify-center">
              <Mic className="h-9 w-9 text-white" strokeWidth={2.2} />
            </div>
          </div>

          {/* Waveform */}
          <div className="mt-8 flex items-end gap-[3px] h-10">
            {waveBars.map((h, i) => (
              <span
                key={i}
                className="w-[3px] rounded-full bg-orange-400 animate-wave"
                style={{ height: `${h * 100}%`, animationDelay: `${i * 50}ms` }}
              />
            ))}
          </div>

          {/* Transcript */}
          <div className="mt-6 w-full rounded-xl bg-slate-800/70 border border-slate-700 p-3 text-[12px] text-slate-100 min-h-[88px]">
            <div className="text-[10px] uppercase tracking-wider text-slate-500 mb-1">Transcript</div>
            <p>
              {typed}
              <span className="inline-block w-1.5 h-3 bg-orange-400 ml-0.5 align-middle animate-pulse" />
            </p>
          </div>

          {/* Lang switch */}
          <div className="mt-4 inline-flex items-center gap-1 rounded-full bg-slate-800/70 border border-slate-700 p-1 text-[11px]">
            <button
              onClick={() => setLang('en')}
              className={`px-2.5 py-1 rounded-full font-semibold flex items-center gap-1 ${
                lang === 'en' ? 'bg-brand text-white' : 'text-slate-300'
              }`}
            >
              <Globe2 className="h-3 w-3" /> EN
            </button>
            <button
              onClick={() => setLang('es')}
              className={`px-2.5 py-1 rounded-full font-semibold flex items-center gap-1 ${
                lang === 'es' ? 'bg-brand text-white' : 'text-slate-300'
              }`}
            >
              <Globe2 className="h-3 w-3" /> ES
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function InvoiceScene({ lang }: { lang: 'en' | 'es' }) {
  const labels =
    lang === 'en'
      ? { inv: 'Invoice', items: [
          { name: 'Condenser unit (3-ton)', v: '$2,400.00' },
          { name: 'R-410A refrigerant', v: '$180.00' },
          { name: 'Labor (2.5h @ $130/h)', v: '$325.00' },
        ], total: 'Total', from: 'From', to: 'Bill to', powered: 'Powered by FieldTech' }
      : { inv: 'Factura', items: [
          { name: 'Unidad condensadora (3t)', v: '$2,400.00' },
          { name: 'Refrigerante R-410A', v: '$180.00' },
          { name: 'Mano de obra (2.5h)', v: '$325.00' },
        ], total: 'Total', from: 'De', to: 'Para', powered: 'Hecho con FieldTech' };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="relative w-[340px] max-w-full"
    >
      {/* Quick spinner */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.4, delay: 0.6 }}
        className="absolute inset-0 z-10 flex flex-col items-center justify-center"
      >
        <Loader2 className="h-8 w-8 text-orange-400 animate-spin" />
        <div className="mt-3 text-xs text-slate-300">Generating invoice…</div>
      </motion.div>

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, delay: 0.9 }}
        className="rounded-2xl bg-white shadow-2xl overflow-hidden border border-slate-200"
      >
        <div className="px-5 py-4 bg-gradient-to-r from-brand to-amber-500 text-white flex items-center justify-between">
          <div>
            <div className="text-[10px] uppercase tracking-widest font-bold opacity-80">{labels.inv}</div>
            <div className="text-lg font-black">#1429</div>
          </div>
          <div className="text-right text-[11px]">
            <div className="opacity-80">May 11, 2026</div>
            <div className="font-semibold">Due on receipt</div>
          </div>
        </div>

        <div className="px-5 py-4 grid grid-cols-2 gap-3 text-[11px] border-b border-slate-100">
          <div>
            <div className="text-slate-400 uppercase tracking-wider">{labels.from}</div>
            <div className="font-semibold text-slate-800">Apex HVAC LLC</div>
            <div className="text-slate-500">Austin, TX</div>
          </div>
          <div>
            <div className="text-slate-400 uppercase tracking-wider">{labels.to}</div>
            <div className="font-semibold text-slate-800">Hernández Residence</div>
            <div className="text-slate-500">4421 Oak St</div>
          </div>
        </div>

        <div className="px-5 py-4 space-y-2.5 text-sm">
          {labels.items.map((it, i) => (
            <motion.div
              key={it.name}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35, delay: 1.1 + i * 0.15 }}
              className="flex justify-between text-slate-700"
            >
              <span>{it.name}</span>
              <span className="font-semibold">{it.v}</span>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 1.7 }}
            className="border-t border-dashed border-slate-200 pt-3 flex justify-between font-black"
          >
            <span className="text-slate-900">{labels.total}</span>
            <span className="text-orange-600 text-lg">$2,905.00</span>
          </motion.div>
        </div>

        <div className="px-5 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[11px]">
          <span className="inline-flex items-center gap-1.5 text-orange-700 font-semibold">
            <Sparkles className="h-3.5 w-3.5" /> {labels.powered}
          </span>
          <span className="text-slate-500">en · es · pt · fr · de · ar +7</span>
        </div>
      </motion.div>
    </motion.div>
  );
}

function QRScene() {
  // Build a stylized QR-code grid (decorative)
  const cells = Array.from({ length: 169 }, (_, i) => {
    const r = (i * 9301 + 49297) % 233280;
    return r / 233280 > 0.5;
  });

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.45 }}
      className="relative w-full flex items-center justify-center gap-6"
    >
      {/* Invoice w/ QR */}
      <div className="relative">
        <div className="rounded-2xl bg-white shadow-2xl p-5 w-[220px]">
          <div className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Invoice #1429</div>
          <div className="mt-1 text-sm font-bold text-slate-900">$2,905.00</div>
          <div className="mt-4 grid gap-[2px] p-3 rounded-lg bg-slate-100" style={{ gridTemplateColumns: 'repeat(13, minmax(0, 1fr))' }}>
            {cells.map((on, i) => (
              <span
                key={i}
                className={`aspect-square ${on ? 'bg-slate-900' : 'bg-transparent'} rounded-[1px]`}
              />
            ))}
          </div>
          <div className="mt-3 text-center text-[11px] font-semibold text-slate-700 inline-flex items-center gap-1.5 justify-center w-full">
            <QrCode className="h-3.5 w-3.5" /> Scan to pay
          </div>
        </div>
      </div>

      {/* Phone scanning + Stripe success */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="rounded-[1.8rem] border-[8px] border-slate-700 bg-slate-950 shadow-2xl overflow-hidden w-[200px]"
      >
        <div className="bg-slate-900 px-4 py-2 flex items-center justify-between text-[9px] text-slate-400">
          <span>9:42</span>
          <Smartphone className="h-3 w-3" />
        </div>
        <div className="px-4 py-5 bg-white min-h-[300px] flex flex-col items-center justify-center">
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.45, delay: 0.7 }}
            className="h-16 w-16 rounded-full bg-brand shadow-xl shadow-brand/40 flex items-center justify-center"
          >
            <Check className="h-9 w-9 text-white" strokeWidth={3} />
          </motion.div>
          <div className="mt-4 text-base font-black text-slate-900">Payment Successful</div>
          <div className="mt-1 text-xs text-slate-500">via Stripe Checkout</div>
          <div className="mt-5 w-full rounded-lg bg-slate-50 border border-slate-200 p-3 text-[11px]">
            <div className="flex justify-between text-slate-600"><span>Amount</span><span className="font-bold text-slate-900">$2,905.00</span></div>
            <div className="flex justify-between text-slate-600 mt-1"><span>Method</span><span className="font-semibold">VISA ····4242</span></div>
            <div className="flex justify-between text-slate-600 mt-1"><span>Time</span><span className="font-semibold">4 min after invoice</span></div>
          </div>
          <div className="mt-3 inline-flex items-center gap-1 text-[10px] text-slate-400">
            <CreditCard className="h-3 w-3" /> 15+ gateways supported
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ConfirmScene() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.45 }}
      className="w-full max-w-[420px] space-y-4"
    >
      {/* Desktop dashboard */}
      <div className="rounded-2xl bg-white shadow-2xl overflow-hidden border border-slate-200">
        <div className="flex items-center gap-1.5 px-4 py-2 bg-slate-100 border-b border-slate-200">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-orange-400" />
          <span className="ml-3 text-[10px] text-slate-500 font-medium">app.fieldtech.com / dashboard</span>
        </div>
        <div className="p-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="rounded-xl bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 p-4 flex items-center gap-3"
          >
            <div className="h-10 w-10 rounded-full bg-brand flex items-center justify-center">
              <Check className="h-5 w-5 text-white" strokeWidth={3} />
            </div>
            <div className="flex-1">
              <div className="text-sm font-bold text-slate-900">Invoice #1429 paid</div>
              <div className="text-xs text-slate-600">$2,905.00 deposited · Avg payment time: 4 min</div>
            </div>
          </motion.div>

          <div className="mt-4 grid grid-cols-3 gap-2">
            <Kpi label="Today's revenue" value="$8,420" trend="+18%" />
            <Kpi label="Invoices sent" value="14" trend="+3" />
            <Kpi label="Avg time to pay" value="4 min" trend="-22%" />
          </div>
        </div>
      </div>

      {/* Mini leaderboard */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.25 }}
        className="rounded-2xl bg-slate-900 text-white shadow-2xl p-4 border border-slate-800"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-orange-400">
            <Trophy className="h-4 w-4" /> Team Leaderboard · This week
          </div>
          <span className="text-[10px] text-slate-400">Live</span>
        </div>
        <div className="mt-3 space-y-2">
          <Row rank={1} name="Mark R." trade="HVAC" jobs={14} revenue="$31,420" highlight />
          <Row rank={2} name="Priya K." trade="Plumbing" jobs={12} revenue="$24,180" />
          <Row rank={3} name="Diego A." trade="Electrical" jobs={9} revenue="$19,640" />
        </div>
      </motion.div>
    </motion.div>
  );
}

function Kpi({ label, value, trend }: { label: string; value: string; trend: string }) {
  const positive = !trend.startsWith('-');
  return (
    <div className="rounded-xl bg-slate-50 border border-slate-200 p-3">
      <div className="text-[10px] text-slate-500 uppercase tracking-wider">{label}</div>
      <div className="mt-1 text-base font-black text-slate-900">{value}</div>
      <div className={`mt-0.5 inline-flex items-center gap-0.5 text-[10px] font-bold ${positive ? 'text-orange-600' : 'text-orange-600'}`}>
        <TrendingUp className="h-3 w-3" /> {trend}
      </div>
    </div>
  );
}

function Row({
  rank, name, trade, jobs, revenue, highlight,
}: { rank: number; name: string; trade: string; jobs: number; revenue: string; highlight?: boolean }) {
  return (
    <div className={`flex items-center gap-3 rounded-lg px-3 py-2 ${highlight ? 'bg-brand/10 border border-brand/30' : 'bg-slate-800/60'}`}>
      <span className={`h-6 w-6 rounded-md flex items-center justify-center text-[11px] font-black ${highlight ? 'bg-brand text-white' : 'bg-slate-700 text-slate-200'}`}>
        {rank}
      </span>
      <div className="flex-1 min-w-0">
        <div className="text-sm font-bold">{name}</div>
        <div className="text-[10px] text-slate-400">{trade} · {jobs} jobs</div>
      </div>
      <div className="text-sm font-black text-orange-300">{revenue}</div>
    </div>
  );
}
