import { ArrowUpRight } from 'lucide-react';
import Reveal from '../components/Reveal';

export default function Philanthropy() {
  return (
    <section id="philanthropy" className="section bg-slate-50 relative overflow-hidden">
      <div className="relative max-w-page">
        <div className="grid grid-cols-12 gap-x-8 gap-y-12">
          <Reveal className="col-span-12 lg:col-span-3">
            <div className="lg:sticky lg:top-32">
              <span className="eyebrow">
                <span className="w-6 h-px bg-royal-700" />
                02 / Philanthropy
              </span>
              <h2 className="heading text-3xl mt-5 leading-tight">
                Be The Match.
              </h2>
            </div>
          </Reveal>

          <div className="col-span-12 lg:col-span-9 lg:col-start-4">
            <Reveal>
              <p className="font-display text-3xl sm:text-4xl leading-[1.2] text-slate-900 tracking-[-0.01em] max-w-3xl">
                Every three minutes, someone is diagnosed with a blood cancer. For many, the only
                cure is a stem cell transplant from a stranger. <span className="text-royal-800">That stranger could be you.</span>
              </p>
            </Reveal>

            <Reveal delay={80} className="mt-10 grid md:grid-cols-2 gap-10 max-w-3xl text-slate-700 leading-[1.75] text-[15px]">
              <p>
                Asian Americans make up about 7% of the Be The Match registry — but tissue type is
                inherited, so a patient is most likely to find a match within their own ethnic group.
                That math means Asian-American patients have the lowest odds of finding a donor of
                any group on the registry.
              </p>
              <p>
                Lambda Phi Epsilon adopted Be The Match as our national philanthropy because the
                problem and the people are ours. Every drive we run, every brother who registers, is
                another set of swabs in the database — another chance for a patient to get the call.
              </p>
            </Reveal>

            <Reveal delay={160} className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
              <a
                href="https://join.bethematch.org"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 text-royal-900 font-semibold border-b border-royal-300 pb-1 hover:border-royal-800 transition-colors"
              >
                Join the registry
                <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <span className="text-sm text-slate-500">
                Takes two minutes. A cheek swab. That's it.
              </span>
            </Reveal>

            <Reveal delay={240} className="mt-16 border-t border-slate-200 pt-10 grid sm:grid-cols-3 gap-y-8 gap-x-8">
              {[
                { v: '~7%', l: 'of the registry is Asian-American' },
                { v: 'Inherited', l: 'tissue type tracks ethnic background' },
                { v: '5–7 days', l: 'from match notification to donation' },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display font-semibold text-3xl text-royal-900 tracking-tight">{s.v}</div>
                  <div className="text-sm text-slate-600 mt-1 leading-relaxed max-w-[20ch]">{s.l}</div>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
