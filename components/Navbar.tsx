import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" className="text-2xl font-bold text-primary">
          Msaqib
        </Link>
        <div className="space-x-6">
          {["Home", "About", "Projects", "Skills", "Contact"].map((section) => (
            <Link
              key={section}
              href={`/#${section.toLowerCase()}`}
              className="hover:text-secondary"
            >
              {section}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
