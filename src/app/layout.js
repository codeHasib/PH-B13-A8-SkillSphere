import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const space_grotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata = {
  title: "SkillSphere - The Best Online Course Platform",
  description:
    "Elevate your career with SkillSphere. We offer high-impact, industry-ready courses in Web Development, Graphic Design, and Digital Innovation. Join a global community of creators and start your journey today.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${inter.variable} ${space_grotesk.variable} antialiased`}
    >
      <body>
        <Nav></Nav>
        {children}
      </body>
    </html>
  );
}
