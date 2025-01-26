import { fetchTracks } from '@/actions/audio';
import Player from '@/components/Player';
import TrackList from '@/components/TrackList';
import { signOut } from '@/libs/auth';

// todo: move this to its own component and move 
// action to actions folder
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

export default async function ProtectedPage() {
  const audioTracks = await fetchTracks();

  return (
    <div className="flex h-screen">
      <div className="absolute left-4 top-4">
        <SignOut />
      </div>

      <div className="w-player mx-3 flex flex-col justify-center gap-6">
        <h2 className="text-xl font-bold">Recent Stories</h2>
        <TrackList tracks={audioTracks} />
        <Player tracks={audioTracks} />
      </div>
    </div>
  );
}
