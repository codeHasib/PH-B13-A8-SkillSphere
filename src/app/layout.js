import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import { ToastContainer } from "react-toastify";

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
        <footer className="w-full bg-black text-white text-center p-4">
          <p className="mb-4 md:mb-0">
            &copy;2026 SKILLSPHERE ONLINE LEARNING PLATFORM
          </p>
        </footer>
        <ToastContainer></ToastContainer>
      </body>
    </html>
  );
}
