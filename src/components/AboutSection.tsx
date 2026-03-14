import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const timeline = [
  {
    icon: Briefcase,
    title: "Développeur — Mirahtec, Dakar",
    period: "Sept 2024 — Présent",
    description: "D'abord stagiaire puis contractuel. Développement d'applications web full-stack.",
  },
  {
    icon: GraduationCap,
    title: "Master — Ingénierie des Systèmes d'Information",
    period: "En cours",
    description: "Approfondissement en architecture logicielle, bases de données avancées et gestion de projets SI.",
  },
  {
    icon: GraduationCap,
    title: "Licence en Informatique",
    period: "Diplômé",
    description: "Fondamentaux en algorithmique, programmation, réseaux et systèmes d'information.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 font-heading text-3xl font-bold md:text-4xl"
        >
          Qui suis-je<span className="text-gradient">.</span>
        </motion.h2>

        <div className="relative space-y-8 border-l-2 border-border pl-8">
          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative"
            >
              <div className="absolute -left-[2.65rem] flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-primary">
                <item.icon className="h-4 w-4" />
              </div>
              <p className="mb-1 text-xs font-medium uppercase tracking-wider text-primary">{item.period}</p>
              <h3 className="mb-2 font-heading text-lg font-semibold">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
