interface CardProps {
title: string;
description: string;
tech: string;
link: string;
}


export default function ProjectCard({ title, description, tech, link }: CardProps) {
return (
<a
href={link}
target="_blank"
className="border p-5 rounded-lg shadow-sm hover:shadow-md transition block"
>
<h3 className="text-xl font-semibold">{title}</h3>
<p className="mt-2 text-gray-700 text-sm">{description}</p>
<p className="mt-2 text-xs text-gray-500">Tech: {tech}</p>
</a>
);
}