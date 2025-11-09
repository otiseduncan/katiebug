import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductGrid from '../components/ProductGrid';

export default function Home() {
  return (
    <>
      <Navbar />
      <main style={{
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
        marginTop: '20vh'
      }} className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-6">Katiebug’s Storefront</h1>
        <ProductGrid />
      </main>
      <Footer />
    </>
  );
}
