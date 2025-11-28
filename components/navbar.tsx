"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/80 backdrop-blur-lg border-b border-neutral-800/50"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80"
          >
            ANYON
          </Link>

          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="text-sm text-muted-foreground hover:text-white transition-colors"
            >
              Home
            </Link>
            <Link
              href="/download"
              className="text-sm text-muted-foreground hover:text-white transition-colors"
            >
              Download
            </Link>
            <a
              href="/#contact"
              className="text-sm text-muted-foreground hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
