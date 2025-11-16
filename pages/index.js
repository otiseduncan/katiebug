import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductGrid from '../components/ProductGrid';
import path from 'path';
import fs from 'fs';

export async function getStaticProps() {
  // Folder(s) to scan under public
  const roots = [
    "Katie Bug's/butter",
  ];

  const items = [];
  const publicDir = path.join(process.cwd(), 'public');

  for (const rel of roots) {
    const abs = path.join(publicDir, rel);
    if (!fs.existsSync(abs)) continue;

    const entries = fs.readdirSync(abs, { withFileTypes: true });
    for (const entry of entries) {
      if (!entry.isFile()) continue;
      const ext = path.extname(entry.name).toLowerCase();
      if (!['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'].includes(ext)) continue;

      // Build a web path starting with '/'
      const webPath = `/${rel}/${entry.name}`
        // normalize Windows backslashes if any
        .replace(/\\/g, '/')
        // encode spaces and apostrophes but leave slashes alone
        .replace(/ /g, '%20')
        .replace(/'/g, '%27');

      items.push({ src: webPath, name: entry.name.replace(ext, '') });
    }
  }

  // Sort items by filename for stable order
  items.sort((a, b) => a.src.localeCompare(b.src));

  return { props: { items } };
}

export default function Home({ items }) {
  return (
    <>
      <Navbar />
      <main style={{
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
        marginTop: '20vh'
      }} className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-6">Katiebug’s Storefront</h1>
        <ProductGrid items={items} />
      </main>
      <Footer />
    </>
  );
}
