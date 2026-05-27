'use client'

import { useState } from 'react'

import Sidebar from './sidebar'
import MobileSidebar from './mobile-sidebar'
import Topbar from './topbar'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
      <Sidebar />

      <MobileSidebar
        open={open}
        onClose={() => setOpen(false)}
      />

      <main className="flex-1 p-4 lg:p-8">
        <Topbar
          onMenu={() => setOpen(true)}
        />

        {children}
      </main>
    </div>
  )
}