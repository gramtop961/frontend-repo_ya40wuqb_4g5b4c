import { Users, Activity, CreditCard, TrendingUp } from 'lucide-react'

const cards = [
  {
    title: 'Active Members',
    value: '1,284',
    delta: '+3.2% MoM',
    icon: Users,
    color: 'from-blue-500 to-indigo-600',
  },
  {
    title: 'Revenue (Mtd)',
    value: '$54,230',
    delta: '+8.1% MoM',
    icon: CreditCard,
    color: 'from-indigo-500 to-purple-600',
  },
  {
    title: 'Avg. Attendance',
    value: '78%',
    delta: '+2.4% MoM',
    icon: Activity,
    color: 'from-sky-500 to-blue-600',
  },
  {
    title: 'New Signups',
    value: '92',
    delta: '+12 this week',
    icon: TrendingUp,
    color: 'from-violet-500 to-fuchsia-600',
  },
]

export default function StatsOverview() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
      {cards.map(({ title, value, delta, icon: Icon, color }) => (
        <div
          key={title}
          className="relative overflow-hidden rounded-2xl border border-blue-100 bg-white p-5 shadow-sm"
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-blue-700/70">
                {title}
              </p>
              <p className="mt-2 text-2xl font-extrabold text-blue-950">{value}</p>
              <p className="mt-1 text-xs text-blue-900/60">{delta}</p>
            </div>
            <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${color} p-2.5 text-white`}>
              <Icon className="h-full w-full" />
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}
