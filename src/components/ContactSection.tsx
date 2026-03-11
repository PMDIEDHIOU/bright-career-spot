import { motion } from "framer-motion";
import { Mail, MapPin, Linkedin, Github, Send } from "lucide-react";
import { useState } from "react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Le nom est requis").max(100, "100 caractères max"),
  email: z.string().trim().email("Email invalide").max(255, "255 caractères max"),
  message: z.string().trim().min(1, "Le message est requis").max(2000, "2000 caractères max"),
});

type ContactForm = z.infer<typeof contactSchema>;
type FormErrors = Partial<Record<keyof ContactForm, string>>;

const ContactSection = () => {
  const [form, setForm] = useState<ContactForm>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [sent, setSent] = useState(false);

  const handleChange = (field: keyof ContactForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: FormErrors = {};
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof ContactForm;
        if (!fieldErrors[field]) fieldErrors[field] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }
    // For now, mailto fallback
    const subject = encodeURIComponent(`Contact Portfolio — ${result.data.name}`);
    const body = encodeURIComponent(`Nom: ${result.data.name}\nEmail: ${result.data.email}\n\n${result.data.message}`);
    window.open(`mailto:contact@example.com?subject=${subject}&body=${body}`);
    setSent(true);
  };

  const inputClass =
    "w-full rounded-lg border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors";

  return (
    <section id="contact" className="section-padding">
      <div className="mx-auto max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 text-center font-heading text-3xl font-bold md:text-4xl"
        >
          Me contacter<span className="text-gradient">.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-10 text-center text-muted-foreground"
        >
          Vous avez un projet ou une opportunité ? N'hésitez pas à me contacter.
        </motion.p>

        <div className="grid gap-8 md:grid-cols-5">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-5 md:col-span-2"
          >
            <div className="card-gradient rounded-xl border border-border p-6">
              <div className="flex flex-col gap-4">
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
              </div>

              <div className="mt-6 flex gap-3">
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
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="card-gradient flex flex-col gap-4 rounded-xl border border-border p-6 md:col-span-3"
          >
            {sent ? (
              <div className="flex flex-1 items-center justify-center py-8 text-center">
                <p className="text-primary font-heading font-semibold">
                  ✓ Message prêt à envoyer ! Vérifiez votre client mail.
                </p>
              </div>
            ) : (
              <>
                <div>
                  <input
                    type="text"
                    placeholder="Votre nom"
                    className={inputClass}
                    value={form.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                  />
                  {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Votre email"
                    className={inputClass}
                    value={form.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                  />
                  {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
                </div>
                <div>
                  <textarea
                    rows={4}
                    placeholder="Votre message"
                    className={`${inputClass} resize-none`}
                    value={form.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                  />
                  {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-heading text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 glow-shadow"
                >
                  <Send className="h-4 w-4" />
                  Envoyer
                </button>
              </>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
