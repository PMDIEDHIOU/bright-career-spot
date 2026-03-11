import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Front-end",
    skills: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite", "Axios"],
  },
  {
    title: "Back-end",
    skills: ["Laravel", "PHP", "REST API", "Laravel Sanctum", "Node.js"],
  },
  {
    title: "Base de données",
    skills: ["PostgreSQL", "MySQL", "Eloquent ORM"],
  },
  {
    title: "Outils & DevOps",
    skills: ["Git", "GitHub", "VS Code", "Postman", "Linux"],
  },
];

const SkillsSection = () => {
  return (
    <section id="competences" className="section-padding">
      <div className="mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 font-heading text-3xl font-bold md:text-4xl"
        >
          Compétences<span className="text-gradient">.</span>
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-gradient rounded-xl border border-border p-6"
            >
              <h3 className="mb-4 font-heading text-lg font-semibold text-primary">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground"
                  >
                    {skill}
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

export default SkillsSection;
