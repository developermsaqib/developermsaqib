import Hero from "../components/Hero";
import { SectionTitle } from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";


export default function HomePage() {
return (
<main>
<Hero />


<section className="mt-16">
<SectionTitle title="Featured Projects" />


<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<ProjectCard
title="Salon Backend API"
description="Backend API for salon management with JWT auth, scheduling & reporting."
tech="Node.js, Express, MongoDB, JWT, Docker"
link="https://github.com/developermsaqib"
/>


<ProjectCard
title="WebRTC Audio Call App"
description="Real-time audio calling demo using WebRTC & Node.js signalling."
tech="WebRTC, Node.js, Express"
link="https://github.com/developermsaqib"
/>


<ProjectCard
title="Speech-to-Text (DeepSpeech)"
description="Offline speech recognition pipeline using DeepSpeech."
tech="DeepSpeech, Node.js"
link="https://github.com/developermsaqib"
/>
</div>
</section>
</main>
);
}