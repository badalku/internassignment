'use client';
import { useState, useEffect } from "react";
import ArtistCard from "@/components/ArtistCard";
import FilterBlock from "@/components/FilterBlock";
import data from "@/data/artists.json";
import { Artist } from "@/types"; // if you created a separate types file

export default function ArtistListing() {
  const [filters, setFilters] = useState({ category: "", location: "" });
  const [artists, setArtists] = useState<Artist[]>([]);

  useEffect(() => {
    let filtered: Artist[] = data;

    if (filters.category) {
      filtered = filtered.filter(
        (a) => a.category.toLowerCase() === filters.category.toLowerCase()
      );
    }

    if (filters.location) {
      filtered = filtered.filter(
        (a) =>
          a.location &&
          a.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }

    setArtists(filtered);
  }, [filters]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Browse Artists</h2>
      <FilterBlock filters={filters} setFilters={setFilters} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {artists.map((artist) => (
          <ArtistCard key={artist.id} artist={artist} />
        ))}
      </div>
    </div>
  );
}
