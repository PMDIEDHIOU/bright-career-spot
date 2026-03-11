import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Application de gestion interne",
    description: "Système de gestion développé chez Mirahtec avec React en front-end et Laravel en back-end. Authentification via Sanctum, base PostgreSQL.",
    tags: ["React", "Laravel", "PostgreSQL", "Sanctum"],
  },
  {
    title: "API RESTful — Gestion de projets",
    description: "API REST complète avec Laravel pour la gestion de projets, tâches et utilisateurs. Documentation Postman et tests unitaires.",
    tags: ["Laravel", "REST API", "MySQL", "PHP"],
  },
  {
    title: "Dashboard analytique",
    description: "Tableau de bord interactif avec visualisation de données en temps réel. Interface responsive construite avec React et Tailwind CSS.",
    tags: ["React", "Tailwind CSS", "Recharts", "Vite"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projets" className="section-padding">
      <div className="mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 font-heading text-3xl font-bold md:text-4xl"
        >
          Projets<span className="text-gradient">.</span>
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              whileHover={{ y: -4 }}
              className="group card-gradient flex flex-col rounded-xl border border-border p-6 transition-colors hover:border-primary/40"
            >
              <h3 className="mb-3 font-heading text-lg font-semibold">{project.title}</h3>
              <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded bg-secondary px-2 py-1 text-[11px] font-medium text-primary">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
