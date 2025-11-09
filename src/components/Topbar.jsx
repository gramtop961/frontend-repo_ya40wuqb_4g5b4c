import { Search, Bell, User } from 'lucide-react'

export default function Topbar() {
  return (
    <header className="sticky top-0 z-20 flex items-center justify-between gap-4 border-b border-blue-100/50 bg-white/70 px-5 py-4 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="flex items-center gap-3">
        <button className="lg:hidden rounded-xl border border-blue-100 bg-white p-2 text-blue-800">☰</button>
        <div className="relative hidden sm:block">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-blue-900/50" />
          <input
            className="h-10 w-72 rounded-xl border border-blue-100 bg-white pl-9 pr-3 text-sm text-blue-950 placeholder:text-blue-900/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            placeholder="Search members, classes, trainers..."
          />
        </div>
      </div>
      <div className="flex items-center gap-3">
        <button className="relative rounded-xl border border-blue-100 bg-white p-2 text-blue-800">
          <Bell className="h-5 w-5" />
          <span className="absolute -right-1 -top-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold text-white">3</span>
        </button>
        <div className="flex items-center gap-2 rounded-xl border border-blue-100 bg-white px-2 py-1.5">
          <div className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
            <User className="h-4 w-4" />
          </div>
          <div>
            <p className="text-xs font-semibold text-blue-950 leading-tight">Alex Morgan</p>
            <p className="text-[10px] text-blue-900/60 leading-tight">Admin</p>
          </div>
        </div>
      </div>
    </header>
  )
}
