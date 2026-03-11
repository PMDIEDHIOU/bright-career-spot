import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import profilePlaceholder from "@/assets/profile-placeholder.png";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen items-center section-padding overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <div className="relative z-10 flex w-full flex-col-reverse items-center gap-12 lg:flex-row lg:justify-between">
        {/* Text */}
        <div className="max-w-2xl text-center lg:text-left">
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
            className="mb-6 font-heading text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl"
          >
            Pape Moussa{" "}
            <span className="text-gradient">Diedhiou</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            Développeur chez <strong className="text-foreground">Mirahtec</strong> à Dakar.
            Diplômé en Informatique, en Master 1 Ingénierie des Systèmes d'Information.
            Je conçois des applications web modernes avec React, Laravel et PostgreSQL.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex justify-center gap-4 lg:justify-start"
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

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative flex-shrink-0"
        >
          <div className="relative h-48 w-48 overflow-hidden rounded-full border-2 border-primary/30 md:h-64 md:w-64 lg:h-72 lg:w-72 glow-shadow">
            <img
              src={profilePlaceholder}
              alt="Pape Moussa Diedhiou"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          {/* Decorative ring */}
          <div className="absolute -inset-3 rounded-full border border-primary/10" />
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
