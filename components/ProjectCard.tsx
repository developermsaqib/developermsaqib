type Project = {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  repoLink: string;
  liveDemo?: string | null;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="border rounded p-4 hover:shadow-lg transition bg-white dark:bg-gray-800">
      <h3 className="text-xl font-semibold">{project.name}</h3>
      <p className="mt-2">{project.description}</p>
      <div className="mt-2 space-x-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="inline-block bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="mt-4 space-x-4">
        <a
          href={project.repoLink}
          className="text-primary hover:underline"
          target="_blank"
        >
          Repo
        </a>
        {project.liveDemo && (
          <a
            href={project.liveDemo}
            className="text-secondary hover:underline"
            target="_blank"
          >
            Live
          </a>
        )}
      </div>
    </div>
  );
}
