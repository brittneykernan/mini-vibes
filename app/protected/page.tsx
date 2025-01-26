import { auth, signOut } from 'app/auth';
import { Player } from '../player';

export default async function ProtectedPage() {
  let session = await auth();
  console.log('You are logged in as', session?.user?.email)

  return (
    <div className="flex h-screen">
      <div className="absolute left-4 top-4">
        <SignOut />
      </div>
      
      <div className="absolute right-4 top-4">
      </div>

      <div className="flex flex-col items-center justify-center">
        <Player />
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
