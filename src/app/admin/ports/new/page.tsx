'use client'

import { useState } from 'react'

type Penalty = {
  title: string
  price: string
  note: string
}

type Resource = {
  type: string
  value: string
  description: string
}

export default function NewPortPage() {
  const [name, setName] = useState('')
  const [aliases, setAliases] = useState('')
  const [keywords, setKeywords] = useState('')
  const [country, setCountry] = useState('')
  const [city, setCity] = useState('')
  const [unlocode, setUnlocode] = useState('')
  const [notes, setNotes] = useState('')
  const [freeDays, setFreeDays] = useState('')
  const [settlementWithLine, setSettlementWithLine] =
    useState(true)

  const [penalties, setPenalties] = useState<
    Penalty[]
  >([
    {
      title: '',
      price: '',
      note: '',
    },
  ])

  const [resources, setResources] = useState<
    Resource[]
  >([
    {
      type: 'PDF',
      value: '',
      description: '',
    },
  ])

  const addPenalty = () => {
    setPenalties([
      ...penalties,
      {
        title: '',
        price: '',
        note: '',
      },
    ])
  }

  const removePenalty = (index: number) => {
    setPenalties(
      penalties.filter((_, i) => i !== index)
    )
  }

  const addResource = () => {
    setResources([
      ...resources,
      {
        type: 'PDF',
        value: '',
        description: '',
      },
    ])
  }

  const removeResource = (index: number) => {
    setResources(
      resources.filter((_, i) => i !== index)
    )
  }

  const handleSubmit = async () => {
    try {
      const payload = {
        name,
        aliases: aliases
          .split(',')
          .map((item) => item.trim())
          .filter(Boolean),

        keywords: keywords
          .split(',')
          .map((item) => item.trim())
          .filter(Boolean),

        country,
        city,
        unlocode,
        notes,
        freeDays,
        settlementWithLine,
        penalties,
        resources,
      }

      const response = await fetch('/api/ports', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        throw new Error('Failed to create port')
      }

      alert('Port created successfully')
    } catch (error) {
      console.error(error)
      alert('Error while creating port')
    }
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f5f7fb] px-3 py-6 md:px-4 md:py-10">
      {/* BACKGROUND */}

      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-[-120px] top-[-120px] h-[260px] w-[260px] rounded-full bg-[#dbeafe] opacity-40 blur-3xl md:h-[320px] md:w-[320px]" />

        <div className="absolute bottom-[-140px] right-[-140px] h-[260px] w-[260px] rounded-full bg-[#e9d5ff] opacity-40 blur-3xl md:h-[340px] md:w-[340px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* HEADER */}

        <div className="mb-6 md:mb-8">
          <div className="inline-flex rounded-full border border-[#cbd5e1] bg-white/80 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#475569] backdrop-blur md:text-[11px]">
            ERP • CREATE PORT
          </div>

          <h1 className="mt-4 text-3xl font-black tracking-tight text-[#0f172a] md:mt-5 md:text-4xl">
            New Port
          </h1>

          <p className="mt-3 max-w-2xl text-[15px] font-medium leading-7 text-[#64748b] md:text-sm">
            Create port operational configuration,
            storage conditions and related systems.
          </p>
        </div>

        <div className="space-y-5 md:space-y-6">
          {/* GENERAL */}

          <section className="rounded-[24px] border border-white/50 bg-white/90 p-4 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur md:rounded-[32px] md:p-8">
            <div className="mb-6 md:mb-8">
              <div className="text-sm font-black uppercase tracking-wide text-[#0f172a]">
                General Information
              </div>

              <p className="mt-2 text-[15px] text-[#64748b] md:text-sm">
                Main port operational information
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-[11px] font-black uppercase tracking-wide text-[#64748b]">
                  Port Name
                </label>

                <input
                  value={name}
                  onChange={(e) =>
                    setName(e.target.value)
                  }
                  placeholder="Port of Saint Petersburg"
                  className="h-14 w-full rounded-2xl border border-gray-200 bg-[#f8fafc] px-5 text-[16px] font-semibold outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block text-[11px] font-black uppercase tracking-wide text-[#64748b]">
                  Aliases
                </label>

                <input
                  value={aliases}
                  onChange={(e) =>
                    setAliases(e.target.value)
                  }
                  placeholder="СПБ, SPB PORT, FCT"
                  className="h-14 w-full rounded-2xl border border-gray-200 bg-[#f8fafc] px-5 text-[16px] font-semibold outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block text-[11px] font-black uppercase tracking-wide text-[#64748b]">
                  Keywords
                </label>

                <input
                  value={keywords}
                  onChange={(e) =>
                    setKeywords(e.target.value)
                  }
                  placeholder="russia, baltic, container"
                  className="h-14 w-full rounded-2xl border border-gray-200 bg-[#f8fafc] px-5 text-[16px] font-semibold outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block text-[11px] font-black uppercase tracking-wide text-[#64748b]">
                  Country
                </label>

                <input
                  value={country}
                  onChange={(e) =>
                    setCountry(e.target.value)
                  }
                  placeholder="Russia"
                  className="h-14 w-full rounded-2xl border border-gray-200 bg-[#f8fafc] px-5 text-[16px] font-semibold outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block text-[11px] font-black uppercase tracking-wide text-[#64748b]">
                  City
                </label>

                <input
                  value={city}
                  onChange={(e) =>
                    setCity(e.target.value)
                  }
                  placeholder="Saint Petersburg"
                  className="h-14 w-full rounded-2xl border border-gray-200 bg-[#f8fafc] px-5 text-[16px] font-semibold outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block text-[11px] font-black uppercase tracking-wide text-[#64748b]">
                  UNLOCODE
                </label>

                <input
                  value={unlocode}
                  onChange={(e) =>
                    setUnlocode(e.target.value)
                  }
                  placeholder="RULED"
                  className="h-14 w-full rounded-2xl border border-gray-200 bg-[#f8fafc] px-5 text-[16px] font-semibold uppercase outline-none"
                />
              </div>
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-[11px] font-black uppercase tracking-wide text-[#64748b]">
                Notes
              </label>

              <textarea
                value={notes}
                onChange={(e) =>
                  setNotes(e.target.value)
                }
                placeholder="Additional operational information..."
                className="min-h-[140px] w-full rounded-2xl border border-gray-200 bg-[#f8fafc] p-5 text-[15px] font-medium outline-none"
              />
            </div>
          </section>

          {/* STORAGE */}

          <section className="rounded-[24px] border border-white/50 bg-white/90 p-4 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur md:rounded-[32px] md:p-8">
            <div className="mb-6 md:mb-8">
              <div className="text-sm font-black uppercase tracking-wide text-[#0f172a]">
                Storage Information
              </div>

              <p className="mt-2 text-[15px] text-[#64748b] md:text-sm">
                Default storage conditions
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-[11px] font-black uppercase tracking-wide text-[#64748b]">
                  Free Storage Days
                </label>

                <div className="flex h-14 items-center gap-3 rounded-2xl border border-gray-200 bg-[#f8fafc] px-5">
                  <input
                    value={freeDays}
                    onChange={(e) =>
                      setFreeDays(e.target.value)
                    }
                    placeholder="10"
                    className="w-full bg-transparent text-[16px] font-bold outline-none"
                  />

                  <span className="text-[11px] font-black uppercase tracking-wide text-[#94a3b8]">
                    days
                  </span>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-[11px] font-black uppercase tracking-wide text-[#64748b]">
                  Settlement With Line
                </label>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() =>
                      setSettlementWithLine(true)
                    }
                    className={`h-14 flex-1 rounded-2xl text-sm font-black ${
                      settlementWithLine
                        ? 'bg-[#475569] text-white'
                        : 'border border-gray-200 bg-white text-[#475569]'
                    }`}
                  >
                    YES
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      setSettlementWithLine(false)
                    }
                    className={`h-14 flex-1 rounded-2xl text-sm font-black ${
                      !settlementWithLine
                        ? 'bg-[#475569] text-white'
                        : 'border border-gray-200 bg-white text-[#475569]'
                    }`}
                  >
                    NO
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* PENALTIES */}

          <section className="rounded-[24px] border border-white/50 bg-white/90 p-4 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur md:rounded-[32px] md:p-8">
            <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="text-sm font-black uppercase tracking-wide text-[#0f172a]">
                  Visit Penalties
                </div>

                <p className="mt-2 text-[15px] text-[#64748b] md:text-sm">
                  Visit transfer / deletion penalties
                </p>
              </div>

              <button
                type="button"
                onClick={addPenalty}
                className="h-12 w-full rounded-full bg-[#475569] px-6 text-xs font-black uppercase tracking-wide text-white md:w-auto"
              >
                + Add Penalty
              </button>
            </div>

            <div className="space-y-4">
              {penalties.map((penalty, index) => (
                <div
                  key={index}
                  className="relative rounded-[24px] border border-gray-100 bg-[#f8fafc] p-4 pt-12"
                >
                  <button
                    type="button"
                    onClick={() =>
                      removePenalty(index)
                    }
                    className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white text-xs font-black text-[#64748b]"
                  >
                    ✕
                  </button>

                  <div className="grid gap-4 md:grid-cols-3">
                    <input
                      placeholder="Transfer visit"
                      value={penalty.title}
                      onChange={(e) => {
                        const updated = [...penalties]
                        updated[index].title =
                          e.target.value
                        setPenalties(updated)
                      }}
                      className="h-14 rounded-2xl border border-gray-200 bg-white px-5 text-[16px] font-semibold outline-none"
                    />

                    <input
                      placeholder="5000 RUB"
                      value={penalty.price}
                      onChange={(e) => {
                        const updated = [...penalties]
                        updated[index].price =
                          e.target.value
                        setPenalties(updated)
                      }}
                      className="h-14 rounded-2xl border border-gray-200 bg-white px-5 text-[16px] font-semibold outline-none"
                    />

                    <input
                      placeholder="Optional note"
                      value={penalty.note}
                      onChange={(e) => {
                        const updated = [...penalties]
                        updated[index].note =
                          e.target.value
                        setPenalties(updated)
                      }}
                      className="h-14 rounded-2xl border border-gray-200 bg-white px-5 text-[16px] font-semibold outline-none"
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* DOCUMENTS */}

          <section className="rounded-[24px] border border-white/50 bg-white/90 p-4 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur md:rounded-[32px] md:p-8">
            <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="text-sm font-black uppercase tracking-wide text-[#0f172a]">
                  Documents & Links
                </div>

                <p className="mt-2 text-[15px] text-[#64748b] md:text-sm">
                  Port tariffs, portals and resources
                </p>
              </div>

              <button
                type="button"
                onClick={addResource}
                className="h-12 w-full rounded-full bg-[#475569] px-6 text-xs font-black uppercase tracking-wide text-white md:w-auto"
              >
                + Add Resource
              </button>
            </div>

            <div className="space-y-4">
              {resources.map((resource, index) => (
                <div
                  key={index}
                  className="relative rounded-[24px] border border-gray-100 bg-[#f8fafc] p-4 pt-12"
                >
                  <button
                    type="button"
                    onClick={() =>
                      removeResource(index)
                    }
                    className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white text-xs font-black text-[#64748b]"
                  >
                    ✕
                  </button>

                  <div className="mb-5 flex flex-wrap gap-2">
                    {[
                      'PDF',
                      'XLS',
                      'WEBSITE',
                    ].map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => {
                          const updated = [
                            ...resources,
                          ]

                          updated[index].type =
                            item

                          setResources(updated)
                        }}
                        className={`rounded-full border px-4 py-2 text-[11px] font-black uppercase tracking-wide transition ${
                          resource.type === item
                            ? 'border-[#475569] bg-[#475569] text-white'
                            : 'border-gray-200 bg-white text-[#475569]'
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>

                  {(resource.type === 'PDF' ||
                    resource.type === 'XLS') && (
                    <div className="grid gap-4 md:grid-cols-2">
                      <label className="min-w-0 flex h-14 cursor-pointer items-center gap-3 rounded-2xl border border-dashed border-gray-300 bg-white px-5 text-[15px] font-semibold text-[#64748b]">
                        <span className="min-w-0 truncate">
                          {resource.value ||
                            'Upload file'}
                        </span>

                        <input
                          type="file"
                          className="hidden"
                          onChange={(e) => {
                            const file =
                              e.target.files?.[0]

                            if (!file) return

                            const updated = [
                              ...resources,
                            ]

                            updated[index].value =
                              file.name

                            setResources(updated)
                          }}
                        />
                      </label>

                      <input
                        placeholder="File description"
                        value={
                          resource.description
                        }
                        onChange={(e) => {
                          const updated = [
                            ...resources,
                          ]

                          updated[index].description =
                            e.target.value

                          setResources(updated)
                        }}
                        className="h-14 rounded-2xl border border-gray-200 bg-white px-5 text-[16px] font-semibold outline-none"
                      />
                    </div>
                  )}

                  {resource.type ===
                    'WEBSITE' && (
                    <div className="grid gap-4 md:grid-cols-2">
                      <input
                        placeholder="https://example.com"
                        value={resource.value}
                        onChange={(e) => {
                          const updated = [
                            ...resources,
                          ]

                          updated[index].value =
                            e.target.value

                          setResources(updated)
                        }}
                        className="h-14 rounded-2xl border border-gray-200 bg-white px-5 text-[16px] font-semibold outline-none"
                      />

                      <input
                        placeholder="Website description"
                        value={
                          resource.description
                        }
                        onChange={(e) => {
                          const updated = [
                            ...resources,
                          ]

                          updated[index].description =
                            e.target.value

                          setResources(updated)
                        }}
                        className="h-14 rounded-2xl border border-gray-200 bg-white px-5 text-[16px] font-semibold outline-none"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* ACTIONS */}

          <div className="flex flex-col gap-3 pb-10 md:flex-row md:justify-end">
            <button className="h-14 rounded-full border border-gray-200 bg-white px-8 text-sm font-black text-gray-700 transition hover:bg-gray-50">
              Cancel
            </button>

            <button
              onClick={handleSubmit}
              className="h-14 rounded-full bg-[#475569] px-8 text-sm font-black text-white transition hover:bg-[#334155]"
            >
              Create Port
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}