import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SITE_PHONE, SITE_EMAIL } from "@/lib/site";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://smilereachmarketing.com"),
  title: "School Sponsorship Marketing | Smile Reach Marketing",
  description:
    "Smile Reach Marketing connects dental and orthodontic practices with local families through exclusive school sponsorships, led by Parent Pick-Up Tags.",
  alternates: { canonical: "/" },
  openGraph: {
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Smile Reach Marketing",
  url: "https://smilereachmarketing.com",
  description:
    "Connecting orthodontists, pediatric dentists, and family practices with local families through exclusive school sponsorship opportunities.",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: SITE_PHONE,
    email: SITE_EMAIL,
    contactType: "sales",
    areaServed: "US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${inter.variable} antialiased`}
    >
      <body className="flex min-h-screen flex-col bg-white text-charcoal">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
