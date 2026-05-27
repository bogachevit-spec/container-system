'use client'

import { motion } from 'framer-motion'
import {
  LayoutDashboard,
  Ship,
  FileText,
  Activity,
  X,
} from 'lucide-react'

type Props = {
  open: boolean
  onClose: () => void
}

export default function MobileSidebar({
  open,
  onClose,
}: Props) {
  if (!open) return null

  return (
    <>
      <div
        onClick={onClose}
        className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
      />

      <motion.div
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        exit={{ x: -300 }}
        className="fixed left-0 top-0 z-50 flex h-full w-72 flex-col bg-white p-6 shadow-2xl"
      >
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-2xl font-bold">
            Container OS
          </h2>

          <button onClick={onClose}>
            <X />
          </button>
        </div>

<nav className="space-y-3">
  <a
    href="/dashboard"
    className="flex w-full items-center gap-3 rounded-2xl bg-black px-4 py-3 text-white"
  >
    <LayoutDashboard size={20} />
    Dashboard
  </a>

  <a
    href="/tracking"
    className="flex w-full items-center gap-3 rounded-2xl px-4 py-3 hover:bg-gray-100"
  >
    <Ship size={20} />
    Tracking
  </a>

  <a
    href="/monitoring"
    className="flex w-full items-center gap-3 rounded-2xl px-4 py-3 hover:bg-gray-100"
  >
    <Activity size={20} />
    Monitoring
  </a>

  <a
    href="/documents"
    className="flex w-full items-center gap-3 rounded-2xl px-4 py-3 hover:bg-gray-100"
  >
    <FileText size={20} />
    Documents
  </a>
</nav>
      </motion.div>
    </>
  )
}