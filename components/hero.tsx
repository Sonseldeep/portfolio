"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail, Download } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const fullText = "Computer Science Student";

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (isTyping) {
      if (text.length < fullText.length) {
        const timeout = setTimeout(() => {
          setText(fullText.slice(0, text.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        setIsTyping(false);
        const timeout = setTimeout(() => {
          setIsTyping(true);
          setText("");
        }, 2000);
        return () => clearTimeout(timeout);
      }
    }
  }, [text, isTyping]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="py-20 md:py-32 flex items-center min-h-[calc(100vh-64px)] relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 opacity-30 dark:opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/20 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className={`order-2 md:order-1 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Hi, I'm <span className="gradient-text">Sandeep Shrestha</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium mb-6 h-10">
              {text}
              <span
                className={`${
                  isTyping ? "opacity-100" : "opacity-0"
                } transition-opacity`}
              >
                |
              </span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              I'm passionate about building innovative solutions and learning
              new technologies to create impactful digital experiences.
            </p>
            <div className="flex flex-wrap gap-4 mb-12">
              <Button
                size="lg"
                className="rounded-full animate-pulse-slow"
                onClick={() => scrollToSection("projects")}
              >
                View My Work <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full"
                onClick={() => scrollToSection("contact")}
              >
                Contact Me
              </Button>
              <Button
                asChild
                variant="secondary"
                size="lg"
                className="rounded-full"
              >
                <a href="/Profile.pdf" download>
                  <Download className="mr-2 h-4 w-4" /> Resume
                </a>
              </Button>
            </div>
            <div className="flex gap-6">
              <Button
                variant="outline"
                size="icon"
                asChild
                className="rounded-full h-12 w-12 hover:scale-110 transition-transform"
              >
                <a
                  href="https://github.com/Sonseldeep"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                asChild
                className="rounded-full h-12 w-12 hover:scale-110 transition-transform"
              >
                <a
                  href="https://www.linkedin.com/in/sonseldeep/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                asChild
                className="rounded-full h-12 w-12 hover:scale-110 transition-transform"
              >
                <a href="mailto:sonseldeep.np@gmail.com">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </a>
              </Button>
            </div>
          </div>
          <div
            className={`order-1 md:order-2 flex justify-center transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 animate-float">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-600 rounded-full blur-2xl opacity-20"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden gradient-border">
                <Image
                  src="/sandeep_merge.png"
                  alt="Sandeep Shrestha"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
