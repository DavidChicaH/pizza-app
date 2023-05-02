"use client";
import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import { useRouter } from "next/navigation";

export const metadata = {
  title: "Pizza Restaurant",
  description: "An app for a pizzas restarurant",
  keywords: ["pizza", "food", "restaurant", "medellin"]
};

export default function RootLayout({ children }) {
  const router = useRouter();

  const handleCartNavigation = () => {
    router.push("/cart");
  }

  const handleHomeNavigation = () => {
    router.push("/");
  }
  return (
    <html>
      <body>
        <Navbar navigateCart={handleCartNavigation} navigateHome={handleHomeNavigation}/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
