'use client'

import { useMemo, useState } from 'react'

type Card = {
  id: number
  line: string
  title: string
  updated: string
  demurrage: {
    title: string
    days: string
  }[]
  terminals: {
    name: string
    rules: {
      label: string
      value: string
      warn?: boolean
    }[]
  }[]
}

const MOCK_CARDS: Card[] = [
  {
    id: 1,
    line: 'MLINE',
    title: 'Тарифы MLINE (Модуль)',
    updated: '29.09.2025',
    demurrage: [
      {
        title: '20/40',
        days: '14 дней бесплатно',
      },
      {
        title: 'REF / OT / FLAT',
        days: '5 дней бесплатно',
      },
    ],
    terminals: [
      {
        name: 'ПКТ / ПЛП',
        rules: [
          {
            label: 'DC / HC',
            value: '10 дней',
          },
          {
            label: 'РЕФ',
            value: '0 дней',
          },
          {
            label: 'ОПАСНЫЙ ГРУЗ',
            value: '5 дней',
          },
          {
            label: 'НЕГАБАРИТ',
            value: '5 дней',
          },
        ],
      },
      {
        name: 'КТСП',
        rules: [
          {
            label: 'DC / HC',
            value: '10 дней',
          },
          {
            label: 'РЕФ',
            value: '0 дней',
          },
          {
            label: 'ОПАСНЫЙ ГРУЗ',
            value: '4 дня',
          },
          {
            label: 'НЕГАБАРИТ',
            value: '0 дней',
          },
        ],
      },
      {
        name: 'БРОНКА',
        rules: [
          {
            label: '20/40/45/REF/DG9',
            value: '10 дней',
          },
          {
            label: 'DG кроме 6.1',
            value: '5 дней',
          },
          {
            label: 'DG 6.1',
            value: '0 дней',
            warn: true,
          },
        ],
      },
    ],
  },

  {
    id: 2,
    line: 'TRANSIT',
    title: 'Тарифы TRANSIT',
    updated: '06.03.2026',
    demurrage: [
      {
        title: 'Стандартный',
        days: '14 дней бесплатно',
      },
    ],
    terminals: [
      {
        name: 'КТСП',
        rules: [
          {
            label: 'СУХИЕ',
            value: '10 дней',
          },
          {
            label: 'ОПАСНЫЕ',
            value: '3 дня',
          },
        ],
      },
    ],
  },
]

