import ContainerSearch from '@/components/container-search'
import { supabase } from '@/lib/supabase'

export default async function TrackingPage() {
  const { data } = await supabase
    .from('container_monitoring')
    .select('*')
    .order('id', { ascending: false })

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <ContainerSearch data={data || []} />
    </div>
  )
}