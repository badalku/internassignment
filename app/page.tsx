import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="p-4 border-b">
        <h1 className="text-2xl font-bold">Artistly.com</h1>
      </header>

      <section className="p-8 text-center bg-gray-50">
        <h2 className="text-3xl font-semibold mb-2">Find & Book Performing Artists</h2>
        <p className="mb-4 text-gray-600">Connecting Event Planners with the Best Talent</p>
        <Link href="/artists" className="bg-blue-600 text-white px-4 py-2 rounded">Explore Artists</Link>
      </section>

      <section className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {["Singers", "Dancers", "Speakers", "DJs"].map((category) => (
          <div key={category} className="p-4 border rounded shadow text-center">
            <h3 className="font-medium text-xl">{category}</h3>
          </div>
        ))}
      </section>
    </div>
  );
}