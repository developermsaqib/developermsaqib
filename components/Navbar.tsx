// "use client";

import Link from "next/link";
// import { useState } from "react";

// export default function NavBar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const sections = ["Home", "About", "Projects", "Skills", "Contact"];

//   return (
//     <nav className="bg-white dark:bg-gray-800 shadow sticky top-0 z-50">
//       <div className="container mx-auto flex justify-between items-center p-4">
//         <Link href="/" className="text-2xl font-bold text-primary">
//           DeveloperMsaqib
//         </Link>
//         {/* Desktop Menu */}
//         <div className="hidden md:flex space-x-6">
//           {sections.map((section) => (
//             <Link
//               key={section}
//               href={`/#${section.toLowerCase()}`}
//               className="hover:text-secondary text-gray-700 dark:text-gray-200 font-medium transition-colors duration-200"
//             >
//               {section}
//             </Link>
//           ))}
//         </div>
//         {/* Hamburger Icon */}
//         <button
//           className="md:hidden flex items-center px-3 py-2 border rounded text-gray-700 dark:text-gray-200 border-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
//           onClick={() => setMenuOpen(!menuOpen)}
//           aria-label="Toggle menu"
//         >
//           <svg
//             className="h-6 w-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M4 6h16M4 12h16M4 18h16"
//             />
//           </svg>
//         </button>
//       </div>
//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="md:hidden bg-white dark:bg-gray-800 shadow-lg">
//           <div className="flex flex-col items-center space-y-4 py-4">
//             {sections.map((section) => (
//               <Link
//                 key={section}
//                 href={`/#${section.toLowerCase()}`}
//                 className="hover:text-secondary text-gray-700 dark:text-gray-200 font-medium transition-colors duration-200"
//                 onClick={() => setMenuOpen(false)}
//               >
//                 {section}
//               </Link>
//             ))}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }


export default function Navbar() {
return (
<nav className="flex justify-between items-center py-6">
<h1 className="text-xl font-semibold">DeveloperMsaqib</h1>
<div className="space-x-6 text-sm font-medium">
<Link href="/" className="hover:text-blue-600">Home</Link>
<Link href="/about" className="hover:text-blue-600">About</Link>
<Link href="/projects" className="hover:text-blue-600">Projects</Link>
<Link href="/experience" className="hover:text-blue-600">Experience</Link>
<Link href="/contact" className="hover:text-blue-600">Contact</Link>
</div>
</nav>
);
}