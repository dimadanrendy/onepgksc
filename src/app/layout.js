import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/screen/header";
import WhatsAppButton from "@/components/screen/wabutton";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "One PGK Swimming Club",
  description: "One PGK Swimming Club",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        <WhatsAppButton />
        {children}
      </body>
    </html>
  );
}
