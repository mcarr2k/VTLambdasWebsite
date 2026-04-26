import Reveal from '../components/Reveal';
import { founding, totalBrothers, roster } from '../data/chapter';

const calendar: Array<{ when: string; title: string; tag: string; body: string }> = [
  {
    when: 'August',
    title: 'Fall Rush',
    tag: 'Recruitment',
    body: 'Two weeks of low-pressure events — meet the brothers, ask hard questions, decide on your timeline.',
  },
  {
    when: 'October',
    title: 'Be The Match Drive',
    tag: 'Philanthropy',
    body: 'Our biggest registry push of the year. Hundreds of swabs in the database; sometimes the call comes years later.',
  },
  {
    when: 'November',
    title: 'Asian Heritage Showcase',
    tag: 'Culture',
    body: 'A night of music, dance, and food, hosted with the broader Asian-American community at Tech.',
  },
  {
    when: 'February',
    title: "Founders' Week",
    tag: 'Tradition',
    body: 'We mark the anniversary of the founding at UCLA — alumni come back, and brothers across chapters connect.',
  },
  {
    when: 'April',
    title: 'Brotherhood Retreat',
    tag: 'Internal',
    body: 'A weekend off-campus. No phones. Hard conversations, real rest, plans for next year.',
  },
];

export default function Chapter() {
  return (
    <section id="chapter" className="section bg-white">
      <div className="max-w-page">
        <div className="grid grid-cols-12 gap-x-8 gap-y-12">
          <Reveal className="col-span-12 lg:col-span-3">
            <div className="lg:sticky lg:top-32">
              <span className="eyebrow">
                <span className="w-6 h-px bg-royal-700" />
                03 / Chapter
              </span>
              <h2 className="heading text-3xl mt-5 leading-tight">
                Beta Zeta. Built in Blacksburg.
              </h2>
              <p className="mt-4 text-sm text-slate-500 leading-relaxed">
                A chapter of {totalBrothers}+ active and alumni brothers, founded December 2003.
              </p>
            </div>
          </Reveal>

          <div className="col-span-12 lg:col-span-9 lg:col-start-4 space-y-16">
            {/* Founding dossier */}
            <Reveal>
              <div className="grid sm:grid-cols-2 gap-8 sm:gap-12">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.22em] text-royal-700 font-semibold mb-3">
                    National founding
                  </div>
                  <div className="font-display text-2xl text-slate-900">{founding.national.date}</div>
                  <div className="text-sm text-slate-500 mt-1">{founding.national.place}</div>
                  <p className="mt-4 text-slate-600 text-[15px] leading-[1.7]">
                    {founding.national.note}
                  </p>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.22em] text-royal-700 font-semibold mb-3">
                    Beta Zeta · Virginia Tech
                  </div>
                  <div className="font-display text-2xl text-slate-900">{founding.chapter.date}</div>
                  <div className="text-sm text-slate-500 mt-1">{founding.chapter.place}</div>
                  <p className="mt-4 text-slate-600 text-[15px] leading-[1.7]">
                    {founding.chapter.note}
                  </p>
                  <div className="mt-5 text-[11px] uppercase tracking-[0.18em] text-slate-400">
                    Charter class
                  </div>
                  <div className="mt-2 text-sm text-slate-700 leading-relaxed">
                    {founding.chapter.founders.join(' · ')}
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Calendar */}
            <Reveal delay={120} className="border-t border-slate-200 pt-12">
              <div className="text-[10px] uppercase tracking-[0.22em] text-royal-700 font-semibold mb-6">
                A year in Beta Zeta
              </div>
              <ol className="relative">
                {calendar.map((e) => (
                  <li
                    key={e.title}
                    className="grid grid-cols-12 gap-6 py-6 border-t border-slate-200 first:border-t-0"
                  >
                    <div className="col-span-12 sm:col-span-3">
                      <div className="font-display font-semibold text-slate-900 text-lg">{e.when}</div>
                      <div className="text-[10px] uppercase tracking-[0.18em] text-royal-700 mt-1">
                        {e.tag}
                      </div>
                    </div>
                    <div className="col-span-12 sm:col-span-9">
                      <h3 className="font-display text-xl text-slate-900">{e.title}</h3>
                      <p className="mt-2 text-slate-600 leading-relaxed text-[15px] max-w-prose">
                        {e.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>

            {/* Stats — derived, not made up */}
            <Reveal delay={200} className="border-t border-slate-200 pt-12 grid sm:grid-cols-3 gap-y-6">
              <div>
                <div className="font-display text-3xl text-royal-900">{totalBrothers}+</div>
                <div className="text-sm text-slate-500 mt-1">Brothers since 2003</div>
              </div>
              <div>
                <div className="font-display text-3xl text-royal-900">{roster.length}</div>
                <div className="text-sm text-slate-500 mt-1">Pledge classes</div>
              </div>
              <div>
                <div className="font-display text-3xl text-royal-900">21+</div>
                <div className="text-sm text-slate-500 mt-1">Years on campus</div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
