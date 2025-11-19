import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full bg-black text-white overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/JqBuM4DcZiGXqO-1/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 flex flex-col items-start justify-end h-full">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <div className="mt-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">STOUSH</h1>
          <p className="mt-4 text-xl md:text-2xl text-zinc-300">Start Something</p>
        </div>
      </div>
    </section>
  )
}

export default Hero