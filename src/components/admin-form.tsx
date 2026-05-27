'use client'

import FileUpload from './file-upload'
import { useState } from 'react'
import { supabase } from '@/lib/supabase-client'

export default function AdminForm() {
  const [loading, setLoading] = useState(false)

  const [name, setName] = useState('')
  const [terminal, setTerminal] = useState('')
  const [storageTariff, setStorageTariff] =
    useState('')
  const [detention, setDetention] =
    useState('')
  const [demurrage, setDemurrage] =
    useState('')
    const [documentUrl, setDocumentUrl] =
  useState('')
  const [freeDays, setFreeDays] =
    useState('')

  const handleSubmit = async () => {
    if (!name) {
      alert('Name required')
      return
    }

    setLoading(true)

    const { error } = await supabase
      .from('shipping_lines')
      .insert([
        {
          name,
          terminal,
          storage_tariff: storageTariff,
          detention,
          demurrage,
          free_days: freeDays,
          document_url: documentUrl,
          is_active: true,
        },
      ])

    setLoading(false)

    if (error) {
      alert(error.message)
      return
    }

    alert('Created')

    window.location.reload()
  }

  return (
    <div className="rounded-2xl bg-white p-6 shadow">
      <h2 className="mb-6 text-2xl font-bold">
        Add Shipping Line
      </h2>

      <div className="grid gap-4 md:grid-cols-2">
        <input
          placeholder="Shipping Line"
          className="rounded-lg border p-3"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />

        <input
          placeholder="Terminal"
          className="rounded-lg border p-3"
          value={terminal}
          onChange={(e) =>
            setTerminal(e.target.value)
          }
        />

        <input
          placeholder="Storage Tariff"
          className="rounded-lg border p-3"
          value={storageTariff}
          onChange={(e) =>
            setStorageTariff(e.target.value)
          }
        />

        <input
          placeholder="Detention"
          className="rounded-lg border p-3"
          value={detention}
          onChange={(e) =>
            setDetention(e.target.value)
          }
        />

        <input
          placeholder="Demurrage"
          className="rounded-lg border p-3"
          value={demurrage}
          onChange={(e) =>
            setDemurrage(e.target.value)
          }
        />

        <input
          placeholder="Free Days"
          className="rounded-lg border p-3"
          value={freeDays}
          onChange={(e) =>
            setFreeDays(e.target.value)
          }
        />
      </div>

<div className="mt-6">
  <p className="mb-2 font-medium">
    Upload Document
  </p>

  <FileUpload
    onUpload={(url) =>
      setDocumentUrl(url)
    }
  />

  {documentUrl && (
    <p className="mt-2 text-sm text-green-600">
      File uploaded successfully
    </p>
  )}
</div>

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="mt-6 rounded-xl bg-black px-6 py-3 text-white"
      >
        {loading ? 'Creating...' : 'Create'}
      </button>
    </div>
  )
}