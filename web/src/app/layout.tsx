import '@/styles/globals.css';

const title = 'Mini Vibes';
const description = 'Mini web audio app';

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
        <div className="relative h-screen w-screen bg-gradient-to-tr from-red-500 to-purple-400 text-white">
          <div className="flex h-screen w-screen flex-col items-center justify-center">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
