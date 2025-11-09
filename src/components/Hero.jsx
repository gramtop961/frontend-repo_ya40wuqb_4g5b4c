import Spline from '@splinetool/react-spline'
import { Rocket } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative h-[420px] w-full overflow-hidden rounded-3xl border border-blue-100/50 bg-gradient-to-br from-blue-50 via-indigo-50 to-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/UngO8SNLfLcyPG7O/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 flex h-full flex-col justify-between p-8">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-blue-700 shadow-sm backdrop-blur">
            <Rocket className="h-3.5 w-3.5" />
            New: Trainer Portal & Class Scheduling
          </div>
          <h1 className="mt-4 text-3xl font-black tracking-tight text-blue-950 sm:text-4xl md:text-5xl">
            Run your gym with confidence
          </h1>
          <p className="mt-3 max-w-xl text-sm md:text-base text-blue-900/70">
            A modern SaaS dashboard to manage members, trainers, classes, and performance analytics — all in one place.
          </p>
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-white/80" />
      </div>
    </section>
  )
}
