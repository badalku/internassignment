export default function FilterBlock({ filters, setFilters }: { filters: any, setFilters: any }) {
  return (
    <div className="flex gap-4 flex-wrap mb-4">
      <select onChange={(e) => setFilters((f: any) => ({ ...f, category: e.target.value }))}>
        <option value="">All Categories</option>
        <option value="Singer">Singer</option>
        <option value="Dancer">Dancer</option>
        <option value="Speaker">Speaker</option>
        <option value="DJ">DJ</option>
      </select>
      <input placeholder="Location" onChange={(e) => setFilters((f: any) => ({ ...f, location: e.target.value }))} className="border px-2 py-1" />
    </div>
  );
}
