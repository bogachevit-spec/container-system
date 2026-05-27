import ContainerTimeline from '@/components/container-timeline'
import { supabase } from '@/lib/supabase'

export default async function ContainerPage({
  params,
}: {
  params: {
    container: string
  }
}) {
  const { data: container } =
    await supabase
      .from('container_monitoring')
      .select('*')
      .eq(
        'container_number',
        params.container
      )
      .single()

  const { data: events } = await supabase
    .from('container_events')
    .select('*')
    .eq(
      'container_number',
      params.container
    )

  if (!container) {
    return (
      <div className="p-10">
        Container not found
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mb-6 rounded-3xl bg-white p-6 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold">
              {
                container.container_number
              }
            </h1>

            <p className="mt-2 text-gray-500">
              BL: {container.bl_number}
            </p>
          </div>

          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
            {container.status}
          </span>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl bg-gray-50 p-4">
            <p className="text-sm text-gray-500">
              Shipping Line
            </p>

            <p className="mt-1 text-lg font-semibold">
              {container.shipping_line}
            </p>
          </div>

          <div className="rounded-2xl bg-gray-50 p-4">
            <p className="text-sm text-gray-500">
              Terminal
            </p>

            <p className="mt-1 text-lg font-semibold">
              {container.terminal}
            </p>
          </div>

          <div className="rounded-2xl bg-gray-50 p-4">
            <p className="text-sm text-gray-500">
              Vessel
            </p>

            <p className="mt-1 text-lg font-semibold">
              {container.vessel}
            </p>
          </div>

          <div className="rounded-2xl bg-gray-50 p-4">
            <p className="text-sm text-gray-500">
              ETA
            </p>

            <p className="mt-1 text-lg font-semibold">
              {container.eta}
            </p>
          </div>
        </div>
      </div>

      <ContainerTimeline
        events={events || []}
      />
    </div>
  )
}