import portfolio from "@/data/portfolio.json";
import ProjectCard from "@/components/ProjectCard";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="space-y-20 py-12">
      {/* Hero Section */}
      <section id="home" className="text-center space-y-4">
        <h1 className="text-4xl font-bold">{portfolio.name}</h1>
        <h2 className="text-xl text-secondary">{portfolio.role}</h2>
        <p className="max-w-xl mx-auto">{portfolio.tagline}</p>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p>{portfolio.bio}</p>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <h2 className="text-2xl font-bold mb-4 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolio.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="text-center">
        <h2 className="text-2xl font-bold mb-4">Skills</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {portfolio.skills.map((skill) => (
            <span
              key={skill}
              className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-lg mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-center">Contact</h2>
        <ContactForm />
      </section>

      <Footer {...portfolio.contact} />
    </div>
  );
}
