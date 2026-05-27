type Event = {
  id: number
  status: string
  location: string
  event_time: string
}

export default function ContainerTimeline({
  events,
}: {
  events: Event[]
}) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-2xl font-bold">
        Timeline
      </h2>

      <div className="space-y-6">
        {events.map((event, index) => (
          <div
            key={event.id}
            className="relative flex gap-4"
          >
            <div className="flex flex-col items-center">
              <div className="h-4 w-4 rounded-full bg-black" />

              {index !== events.length - 1 && (
                <div className="h-full w-[2px] bg-gray-200" />
              )}
            </div>

            <div className="pb-6">
              <div className="flex items-center gap-3">
                <h3 className="text-lg font-semibold">
                  {event.status}
                </h3>

                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs">
                  {event.location}
                </span>
              </div>

              <p className="mt-1 text-sm text-gray-500">
                {event.event_time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}