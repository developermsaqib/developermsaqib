import { SectionTitle } from "../../components/SectionTitle";


export default function AboutPage() {
return (
<main className="mt-16">
<SectionTitle title="About Me" />
<p className="text-gray-700 leading-relaxed">
I&apos;m Muhammad Saqib — a Full-Stack Software Engineer with strong backend focus.
I work with Node.js, Express, MongoDB, WebRTC, Docker, and message queues.
</p>


<div className="mt-8 grid grid-cols-2 gap-6">
<div>
<h4 className="font-semibold">Backend</h4>
<ul className="text-sm text-gray-600 mt-2 space-y-1">
<li>Node.js • Express • REST APIs</li>
<li>MongoDB • MariaDB • MySQL</li>
<li>RabbitMQ • Microservices • Docker</li>
</ul>
</div>
<div>
<h4 className="font-semibold">Frontend & Tools</h4>
<ul className="text-sm text-gray-600 mt-2 space-y-1">
<li>React • Next.js • Tailwind CSS</li>
<li>Git • CI/CD • Linux</li>
<li>WebRTC • Testing • Monitoring</li>
</ul>
</div>
</div>
</main>
);
}