'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

export default function LoginPage() {
  const router = useRouter()
  const supabase = createClient()

  const [email, setEmail] = useState('')
  const [password, setPassword] =
    useState('')

  const [loading, setLoading] =
    useState(false)

  const [error, setError] =
    useState('')

  async function handleLogin(
    e: React.FormEvent
  ) {
    e.preventDefault()

    setLoading(true)
    setError('')

    const { error } =
      await supabase.auth.signInWithPassword({
        email,
        password,
      })

    if (error) {
      setError(error.message)
      setLoading(false)
      return
    }

    router.push('/dashboard')
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f5f7fb]">

      {/* background */}

      <div className="absolute left-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-blue-100/40 blur-3xl" />

      <div className="absolute bottom-[-140px] right-[-140px] h-[340px] w-[340px] rounded-full bg-indigo-100/40 blur-3xl" />

      {/* content */}

      <div className="relative z-10 flex min-h-screen items-center justify-center px-4">

        <div className="w-full max-w-md rounded-[32px] border border-white/40 bg-white/80 p-8 shadow-xl backdrop-blur">

          {/* header */}

          <div className="mb-8 text-center">

            <h1 className="text-4xl font-black tracking-tight text-gray-900">
              Pott + Koerner Russia
            </h1>

            <p className="mt-3 text-sm font-medium text-gray-500">
              база тарифов линий, портов и терминалов
            </p>

          </div>

          {/* form */}

          <form
            onSubmit={handleLogin}
            className="space-y-5"
          >

            <div>

              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Логин
              </label>

              <input
                type="login"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                placeholder="Введите логин"
                className="h-14 w-full rounded-2xl border border-gray-200 bg-white px-5 text-[15px] font-medium text-gray-900 outline-none transition focus:border-gray-400"
                required
              />

            </div>

            <div>

              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Пароль
              </label>

              <input
                type="password"
                value={password}
                onChange={(e) =>
                  setPassword(
                    e.target.value
                  )
                }
                placeholder="Введите пароль"
                className="h-14 w-full rounded-2xl border border-gray-200 bg-white px-5 text-[15px] font-medium text-gray-900 outline-none transition focus:border-gray-400"
                required
              />

            </div>

            {error && (
              <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="h-14 w-full rounded-2xl bg-[#475569] text-sm font-bold text-white transition hover:bg-[#334155] disabled:opacity-50"
            >
              {loading
                ? 'Входим...'
                : 'Войти в систему'}
            </button>

          </form>

        </div>

      </div>

    </div>
  )
}