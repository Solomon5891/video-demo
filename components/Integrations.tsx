'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Zap, FileText, CreditCard, RefreshCw } from 'lucide-react';

const crms = [
  { name: 'GoHighLevel', logo: '/integrations/gohighlevel.png' },
  { name: 'HubSpot',     logo: '/integrations/hubspot.svg' },
  { name: 'Salesforce',  logo: '/integrations/salesforce.png' },
  { name: 'Jobber',      logo: '/integrations/jobber.png' },
  { name: 'ServiceTitan',logo: '/integrations/servicetitan.png' },
  { name: 'Zoho',        logo: '/integrations/zoho.svg' },
  { name: 'Pipedrive',   logo: '/integrations/pipedrive.png' },
];

const marqueeLogos = [...crms, ...crms];

function FlowCard({
  icon: Icon, title, sub, accent,
}: { icon: any; title: string; sub: string; accent: string }) {
  return (
    <div className={`flex-1 min-w-0 rounded-2xl border border-slate-200 bg-white p-5 shadow-soft`}>
      <div className={`inline-flex h-10 w-10 items-center justify-center rounded-xl ${accent}`}>
        <Icon className="h-5 w-5 text-white" />
      </div>
      <div className="mt-4 text-sm font-semibold text-slate-900">{title}</div>
      <div className="mt-1 text-xs text-slate-500">{sub}</div>
    </div>
  );
}

export default function Integrations() {
  return (
    <section id="integrations" className="relative py-24 bg-slate-50 border-y border-slate-200">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600">
            <RefreshCw className="h-3 w-3 text-brand" /> Native two-way sync
          </div>
          <h2 className="mt-4 text-3xl md:text-5xl font-black tracking-tight text-slate-900">
            Fits into the tools you <span className="gradient-text">already use.</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Two-click native integrations. One unified workflow. Leads, jobs, invoices, and payment confirmations all stay in sync.
          </p>
        </div>

        {/* Logo marquee */}
        <div className="mt-12 relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-50 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-50 to-transparent z-10" />
          <div className="flex gap-4 animate-marquee w-max">
            {marqueeLogos.map((c, i) => (
              <div
                key={`${c.name}-${i}`}
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm min-w-[200px]"
              >
                <img
                  src={c.logo}
                  alt={`${c.name} logo`}
                  className="h-9 w-9 object-contain"
                  loading="lazy"
                />
                <span className="font-semibold text-slate-800">{c.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Sync flow */}
        <div className="mt-14 rounded-3xl border border-slate-200 bg-white p-6 md:p-10 shadow-soft">
          <div className="flex flex-col md:flex-row items-stretch gap-4 md:gap-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5 }}
              className="flex-1"
            >
              <FlowCard
                icon={ArrowRight}
                title="Lead lands in your CRM"
                sub="HubSpot · Salesforce · GoHighLevel"
                accent="bg-gradient-to-br from-slate-700 to-slate-900"
              />
            </motion.div>

            <div className="hidden md:flex items-center justify-center px-2 text-orange-400">
              <ArrowRight className="h-6 w-6" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="flex-1"
            >
              <FlowCard
                icon={Zap}
                title="FieldTech picks it up"
                sub="Auto-assigned to the right tech"
                accent="bg-gradient-to-br from-brand to-amber-500"
              />
            </motion.div>

            <div className="hidden md:flex items-center justify-center px-2 text-orange-400">
              <ArrowRight className="h-6 w-6" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex-1"
            >
              <FlowCard
                icon={FileText}
                title="Invoice generated"
                sub="With line items, tax, QR code"
                accent="bg-gradient-to-br from-amber-400 to-orange-600"
              />
            </motion.div>

            <div className="hidden md:flex items-center justify-center px-2 text-orange-400">
              <ArrowRight className="h-6 w-6" />
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex-1"
            >
              <FlowCard
                icon={CreditCard}
                title="Payment synced back"
                sub="Status updated in your CRM"
                accent="bg-gradient-to-br from-slate-700 to-black"
              />
            </motion.div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-3 text-sm text-slate-600">
            <span className="inline-flex items-center gap-2 rounded-full bg-orange-50 text-orange-700 border border-orange-200 px-3 py-1 font-semibold">
              <RefreshCw className="h-3.5 w-3.5" /> Two-way sync, every 30s
            </span>
            <span>No duplicate data entry. No copy-paste. No spreadsheets.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
