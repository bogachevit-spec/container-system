export default function TestMLINEPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f3f6fb]">

      {/* gradients */}

      <div className="absolute left-[-140px] top-[-140px] h-[260px] w-[260px] rounded-full bg-blue-100/50 blur-3xl md:h-[360px] md:w-[360px]" />

      <div className="absolute bottom-[-180px] right-[-180px] h-[260px] w-[260px] rounded-full bg-indigo-100/40 blur-3xl md:h-[420px] md:w-[420px]" />

      {/* content */}

      <div className="relative z-10 mx-auto max-w-5xl px-3 py-8 md:px-6 md:py-20">

        {/* card */}

        <div className="overflow-hidden rounded-[28px] border border-white/50 bg-white/90 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur md:rounded-[36px]">

          {/* header */}

          <div className="border-b border-gray-100 p-5 md:p-8">

            <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">

              <div>

                <div className="inline-flex rounded-full bg-[#eef2ff] px-3 py-1.5 text-[10px] font-black tracking-wide text-[#4f46e5] md:px-4 md:py-2 md:text-xs">
                  SHIPPING LINE
                </div>

                <h1 className="mt-4 text-3xl font-black tracking-tight text-gray-900 md:mt-5 md:text-5xl">
                  MLINE
                </h1>

                <p className="mt-2 text-xs font-medium text-gray-500 md:mt-4 md:text-sm">
                  Тарифы MLINE (Модуль)
                </p>

              </div>

              <div className="w-fit rounded-full bg-[#f8fafc] px-4 py-2 text-[10px] font-black text-[#475569] md:px-5 md:py-3 md:text-xs">
                UPDATED • 29.09.2025
              </div>

            </div>

          </div>

          {/* demurrage */}

          <div className="border-b border-gray-100 p-5 md:p-8">

            <div className="mb-4 flex items-center justify-between md:mb-5">

              <div className="text-[11px] font-black uppercase tracking-wide text-gray-900 md:text-sm">
                Demurrage Rules
              </div>

              <div className="rounded-full bg-[#f1f5f9] px-2.5 py-1 text-[9px] font-black text-[#475569] md:px-3 md:text-[10px]">
                IMPORTANT
              </div>

            </div>

            <div className="grid gap-3 md:grid-cols-2 md:gap-4">

              <div className="rounded-2xl border border-gray-100 bg-[#f8fafc] p-4 md:rounded-3xl md:p-6">

                <div className="text-[10px] font-black uppercase tracking-wide text-gray-500 md:text-xs">
                  20 / 40
                </div>

                <div className="mt-2 text-2xl font-black text-gray-900 md:mt-3 md:text-3xl">
                  14 дней
                </div>

                <div className="mt-1 text-xs font-medium text-gray-500 md:mt-2 md:text-sm">
                  Бесплатный демередж
                </div>

              </div>

              <div className="rounded-2xl border border-gray-100 bg-[#f8fafc] p-4 md:rounded-3xl md:p-6">

                <div className="text-[10px] font-black uppercase tracking-wide text-gray-500 md:text-xs">
                  REF / OT / FLAT
                </div>

                <div className="mt-2 text-2xl font-black text-gray-900 md:mt-3 md:text-3xl">
                  5 дней
                </div>

                <div className="mt-1 text-xs font-medium text-gray-500 md:mt-2 md:text-sm">
                  Бесплатный демередж
                </div>

              </div>

            </div>

          </div>

          {/* terminals */}

          <div className="p-5 md:p-8">

            <div className="mb-5 text-[11px] font-black uppercase tracking-wide text-gray-900 md:mb-6 md:text-sm">
              Terminal Rules
            </div>

            <div className="space-y-3 md:space-y-5">

              {/* PKT */}

              <details
                open
                className="overflow-hidden rounded-2xl border border-gray-100 bg-white md:rounded-3xl"
              >

                <summary className="flex cursor-pointer list-none items-center justify-between bg-[#475569] px-4 py-4 text-xs font-black text-white md:px-6 md:py-5 md:text-sm">

                  ПКТ / ПЛП

                  <span className="text-[10px] md:text-xs">
                    ▼
                  </span>

                </summary>

                <div className="bg-white px-4 md:px-6">

                  {[
                    ['DC / HC', '10 дней'],
                    ['РЕФ', '0 дней'],
                    ['ОПАСНЫЙ ГРУЗ', '5 дней'],
                    ['НЕГАБАРИТ', '5 дней'],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="flex items-center justify-between border-b border-gray-100 py-4 last:border-none md:py-5"
                    >

                      <div className="text-xs font-semibold text-gray-700 md:text-sm">
                        {label}
                      </div>

                      <div className="text-xs font-black text-gray-900 md:text-sm">
                        {value}
                      </div>

                    </div>
                  ))}

                </div>

              </details>

              {/* KTSP */}

              <details className="overflow-hidden rounded-2xl border border-gray-100 bg-white md:rounded-3xl">

                <summary className="flex cursor-pointer list-none items-center justify-between bg-[#475569] px-4 py-4 text-xs font-black text-white md:px-6 md:py-5 md:text-sm">

                  КТСП

                  <span className="text-[10px] md:text-xs">
                    ▼
                  </span>

                </summary>

                <div className="bg-white px-4 md:px-6">

                  {[
                    ['DC / HC', '10 дней'],
                    ['РЕФ', '0 дней'],
                    ['ОПАСНЫЙ ГРУЗ', '4 дня'],
                    ['НЕГАБАРИТ', '0 дней'],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="flex items-center justify-between border-b border-gray-100 py-4 last:border-none md:py-5"
                    >

                      <div className="text-xs font-semibold text-gray-700 md:text-sm">
                        {label}
                      </div>

                      <div className="text-xs font-black text-gray-900 md:text-sm">
                        {value}
                      </div>

                    </div>
                  ))}

                </div>

              </details>

              {/* BRONKA */}

              <details className="overflow-hidden rounded-2xl border border-gray-100 bg-white md:rounded-3xl">

                <summary className="flex cursor-pointer list-none items-center justify-between bg-[#475569] px-4 py-4 text-xs font-black text-white md:px-6 md:py-5 md:text-sm">

                  БРОНКА

                  <span className="text-[10px] md:text-xs">
                    ▼
                  </span>

                </summary>

                <div className="bg-white px-4 md:px-6">

                  {[
                    ['20/40/45/REF/DG9', '10 дней'],
                    ['DG кроме 6.1', '5 дней'],
                    ['DG 6.1', '0 дней'],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="flex items-center justify-between border-b border-gray-100 py-4 last:border-none md:py-5"
                    >

                      <div className="text-xs font-semibold text-gray-700 md:text-sm">
                        {label}
                      </div>

                      <div
                        className={`text-xs font-black md:text-sm ${
                          label === 'DG 6.1'
                            ? 'text-red-600'
                            : 'text-gray-900'
                        }`}
                      >
                        {value}
                      </div>

                    </div>
                  ))}

                </div>

              </details>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}