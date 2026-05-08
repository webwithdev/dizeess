import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "7-Day Ultimate Reset - Dizees",
  description:
    "Reset your focus, energy, and space in seven simple days.",
  openGraph: {
    title: "7-Day Ultimate Reset - Dizees",
    description:
      "Reset your focus, energy, and space in seven simple days.",
    type: "website",
    url: "https://yoursite.com/products/7-day-ultimate-reset",
    images: [
      {
        url: "/images/ultimate-reset-og.png",
        width: 1200,
        height: 630,
        alt: "7-Day Ultimate Reset",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "7-Day Ultimate Reset - Dizees",
    description:
      "Reset your focus, energy, and space in seven simple days.",
    images: ["/images/ultimate-reset-og.png"],
  },
};

export default function UltimateResetLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
