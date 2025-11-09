import { Home, BarChart3, Users, Dumbbell, Calendar, Settings } from 'lucide-react'

export default function Sidebar() {
  const nav = [
    { icon: Home, label: 'Dashboard' },
    { icon: BarChart3, label: 'Analytics' },
    { icon: Users, label: 'Members' },
    { icon: Dumbbell, label: 'Gym Management' },
    { icon: Calendar, label: 'Classes & Schedule' },
    { icon: Settings, label: 'Settings' },
  ]

  return (
    <aside className="hidden lg:flex h-screen w-72 flex-col border-r border-blue-100/40 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600" />
          <div>
            <p className="text-lg font-bold tracking-tight text-blue-900">PulseGym</p>
            <p className="text-xs text-blue-600/80">SaaS Management</p>
          </div>
        </div>
      </div>
      <nav className="mt-2 px-2 space-y-1">
        {nav.map(({ icon: Icon, label }) => (
          <button
            key={label}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-blue-900/80 hover:text-blue-900 hover:bg-blue-50 transition-colors"
          >
            <Icon className="h-5 w-5" />
            <span className="text-sm font-medium">{label}</span>
          </button>
        ))}
      </nav>
      <div className="mt-auto p-6">
        <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-50 p-4">
          <p className="text-sm font-semibold text-blue-900 mb-1">Pro Insights</p>
          <p className="text-xs text-blue-700/70">
            Unlock advanced analytics and trainer dashboards
          </p>
          <button className="mt-3 w-full rounded-lg bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700">
            Upgrade
          </button>
        </div>
      </div>
    </aside>
  )
}
