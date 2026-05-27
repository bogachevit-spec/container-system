'use client'

import { useState } from 'react'
import {
  CalendarDays,
  Plus,
  X,
} from 'lucide-react'

type DemurrageRule = {
  type: string
  days: string
}

type TerminalRule = {
  terminal: string
  dry: string
  reefer: string
  dangerous: string
  oversize: string
}

type Resource = {
  value: string
  type: string
  url: string
  description: string
}

export default function NewLinePage() {
  const [loading, setLoading] =
    useState(false)

  const [name, setName] =
    useState('')

  const [aliases, setAliases] =
    useState('')

  const [keywords, setKeywords] =
    useState('')

  const [notes, setNotes] =
    useState('')

  const [effectiveDate, setEffectiveDate] =
    useState('')

  const [demurrage, setDemurrage] =
    useState<DemurrageRule[]>([
      {
        type: '',
        days: '',
      },
    ])

  const [terminals, setTerminals] =
    useState<TerminalRule[]>([
      {
        terminal: '',
        dry: '',
        reefer: '',
        dangerous: '',
        oversize: '',
      },
    ])

  const [resources, setResources] =
    useState<Resource[]>([
      {
        value: '',
        type: 'PDF',
        url: '',
        description: '',
      },
    ])

  const addDemurrage = () => {
    setDemurrage([
      ...demurrage,
      {
        type: '',
        days: '',
      },
    ])
  }

  const removeDemurrage = (
    index: number
  ) => {
    setDemurrage(
      demurrage.filter(
        (_, i) => i !== index
      )
    )
  }

  const addTerminal = () => {
    setTerminals([
      ...terminals,
      {
        terminal: '',
        dry: '',
        reefer: '',
        dangerous: '',
        oversize: '',
      },
    ])
  }

  const removeTerminal = (
    index: number
  ) => {
    setTerminals(
      terminals.filter(
        (_, i) => i !== index
      )
    )
  }

  const addResource = () => {
    setResources([
      ...resources,
      {
        value: '',
        type: 'PDF',
        url: '',
        description: '',
      },
    ])
  }

  const removeResource = (
    index: number
  ) => {
    setResources(
      resources.filter(
        (_, i) => i !== index
      )
    )
  }

  const handleSubmit = async () => {
    try {
      setLoading(true)

      const response = await fetch(
        '/api/lines',
        {
          method: 'POST',

          headers: {
            'Content-Type':
              'application/json',
          },

          body: JSON.stringify({
            name,
            aliases,
            keywords,
            notes,
            effectiveDate,
            demurrage,
            terminals,
            resources,
          }),
        }
      )

      if (!response.ok) {
        throw new Error(
          'Failed to create line'
        )
      }

      alert(
        'Shipping line created successfully'
      )

      window.location.href =
        '/admin/lines'
    } catch (error) {
      console.error(error)

      alert('Error creating line')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f3f6fb]">

      {/* gradients */}

      <div className="absolute left-[-140px] top-[-140px] h-[320px] w-[320px] rounded-full bg-blue-100/50 blur-3xl" />

      <div className="absolute bottom-[-160px] right-[-160px] h-[360px] w-[360px] rounded-full bg-indigo-100/40 blur-3xl" />

      {/* content */}

      <div className="relative z-10 mx-auto max-w-5xl px-4 py-8 md:px-6 md:py-14">

        {/* header */}

        <div className="mb-8 md:mb-12">

          <div className="inline-flex rounded-full bg-[#eef2ff] px-4 py-2 text-[10px] font-black tracking-wide text-[#4f46e5] md:text-xs">
            ERP • CREATE SHIPPING LINE
          </div>

          <h1 className="mt-5 text-4xl font-black tracking-tight text-gray-900 md:text-6xl">
            New Shipping Line
          </h1>

          <p className="mt-3 text-sm font-medium text-gray-500">
            Create tariff structure,
            terminal rules and
            demurrage conditions
          </p>

        </div>

        <div className="space-y-6">

          {/* GENERAL */}

          <section className="rounded-[30px] border border-white/50 bg-white/90 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur md:p-8">

            <div className="mb-6">

              <div className="text-sm font-black uppercase tracking-wide text-gray-900">
                General Information
              </div>

              <p className="mt-2 text-sm text-gray-500">
                Basic shipping line
                information
              </p>

            </div>

            <div className="grid gap-4 md:grid-cols-2">

              {/* LINE NAME */}

              <div>

                <label className="mb-2 block text-xs font-black uppercase tracking-wide text-gray-500">
                  Line Name
                </label>

                <input
                  value={name}
                  onChange={(e) =>
                    setName(e.target.value)
                  }
                  placeholder="MLINE"
                  className="h-14 w-full rounded-2xl border border-gray-200 bg-[#f8fafc] px-5 text-sm font-semibold text-gray-900 outline-none transition focus:border-[#cbd5e1]"
                />

              </div>

              {/* EFFECTIVE DATE */}

              <div>

                <label className="mb-2 block text-xs font-black uppercase tracking-wide text-gray-500">
                  Effective Date
                </label>

                <div
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-2xl
                    border
                    border-gray-200
                    bg-[#f8fafc]
                    transition
                    hover:border-[#94a3b8]
                    focus-within:border-[#64748b]
                    focus-within:bg-white
                    focus-within:shadow-[0_0_0_4px_rgba(71,85,105,0.08)]
                  "
                >

                  <div
                    className="
                      absolute
                      inset-y-0
                      left-0
                      w-1
                      bg-gradient-to-b
                      from-[#64748b]
                      to-[#94a3b8]
                      opacity-0
                      transition
                      group-focus-within:opacity-100
                    "
                  />

                  <div className="flex items-center justify-between px-5 py-4">

                    <div className="min-w-0 w-full">

                      <input
                        type="text"
                        value={effectiveDate}
                        onChange={(e) => {
                          let value =
                            e.target.value.replace(
                              /\D/g,
                              ''
                            )

                          if (
                            value.length > 8
                          ) {
                            value =
                              value.slice(
                                0,
                                8
                              )
                          }

                          if (
                            value.length > 4
                          ) {
                            value = `${value.slice(
                              0,
                              2
                            )}.${value.slice(
                              2,
                              4
                            )}.${value.slice(
                              4
                            )}`
                          } else if (
                            value.length > 2
                          ) {
                            value = `${value.slice(
                              0,
                              2
                            )}.${value.slice(
                              2
                            )}`
                          }

                          setEffectiveDate(
                            value
                          )
                        }}
                        placeholder="29.09.2025"
                        className="
                          mt-1
                          w-full
                          border-none
                          bg-transparent
                          p-0
                          text-sm
                          font-bold
                          tracking-wide
                          text-gray-900
                          outline-none
                          placeholder:text-gray-400
                        "
                      />

                    </div>

                    <CalendarDays className="ml-3 h-5 w-5 text-gray-400" />

                  </div>

                </div>

              </div>

              {/* ALIASES */}

              <div>

                <label className="mb-2 block text-xs font-black uppercase tracking-wide text-gray-500">
                  Aliases
                </label>

                <input
                  value={aliases}
                  onChange={(e) =>
                    setAliases(
                      e.target.value
                    )
                  }
                  placeholder="MAERSK, MRSK, MAEU"
                  className="h-14 w-full rounded-2xl border border-gray-200 bg-[#f8fafc] px-5 text-sm font-semibold text-gray-900 outline-none transition focus:border-[#cbd5e1]"
                />

              </div>

              {/* KEYWORDS */}

              <div>

                <label className="mb-2 block text-xs font-black uppercase tracking-wide text-gray-500">
                  Keywords
                </label>

                <input
                  value={keywords}
                  onChange={(e) =>
                    setKeywords(
                      e.target.value
                    )
                  }
                  placeholder="ocean, container, asia"
                  className="h-14 w-full rounded-2xl border border-gray-200 bg-[#f8fafc] px-5 text-sm font-semibold text-gray-900 outline-none transition focus:border-[#cbd5e1]"
                />

              </div>

            </div>

            {/* NOTES */}

            <div className="mt-4">

              <label className="mb-2 block text-xs font-black uppercase tracking-wide text-gray-500">
                Notes
              </label>

              <textarea
                value={notes}
                onChange={(e) =>
                  setNotes(
                    e.target.value
                  )
                }
                placeholder="Additional information..."
                className="min-h-[140px] w-full rounded-2xl border border-gray-200 bg-[#f8fafc] p-5 text-sm font-medium text-gray-900 outline-none transition focus:border-[#cbd5e1]"
              />

            </div>

          </section>

          {/* DEMURRAGE */}

          <section className="rounded-[30px] border border-white/50 bg-white/90 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur md:p-8">

            <div className="mb-6 flex items-center justify-between">

              <div>

                <div className="text-sm font-black uppercase tracking-wide text-gray-900">
                  Demurrage Rules
                </div>

                <p className="mt-2 text-sm text-gray-500">
                  Configure free days by
                  container type
                </p>

              </div>

              <button
                type="button"
                onClick={addDemurrage}
                className="rounded-full bg-[#475569] px-5 py-2.5 text-xs font-black text-white transition hover:bg-[#334155]"
              >
                + Add Rule
              </button>

            </div>

            <div className="space-y-4">

              {demurrage.map(
                (rule, index) => (
                  <div
                    key={index}
                    className="relative grid gap-4 rounded-2xl border border-gray-100 bg-[#f8fafc] p-12 md:grid-cols-2"
                  >

                    <button
                      type="button"
                      onClick={() =>
                        removeDemurrage(
                          index
                        )
                      }
                      className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-400 transition hover:bg-red-50 hover:text-red-500"
                    >
                      <X className="h-4 w-4" />
                    </button>

                    <input
                      value={rule.type}
                      onChange={(e) => {
                        const updated = [
                          ...demurrage,
                        ]

                        updated[
                          index
                        ].type =
                          e.target.value

                        setDemurrage(
                          updated
                        )
                      }}
                      placeholder="20/40 / REF / OT"
                      className="h-14 rounded-2xl border border-gray-200 bg-white px-5 text-sm font-semibold text-gray-900 outline-none"
                    />

                    <input
                      value={rule.days}
                      onChange={(e) => {
                        const updated = [
                          ...demurrage,
                        ]

                        updated[
                          index
                        ].days =
                          e.target.value

                        setDemurrage(
                          updated
                        )
                      }}
                      placeholder="14"
                      className="h-14 rounded-2xl border border-gray-200 bg-white px-5 text-sm font-semibold text-gray-900 outline-none"
                    />

                  </div>
                )
              )}

            </div>

          </section>

          {/* TERMINALS */}

          <section className="rounded-[30px] border border-white/50 bg-white/90 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur md:p-8">

            <div className="mb-6 flex items-center justify-between">

              <div>

                <div className="text-sm font-black uppercase tracking-wide text-gray-900">
                  Terminal Rules
                </div>

                <p className="mt-2 text-sm text-gray-500">
                  Configure terminal
                  storage conditions
                </p>

              </div>

              <button
                type="button"
                onClick={addTerminal}
                className="rounded-full bg-[#475569] px-5 py-2.5 text-xs font-black text-white transition hover:bg-[#334155]"
              >
                + Add Terminal
              </button>

            </div>

            <div className="space-y-5">

              {terminals.map(
                (terminal, index) => (
                  <div
                    key={index}
                    className="relative rounded-3xl border border-gray-100 bg-[#f8fafc] p-12"
                  >

                    <button
                      type="button"
                      onClick={() =>
                        removeTerminal(
                          index
                        )
                      }
                      className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-400 transition hover:bg-red-50 hover:text-red-500"
                    >
                      <X className="h-4 w-4" />
                    </button>

                    <div className="mb-4">

                      <label className="mb-2 block text-xs font-black uppercase tracking-wide text-gray-500">
                        Terminal Name
                      </label>

                      <input
                        value={
                          terminal.terminal
                        }
                        onChange={(e) => {
                          const updated = [
                            ...terminals,
                          ]

                          updated[
                            index
                          ].terminal =
                            e.target.value

                          setTerminals(
                            updated
                          )
                        }}
                        placeholder="БРОНКА"
                        className="h-14 w-full rounded-2xl border border-gray-200 bg-white px-5 text-sm font-semibold text-gray-900 outline-none"
                      />

                    </div>

                    <div className="grid gap-4 md:grid-cols-2">

                      <input
                        value={
                          terminal.dry
                        }
                        onChange={(e) => {
                          const updated = [
                            ...terminals,
                          ]

                          updated[
                            index
                          ].dry =
                            e.target.value

                          setTerminals(
                            updated
                          )
                        }}
                        placeholder="Dry storage"
                        className="h-14 rounded-2xl border border-gray-200 bg-white px-5 text-sm font-semibold text-gray-900 outline-none"
                      />

                      <input
                        value={
                          terminal.reefer
                        }
                        onChange={(e) => {
                          const updated = [
                            ...terminals,
                          ]

                          updated[
                            index
                          ].reefer =
                            e.target.value

                          setTerminals(
                            updated
                          )
                        }}
                        placeholder="Reefer"
                        className="h-14 rounded-2xl border border-gray-200 bg-white px-5 text-sm font-semibold text-gray-900 outline-none"
                      />

                      <input
                        value={
                          terminal.dangerous
                        }
                        onChange={(e) => {
                          const updated = [
                            ...terminals,
                          ]

                          updated[
                            index
                          ].dangerous =
                            e.target.value

                          setTerminals(
                            updated
                          )
                        }}
                        placeholder="Dangerous cargo"
                        className="h-14 rounded-2xl border border-gray-200 bg-white px-5 text-sm font-semibold text-gray-900 outline-none"
                      />

                      <input
                        value={
                          terminal.oversize
                        }
                        onChange={(e) => {
                          const updated = [
                            ...terminals,
                          ]

                          updated[
                            index
                          ].oversize =
                            e.target.value

                          setTerminals(
                            updated
                          )
                        }}
                        placeholder="Oversize"
                        className="h-14 rounded-2xl border border-gray-200 bg-white px-5 text-sm font-semibold text-gray-900 outline-none"
                      />

                    </div>

                  </div>
                )
              )}

            </div>

          </section>

          {/* DOCUMENTS */}

          <section className="rounded-[32px] border border-white/50 bg-white/90 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur md:p-8">

            <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

              <div>

                <div className="text-sm font-black uppercase tracking-wide text-[#0f172a]">
                  Documents & Links
                </div>

                <p className="mt-2 text-sm text-[#64748b]">
                  Terminal tariffs, portals and resources
                </p>

              </div>

              <button
                type="button"
                onClick={addResource}
                className="
                  h-12
                  rounded-full
                  bg-[#475569]
                  px-6
                  text-xs
                  font-black
                  uppercase
                  tracking-wide
                  text-white
                  transition
                  hover:bg-[#334155]
                "
              >
                + Add Resource
              </button>

            </div>

            <div className="space-y-4">

              {resources.map(
                (resource, index) => (

                  <div
                    key={index}
                    className="
                      relative
                      rounded-[28px]
                      border
                      border-gray-100
                      bg-[#f8fafc]
                      p-4
                      pt-12
                    "
                  >

                    <button
                      type="button"
                      onClick={() =>
                        removeResource(
                          index
                        )
                      }
                      className="
                        absolute
                        right-4
                        top-4
                        flex
                        h-8
                        w-8
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-gray-200
                        bg-white
                        text-xs
                        font-black
                        text-[#64748b]
                        transition
                        hover:border-red-200
                        hover:bg-red-50
                        hover:text-red-600
                      "
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
                            const updated =
                              [
                                ...resources,
                              ]

                            updated[
                              index
                            ].type = item

                            setResources(
                              updated
                            )
                          }}
                          className={`
                            rounded-full
                            border
                            px-4
                            py-2
                            text-xs
                            font-black
                            uppercase
                            tracking-wide
                            transition
                            ${
                              resource.type ===
                              item
                                ? 'border-[#475569] bg-[#475569] text-white'
                                : 'border-gray-200 bg-white text-[#475569]'
                            }
                          `}
                        >
                          {item}
                        </button>

                      ))}

                    </div>

                    {(resource.type ===
                      'PDF' ||
                      resource.type ===
                        'XLS') && (

                      <div className="grid gap-4 md:grid-cols-2">

                        <label
                          className="
                            flex
                            h-14
                            cursor-pointer
                            items-center
                            gap-3
                            rounded-2xl
                            border
                            border-dashed
                            border-gray-300
                            bg-white
                            px-5
                            text-sm
                            font-semibold
                            text-[#64748b]
                            transition
                            hover:border-[#475569]
                            hover:bg-[#f8fafc]
                          "
                        >

                          <span className="truncate">
                            {resource.value ||
                              'Upload file'}
                          </span>

                          <input
                            type="file"
                            className="hidden"
                            onChange={(
                              e
                            ) => {
                              const file =
                                e.target
                                  .files?.[0]

                              if (
                                !file
                              )
                                return

                              const updated =
                                [
                                  ...resources,
                                ]

                              updated[
                                index
                              ].value =
                                file.name

                              setResources(
                                updated
                              )
                            }}
                          />

                        </label>

                        <input
                          placeholder="File description"
                          value={
                            resource.description
                          }
                          onChange={(e) => {
                            const updated =
                              [
                                ...resources,
                              ]

                            updated[
                              index
                            ].description =
                              e.target.value

                            setResources(
                              updated
                            )
                          }}
                          className="
                            h-14
                            rounded-2xl
                            border
                            border-gray-200
                            bg-white
                            px-5
                            text-sm
                            font-semibold
                            outline-none
                          "
                        />

                      </div>

                    )}

                    {resource.type ===
                      'WEBSITE' && (

                      <div className="grid gap-4 md:grid-cols-2">

                        <input
                          placeholder="https://example.com"
                          value={
                            resource.value
                          }
                          onChange={(e) => {
                            const updated =
                              [
                                ...resources,
                              ]

                            updated[
                              index
                            ].value =
                              e.target.value

                            setResources(
                              updated
                            )
                          }}
                          className="
                            h-14
                            rounded-2xl
                            border
                            border-gray-200
                            bg-white
                            px-5
                            text-sm
                            font-semibold
                            outline-none
                          "
                        />

                        <input
                          placeholder="Website description"
                          value={
                            resource.description
                          }
                          onChange={(e) => {
                            const updated =
                              [
                                ...resources,
                              ]

                            updated[
                              index
                            ].description =
                              e.target.value

                            setResources(
                              updated
                            )
                          }}
                          className="
                            h-14
                            rounded-2xl
                            border
                            border-gray-200
                            bg-white
                            px-5
                            text-sm
                            font-semibold
                            outline-none
                          "
                        />

                      </div>

                    )}

                  </div>

                )
              )}

            </div>

          </section>

          {/* ACTIONS */}

          <div className="flex flex-col gap-3 pb-10 md:flex-row md:justify-end">

            <button className="h-14 rounded-full border border-gray-200 bg-white px-8 text-sm font-black text-gray-700 transition hover:bg-gray-50">
              Cancel
            </button>

            <button
              onClick={handleSubmit}
              disabled={loading}
              className="h-14 rounded-full bg-[#475569] px-8 text-sm font-black text-white transition hover:bg-[#334155] disabled:opacity-50"
            >
              {loading
                ? 'Saving...'
                : 'Create Shipping Line'}
            </button>

          </div>

        </div>

      </div>

    </div>
  )
}