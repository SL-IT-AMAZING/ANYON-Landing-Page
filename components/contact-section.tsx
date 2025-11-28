"use client";

import { motion } from "framer-motion";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 bg-neutral-900/50 backdrop-blur-sm"
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80">
            Contact Us
          </h2>
          <p className="text-muted-foreground text-center mb-8">
            Have questions or feedback? We&apos;d love to hear from you.
          </p>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-muted-foreground mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-3 rounded-lg bg-neutral-800/50 border border-neutral-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors text-white placeholder:text-muted-foreground"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-muted-foreground mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 rounded-lg bg-neutral-800/50 border border-neutral-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors text-white placeholder:text-muted-foreground"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-muted-foreground mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-neutral-800/50 border border-neutral-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors text-white placeholder:text-muted-foreground resize-none"
                placeholder="Your message..."
              />
            </div>

            <div className="flex justify-center">
              <InteractiveHoverButton
                text="Send Message"
                className="w-44 h-12 text-base"
                type="submit"
              />
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
