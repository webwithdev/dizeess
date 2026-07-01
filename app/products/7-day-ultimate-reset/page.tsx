'use client';

export default function UltimateResetPage() {
  const paymentLink = 'https://urpy.link/586ZcU';
  const productImage = '/images/7%20day%20plan.png';
  const focusAreas = [
    'Environment',
    'Body',
    'Focus',
    'Mind',
    'Inputs',
    'Energy',
    'Direction',
  ];
  const whatYouGet = [
    'A 7-day action plan',
    'Daily checklists and micro-habits that stick',
    'A simple structure to break overwhelm',
    'Reflection prompts that rebuild clarity and identity',
    'Momentum-based routines you can restart anytime',
  ];
  const whoItsFor = [
    'Creators stuck in a slump',
    'Students drowning in expectations',
    'Founders who lost momentum',
    'Anyone who feels like their brain has too many tabs open',
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[#065f46]/20 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <div className="flex-shrink-0">
              <a href="/" className="group flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-[#065f46] to-[#064e3b] shadow-md transition-all duration-300 group-hover:shadow-lg">
                  <span className="text-lg font-black text-white">D</span>
                </div>
                <span className="text-xl font-black tracking-tight text-gray-900 transition-colors duration-300 group-hover:text-[#065f46] sm:text-2xl">
                  Dizees
                </span>
              </a>
            </div>

            <div className="flex items-center gap-3 sm:gap-5">
              <a
                href="https://x.com/webwithdev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 transition-all duration-300 hover:scale-110 hover:text-[#065f46]"
                aria-label="Twitter"
              >
                <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://github.com/webwithdev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 transition-all duration-300 hover:scale-110 hover:text-[#065f46]"
                aria-label="GitHub"
              >
                <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/devansh-bisht-8322842b7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 transition-all duration-300 hover:scale-110 hover:text-[#065f46]"
                aria-label="LinkedIn"
              >
                <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
      </nav>

      <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white pt-16">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-16 -right-20 h-72 w-72 rounded-full bg-[#065f46]/10 blur-3xl" />
          <div className="absolute bottom-10 -left-16 h-64 w-64 rounded-full bg-[#064e3b]/10 blur-3xl" />
        </div>

        <div className="relative z-10 grid xl:grid-cols-2">
          <section className="relative flex min-h-[38vh] items-center justify-center bg-gradient-to-br from-[#065f46]/5 via-gray-50 to-[#064e3b]/5 p-5 sm:p-7 xl:sticky xl:top-16 xl:h-[calc(100vh-4rem)]">
            <div className="absolute inset-0 opacity-30">
              <div className="absolute left-5 top-8 h-16 w-16 rounded-full border border-[#065f46]/30 sm:h-24 sm:w-24" />
              <div className="absolute bottom-8 right-6 h-12 w-12 rounded-full border border-[#064e3b]/30 sm:h-20 sm:w-20" />
            </div>

            <div className="relative z-10 flex h-full w-full items-center justify-center ">
              <div className="relative w-full max-w-lg group lg:h-full  lg:max-w-2xl xl:max-w-3xl ">
                <div className="absolute -inset-3 rounded-3xl bg-gradient-to-r from-[#065f46]/30 to-[#064e3b]/30 blur-xl transition-opacity duration-300 group-hover:opacity-100" />
                <img
                  src={productImage}
                  alt="7-Day Ultimate Reset cover"
                  className="relative max-h-[52vh] w-full rounded-2xl  shadow-2xl transition-transform duration-500 group-hover:scale-[1.02] sm:max-h-[60vh]  lg:h-full lg:max-h-none lg:group-hover:scale-105"
                />
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-b from-white via-gray-50 to-white px-4 pb-28 pt-5 sm:px-6 sm:pb-16 sm:pt-8 lg:px-10 xl:px-14">
            <div className="mx-auto w-full max-w-2xl space-y-6 sm:space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500 px-3.5 py-2 text-xs font-bold text-white shadow-lg sm:px-4 sm:text-sm">
                <span className="text-base sm:text-lg">🔥</span>
                <span>Best Seller - 50+ Customers</span>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#065f46] to-[#064e3b] px-3 py-1.5 text-[11px] font-bold text-white shadow-md sm:px-4 sm:py-2 sm:text-xs">
                  📄 PDF Format
                </span>
                <span className="rounded-full bg-gray-900 px-3 py-1.5 text-[11px] font-bold text-white shadow-md sm:px-4 sm:py-2 sm:text-xs">
                  ⚡ 7-Day Plan
                </span>
                <span className="rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-3 py-1.5 text-[11px] font-bold text-white shadow-md sm:px-4 sm:py-2 sm:text-xs">
                  ✨ Instant Access
                </span>
              </div>

              <div className="space-y-3">
                <h1 className="text-3xl font-black leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                  7-Day{' '}
                  <span className="bg-gradient-to-r from-[#065f46] to-[#064e3b] bg-clip-text text-transparent">
                    Ultimate Reset Routine
                  </span>
                </h1>
                <p className="text-lg font-bold text-gray-700 sm:text-xl lg:text-2xl">
                  Reset your focus, energy, and space in seven simple days.
                </p>

                <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-lg text-yellow-500 sm:text-xl">
                        ⭐
                      </span>
                    ))}
                  </div>
                  <span className="font-semibold text-gray-600">4.8/5.0</span>
                  <span className="text-gray-400">•</span>
                  <span className="font-semibold text-gray-600">50+ Happy Users</span>
                </div>

                <div className="rounded-2xl border border-[#065f46]/15 bg-white p-4 shadow-sm sm:p-5">
                  <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                    I am Devansh, a student and a coder from Srinagar. I built this after my own productivity kept
                    falling apart every week. I made this specifically for students like me who keep restarting and
                    never sticking. 50 students have already downloaded this.
                  </p>
                  <p className="mt-3 text-right text-sm font-bold text-[#064e3b]">- Devansh Bisht</p>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#065f46] to-[#064e3b] p-5 text-white shadow-xl sm:p-6 lg:p-8">
                <div className="absolute inset-0 -translate-x-full -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 hover:translate-x-full" />

                <div className="relative z-10">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-baseline sm:justify-between">
                    <div>
                      <p className="mb-2 flex items-center gap-2 text-sm font-medium opacity-90">
                        <span className="text-xl">🔥</span>
                        Limited Time Deal - Grab It Now!
                      </p>
                      <div className="flex flex-wrap items-baseline gap-3">
                        <span className="text-5xl font-black lg:text-6xl">₹49</span>
                        <span className="text-xl line-through opacity-60 lg:text-2xl">₹399</span>
                      </div>
                      <p className="mt-2 text-sm opacity-90">Save ₹350 Today 💚</p>
                    </div>
                    <div className="w-fit rounded-xl border border-white/35 bg-white/20 px-4 py-2.5 backdrop-blur-sm">
                      <p className="text-sm font-bold sm:text-base">87% OFF</p>
                    </div>
                  </div>

                  <a
                    href={paymentLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-white px-6 py-3.5 text-base font-black text-[#064e3b] shadow-lg transition-all duration-300 hover:bg-gray-100 sm:mt-6 sm:text-lg"
                  >
                    🚀 BUY NOW - ₹49
                  </a>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-2.5 py-2 sm:gap-3 sm:py-3">
                <div className="flex items-center gap-2 rounded-full bg-gray-100 px-3 py-2 text-xs text-gray-700 sm:px-4 sm:text-sm">
                  <span className="text-base sm:text-lg">⚡</span>
                  <span className="whitespace-nowrap font-semibold">Instant Access</span>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-gray-100 px-3 py-2 text-xs text-gray-700 sm:px-4 sm:text-sm">
                  <span className="text-base sm:text-lg">🔒</span>
                  <span className="whitespace-nowrap font-semibold">Secure Payment</span>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-gray-100 px-3 py-2 text-xs text-gray-700 sm:px-4 sm:text-sm">
                  <span className="text-base sm:text-lg">📱</span>
                  <span className="whitespace-nowrap font-semibold">100% Digital</span>
                </div>
              </div>

              <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-lg sm:p-6 lg:p-8">
                <h3 className="mb-4 text-2xl font-black text-gray-900">After 7 Days, You Will Feel</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  After these 7 days, you will feel awake again. Your mind will be clear, your space will support your goals, your habits will align with who you want to be, and you will know exactly what you are building next.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  For anyone who feels stuck, overwhelmed, or like their life is running on 2% battery. This is not another morning routine ebook. This is a structured, do-this-today rebuild of your:
                </p>
                <div className="grid gap-2.5 sm:grid-cols-2 sm:gap-3">
                  {focusAreas.map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50 p-3">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-[#065f46] to-[#064e3b] text-sm font-bold text-white">
                        ✓
                      </span>
                      <span className="text-gray-700 font-semibold">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  Seven days. One clear routine per day. No guesswork, no overwhelming. Just action.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-lg sm:p-6 lg:p-8">
                <h3 className="mb-4 text-2xl font-black text-gray-900">Hey, I&apos;m Devansh</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  A few years ago, I was that person who said, &quot;I will fix my life this weekend.&quot; Every single weekend.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  But somehow, I would end up doom-scrolling, eating chips at 1 a.m., and convincing myself Monday would be different. Spoiler: it never was.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Fast forward to today. I run my own startup, a personal brand, I stay consistent, actually sleep, and wake up excited to build again.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  What changed? I stopped trying to overhaul my entire life in one go. Instead, I built a simple 7-day routine that resets your inner chaos step by step. That is exactly what this guide will do for you.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-lg sm:p-6 lg:p-8">
                <h3 className="mb-4 text-2xl font-black text-gray-900">What You Get</h3>
                <ul className="space-y-3">
                  {whatYouGet.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#065f46] to-[#064e3b] text-sm font-bold text-white">
                        ✓
                      </span>
                      <span className="font-medium leading-relaxed text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-gray-700 leading-relaxed">This is not content. This is a reset protocol.</p>
              </div>

              <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-lg sm:p-6 lg:p-8">
                <h3 className="mb-4 text-2xl font-black text-gray-900">Who It Is For</h3>
                <ul className="space-y-3">
                  {whoItsFor.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#065f46] to-[#064e3b] text-sm font-bold text-white">
                        ✓
                      </span>
                      <span className="font-medium leading-relaxed text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  If you feel like you have been running your life on 2% battery, this is your charger.
                </p>
              </div>
            </div>
          </section>
        </div>

        <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#065f46]/20 bg-white/95 p-3 backdrop-blur-md sm:hidden">
          <div className="mx-auto max-w-md overflow-hidden rounded-2xl bg-gradient-to-r from-[#065f46] to-[#064e3b] p-3 text-white shadow-xl">
            <div className="mb-2 flex items-center justify-between">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wide text-white/80">Today only</p>
                <div className="flex items-baseline gap-2">
                  <p className="text-2xl font-black">₹49</p>
                  <p className="text-sm line-through text-white/70">₹399</p>
                </div>
              </div>
              <div className="rounded-lg border border-white/35 bg-white/20 px-2.5 py-1 text-xs font-bold backdrop-blur-sm">
                87% OFF
              </div>
            </div>
            <a
              href={paymentLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-xl bg-white px-4 py-2.5 text-sm font-black text-[#064e3b] shadow-lg"
            >
              🚀 BUY NOW - ₹49
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
