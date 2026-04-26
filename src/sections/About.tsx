import Reveal from '../components/Reveal';
import { mission, vision, coreValues } from '../data/chapter';

export default function About() {
  return (
    <section id="about" className="section bg-white">
      <div className="max-w-page">
        <div className="grid grid-cols-12 gap-x-8 gap-y-16">
          <Reveal className="col-span-12 lg:col-span-3">
            <div className="lg:sticky lg:top-32">
              <span className="eyebrow">
                <span className="w-6 h-px bg-royal-700" />
                01 / About
              </span>
              <h2 className="heading text-3xl mt-5 leading-tight">
                Who we are, in our own words.
              </h2>
            </div>
          </Reveal>

          <div className="col-span-12 lg:col-span-9 lg:col-start-4 space-y-16">
            {/* Mission */}
            <Reveal>
              <div className="text-[10px] uppercase tracking-[0.22em] text-royal-700 font-semibold mb-4">
                Mission
              </div>
              <p className="font-display text-3xl sm:text-4xl leading-[1.2] text-slate-900 tracking-[-0.01em] max-w-3xl">
                {mission}
              </p>
            </Reveal>

            {/* Vision */}
            <Reveal delay={80} className="border-t border-slate-200 pt-12">
              <div className="text-[10px] uppercase tracking-[0.22em] text-royal-700 font-semibold mb-4">
                Vision
              </div>
              <p className="font-display text-2xl sm:text-3xl leading-[1.25] text-slate-800 tracking-[-0.01em] max-w-3xl">
                {vision}
              </p>
            </Reveal>

            {/* Core values */}
            <Reveal delay={160} className="border-t border-slate-200 pt-12">
              <div className="flex items-baseline justify-between mb-8">
                <div className="text-[10px] uppercase tracking-[0.22em] text-royal-700 font-semibold">
                  Core values
                </div>
                <div className="text-xs text-slate-400">Five, in this order.</div>
              </div>
              <ol className="divide-y divide-slate-200 border-y border-slate-200">
                {coreValues.map((v, i) => (
                  <li
                    key={v.name}
                    className="grid grid-cols-12 gap-4 py-5 group hover:bg-slate-50/60 transition-colors"
                  >
                    <div className="col-span-1 font-mono text-[11px] text-slate-400 pt-1">
                      0{i + 1}
                    </div>
                    <div className="col-span-11 sm:col-span-4 font-display font-semibold text-xl text-slate-900">
                      {v.name}
                    </div>
                    <div className="col-span-12 sm:col-span-7 text-slate-600 leading-relaxed">
                      {v.gloss}
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
