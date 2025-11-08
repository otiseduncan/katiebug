import "./../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Katie Bug's Country Kitchen",
  description: "Homemade flavors from the heart — crafted by Katie Bug's Country Kitchen."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="katiebugs">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Lato:wght@300;400;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <div className="syfernetics-badge">
          Powered by Syfernetics
        </div>
      </body>
    </html>
  );
}
