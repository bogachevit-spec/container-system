'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const menu = [
  { label: 'Dashboard', href: '/' },
  { label: 'Tracking', href: '/tracking' },
  { label: 'Contracts', href: '/contracts' },
  { label: 'Settings', href: '/settings' },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-[260px] shrink-0 border-r border-gray-200 bg-white">
      <div className="border-b p-5">
        <div className="text-lg font-black">ERP System</div>
        <div className="text-xs text-gray-500">Container Control</div>
      </div>

      <nav className="p-3 space-y-1">
        {menu.map((item) => {
          const active = pathname === item.href

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`block rounded-xl px-4 py-3 text-sm font-medium transition ${
                active
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {item.label}
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}