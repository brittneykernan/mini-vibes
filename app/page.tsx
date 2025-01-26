import Link from 'next/link';

export default function Page() {
  return (
        <>
        <div className="text-center max-w-screen-sm mb-10">
          <h1 className="font-primary font-extrabold text-white text-5xl md:leading-tight">
            Mini Vibes
          </h1>
        </div>        
        <div className="flex space-x-3">
          <Link
            href="/login"
            className="py-3 px-4 bg-palette-secondary hover:bg-palette-dark text-white text-base font-semibold rounded-lg border border-transparent 
          focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-palette-primary block"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="py-3 px-4 bg-palette-primary hover:bg-palette-dark text-white text-base font-semibold rounded-lg border border-transparent 
          focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-palette-primary block"
          >
            Register
          </Link>
        </div>
    </>
  );
}
