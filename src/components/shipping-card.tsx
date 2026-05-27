import {
  Ship,
  FileText,
  MapPin,
} from 'lucide-react'

type Props = {
  name: string
  terminal: string
  storage_tariff: string
  detention: string
  demurrage: string
  free_days: string
  document_url?: string
}

export default function ShippingCard({
  name,
  terminal,
  storage_tariff,
  detention,
  demurrage,
  free_days,
  document_url,
}: Props) {
  return (
    <div className="group rounded-3xl border border-gray-200 bg-white/80 p-6 shadow-sm backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-xl">
      <div className="mb-6 flex items-start justify-between">
        <div>
          <div className="mb-2 flex items-center gap-2">
            <Ship size={22} />

            <h2 className="text-2xl font-bold">
              {name}
            </h2>
          </div>

          <div className="flex items-center gap-2 text-gray-500">
            <MapPin size={16} />

            <span>{terminal}</span>
          </div>
        </div>

        <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
          Active
        </span>
      </div>

      <div className="space-y-3 text-sm">
        <div className="flex justify-between rounded-xl bg-gray-50 p-3">
          <span className="text-gray-500">
            Storage
          </span>

          <span className="font-semibold">
            {storage_tariff}
          </span>
        </div>

        <div className="flex justify-between rounded-xl bg-gray-50 p-3">
          <span className="text-gray-500">
            Detention
          </span>

          <span className="font-semibold">
            {detention}
          </span>
        </div>

        <div className="flex justify-between rounded-xl bg-gray-50 p-3">
          <span className="text-gray-500">
            Demurrage
          </span>

          <span className="font-semibold">
            {demurrage}
          </span>
        </div>

        <div className="flex justify-between rounded-xl bg-gray-50 p-3">
          <span className="text-gray-500">
            Free Days
          </span>

          <span className="font-semibold">
            {free_days}
          </span>
        </div>
      </div>

      {document_url && (
        <a
          href={document_url}
          target="_blank"
          className="mt-6 flex items-center justify-center gap-2 rounded-2xl bg-black px-4 py-3 text-white transition hover:opacity-90"
        >
          <FileText size={18} />
          Open Document
        </a>
      )}
    </div>
  )
}