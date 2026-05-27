'use client'

import { useState } from 'react'

export default function NewTerminalPage() {
  const [services, setServices] = useState([
    {
      type: '',
      price: '',
      note: '',
    },
  ])

  const [tariffs, setTariffs] = useState([
    {
      from: '',
      to: '',
      price: '',
    },
  ])

  const [resources, setResources] = useState([
    {
      type: 'PDF',
      value: '',
      description: '',
    },
  ])

  return (
    <div className="min-h-screen bg-[#f5f7fb] px-4 py-10">

      {/* BACKGROUND */}

      <div className="pointer-events-none fixed inset-0 overflow-hidden">

        <div className="absolute left-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-[#dbeafe] blur-3xl opacity-40" />

        <div className="absolute bottom-[-140px] right-[-140px] h-[340px] w-[340px] rounded-full bg-[#e9d5ff] blur-3xl opacity-40" />

      </div>

      <div className="relative z-10 mx-auto max-w-5xl">

        {/* HEADER */}

        <div className="mb-8">

          <div className="inline-flex rounded-full border border-[#cbd5e1] bg-white/80 px-4 py-2 text-[11px] font-black uppercase tracking-[0.2em] text-[#475569] backdrop-blur">
            ERP • CREATE TERMINAL
          </div>

          <h1 className="mt-5 text-4xl font-black tracking-tight text-[#0f172a]">
            New Terminal
          </h1>

          <p className="mt-3 max-w-2xl text-sm font-medium leading-7 text-[#64748b]">
            Create terminal operational configuration,
            storage tariffs and connected systems.
          </p>

        </div>

        <div className="space-y-6">

          {/* GENERAL */}

          <section className="rounded-[32px] border border-white/50 bg-white/90 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur md:p-8">

            <div className="mb-8">

              <div className="text-sm font-black uppercase tracking-wide text-[#0f172a]">
                General Information
              </div>

              <p className="mt-2 text-sm text-[#64748b]">
                Terminal operational information
              </p>

            </div>

            <div className="grid gap-5 md:grid-cols-2">

              <div>

                <label className="mb-2 block text-xs font-black uppercase tracking-wide text-[#64748b]">
                  Terminal Name
                </label>

                <input
                  placeholder="BRONKA Terminal"
                  className="
                    h-14
                    w-full
                    rounded-2xl
                    border
                    border-gray-200
                    bg-[#f8fafc]
                    px-5
                    text-sm
                    font-semibold
                    outline-none
                  "
                />

              </div>

              <div>

                <label className="mb-2 block text-xs font-black uppercase tracking-wide text-[#64748b]">
                  City
                </label>

                <input
                  placeholder="Saint Petersburg"
                  className="
                    h-14
                    w-full
                    rounded-2xl
                    border
                    border-gray-200
                    bg-[#f8fafc]
                    px-5
                    text-sm
                    font-semibold
                    outline-none
                  "
                />

              </div>

              <div>

                <label className="mb-2 block text-xs font-black uppercase tracking-wide text-[#64748b]">
                  Country
                </label>

                <input
                  placeholder="Russia"
                  className="
                    h-14
                    w-full
                    rounded-2xl
                    border
                    border-gray-200
                    bg-[#f8fafc]
                    px-5
                    text-sm
                    font-semibold
                    outline-none
                  "
                />

              </div>

              <div>

                <label className="mb-2 block text-xs font-black uppercase tracking-wide text-[#64748b]">
                  UN/LOCODE
                </label>

                <input
                  placeholder="RUSBZ"
                  className="
                    h-14
                    w-full
                    rounded-2xl
                    border
                    border-gray-200
                    bg-[#f8fafc]
                    px-5
                    text-sm
                    font-semibold
                    uppercase
                    outline-none
                  "
                />

              </div>

              <div>

                <label className="mb-2 block text-xs font-black uppercase tracking-wide text-[#64748b]">
                  Aliases
                </label>

                <input
                  placeholder="BRONKA, Bronka Terminal, Бронка"
                  className="
                    h-14
                    w-full
                    rounded-2xl
                    border
                    border-gray-200
                    bg-[#f8fafc]
                    px-5
                    text-sm
                    font-semibold
                    outline-none
                  "
                />

                <p className="mt-2 text-xs text-[#94a3b8]">
                  Alternative names used in BL, EDI and carrier systems
                </p>

              </div>

              <div>

                <label className="mb-2 block text-xs font-black uppercase tracking-wide text-[#64748b]">
                  Keywords
                </label>

                <input
                  placeholder="SPB, FCT, container terminal, customs"
                  className="
                    h-14
                    w-full
                    rounded-2xl
                    border
                    border-gray-200
                    bg-[#f8fafc]
                    px-5
                    text-sm
                    font-semibold
                    outline-none
                  "
                />

                <p className="mt-2 text-xs text-[#94a3b8]">
                  Used for ERP search, AI matching and automation
                </p>

              </div>

            </div>

            <div className="mt-5">

              <label className="mb-2 block text-xs font-black uppercase tracking-wide text-[#64748b]">
                Notes
              </label>

              <textarea
                placeholder="Internal operational notes..."
                className="
                  min-h-[140px]
                  w-full
                  rounded-2xl
                  border
                  border-gray-200
                  bg-[#f8fafc]
                  p-5
                  text-sm
                  font-medium
                  outline-none
                "
              />

            </div>

          </section>

          {/* ACCEPTANCE COSTS */}

          <section className="rounded-[32px] border border-white/50 bg-white/90 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur md:p-8">

            <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

              <div>

                <div className="text-sm font-black uppercase tracking-wide text-[#0f172a]">
                  Acceptance Costs
                </div>

                <p className="mt-2 text-sm text-[#64748b]">
                  VTT / GTD / customs services
                </p>

              </div>

              <button
                type="button"
                onClick={() =>
                  setServices([
                    ...services,
                    {
                      type: '',
                      price: '',
                      note: '',
                    },
                  ])
                }
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
                + Add Service
              </button>

            </div>

            <div className="space-y-4">

              {services.map((service, index) => (

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
                    onClick={() => {
                      setServices(
                        services.filter((_, i) => i !== index)
                      )
                    }}
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
                    "
                  >
                    ✕
                  </button>

                  <div className="grid gap-4 md:grid-cols-3">

                    <input
                      placeholder="VTT"
                      value={service.type}
                      onChange={(e) => {
                        const updated = [...services]
                        updated[index].type = e.target.value
                        setServices(updated)
                      }}
                      className="h-14 rounded-2xl border border-gray-200 bg-white px-5 text-sm font-semibold outline-none"
                    />

                    <input
                      placeholder="5000 RUB"
                      value={service.price}
                      onChange={(e) => {
                        const updated = [...services]
                        updated[index].price = e.target.value
                        setServices(updated)
                      }}
                      className="h-14 rounded-2xl border border-gray-200 bg-white px-5 text-sm font-semibold outline-none"
                    />

                    <input
                      placeholder="Optional note"
                      value={service.note}
                      onChange={(e) => {
                        const updated = [...services]
                        updated[index].note = e.target.value
                        setServices(updated)
                      }}
                      className="h-14 rounded-2xl border border-gray-200 bg-white px-5 text-sm font-semibold outline-none"
                    />

                  </div>

                </div>

              ))}

            </div>

          </section>

          {/* FREE STORAGE */}

          <section className="rounded-[32px] border border-white/50 bg-white/90 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur md:p-8">

            <div className="mb-8">

              <div className="text-sm font-black uppercase tracking-wide text-[#0f172a]">
                Free Storage
              </div>

              <p className="mt-2 text-sm text-[#64748b]">
                Default free storage period
              </p>

            </div>

            <div className="max-w-sm">

              <div className="flex h-14 items-center gap-3 rounded-2xl border border-gray-200 bg-[#f8fafc] px-5">

                <input
                  placeholder="10"
                  className="w-full bg-transparent text-sm font-bold outline-none"
                />

                <span className="text-xs font-black uppercase tracking-wide text-[#94a3b8]">
                  days
                </span>

              </div>

            </div>

          </section>

          {/* STORAGE TARIFFS */}

<section className="rounded-[32px] border border-white/50 bg-white/90 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur md:p-8">

  <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

    <div>

      <div className="text-sm font-black uppercase tracking-wide text-[#0f172a]">
        Storage Tariffs
      </div>

      <p className="mt-2 text-sm text-[#64748b]">
        Daily storage pricing matrix
      </p>

    </div>

    <button
      type="button"
      onClick={() =>
        setTariffs([
          ...tariffs,
          {
            from: '',
            to: '',
            price: '',
          },
        ])
      }
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
      + Add Range
    </button>

  </div>

  <div className="space-y-4">

    {tariffs.map((tariff, index) => (

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
          onClick={() => {
            setTariffs(
              tariffs.filter((_, i) => i !== index)
            )
          }}
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
          "
        >
          ✕
        </button>

        <div className="grid gap-4 md:grid-cols-3">

          <input
            placeholder="From day"
            value={tariff.from}
            onChange={(e) => {
              const updated = [...tariffs]
              updated[index].from = e.target.value
              setTariffs(updated)
            }}
            className="h-14 rounded-2xl border border-gray-200 bg-white px-5 text-sm font-semibold outline-none"
          />

          <input
            placeholder="To day"
            value={tariff.to}
            onChange={(e) => {
              const updated = [...tariffs]
              updated[index].to = e.target.value
              setTariffs(updated)
            }}
            className="h-14 rounded-2xl border border-gray-200 bg-white px-5 text-sm font-semibold outline-none"
          />

          <input
            placeholder="3500 RUB"
            value={tariff.price}
            onChange={(e) => {
              const updated = [...tariffs]
              updated[index].price = e.target.value
              setTariffs(updated)
            }}
            className="h-14 rounded-2xl border border-gray-200 bg-white px-5 text-sm font-semibold outline-none"
          />

        </div>

      </div>

    ))}

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
      onClick={() =>
        setResources([
          ...resources,
          {
            type: 'PDF',
            value: '',
            description: '',
          },
        ])
      }
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

    {resources.map((resource, index) => (

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
          onClick={() => {
            setResources(
              resources.filter((_, i) => i !== index)
            )
          }}
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
          "
        >
          ✕
        </button>

        <div className="mb-5 flex flex-wrap gap-2">

          {['PDF', 'XLS', 'WEBSITE'].map((item) => (

            <button
              key={item}
              type="button"
              onClick={() => {
                const updated = [...resources]
                updated[index].type = item
                setResources(updated)
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
                  resource.type === item
                    ? 'border-[#475569] bg-[#475569] text-white'
                    : 'border-gray-200 bg-white text-[#475569]'
                }
              `}
            >
              {item}
            </button>

          ))}

        </div>

        {(resource.type === 'PDF' ||
          resource.type === 'XLS') && (

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
              "
            >

              <span className="truncate">
                {resource.value || 'Upload file'}
              </span>

              <input
                type="file"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0]

                  if (!file) return

                  const updated = [...resources]
                  updated[index].value = file.name
                  setResources(updated)
                }}
              />

            </label>

            <input
              placeholder="File description"
              value={resource.description}
              onChange={(e) => {
                const updated = [...resources]
                updated[index].description =
                  e.target.value
                setResources(updated)
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

        {resource.type === 'WEBSITE' && (

          <div className="grid gap-4 md:grid-cols-2">

            <input
              placeholder="https://example.com"
              value={resource.value}
              onChange={(e) => {
                const updated = [...resources]
                updated[index].value = e.target.value
                setResources(updated)
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
              value={resource.description}
              onChange={(e) => {
                const updated = [...resources]
                updated[index].description =
                  e.target.value
                setResources(updated)
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

    ))}

  </div>

</section>

          {/* ACTIONS */}

          <div className="flex flex-col gap-3 pb-10 md:flex-row md:justify-end">

            <button
              type="button"
              className="
                h-14
                rounded-full
                border
                border-gray-200
                bg-white
                px-8
                text-sm
                font-black
                text-[#475569]
                transition
                hover:bg-gray-50
              "
            >
              Cancel
            </button>

            <button
              type="button"
              className="
                h-14
                rounded-full
                bg-[#475569]
                px-8
                text-sm
                font-black
                text-white
                transition
                hover:bg-[#334155]
              "
            >
              Save Terminal
            </button>

          </div>

        </div>

      </div>

    </div>
  )
}