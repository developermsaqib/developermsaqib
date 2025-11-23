import Link from 'next/link';

export default function Hero() {
return (
<section className="mt-20 text-center">
<h1 className="text-4xl font-bold">
Hi, I&apos;m <span className="text-blue-600">Muhammad Saqib</span>
</h1>
<p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
Full Stack Developer — Backend Focus
<br /> Node.js • WebRTC • Databases • Docker • Next.js
</p>


<div className="mt-6 flex justify-center gap-4">
<Link href="/projects" className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">
View Projects
</Link>
<Link href="/Muhammad-Saqib-CV.pdf" className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50">
Download CV
</Link>
</div>
</section>
);
}