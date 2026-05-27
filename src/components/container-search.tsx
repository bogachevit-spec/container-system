'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'

type Item = {
  id: number

  container_number: string
  bl_number: string

  shipping_line: string
  terminal: string

  vessel: string
  eta: string
  status: string
}

export default function ContainerSearch({
  data,
}: {
  data: Item[]
}) {
  const [search, setSearch] = useState('')

  const filtered = useMemo(() => {
    if (!search) return []

    return data.filter((item) => {
      const value = search.toLowerCase()

      return (
        item.container_number
          ?.toLowerCase()
          .includes(value) ||
        item.bl_number
          ?.toLowerCase()
          .includes(value)
      )
    })
  }, [search, data])

  return (
    <div>
      <div className="mb-6 rounded-3xl bg-white p-6 shadow-sm">
        <h1 className="mb-4 text-3xl font-bold">
          Container Tracking
        </h1>

        <input
          type="text"
          placeholder="Search container or BL..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="w-full rounded-2xl border p-4 text-lg outline-none"
        />
      </div>

      <div className="space-y-4">
{filtered.map((item) => (
  <Link
    href={`/tracking/${item.container_number}`}
    key={`${item.container_number}-${item.bl_number}`}
  >
    <div className="rounded-3xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">
            {item.container_number}
          </h2>

          <p className="text-gray-500">
            BL: {item.bl_number}
          </p>
        </div>

        <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
          {item.status}
        </span>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl bg-gray-50 p-4">
          <p className="text-sm text-gray-500">
            Shipping Line
          </p>

          <p className="mt-1 text-lg font-semibold">
            {item.shipping_line}
          </p>
        </div>

        <div className="rounded-2xl bg-gray-50 p-4">
          <p className="text-sm text-gray-500">
            Terminal
          </p>

          <p className="mt-1 text-lg font-semibold">
            {item.terminal}
          </p>
        </div>

        <div className="rounded-2xl bg-gray-50 p-4">
          <p className="text-sm text-gray-500">
            Vessel
          </p>

          <p className="mt-1 text-lg font-semibold">
            {item.vessel}
          </p>
        </div>

        <div className="rounded-2xl bg-gray-50 p-4">
          <p className="text-sm text-gray-500">
            ETA
          </p>

          <p className="mt-1 text-lg font-semibold">
            {item.eta}
          </p>
        </div>
      </div>
    </div>
  </Link>
))}

        {search && filtered.length === 0 && (
          <div className="rounded-3xl bg-white p-10 text-center shadow-sm">
            <p className="text-lg text-gray-500">
              No containers found
            </p>
          </div>
        )}
      </div>
    </div>
  )
}