import { ChevronRight, UserPlus, CreditCard, Dumbbell } from 'lucide-react'

const items = [
  {
    icon: UserPlus,
    title: 'New member joined',
    desc: 'Emily Carter purchased Annual Plan',
    time: '5m ago',
  },
  {
    icon: Dumbbell,
    title: 'Class filled up',
    desc: 'HIIT Express reached 20/20 seats',
    time: '34m ago',
  },
  {
    icon: CreditCard,
    title: 'Payment received',
    desc: 'Invoice #2041 from Jacob Lee',
    time: '1h ago',
  },
]

export default function RecentActivity() {
  return (
    <section className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-blue-950">Recent Activity</h3>
        <button className="text-xs font-medium text-blue-700 hover:text-blue-900">View all</button>
      </div>
      <ul className="space-y-3">
        {items.map(({ icon: Icon, title, desc, time }) => (
          <li key={title} className="flex items-start gap-3">
            <div className="mt-0.5 rounded-lg bg-blue-50 p-2 text-blue-700">
              <Icon className="h-4 w-4" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-blue-950">{title}</p>
              <p className="text-xs text-blue-900/70">{desc}</p>
            </div>
            <div className="flex items-center gap-2 text-xs text-blue-900/50">
              <span>{time}</span>
              <ChevronRight className="h-3.5 w-3.5" />
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
