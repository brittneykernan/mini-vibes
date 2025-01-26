import { auth, signOut } from '@/libs/auth';
import { Player } from '@/components/Player';

// todo: get from express
const songs = [
  {
    "id": 1,
    "name": "First Snow",
    "artist": "Emancipator",
    "album": "7,000 plays",
    "url": "https://521dimensions.com/song/FirstSnow-Emancipator.mp3",
    "cover_art_url": "https://images.unsplash.com/photo-1736457908762-d6ae9e5fb593?q=80&w=192&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "id": 2,
    "name": "Intro / Sweet Glory",
    "artist": "Jimkata",
    "album": "21,345 plays",
    "url": "https://521dimensions.com/song/IntroSweetGlory-Jimkata.mp3",
    /* source: https://unsplash.com/photos/a-close-up-of-a-red-object-with-a-blurry-background-wEK9gAJPL8s */
    "cover_art_url": "https://521dimensions.com/img/open-source/amplitudejs/album-art/die-digital.jpg"
  },
  {
    "id": 3,
    "name": "Offcut #6",
    "artist": "Little People",
    "album": "500 plays",
    "url": "https://521dimensions.com/song/Offcut6-LittlePeople.mp3",
    "cover_art_url": "https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-but-hunks-of-wood.jpg"
  },
  {
    "id": 4,
    "name": "Dusk To Dawn",
    "artist": "Emancipator",
    "album": "80,020 plays",
    "url": "https://521dimensions.com/song/DuskToDawn-Emancipator.mp3",
    "cover_art_url": "https://521dimensions.com/img/open-source/amplitudejs/album-art/from-dusk-to-dawn.jpg"
  },
  {
    "id": 5,
    "name": "Anthem",
    "artist": "Emancipator",
    "album": "Soon It Will Be Cold Enough",
    "url": "https://521dimensions.com/song/Anthem-Emancipator.mp3",
    "cover_art_url": "https://521dimensions.com/img/open-source/amplitudejs/album-art/soon-it-will-be-cold-enough.jpg"
  }
]

export default async function ProtectedPage() {
  let session = await auth();
  console.log('You are logged in as', session?.user?.email)

  return (
    <div className="flex h-screen">
      <div className="absolute left-4 top-4">
        <SignOut />
      </div>

      <div className="w-player flex flex-col justify-center gap-6 mx-3">
  
        <h2 className="font-bold text-xl">Recent Stories</h2>

        {/* move to own component */}
        <div className="flex flex-wrap gap-y-3 sm:gap-y-0">
          {songs.map(({id, name, artist, album, cover_art_url}, index) => (
            <button key={id} className="amplitude-skip-to flex flex-row sm:p-3 sm:rounded-md gap-3 w-1/2 text-left  sm:hover:bg-white  sm:hover:bg-opacity-10" data-amplitude-location="0" data-amplitude-song-index={index} >
              <img className="w-16 h-16 rounded-md border-b border-black border-opacity-10" src={cover_art_url} alt={name} />
              <div className="flex flex-col">
                <span className="font-sans text-base font-semibold">{name}</span>
                <span className="font-sans text-sm">{artist}</span>
                <span className="font-sans text-sm opacity-70">{album}</span>
              </div>
            </button>
          ))}
        </div>

        <Player songs={songs}  />
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
