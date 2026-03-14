import { motion } from "framer-motion";
import { Mail, MapPin, Linkedin, Github, Send, Loader2 } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

type ContactForm = { name: string; email: string; message: string };
type FormErrors = Partial<Record<keyof ContactForm, string>>;

const validate = (form: ContactForm): FormErrors => {
  const errors: FormErrors = {};
  if (!form.name.trim()) errors.name = "Le nom est requis";
  if (!form.email.trim()) errors.email = "L'email est requis";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = "Email invalide";
  if (!form.message.trim()) errors.message = "Le message est requis";
  return errors;
};

const ContactSection = () => {
  const [form, setForm] = useState<ContactForm>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (field: keyof ContactForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const fieldErrors = validate(form);
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      return;
    }

    setStatus("sending");

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
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
          {/* Infos */}
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
                  href="mailto:papemoussadiedhiou272@gmail.com"
                  className="flex items-center gap-3 text-sm text-foreground transition-colors hover:text-primary"
                >
                  <Mail className="h-4 w-4 text-primary" />
                  papemoussadiedhiou272@gmail.com
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

          {/* Formulaire */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="card-gradient flex flex-col gap-4 rounded-xl border border-border p-6 md:col-span-3"
          >
            {status === "sent" ? (
              <div className="flex flex-1 items-center justify-center py-8 text-center">
                <p className="font-heading font-semibold text-primary">
                  ✓ Message envoyé ! Je vous répondrai bientôt.
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

                {status === "error" && (
                  <p className="text-xs text-destructive">
                    Une erreur est survenue. Réessayez ou contactez-moi directement par email.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-heading text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 glow-shadow disabled:opacity-60"
                >
                  {status === "sending" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Envoi en cours…
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Envoyer
                    </>
                  )}
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