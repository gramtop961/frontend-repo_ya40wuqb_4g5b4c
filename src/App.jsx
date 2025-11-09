import Hero from './components/Hero'
import Sidebar from './components/Sidebar'
import StatsOverview from './components/StatsOverview'
import RecentActivity from './components/RecentActivity'
import Topbar from './components/Topbar'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="flex">
        <Sidebar />
        <main className="flex-1">
          <Topbar />
          <div className="mx-auto max-w-7xl p-5 md:p-8">
            <Hero />
            <div className="mt-6 grid grid-cols-1 xl:grid-cols-3 gap-6">
              <div className="xl:col-span-2 space-y-6">
                <StatsOverview />
                <section className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">
                  <div className="mb-3 flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-blue-950">Class Schedule</h3>
                    <button className="text-xs font-medium text-blue-700 hover:text-blue-900">Manage</button>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {["HIIT Express","Strength Fundamentals","Yoga Flow","Spin Power"].map((c) => (
                      <div key={c} className="rounded-xl border border-blue-100 p-4">
                        <p className="text-sm font-semibold text-blue-950">{c}</p>
                        <p className="text-xs text-blue-900/70">Today • 6:00 PM • 20 seats</p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
              <div className="space-y-6">
                <RecentActivity />
                <section className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">
                  <h3 className="mb-3 text-sm font-semibold text-blue-950">Personal Trainer Portal</h3>
                  <div className="space-y-3">
                    {[{name:'Jordan P.',clients:18},{name:'Mia R.',clients:12},{name:'Chris L.',clients:9}].map(t => (
                      <div key={t.name} className="flex items-center justify-between rounded-xl border border-blue-100 p-3">
                        <div>
                          <p className="text-sm font-medium text-blue-950">{t.name}</p>
                          <p className="text-xs text-blue-900/70">{t.clients} active clients</p>
                        </div>
                        <button className="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-blue-700">View</button>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
