import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Linkedin, Instagram } from 'lucide-react';
import { eboard } from '../data/chapter';

const AUTO_MS = 6000;

export default function EBoardCarousel() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const next = () => setI((p) => (p + 1) % eboard.length);
  const prev = () => setI((p) => (p - 1 + eboard.length) % eboard.length);

  // Auto-advance — pauses on hover/focus or when tab is hidden
  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(next, AUTO_MS);
    return () => window.clearInterval(id);
  }, [paused, i]);

  useEffect(() => {
    const onVis = () => setPaused(document.hidden);
    document.addEventListener('visibilitychange', onVis);
    return () => document.removeEventListener('visibilitychange', onVis);
  }, []);

  // Arrow keys when focused
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    el.addEventListener('keydown', onKey);
    return () => el.removeEventListener('keydown', onKey);
  }, []);

  const m = eboard[i];

  return (
    <div
      ref={ref}
      tabIndex={0}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      className="rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-sm focus:outline-none focus:ring-2 focus:ring-royal-300 focus:ring-offset-2"
      aria-roledescription="carousel"
      aria-label="Executive board"
    >
      <div className="grid grid-cols-1 md:grid-cols-5">
        {/* Photo column */}
        <div className="md:col-span-3 relative bg-slate-100 aspect-[4/5] md:aspect-[3/4] md:min-h-[540px]">
          {eboard.map((mem, idx) => (
            <div
              key={mem.name}
              className={`absolute inset-0 transition-opacity duration-700 ease-out ${
                idx === i ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
              aria-hidden={idx !== i}
            >
              {mem.photo ? (
                <img
                  src={mem.photo}
                  alt={mem.name}
                  loading={idx === 0 ? 'eager' : 'lazy'}
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ objectPosition: '50% 30%' }}
                />
              ) : (
                <div className="absolute inset-0 grid place-items-center bg-gradient-to-br from-royal-800 to-royal-950 text-white">
                  <div className="text-center">
                    <div className="font-display font-semibold text-7xl tracking-tight">
                      {mem.name
                        .split(' ')
                        .map((s) => s[0])
                        .join('')}
                    </div>
                    <div className="text-[10px] uppercase tracking-[0.22em] text-royal-200 mt-3">
                      Photo coming soon
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Counter pill, top-left */}
          <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/55 backdrop-blur-sm text-white text-[11px] font-mono tracking-wider">
            {String(i + 1).padStart(2, '0')} / {String(eboard.length).padStart(2, '0')}
          </div>

          {/* Prev / next, vertically centered */}
          <button
            type="button"
            onClick={prev}
            aria-label="Previous officer"
            className="absolute left-3 top-1/2 -translate-y-1/2 grid place-items-center w-10 h-10 rounded-full bg-white/85 hover:bg-white text-slate-900 backdrop-blur-sm transition shadow-sm"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next officer"
            className="absolute right-3 top-1/2 -translate-y-1/2 grid place-items-center w-10 h-10 rounded-full bg-white/85 hover:bg-white text-slate-900 backdrop-blur-sm transition shadow-sm"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Info column */}
        <div className="md:col-span-2 p-8 md:p-10 flex flex-col">
          <div className="text-[10px] uppercase tracking-[0.22em] text-royal-700 font-semibold">
            {m.position}
          </div>
          <div
            key={m.name}
            className="mt-3 font-display text-3xl text-slate-900 tracking-tight motion-fade-up"
            style={{ animationDuration: '0.5s' }}
          >
            {m.name}
          </div>
          {m.pledgeClass && (
            <div className="mt-2 text-sm text-slate-500">{m.pledgeClass} class</div>
          )}

          <div className="mt-auto pt-8 flex items-center gap-2">
            {m.linkedin && (
              <a
                href={m.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label={`${m.name} on LinkedIn`}
                className="grid place-items-center w-10 h-10 rounded-full text-slate-600 border border-slate-200 hover:text-white hover:bg-royal-800 hover:border-royal-800 transition"
              >
                <Linkedin size={16} />
              </a>
            )}
            {m.instagram && (
              <a
                href={m.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label={`${m.name} on Instagram`}
                className="grid place-items-center w-10 h-10 rounded-full text-slate-600 border border-slate-200 hover:text-white hover:bg-royal-800 hover:border-royal-800 transition"
              >
                <Instagram size={16} />
              </a>
            )}
            {!m.linkedin && !m.instagram && (
              <div className="text-xs text-slate-400 italic">No public socials.</div>
            )}
          </div>

          {/* Dot indicators */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-2">
            {eboard.map((mem, idx) => (
              <button
                key={mem.name}
                type="button"
                onClick={() => setI(idx)}
                aria-label={`Go to ${mem.name}`}
                aria-current={idx === i ? 'true' : undefined}
                className={`h-1.5 rounded-full transition-all ${
                  idx === i ? 'w-8 bg-royal-800' : 'w-1.5 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
            <div className="ml-auto text-[10px] uppercase tracking-[0.18em] text-slate-400">
              {paused ? 'Paused' : 'Auto'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
