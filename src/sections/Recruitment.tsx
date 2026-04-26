import { useState } from 'react';
import { Send, CheckCircle2, Instagram, Mail } from 'lucide-react';
import Reveal from '../components/Reveal';

type Status = 'idle' | 'submitting' | 'ok' | 'error';

export default function Recruitment() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [form, setForm] = useState({ first: '', last: '', email: '', phone: '', social: '' });

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg(null);
    try {
      const res = await fetch('/api/recruits', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(
          data.error === 'rate_limited'
            ? "You've submitted a few times recently — try again in a bit."
            : data.error === 'invalid_input'
            ? 'Please check that all fields are filled in correctly.'
            : 'Something went wrong. Try again in a moment.'
        );
      }
      setStatus('ok');
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Unknown error');
    }
  };

  const submitted = status === 'ok';

  return (
    <section
      id="recruitment"
      className="section bg-royal-950 text-white relative overflow-hidden isolate"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(120% 70% at 20% 0%, #1a2bb8 0%, #0d1666 50%, #070d3d 100%)',
        }}
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-grid opacity-[0.18]" />

      <div className="relative max-w-page">
        <div className="grid grid-cols-12 gap-x-8 gap-y-16">
          <Reveal className="col-span-12 lg:col-span-5">
            <span className="eyebrow !text-royal-200">
              <span className="w-6 h-px bg-royal-200" />
              05 / Rush
            </span>
            <h2 className="heading !text-white text-4xl sm:text-5xl mt-5 leading-[1.05]">
              Come see if it's <em className="italic font-medium text-royal-200">home.</em>
            </h2>
            <p className="mt-6 text-royal-100/85 text-[15px] leading-[1.75] max-w-md">
              No commitment, no expectations. Drop your info and we'll send you the rush calendar.
              If it's not for you, that's fine too — but you'll know.
            </p>

            <ul className="mt-10 space-y-4 text-royal-100/90 max-w-md">
              {[
                'Open to all majors, all years, all backgrounds.',
                'Low-pressure events. Real conversations.',
                'We will follow up — once. No spam.',
              ].map((b) => (
                <li key={b} className="flex items-start gap-3 text-[15px]">
                  <CheckCircle2 size={18} className="text-royal-300 mt-1 shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="text-[10px] uppercase tracking-[0.22em] text-royal-300 mb-4">
                Or reach out directly
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://instagram.com/vtlambdas"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white hover:text-royal-900 transition text-sm"
                >
                  <Instagram size={15} /> @vtlambdas
                </a>
                <a
                  href="mailto:vtlphie@vt.edu"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white hover:text-royal-900 transition text-sm"
                >
                  <Mail size={15} /> vtlphie@vt.edu
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120} className="col-span-12 lg:col-span-6 lg:col-start-7">
            <div className="rounded-[28px] bg-white text-slate-900 p-8 sm:p-10 shadow-2xl shadow-black/40">
              {submitted ? (
                <div className="py-10 text-center">
                  <div className="grid place-items-center w-14 h-14 rounded-full bg-royal-50 text-royal-700 mx-auto">
                    <CheckCircle2 size={26} />
                  </div>
                  <h3 className="heading text-2xl mt-6">
                    You're on the list, {form.first || 'brother'}.
                  </h3>
                  <p className="mt-3 text-slate-600 text-[15px]">
                    We'll send the rush calendar to your inbox. Looking forward to meeting you.
                  </p>
                </div>
              ) : (
                <form onSubmit={submit} className="space-y-5">
                  <div>
                    <h3 className="heading text-2xl">Interest form</h3>
                    <p className="text-sm text-slate-500 mt-1">
                      Takes thirty seconds. We take it from there.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="First name" value={form.first} onChange={update('first')} required />
                    <Field label="Last name" value={form.last} onChange={update('last')} required />
                  </div>
                  <Field
                    label="VT email"
                    type="email"
                    value={form.email}
                    onChange={update('email')}
                    placeholder="you@vt.edu"
                    required
                  />
                  <Field label="Phone" type="tel" value={form.phone} onChange={update('phone')} />
                  <Field
                    label="Instagram"
                    value={form.social}
                    onChange={update('social')}
                    placeholder="@yourhandle"
                  />

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 bg-royal-800 text-white text-sm font-semibold hover:bg-royal-900 transition shadow-lg shadow-royal-800/20 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? (
                      'Sending…'
                    ) : (
                      <>
                        Send it <Send size={15} />
                      </>
                    )}
                  </button>
                  {errorMsg && (
                    <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-lg py-2 px-3 text-center">
                      {errorMsg}
                    </p>
                  )}
                  <p className="text-xs text-slate-500 text-center pt-1">
                    We don't share your info. Ever.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <label className="block">
      <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
        {label}
      </span>
      <input
        {...props}
        className="mt-1.5 block w-full border-0 border-b border-slate-200 bg-transparent px-0 py-2.5 text-slate-900 placeholder-slate-300 focus:border-royal-800 focus:ring-0 outline-none transition"
      />
    </label>
  );
}
