import { SectionTitle } from "../../components/SectionTitle";
import ProjectCard from "../../components/ProjectCard";


export default function ProjectsPage() {
return (
<main className="mt-16">
<SectionTitle title="Projects" />


<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<ProjectCard
title="Salon Backend API"
description="API for salon management: users, roles, scheduling, and reporting."
tech="Node.js, Express, MongoDB, JWT, Docker"
link="https://github.com/developermsaqib"
/>


<ProjectCard
title="WebRTC Audio Call App"
description="Simple audio calling app using WebRTC & Node.js signalling."
tech="WebRTC, Node.js, Express"
link="https://github.com/developermsaqib"
/>


<ProjectCard
title="Speech-to-Text via DeepSpeech"
description="Offline speech-to-text model integration using Mozilla DeepSpeech."
tech="DeepSpeech, Node.js"
link="https://github.com/developermsaqib"
/>
</div>
</main>
);
}