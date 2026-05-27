'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase-client'

type ShippingLine = {
  id: number
  name: string
  terminal: string
}

export default function AdminList() {
  const [data, setData] = useState<
    ShippingLine[]
  >([])

  const fetchData = async () => {
    const { data } = await supabase
      .from('shipping_lines')
      .select('*')
      .order('id', { ascending: false })

    setData(data || [])
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleDelete = async (id: number) => {
    const confirmed = confirm(
      'Delete this record?'
    )

    if (!confirmed) return

    await supabase
      .from('shipping_lines')
      .delete()
      .eq('id', id)

    fetchData()
  }

  return (
    <div className="mt-10 space-y-4">
      {data.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-between rounded-xl bg-white p-4 shadow"
        >
          <div>
            <h2 className="text-xl font-bold">
              {item.name}
            </h2>

            <p className="text-gray-600">
              {item.terminal}
            </p>
          </div>

          <button
            onClick={() =>
              handleDelete(item.id)
            }
            className="rounded-lg bg-red-500 px-4 py-2 text-white"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  )
}