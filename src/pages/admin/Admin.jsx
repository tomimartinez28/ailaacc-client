import { AdminSidebar } from '../../components/ui/Sidebar'
import { TimeCounter } from './TimeCounter'

export function Admin () {
  return (
    <div className='h-screen w-full flex'>

      <AdminSidebar />
      <TimeCounter />

    </div>

  )
}