export default function DashboardClient() {
  const [query, setQuery] = useState('')
  const [recent, setRecent] =
    useState<Card[]>(MOCK_CARDS)

  const filtered = useMemo(() => {
    if (!query.trim()) {
      return recent
    }

    return MOCK_CARDS.filter((card) =>
      JSON.stringify(card)
        .toLowerCase()
        .includes(query.toLowerCase())
    )
  }, [query, recent])

  const handleSearch = () => {
    if (!query.trim()) return

    const found = MOCK_CARDS.find((card) =>
      JSON.stringify(card)
        .toLowerCase()
        .includes(query.toLowerCase())
    )

    if (!found) return

    setRecent((prev) => {
      const filteredPrev = prev.filter(
        (item) => item.id !== found.id
      )

      return [found, ...filteredPrev].slice(0, 4)
    })
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f3f6fb]">

      {/* gradients */}

      <div className="absolute left-[-140px] top-[-140px] h-[360px] w-[360px] rounded-full bg-blue-100/50 blur-3xl" />

      <div className="absolute bottom-[-180px] right-[-180px] h-[420px] w-[420px] rounded-full bg-indigo-100/40 blur-3xl" />

      {/* logout */}

      <div className="absolute right-6 top-6 z-20">

        <button
          className="rounded-full bg-[#475569] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#334155]"
          onClick={() => {
            localStorage.removeItem('auth')
            window.location.href = '/login'
          }}
        >
          Выйти из профиля
        </button>

      </div>

      {/* content */}

      <div className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col items-center px-4 py-20">

        {/* title */}

        <div className="mb-10 text-center">

          <h1 className="text-6xl font-black tracking-tight text-gray-900">
            ERP Search
          </h1>

          <p className="mt-4 text-sm font-medium text-gray-500">
            Search shipping lines, ports and terminals
          </p>

        </div>

        {/* search */}

        <div className="w-full max-w-3xl">

          <div className="rounded-[32px] border border-white/60 bg-white/90 p-3 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur">

            <div className="flex items-center gap-3">

              <input
                value={query}
                onChange={(e) =>
                  setQuery(e.target.value)
                }
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleSearch()
                  }
                }}
                placeholder="Search line, terminal or port..."
                className="h-16 flex-1 rounded-2xl border border-transparent bg-[#f8fafc] px-6 text-[16px] font-semibold text-gray-900 outline-none transition focus:border-[#cbd5e1]"
              />

              <button
                onClick={handleSearch}
                className="h-16 rounded-2xl bg-[#475569] px-8 text-sm font-black text-white transition hover:bg-[#334155]"
              >
                Поиск
              </button>

            </div>

          </div>

        </div>

        {/* cards */}

        <div className="mt-14 grid w-full gap-6">

          {filtered.map((card) => (
            <div
              key={card.id}
              className="overflow-hidden rounded-[32px] border border-white/50 bg-white/90 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur"
            >

              {/* header */}

              <div className="border-b border-gray-100 p-8">

                <div className="flex flex-wrap items-start justify-between gap-5">

                  <div>

                    <div className="inline-flex rounded-full bg-[#eef2ff] px-4 py-2 text-xs font-black tracking-wide text-[#4f46e5]">
                      SHIPPING LINE
                    </div>

                    <h2 className="mt-5 text-4xl font-black text-gray-900">
                      {card.line}
                    </h2>

                    <p className="mt-3 text-sm font-medium text-gray-500">
                      {card.title}
                    </p>

                  </div>

                  <div className="rounded-full bg-[#f8fafc] px-5 py-3 text-xs font-black text-[#475569]">
                    UPDATED • {card.updated}
                  </div>

                </div>

              </div>

              {/* demurrage */}

              <div className="p-8">

                <div className="mb-5 flex items-center justify-between">

                  <div className="text-sm font-black uppercase tracking-wide text-gray-900">
                    Demurrage Rules
                  </div>

                  <div className="rounded-full bg-[#f1f5f9] px-3 py-1 text-[10px] font-black text-[#475569]">
                    IMPORTANT
                  </div>

                </div>

                <div className="grid gap-4 md:grid-cols-2">

                  {card.demurrage.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-3xl border border-gray-100 bg-[#f8fafc] p-6"
                    >

                      <div className="text-xs font-black uppercase tracking-wide text-gray-500">
                        {item.title}
                      </div>

                      <div className="mt-3 text-2xl font-black text-gray-900">
                        {item.days}
                      </div>

                    </div>
                  ))}

                </div>

              </div>

              {/* terminals */}

              <div className="border-t border-gray-100 p-8">

                <div className="mb-6 text-sm font-black uppercase tracking-wide text-gray-900">
                  Terminal Rules
                </div>

                <div className="space-y-4">

                  {card.terminals.map((terminal) => (
                    <details
                      key={terminal.name}
                      className="overflow-hidden rounded-3xl border border-gray-100 bg-white"
                    >

                      <summary className="flex cursor-pointer list-none items-center justify-between bg-[#475569] px-6 py-5 text-sm font-black text-white">

                        {terminal.name}

                        <span className="text-xs">
                          ▼
                        </span>

                      </summary>

                      <div className="bg-white px-6">

                        {terminal.rules.map((rule) => (
                          <div
                            key={rule.label}
                            className="flex items-center justify-between border-b border-gray-100 py-5 last:border-none"
                          >

                            <div className="text-sm font-semibold text-gray-700">
                              {rule.label}
                            </div>

                            <div
                              className={`text-sm font-black ${
                                rule.warn
                                  ? 'text-red-600'
                                  : 'text-gray-900'
                              }`}
                            >
                              {rule.value}
                            </div>

                          </div>
                        ))}

                      </div>

                    </details>
                  ))}

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </div>
  )
}