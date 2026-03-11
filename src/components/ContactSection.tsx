import { motion } from "framer-motion";
import { Mail, MapPin, Linkedin, Github } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="mx-auto max-w-2xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 font-heading text-3xl font-bold md:text-4xl"
        >
          Me contacter<span className="text-gradient">.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-10 text-muted-foreground"
        >
          Vous avez un projet ou une opportunité ? N'hésitez pas à me contacter.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="card-gradient mx-auto flex flex-col items-center gap-6 rounded-xl border border-border p-8"
        >
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary" />
            <span>Dakar, Sénégal</span>
          </div>

          <a
            href="mailto:contact@example.com"
            className="flex items-center gap-3 text-sm text-foreground transition-colors hover:text-primary"
          >
            <Mail className="h-4 w-4 text-primary" />
            contact@example.com
          </a>

          <div className="flex gap-4">
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-muted-foreground transition-colors hover:text-primary"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-muted-foreground transition-colors hover:text-primary"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
