import { Instagram, Facebook, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-royal-950 text-royal-100 isolate">
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
      <img
        src="/crest.png"
        alt=""
        aria-hidden
        className="absolute -right-24 -bottom-16 w-[420px] max-w-none opacity-[0.06] pointer-events-none select-none hidden md:block"
        style={{ filter: 'invert(1)', mixBlendMode: 'lighten' }}
      />
      <div className="relative max-w-page container-px py-20">
        <div className="grid lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4">
              <img
                src="/crest.png"
                alt="Lambda Phi Epsilon crest"
                className="w-14 h-14 shrink-0"
                style={{ filter: 'invert(1)' }}
              />
              <div className="leading-tight">
                <div className="font-display font-bold text-white text-lg">Lambda Phi Epsilon</div>
                <div className="text-xs uppercase tracking-[0.18em] text-royal-300">Beta Zeta Chapter</div>
                <div className="text-[10px] uppercase tracking-[0.22em] text-royal-400 mt-1 font-display italic">
                  ἡγεμόνες ἐν ἀνθρώποις εἶναι
                </div>
              </div>
            </div>
            <p className="mt-6 max-w-md text-royal-200 leading-relaxed">
              The Beta Zeta chapter of Lambda Phi Epsilon at Virginia Tech — building leaders, lifelong brotherhood,
              and a legacy of service since our founding.
            </p>
            <div className="mt-8 flex gap-3">
              <a href="https://instagram.com/vtlambdas" target="_blank" rel="noreferrer" className="grid place-items-center w-10 h-10 rounded-full bg-white/10 hover:bg-white hover:text-royal-900 transition">
                <Instagram size={18} />
              </a>
              <a href="https://facebook.com/vtlphie" target="_blank" rel="noreferrer" className="grid place-items-center w-10 h-10 rounded-full bg-white/10 hover:bg-white hover:text-royal-900 transition">
                <Facebook size={18} />
              </a>
              <a href="mailto:vtlphie@vt.edu" className="grid place-items-center w-10 h-10 rounded-full bg-white/10 hover:bg-white hover:text-royal-900 transition">
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-display font-semibold mb-4">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><a className="hover:text-white" href="#about">About Us</a></li>
              <li><a className="hover:text-white" href="#philanthropy">Philanthropy</a></li>
              <li><a className="hover:text-white" href="#chapter">Our Chapter</a></li>
              <li><a className="hover:text-white" href="#recruitment">Recruitment</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display font-semibold mb-4">Reach Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>Blacksburg, VA<br/>Virginia Tech</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:vtlphie@vt.edu" className="hover:text-white">vtlphie@vt.edu</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-royal-300">
          <div>© {new Date().getFullYear()} Lambda Phi Epsilon · Beta Zeta. All rights reserved.</div>
          <div>Leadership · Brotherhood · Service</div>
        </div>
      </div>
    </footer>
  );
}
