import { Montserrat, Exo_2 } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const exo2 = Exo_2({
  subsets: ["latin"],
  variable: "--font-exo2",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Ronit Pai | Portfolio",
  description: "Personal portfolio of Ronit Pai - Frontend Developer and AI/ML Enthusiast from India.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${exo2.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-bg text-text-primary relative flex flex-col font-exo2">
        {/* Background Grid */}
        <div className="dotted-grid-bg" />
        
        {/* Content wrapper */}
        <div className="relative z-10 flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow w-full">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
