'use client'

import { Search } from 'lucide-react'

type Props = {
  value?: string
  onChange?: (value: string) => void
}

export default function SearchBar({
  value = '',
  onChange,
}: Props) {
  return (
    <div className="sticky top-0 z-10 mb-6">
      <div className="flex items-center gap-3 rounded-2xl border bg-white/80 p-4 shadow-sm backdrop-blur-xl">
        <Search
          size={22}
          className="text-gray-400"
        />

        <input
          type="text"
          placeholder="Search container, BL, line..."
          value={value}
          onChange={(e) =>
            onChange?.(e.target.value)
          }
          className="w-full bg-transparent text-lg outline-none"
        />
      </div>
    </div>
  )
}