"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="py-12 border-t border-border/40 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <Link href="/" className="text-2xl font-bold gradient-text">
              Sandeep Shrestha
            </Link>
            <p className="text-sm text-muted-foreground mt-2 max-w-md">
              A passionate third year Computer Science student at ASCOL
            </p>
          </div>

          <div className="flex flex-col items-center gap-6">
            <div className="flex gap-4">
              <Button
                variant="outline"
                size="icon"
                asChild
                className="rounded-full h-10 w-10"
              >
                <Link
                  href="https://github.com/Sonseldeep"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button
                variant="outline"
                size="icon"
                asChild
                className="rounded-full h-10 w-10"
              >
                <Link
                  href="https://linkedin.com/in/sonseldeep"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
              <Button
                variant="outline"
                size="icon"
                asChild
                className="rounded-full h-10 w-10"
              >
                <Link href="mailto:sonseldeep.np@gmail.com">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Link>
              </Button>
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={scrollToTop}
              className="rounded-full h-10 w-10 hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <ArrowUp className="h-5 w-5" />
              <span className="sr-only">Scroll to top</span>
            </Button>
          </div>
        </div>

        <div className="text-center text-sm text-muted-foreground mt-8 pt-8 border-t border-border/20">
          &copy; {currentYear} Sandeep Shrestha. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
