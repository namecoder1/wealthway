import '@/assets/globals.css'
import { Montserrat } from 'next/font/google'
import Navbar from "@/components/navbar";
import Footer from '@/components/footer';

const montserrat = Montserrat({
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
      <body className={`${montserrat.className} bg-[#EDEDEF]`}>
        <main className="max-w-5xl mx-auto bg-white min-h-[100vh] lg:px-10">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
