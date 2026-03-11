import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen items-center section-padding overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <div className="relative z-10 max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-primary"
        >
          Développeur Full-Stack
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6 font-heading text-5xl font-bold leading-tight tracking-tight md:text-7xl lg:text-8xl"
        >
          Salut, je suis{" "}
          <span className="text-gradient">Développeur</span>{" "}
          chez Mirahtec
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl"
        >
          Diplômé en Informatique, actuellement en Master 1 Ingénierie des Systèmes d'Information.
          Je conçois des applications web modernes avec React, Laravel et PostgreSQL.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex gap-4"
        >
          <a
            href="#projets"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-heading text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 glow-shadow"
          >
            Voir mes projets
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 font-heading text-sm font-semibold text-foreground transition-all hover:bg-secondary"
          >
            Me contacter
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="text-muted-foreground transition-colors hover:text-primary">
          <ArrowDown className="h-5 w-5 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
