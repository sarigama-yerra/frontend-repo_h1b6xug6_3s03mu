import { useEffect, useState } from 'react'
import Hero from './components/Hero'
import Featured from './components/Featured'
import Ethos from './components/Ethos'
import EmailCapture from './components/EmailCapture'

function App() {
  const [featured, setFeatured] = useState([])

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/products?featured=true`)
        if (res.ok) {
          const data = await res.json()
          setFeatured(data)
        }
      } catch (e) {
        // ignore
      }
    }
    load()
  }, [])

  return (
    <div className="bg-black text-white">
      <header className="sticky top-0 z-50 bg-black/70 backdrop-blur border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="font-extrabold tracking-tight">STOUSH</a>
          <nav className="flex items-center gap-6 text-sm text-zinc-300">
            <a href="/shop" className="hover:text-white">Shop</a>
            <a href="/about" className="hover:text-white">About</a>
            <a href="/journal" className="hover:text-white">Journal</a>
            <a href="/account" className="hover:text-white">Account</a>
            <a href="/cart" className="hover:text-white">Cart (0)</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Featured products={featured} />
        <Ethos />
        <EmailCapture />
      </main>

      <footer className="bg-black text-zinc-400 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p className="text-sm">© {new Date().getFullYear()} STOUSH. Start Something.</p>
          <div className="flex items-center gap-6 text-sm">
            <a href="/terms" className="hover:text-white">Terms</a>
            <a href="/privacy" className="hover:text-white">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
