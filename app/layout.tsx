import './globals.css';

let title = 'Next.js + Postgres Auth Starter';
let description =
  'This is a Next.js starter kit that uses NextAuth.js for simple email + password login and a Postgres database to persist the data.';

export const metadata = {
  title,
  description,
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
  metadataBase: new URL('https://nextjs-postgres-auth.vercel.app'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="bg-gradient-to-tr from-red-500 to-purple-400 relative h-screen w-screen text-white">
          <div className="w-screen h-screen flex flex-col justify-center items-center">
            {children}
          </div>        
        </div>
      </body>
    </html>
  );
}
