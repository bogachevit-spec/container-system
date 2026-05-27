'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function AdminPage() {
  const [open, setOpen] = useState(false)

  const [type, setType] =
    useState('line')

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f5f7fb]">

      {/* background */}

      <div className="absolute left-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-blue-100/40 blur-3xl" />

      <div className="absolute bottom-[-140px] right-[-140px] h-[340px] w-[340px] rounded-full bg-indigo-100/40 blur-3xl" />

      {/* content */}

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-10">

        {/* top */}

        <div className="mb-12 flex items-center justify-between">

          <div>

            <h1 className="text-5xl font-black tracking-tight text-gray-900">
              ERP Admin
            </h1>

            <p className="mt-3 text-sm font-medium text-gray-500">
              Manage shipping lines, ports and terminals
            </p>

          </div>

<div className="mb-10 flex flex-col gap-3 md:flex-row">

  <Link
    href="/admin/lines/new"
    className="
      flex
      h-14
      items-center
      justify-center
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
    + Add Line
  </Link>

  <Link
    href="/admin/ports/new"
    className="
      flex
      h-14
      items-center
      justify-center
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
    + Add Port
  </Link>

  <Link
    href="/admin/terminals/new"
    className="
      flex
      h-14
      items-center
      justify-center
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
    + Add Terminal
  </Link>

</div>

        </div>

        {/* cards */}

        <div className="grid gap-6 md:grid-cols-3">

          <Link
            href="/admin/lines"
            className="group rounded-[32px] border border-white/40 bg-white/80 p-8 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-xl"
          >

            <div className="flex h-full flex-col justify-between">

              <div>

                <div className="mb-5 inline-flex rounded-full bg-[#eef2ff] px-4 py-2 text-xs font-black text-[#4f46e5]">
                  SHIPPING
                </div>

                <h2 className="text-3xl font-black text-gray-900">
                  Линии
                </h2>

                <p className="mt-4 text-sm leading-7 text-gray-500">
                  Управление линиями и тарифами
                </p>

              </div>

            </div>

          </Link>

          <Link
            href="/admin/ports"
            className="group rounded-[32px] border border-white/40 bg-white/80 p-8 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-xl"
          >

            <div className="flex h-full flex-col justify-between">

              <div>

                <div className="mb-5 inline-flex rounded-full bg-[#eef2ff] px-4 py-2 text-xs font-black text-[#4f46e5]">
                  PORTS
                </div>

                <h2 className="text-3xl font-black text-gray-900">
                  Порты
                </h2>

                <p className="mt-4 text-sm leading-7 text-gray-500">
                  Управление storage и портами
                </p>

              </div>

            </div>

          </Link>

          <Link
            href="/admin/terminals"
            className="group rounded-[32px] border border-white/40 bg-white/80 p-8 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-xl"
          >

            <div className="flex h-full flex-col justify-between">

              <div>

                <div className="mb-5 inline-flex rounded-full bg-[#eef2ff] px-4 py-2 text-xs font-black text-[#4f46e5]">
                  TERMINALS
                </div>

                <h2 className="text-3xl font-black text-gray-900">
                  Терминалы
                </h2>

                <p className="mt-4 text-sm leading-7 text-gray-500">
                  Управление terminal rules
                </p>

              </div>

            </div>

          </Link>

        </div>

      </div>

      {/* modal */}

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 p-4 backdrop-blur-sm">

          <div className="w-full max-w-2xl rounded-[32px] border border-white/40 bg-white p-8 shadow-2xl">

            {/* top */}

            <div className="mb-8 flex items-start justify-between">

              <div>

                <h2 className="text-3xl font-black text-gray-900">
                  Добавить запись
                </h2>

                <p className="mt-2 text-sm text-gray-500">
                  Create new ERP entity
                </p>

              </div>

              <button
                onClick={() => setOpen(false)}
                className="rounded-full bg-gray-100 px-4 py-2 text-sm font-bold text-gray-700 transition hover:bg-gray-200"
              >
                ✕
              </button>

            </div>

            {/* form */}

            <div className="space-y-5">

              {/* type */}

              <div>

                <label className="mb-2 block text-sm font-bold text-gray-700">
                  Тип записи
                </label>

                <select
                  value={type}
                  onChange={(e) =>
                    setType(e.target.value)
                  }
                  className="h-14 w-full rounded-2xl border border-gray-200 bg-white px-5 text-[15px] font-medium outline-none"
                >

                  <option value="line">
                    Линия
                  </option>

                  <option value="port">
                    Порт
                  </option>

                  <option value="terminal">
                    Терминал
                  </option>

                </select>

              </div>

              {/* name */}

              <div>

                <label className="mb-2 block text-sm font-bold text-gray-700">
                  Название
                </label>

                <input
                  type="text"
                  placeholder="Введите название"
                  className="h-14 w-full rounded-2xl border border-gray-200 bg-white px-5 text-[15px] font-medium outline-none"
                />

              </div>

              {/* description */}

              <div>

                <label className="mb-2 block text-sm font-bold text-gray-700">
                  Описание
                </label>

                <textarea
                  placeholder="Введите описание"
                  className="min-h-[120px] w-full rounded-2xl border border-gray-200 bg-white p-5 text-[15px] font-medium outline-none"
                />

              </div>

              {/* conditions */}

              <div>

                <label className="mb-2 block text-sm font-bold text-gray-700">
                  Условия / тарифы
                </label>

                <textarea
                  placeholder="Storage, demurrage, DG, free days..."
                  className="min-h-[160px] w-full rounded-2xl border border-gray-200 bg-white p-5 text-[15px] font-medium outline-none"
                />

              </div>

              {/* actions */}

              <div className="flex justify-end gap-3 pt-4">

                <button
                  onClick={() => setOpen(false)}
                  className="rounded-full bg-gray-100 px-6 py-3 text-sm font-bold text-gray-700 transition hover:bg-gray-200"
                >
                  Отмена
                </button>

                <button className="rounded-full bg-[#475569] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#334155]">
                  Сохранить
                </button>

              </div>

            </div>

          </div>

        </div>
      )}

    </div>
  )
}