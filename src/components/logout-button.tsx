'use client'

import { supabase } from '@/lib/supabase-client'
import { useRouter } from 'next/navigation'

export default function LogoutButton() {
  const router = useRouter()

  const handleLogout = async () => {
    await supabase.auth.signOut()

    router.push('/login')
    router.refresh()
  }

  return (
<button
  onClick={handleLogout}
  className="rounded-2xl bg-black px-5 py-3 text-white transition hover:opacity-90"
>
  Logout
</button>
  )
}