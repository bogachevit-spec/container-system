import React from 'react'

export function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5">
      {children}
    </div>
  )
}

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return <div className="text-sm font-black text-gray-900">{children}</div>
}

export function Badge({
  children,
  variant = 'gray',
}: {
  children: React.ReactNode
  variant?: 'gray' | 'blue' | 'red'
}) {
  const styles = {
    gray: 'bg-gray-100 text-gray-600',
    blue: 'bg-indigo-50 text-indigo-600',
    red: 'bg-red-50 text-red-600',
  }

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-bold ${styles[variant]}`}
    >
      {children}
    </span>
  )
}