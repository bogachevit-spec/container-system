'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase-client'

type Props = {
  onUpload: (url: string) => void
}

export default function FileUpload({
  onUpload,
}: Props) {
  const [uploading, setUploading] =
    useState(false)

  const handleUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0]

    if (!file) return

    setUploading(true)

    const cleanName = file.name
  .replace(/\s+/g, '-')
  .replace(/[^a-zA-Z0-9.-]/g, '')

const fileName = `${Date.now()}-${cleanName}`

    const { error } = await supabase.storage
      .from('documents')
      .upload(fileName, file)

    if (error) {
      alert(error.message)
      setUploading(false)
      return
    }

    const {
      data: { publicUrl },
    } = supabase.storage
      .from('documents')
      .getPublicUrl(fileName)

    onUpload(publicUrl)

    setUploading(false)

    alert('File uploaded')
  }

  return (
    <div>
      <input
        type="file"
        onChange={handleUpload}
      />

      {uploading && (
        <p className="mt-2 text-sm">
          Uploading...
        </p>
      )}
    </div>
  )
}