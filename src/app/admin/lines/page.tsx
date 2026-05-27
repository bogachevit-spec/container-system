'use client'

const lines = [
  {
    id: 1,
    name: 'Maersk',
    port: 'Bronka',
    terminal: 'CTSP',
    updated: '25 Dec 2026',
  },
  {
    id: 2,
    name: 'MSC',
    port: 'Novorossiysk',
    terminal: 'NUTEP',
    updated: '21 Dec 2026',
  },
  {
    id: 3,
    name: 'ONE',
    port: 'Vladivostok',
    terminal: 'VMTP',
    updated: '18 Dec 2026',
  },
]

export default function LinesPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f5f7fb]">

      <div className="absolute left-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-blue-100/40 blur-3xl" />

      <div className="absolute bottom-[-140px] right-[-140px] h-[340px] w-[340px] rounded-full bg-indigo-100/40 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-10">

        <div className="mb-10">

          <h1 className="text-5xl font-black tracking-tight text-gray-900">
            Shipping Lines
          </h1>

          <p className="mt-3 text-sm font-medium text-gray-500">
            Manage tariffs and shipping rules
          </p>

        </div>

        <div className="space-y-5">

          {lines.map((line) => (
            <div
              key={line.id}
              className="rounded-[32px] border border-white/40 bg-white/80 p-7 shadow-sm backdrop-blur"
            >

              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

                <div>

                  <div className="mb-3 inline-flex rounded-full bg-[#eef2ff] px-4 py-2 text-xs font-black text-[#4f46e5]">
                    SHIPPING LINE
                  </div>

                  <h2 className="text-3xl font-black text-gray-900">
                    {line.name}
                  </h2>

                  <div className="mt-4 flex flex-wrap gap-3">

                    <div className="rounded-2xl bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700">
                      Port: {line.port}
                    </div>

                    <div className="rounded-2xl bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700">
                      Terminal: {line.terminal}
                    </div>

                    <div className="rounded-2xl bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700">
                      Updated: {line.updated}
                    </div>

                  </div>

                </div>

                <button className="rounded-full bg-[#475569] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#334155]">
                  Изменить
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>

    </div>
  )
}