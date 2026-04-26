import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '#about', label: 'About' },
  { href: '#philanthropy', label: 'Philanthropy' },
  { href: '#chapter', label: 'Chapter' },
  { href: '#brothers', label: 'Brothers' },
  { href: '#recruitment', label: 'Rush' },
];

export default function Navbar() {
  const [onHero, setOnHero] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const hero = document.getElementById('top');
    if (!hero) {
      setOnHero(false);
      return;
    }
    // Toggle when hero's bottom edge crosses past the navbar (top: 0 of viewport).
    // negative bottom rootMargin means "fire when hero bottom passes viewport top".
    const obs = new IntersectionObserver(
      ([entry]) => setOnHero(entry.isIntersecting),
      { rootMargin: '-64px 0px 0px 0px', threshold: 0 }
    );
    obs.observe(hero);
    return () => obs.disconnect();
  }, []);

  return (
    <header
      className={[
        'fixed top-0 inset-x-0 z-50 transition-[background,backdrop-filter,border-color,box-shadow] duration-300',
        onHero
          ? 'bg-transparent border-b border-transparent'
          : 'bg-white/85 backdrop-blur-lg border-b border-slate-200/70 shadow-[0_1px_0_rgba(15,23,42,0.04)]',
      ].join(' ')}
    >
      <div className="max-w-page container-px flex items-center justify-between h-16 sm:h-20">
        <a href="#top" className="flex items-center gap-3 group">
          <span
            className={[
              'grid place-items-center w-9 h-9 rounded-lg font-display font-bold text-sm transition-colors',
              onHero
                ? 'bg-white/15 text-white border border-white/30 backdrop-blur'
                : 'bg-royal-800 text-white shadow-md shadow-royal-800/20',
            ].join(' ')}
          >
            ΛΦΕ
          </span>
          <span className="hidden sm:flex flex-col leading-tight">
            <span
              className={`font-display font-bold text-base transition-colors ${
                onHero ? 'text-white' : 'text-slate-900'
              }`}
            >
              Lambda Phi Epsilon
            </span>
            <span
              className={`text-[11px] uppercase tracking-[0.16em] transition-colors ${
                onHero ? 'text-white/70' : 'text-slate-500'
              }`}
            >
              Beta Zeta · Virginia Tech
            </span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={[
                'px-4 py-2 rounded-full text-sm font-medium transition-colors',
                onHero
                  ? 'text-white/85 hover:text-white hover:bg-white/10'
                  : 'text-slate-700 hover:text-royal-800 hover:bg-royal-50',
              ].join(' ')}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#recruitment"
            className={[
              'inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all',
              onHero
                ? 'bg-white text-royal-900 hover:bg-royal-50 shadow-lg shadow-black/10'
                : 'bg-royal-800 text-white hover:bg-royal-900 shadow-md shadow-royal-800/20',
            ].join(' ')}
          >
            Rush ΛΦΕ
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className={[
            'md:hidden grid place-items-center w-10 h-10 rounded-lg transition-colors',
            onHero ? 'text-white hover:bg-white/10' : 'text-slate-800 hover:bg-slate-100',
          ].join(' ')}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="container-px py-4 flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-3 rounded-lg text-slate-800 hover:bg-royal-50 hover:text-royal-800 font-medium"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#recruitment"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold bg-royal-800 text-white"
            >
              Rush ΛΦΕ
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
