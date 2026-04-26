import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-royal-950 text-white min-h-[100svh] flex items-end"
    >
      {/* layered background — no blobs, just a deep field with subtle structure */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(120% 80% at 80% 0%, #1a2bb8 0%, #0d1666 45%, #070d3d 100%)',
        }}
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-grid opacity-[0.18]" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-noise opacity-30 mix-blend-overlay" />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 -z-10 h-40"
        style={{ background: 'linear-gradient(to top, rgba(7,13,61,0.7), transparent)' }}
      />

      <div className="relative w-full max-w-page container-px pt-32 pb-20 sm:pb-28">
        {/* tiny dossier line at top right */}
        <div className="hidden md:flex absolute top-28 right-12 items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-white/55">
          <span>Est. 1981</span>
          <span className="w-8 h-px bg-white/30" />
          <span>UCLA · Founding</span>
          <span className="w-8 h-px bg-white/30" />
          <span>Beta Zeta · 2010s</span>
        </div>

        <div className="grid grid-cols-12 gap-x-8 gap-y-10 items-end">
          <div className="col-span-12 lg:col-span-9 motion-fade-up">
            <div className="text-[11px] uppercase tracking-[0.3em] text-white/60 mb-8">
              Λ · Φ · Ε  /  Beta Zeta
            </div>
            <h1 className="font-display font-semibold leading-[0.92] tracking-[-0.02em] text-[clamp(2.75rem,8vw,7rem)]">
              Brothers <em className="italic font-medium text-white/85">in</em> name.
              <br />
              Brothers <em className="italic font-medium text-white/85">for</em> life.
            </h1>
          </div>

          <div className="col-span-12 lg:col-span-7 lg:col-start-1 motion-fade-up motion-delay-1">
            <p className="max-w-xl text-base sm:text-lg text-white/75 leading-[1.65]">
              The first nationally recognized Asian-American interest fraternity, founded at UCLA in
              1981. The Beta Zeta chapter at Virginia Tech carries that legacy in Blacksburg —
              engineers and economists, athletes and artists, all held to the same standard.
            </p>
          </div>

          <div className="col-span-12 lg:col-span-4 lg:col-start-9 lg:row-start-2 flex flex-wrap gap-3 motion-fade-up motion-delay-2">
            <a
              href="#recruitment"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 bg-white text-royal-950 text-sm font-semibold hover:bg-royal-50 transition shadow-xl shadow-black/20"
            >
              Rush ΛΦΕ <ArrowRight size={16} />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 border border-white/25 text-white text-sm font-medium hover:bg-white/10 transition"
            >
              Read our story
            </a>
          </div>
        </div>

        {/* footer strip */}
        <div className="mt-20 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-y-6 text-[13px] motion-fade-up motion-delay-3">
          {[
            ['Founded', 'Feb 25, 1981'],
            ['National HQ', 'Los Angeles, CA'],
            ['Beta Zeta', 'Blacksburg, VA'],
            ['Greek Letters', 'Λ Φ Ε'],
          ].map(([k, v]) => (
            <div key={k} className="flex flex-col">
              <span className="text-white/45 uppercase tracking-[0.16em] text-[10px]">{k}</span>
              <span className="mt-1 font-display text-base text-white">{v}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
