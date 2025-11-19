import { useState } from 'react'

function EmailCapture() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    setStatus('')
    try {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${base}/newsletter`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'hero' })
      })
      if (!res.ok) throw new Error('Failed')
      setStatus('Thanks — you’re on the list.')
      setEmail('')
    } catch (err) {
      setStatus('Could not subscribe. Try again later.')
    }
  }

  return (
    <section className="bg-black text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h3 className="text-xl md:text-2xl font-medium">Early access to drops</h3>
            <p className="text-zinc-400 mt-2">Get first looks and members-only releases.</p>
          </div>
          <form onSubmit={submit} className="w-full md:w-auto flex gap-3">
            <input value={email} onChange={(e)=>setEmail(e.target.value)} required type="email" placeholder="Email address" className="w-full md:w-80 bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-600" />
            <button className="bg-white text-black rounded-lg px-5 py-3 text-sm font-medium hover:bg-zinc-200 transition">Notify Me</button>
          </form>
        </div>
        {status && <p className="mt-4 text-sm text-zinc-300">{status}</p>}
      </div>
    </section>
  )
}

export default EmailCapture