import Hero from '@/components/Hero';
import Integrations from '@/components/Integrations';
import Problem from '@/components/Problem';
import Walkthrough from '@/components/Walkthrough';
import Trust from '@/components/Trust';
import Pricing from '@/components/Pricing';

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-ink">
      <Hero />
      <Integrations />
      <Problem />
      <Walkthrough />
      <Trust />
      <Pricing />
      <footer className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="FieldTech logo" className="h-7 w-7 object-contain" />
            <span className="font-semibold text-slate-700">FieldTech</span>
            <span>© 2026</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-800">Privacy</a>
            <a href="#" className="hover:text-slate-800">Terms</a>
            <a href="#" className="hover:text-slate-800">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
