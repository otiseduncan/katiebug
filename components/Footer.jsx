import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-wood text-accent py-6 mt-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="text-center md:text-left">
          <h3 className="font-serif text-lg">Katie Bug's Country Kitchen</h3>
          <p className="text-sm opacity-80">
            Hand-crafted flavors from the heart of Georgia.
          </p>
        </div>
        <div className="flex space-x-4">
          <Link href="/privacy" className="text-sm hover:underline">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-sm hover:underline">
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
}
