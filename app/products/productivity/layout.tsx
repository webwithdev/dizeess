import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Productivity Master - Dizees",
  description: "Boost your productivity with proven techniques and templates. Get started with our digital product.",
  openGraph: {
    title: "Productivity Master - Dizees",
    description: "Boost your productivity with proven techniques and templates.",
    type: "website",
    url: "https://yoursite.com/products/productivity",
    images: [
      {
        url: "/images/productivity-og.png",
        width: 1200,
        height: 630,
        alt: "Productivity Master Product",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Productivity Master - Dizees",
    description: "Boost your productivity with proven techniques and templates.",
    images: ["/images/productivity-og.png"],
  },
};

export default function ProductivityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
