import '@/assets/globals.css'
import { DM_Sans } from 'next/font/google'
import Navbar from "@/components/navbar";

const dmSans = DM_Sans({
  weight: '400',
  subsets: ['latin'],
})

export const metadata = {
  title: {
    template: "%s | WealthWay",
    default: "WealthWay"
  },
  description: "Condivido la mia esperienza e le lezioni apprese per aiutarti a fare scelte finanziarie che ti porteranno lontano",
};

export default function RootLayout({children}) {
  return (
    <html lang="it">
      <body className={dmSans.className}>
        <main className="max-w-4xl mx-auto">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
