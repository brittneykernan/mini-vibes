import '@/styles/globals.css';

let title = 'Mini Vibes';
let description =
  'Mini web audio app';

export const metadata = {
  title,
  description,
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
  metadataBase: new URL('https://minivibes.com'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Todo: Add tags necessary for SEO, marketing and PWA */}
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
