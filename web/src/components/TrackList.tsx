'use client';

import type { Track } from '@/types/audio';

export default function TrackList({ tracks }: { tracks: Array<Track> }) {
  return (
    <div className="flex flex-wrap gap-y-3 sm:gap-y-0">
      {tracks.map(({ id, name, artist, album, cover_art_url }, index) => (
        <button
          key={id}
          className="amplitude-skip-to flex w-1/2 flex-row gap-3 text-left sm:rounded-md sm:p-3  sm:hover:bg-white  sm:hover:bg-opacity-10"
          data-amplitude-location="0"
          data-amplitude-song-index={index}
        >
          {/* todo: replace all img with Next Image */}
          <img
            className="size-16 rounded-md border-b border-black border-opacity-10"
            src={cover_art_url}
            alt={name}
          />
          <div className="flex flex-col">
            <span className="font-sans text-base font-semibold">{name}</span>
            <span className="font-sans text-sm">{artist}</span>
            <span className="font-sans text-sm opacity-70">{album}</span>
          </div>
        </button>
      ))}
    </div>
  );
}
