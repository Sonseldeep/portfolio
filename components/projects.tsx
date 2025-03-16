"use client";

import { useState, useEffect, useRef } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import Image from "next/image";

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const projects = [
    {
      title: "Spotify Clone",
      description:
        "using HTML 5, vanilla CSS 3 a non-functional UI clone of Spotify",
      image: "/spotify_clone.png",
      tags: ["HTML", "CSS"],
      github:
        "https://github.com/Sonseldeep/Web-Development/tree/main/Spotify%20Clone",
    },
    {
      title: "Quill Project",
      description:
        "Build the foundation of CSS like flex margin padding building Quil project UI.",
      image: "/quill.png",
      tags: ["HTML5", "CSS3"],
      github:
        "https://github.com/Sonseldeep/Web-Development/tree/main/Quill%20Project/Quill%20HTML%20Files",
    },
    {
      title: "Movie App",
      description:
        " Working on a full functional react movie web application, implemented concept of Hooks, Redux, integreating the API from movie database",
      image: "/movie_app.png",
      tags: [
        "JavaScript",
        "API Integration",
        "CSS3",
        "HTML5",
        "React Js",
        "Tailwind css",
      ],
      github:
        "https://github.com/Sonseldeep/Web-Development/tree/main/MovieAppReact/movie-app",
    },
    {
      title: "React API Integration",
      description:
        "React mini project based on connecting backend to frontend by fetching API using contextAPI for state management  and axios for API fetching ",
      image: "/API_integrating.png",
      tags: ["React", "Tailwind CSS"],
      github:
        "https://github.com/Sonseldeep/Web-Development/tree/main/React_Projects/project-o1",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-muted/30 dark:bg-muted/10 relative"
      ref={sectionRef}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 opacity-30 dark:opacity-10">
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4">
        <div
          className={`flex flex-col items-center text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-primary rounded-full mb-6"></div>
          <p className="max-w-2xl text-muted-foreground">
            Here are some of my recent projects that showcase my skills and
            experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`overflow-hidden border-0 shadow-lg transition-all duration-700 hover:shadow-xl ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={`object-cover transition-transform duration-700 ${
                    hoveredProject === index ? "scale-110" : "scale-100"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-primary/80 text-primary-foreground rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{project.description}</p>
              </CardContent>
              <CardFooter className="flex gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="rounded-full"
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" /> Code
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
