"use client";

import Section, { FadeIn } from "../ui/Section";
import Button from "../ui/Button";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, AlertCircle } from "lucide-react";

type FormState = {
  name: string;
  email: string;
  message: string;
};

type Errors = Partial<FormState>;
type Status = "idle" | "success" | "error";

export default function ContactSection() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): Errors => {
    const e: Errors = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email address.";
    if (!form.message.trim()) e.message = "Message is required.";
    else if (form.message.trim().length < 10) e.message = "Message must be at least 10 characters.";
    return e;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof Errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setStatus("idle");

    try {
      // NOTE: Replace "YOUR_ACCESS_KEY_HERE" with your actual Web3Forms access key
      // You can get one for free at https://web3forms.com/
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "8628eacc-d899-4f1c-ae2e-b83c09f70d6d",
          name: form.name,
          email: form.email,
          message: form.message,
          subject: `Portfolio Inquiry from ${form.name}`,
          from_name: form.name,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = (field: keyof Errors) =>
    `w-full bg-black-main border-b px-4 py-3 text-white focus:outline-none transition-colors font-montserrat placeholder:text-gray-600 ${errors[field] ? "border-red-500/60" : "border-white/20 focus:border-gold"
    }`;

  return (
    <Section id="contact" className="bg-black-main border-t border-white/5 pb-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">

        {/* ── Left: Info ── */}
        <div>
          <FadeIn>
            <h2 className="text-6xl md:text-8xl font-anton text-white mb-6 leading-none">
              LET'S<br />
              <span className="text-gold">CONNECT</span>
            </h2>
            <p className="text-gray-400 font-montserrat text-lg mb-10 max-w-md leading-relaxed">
              I'm always open to discussing new opportunities, creative projects, and meaningful collaborations. Feel free to reach out — I'll get back to you as soon as possible.
            </p>
          </FadeIn>

          <FadeIn delay={0.2} className="space-y-6">
            <div className="group">
              <span className="block text-xs font-montserrat uppercase tracking-widest text-gray-500 mb-1">Email</span>
              <a href="mailto:tanmaybhosalecell@gmail.com" className="text-xl md:text-2xl font-anton text-white hover:text-gold transition-colors">
                tanmaybhosalecell@gmail.com
              </a>
            </div>
            <div>
              <span className="block text-xs font-montserrat uppercase tracking-widest text-gray-500 mb-1 mt-6">Phone</span>
              <a href="tel:+917387223086" className="text-xl md:text-2xl font-anton text-white hover:text-gold transition-colors">
                +91 73872 23086
              </a>
            </div>
            <div>
              <span className="block text-xs font-montserrat uppercase tracking-widest text-gray-500 mb-1 mt-6">Location</span>
              <span className="text-xl md:text-2xl font-anton text-white">Wagholi, Pune</span>
            </div>
            <div>
              <span className="block text-xs font-montserrat uppercase tracking-widest text-gray-500 mb-1 mt-6">Socials</span>
              <div className="flex gap-6 mt-2">
                <a
                  href="https://www.linkedin.com/in/tanmay-bhosale-0a4103221/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-montserrat text-white uppercase tracking-widest hover:text-gold transition-colors border-b border-transparent hover:border-gold pb-0.5"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* ── Right: Form ── */}
        <FadeIn delay={0.4}>
          <form onSubmit={handleSubmit} noValidate className="bg-black-sec p-8 md:p-12 border border-white/5 relative">
            {/* Gold top bar */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-gold/60 to-transparent" />

            <AnimatePresence>
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mb-6 flex items-center gap-3 border border-gold/30 bg-gold/5 px-4 py-3"
                >
                  <CheckCircle className="text-gold w-5 h-5 shrink-0" />
                  <p className="text-gold font-montserrat text-sm">Your message has been sent successfully. I'll get back to you soon!</p>
                </motion.div>
              )}
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mb-6 flex items-center gap-3 border border-red-500/30 bg-red-500/5 px-4 py-3"
                >
                  <AlertCircle className="text-red-500 w-5 h-5 shrink-0" />
                  <p className="text-red-400 font-montserrat text-sm">Something went wrong. Please try again later.</p>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-xs font-montserrat uppercase tracking-widest text-gray-500 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className={inputClass("name")}
                  placeholder="John Doe"
                />
                {errors.name && (
                  <p className="mt-1.5 text-xs text-red-400 font-montserrat flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-montserrat uppercase tracking-widest text-gray-500 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className={inputClass("email")}
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <p className="mt-1.5 text-xs text-red-400 font-montserrat flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.email}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-montserrat uppercase tracking-widest text-gray-500 mb-2">Message</label>
                <textarea
                  rows={4}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className={`${inputClass("message")} resize-none`}
                  placeholder="Tell me about your ideas..."
                />
                {errors.message && (
                  <p className="mt-1.5 text-xs text-red-400 font-montserrat flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                variant="primary"
                className="w-full mt-4"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </div>
          </form>
        </FadeIn>
      </div>

      {/* Footer */}
      <div className="border-t border-white/10 py-8 text-center flex flex-col md:flex-row justify-between items-center text-xs font-montserrat uppercase tracking-widest text-gray-500">
        <p>&copy; {new Date().getFullYear()} Tanmay Bhosale. All Rights Reserved.</p>
        <p className="mt-4 md:mt-0">Crafted with precision</p>
      </div>
    </Section>
  );
}
