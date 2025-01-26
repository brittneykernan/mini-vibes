import Link from 'next/link';

export default function Page() {
  return (
    <>
      <div className="mb-10 max-w-screen-sm text-center">
        <h1 className="font-primary text-5xl font-extrabold text-white md:leading-tight">
          Mini Vibes
        </h1>
      </div>
      <div className="flex space-x-3">
        <Link
          href="/login"
          className="bg-palette-secondary hover:bg-palette-dark focus-visible:ring-palette-primary block rounded-lg border border-transparent px-4 py-3 text-base 
        font-semibold text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
        >
          Login
        </Link>
        <Link
          href="/register"
          className="bg-palette-primary hover:bg-palette-dark focus-visible:ring-palette-primary block rounded-lg border border-transparent px-4 py-3 text-base 
        font-semibold text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
        >
          Register
        </Link>
      </div>
    </>
  );
}
