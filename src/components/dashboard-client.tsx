'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

type SearchCard = {
  id: string
  value: string
}

export default function DashboardClient() {
  const [query, setQuery] = useState('')
  const [cards, setCards] = useState<SearchCard[]>([])

  const router = useRouter()
  const supabase = createClient()

  function handleSearch() {
    const value = query.trim()

    if (!value) return

    const newCard: SearchCard = {
      id: String(Date.now() + Math.random()),
      value,
    }

    setCards((prev) => {
      const filtered = prev.filter(
        (item) =>
          item.value.toLowerCase() !==
          value.toLowerCase()
      )

      const updated = [newCard, ...filtered]

      return updated.slice(0, 4)
    })

    setQuery('')
  }

  async function handleLogout() {
    await supabase.auth.signOut()
    router.push('/login')
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f5f7fb]">

      {/* background */}

      <div className="absolute left-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-blue-100/40 blur-3xl" />

      <div className="absolute bottom-[-140px] right-[-140px] h-[340px] w-[340px] rounded-full bg-indigo-100/40 blur-3xl" />

      {/* topbar */}

      <div className="relative z-10 flex justify-end p-6">

        <button
          onClick={handleLogout}
          className="rounded-full bg-[#475569] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#334155]"
        >
          Выйти из профиля
        </button>

      </div>

      {/* content */}

      <div className="relative z-10 flex min-h-[80vh] flex-col items-center justify-center px-4">

        {/* title */}

        <div className="mb-10 text-center">

          <h1 className="text-5xl font-black tracking-tight text-gray-900">
            Pott + Koerner Russia
          </h1>

          <p className="mt-3 text-sm font-medium text-gray-500">
            Введите название линии, порта или терминала для получения информации о тарифах
          </p>

        </div>

        {/* search */}

        <div className="w-full max-w-3xl">

          <div className="flex items-center rounded-full border border-gray-200 bg-white/90 px-4 py-3 shadow-lg backdrop-blur transition focus-within:shadow-xl">

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
              placeholder="Введите название..."
              className="h-12 flex-1 border-none bg-transparent px-4 text-[16px] font-medium text-gray-900 outline-none placeholder:text-gray-400"
            />

            <button
              onClick={handleSearch}
              className="rounded-full bg-[#475569] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#334155]"
            >
              Поиск
            </button>

          </div>

        </div>

        {/* cards */}

        <div className="mt-10 w-full max-w-3xl">

          <div className="grid gap-4 md:grid-cols-2">

            {cards.map((card) => (
              <button
                key={card.id}
                className="rounded-[26px] border border-white/40 bg-white/80 p-5 text-left shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-md"
              >

                <div className="flex items-start justify-between">

                  <div>

                    <div className="text-[15px] font-black text-gray-900">
                      {card.value}
                    </div>

                  </div>

                </div>

              </button>
            ))}

          </div>

        </div>

      </div>

    </div>
  )
}