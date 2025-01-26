import { signOut } from '@/libs/auth';
import Player from '@/components/Player';
import { fetchTracks } from "@/actions/audio";
import TrackList from '@/components/TrackList';

export default async function ProtectedPage() {
  const audioTracks = await fetchTracks();

  return (
    <div className="flex h-screen">
      <div className="absolute left-4 top-4">
        <SignOut />
      </div>

      <div className="w-player flex flex-col justify-center gap-6 mx-3">
  
        <h2 className="font-bold text-xl">Recent Stories</h2>
        <TrackList tracks={audioTracks} />
        <Player tracks={audioTracks} />
  		</div>
    </div>
  );
}

function SignOut() {
  return (
    <form
      action={async () => {
        'use server';
        await signOut();
      }}
    >
      <button type="submit">Sign out</button>
    </form>
  );
}
