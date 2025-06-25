export default function ArtistCard({ artist }: { artist: any }) {
  return (
    <div className="border p-4 rounded shadow">
      <h3 className="font-bold text-lg">{artist.name}</h3>
      <p>{artist.category}</p>
      <p>{artist.location}</p>
      <p>{artist.priceRange}</p>
      <button className="mt-2 bg-blue-600 text-white px-3 py-1 rounded">Ask for Quote</button>
    </div>
  );
}