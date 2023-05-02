import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Pizza Restaurant",
  description: "An app for a pizzas restarurant",
  keywords: ["pizza", "food", "restaurant", "medellin"],
};

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <link rel="icon" href="/img/favicon.ico" />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
