'use server';

export async function fetchTracks() {
  // todo: move the host to a shared config, and routes to config
  const response = await fetch('http://localhost:3001/api/tracks', {
    next: { revalidate: 10 },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch tracks.');
  }

  return response.json();
}
