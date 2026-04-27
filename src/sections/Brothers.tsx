import Reveal from '../components/Reveal';
import EBoardCarousel from '../components/EBoardCarousel';
import { eboard, roster } from '../data/chapter';

export default function Brothers() {
  return (
    <section id="brothers" className="section bg-slate-50">
      <div className="max-w-page">
        <div className="grid grid-cols-12 gap-x-8 gap-y-12">
          <Reveal className="col-span-12 lg:col-span-3">
            <div className="lg:sticky lg:top-32">
              <span className="eyebrow">
                <span className="w-6 h-px bg-royal-700" />
                04 / Brothers
              </span>
              <h2 className="heading text-3xl mt-5 leading-tight">
                Every name matters.
              </h2>
              <p className="mt-4 text-sm text-slate-500 leading-relaxed">
                Our line, in the order they crossed.
              </p>
            </div>
          </Reveal>

          <div className="col-span-12 lg:col-span-9 lg:col-start-4 space-y-16">
            {/* Executive Board */}
            <Reveal>
              <div className="flex items-baseline justify-between mb-6">
                <div className="text-[10px] uppercase tracking-[0.22em] text-royal-700 font-semibold">
                  Executive Board · 2025–2026
                </div>
                <div className="text-xs text-slate-400">{eboard.length} officers</div>
              </div>
              <EBoardCarousel />
            </Reveal>

            {/* Roster */}
            <Reveal delay={120} className="border-t border-slate-200 pt-12">
              <div className="flex items-baseline justify-between mb-8">
                <div className="text-[10px] uppercase tracking-[0.22em] text-royal-700 font-semibold">
                  The Line
                </div>
                <div className="text-xs text-slate-400">{roster.length} pledge classes</div>
              </div>

              <div className="space-y-2">
                {roster.map((cls) => (
                  <details
                    key={cls.name}
                    className="group rounded-xl bg-white border border-slate-200 open:border-royal-300 open:shadow-sm transition-colors"
                  >
                    <summary className="cursor-pointer list-none flex items-center justify-between gap-4 px-5 py-4">
                      <div className="flex items-center gap-4 min-w-0">
                        <span className="font-mono text-[11px] text-slate-400 w-12 shrink-0">
                          {cls.name === 'Charter' ? '—' : `#${rosterIndex(cls.name)}`}
                        </span>
                        <span className="font-display font-semibold text-slate-900 truncate">
                          {cls.name === 'Charter' ? 'Charter Class' : `${cls.name} Class`}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 shrink-0">
                        <span className="text-xs text-slate-500">{cls.brothers.length}</span>
                        <span className="grid place-items-center w-6 h-6 rounded-full bg-slate-100 text-slate-500 group-open:bg-royal-800 group-open:text-white transition-all group-open:rotate-45">
                          +
                        </span>
                      </div>
                    </summary>
                    <div className="px-5 pb-5 -mt-1">
                      <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-1.5 pt-3 border-t border-slate-100 text-[15px] text-slate-700">
                        {cls.brothers.map((b) => (
                          <li key={b} className="flex items-baseline gap-2">
                            <span className="w-1 h-1 rounded-full bg-royal-300 shrink-0" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </details>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function rosterIndex(name: string): number {
  // 1-based index in the order classes were initiated, skipping the unnumbered Charter.
  const order = [
    'Alpha', 'Beta', 'Gamma', 'Delta', 'Epsilon', 'Zeta', 'Eta', 'Theta', 'Iota', 'Kappa', 'Mu',
    'Nu', 'Xi', 'Omicron', 'Pi', 'Rho', 'Sigma', 'Tau', 'Upsilon', 'Phi', 'Chi', 'Psi',
    'Alpha Alpha', 'Alpha Beta', 'Alpha Gamma', 'Alpha Delta', 'Alpha Epsilon',
    'Alpha Zeta', 'Alpha Eta', 'Alpha Theta', 'Alpha Iota',
  ];
  const i = order.indexOf(name);
  return i === -1 ? 0 : i + 1;
}
