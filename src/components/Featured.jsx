function Featured({ products = [] }) {
  return (
    <section className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Featured</h2>
          <a href="/shop" className="text-sm text-zinc-400 hover:text-white transition">Shop All</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <a key={p.handle} href={`/product/${p.handle}`} className="group relative bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800">
              {p.images?.[0]?.url && (
                <img src={p.images[0].url} alt={p.images[0].alt || p.title} className="h-80 w-full object-cover group-hover:opacity-90 transition" />
              )}
              <div className="p-4 flex items-center justify-between">
                <div>
                  <h3 className="font-medium">{p.title}</h3>
                  <p className="text-zinc-400 text-sm">{p.category}</p>
                </div>
                {p.variants?.[0]?.price && (
                  <span className="text-zinc-200">${p.variants[0].price.toFixed(2)}</span>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Featured