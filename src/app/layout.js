import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata = {
  title: "Coming Soon | Premium Experience",
  description: "Something extraordinary is in the works. Stay tuned for our grand reveal.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`${outfit.variable} bg-black text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
