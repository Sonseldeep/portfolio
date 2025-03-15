"use client";

import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Database, Globe, Server, GitBranch, Layers } from "lucide-react";

export default function Skills() {
  const [activeTab, setActiveTab] = useState("frontend");
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

  const skillCategories = {
    frontend: {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Frontend Development",
      description: "Creating responsive and interactive user interfaces",
      skills: [
        { name: "HTML5", level: 90 },
        { name: "CSS3", level: 85 },
        { name: "Tailwind CSS", level: 80 },

        { name: "JavaScript", level: 70 },

        { name: "React.js", level: 50 },
      ],
    },
    backend: {
      icon: <Server className="h-8 w-8 text-primary" />,
      title: "Backend Development",
      description: "Building robust server-side applications",
      skills: [
        { name: ".Net Core", level: 10 },

        { name: "RESTful APIs", level: 5 },
      ],
    },
    database: {
      icon: <Database className="h-8 w-8 text-primary" />,
      title: "Database",
      description: "Managing and optimizing data storage",
      skills: [
        { name: "PostgreSQL", level: 70 },
        { name: "MySQL", level: 70 },
        { name: "MongoDB", level: 30 },
      ],
    },
    languages: {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Programming Languages",
      description: "Proficiency in various programming languages",
      skills: [
        { name: "C", level: 60 },
        { name: "C++", level: 60 },
        { name: "TypeScript", level: 55 },

        { name: "Java", level: 40 },
        { name: "Python", level: 20 },
      ],
    },

    other: {
      icon: <Layers className="h-8 w-8 text-primary" />,
      title: "Other Skills",
      description: "Additional technical and soft skills",
      skills: [
        { name: "Leadership", level: 80 },
        { name: "Team work", level: 70 },
        { name: "Data Structures", level: 60 },
        { name: "Figma", level: 50 },
        { name: "Postman", level: 45 },
        { name: "Canva", level: 45 },
      ],
    },
  };

  return (
    <section id="skills" className="py-20" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div
          className={`flex flex-col items-center text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-primary rounded-full mb-6"></div>
          <p className="max-w-2xl text-muted-foreground">
            Here are the technologies and skills I've acquired throughout my
            journey.
          </p>
        </div>

        <Tabs
          defaultValue="frontend"
          className="w-full"
          onValueChange={setActiveTab}
        >
          <div
            className={`flex justify-center mb-8 transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <TabsList className="grid grid-cols-3 md:grid-cols-6 gap-2">
              <TabsTrigger
                value="frontend"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Frontend
              </TabsTrigger>
              <TabsTrigger
                value="backend"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Backend
              </TabsTrigger>
              <TabsTrigger
                value="database"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Database
              </TabsTrigger>
              <TabsTrigger
                value="languages"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Languages
              </TabsTrigger>

              <TabsTrigger
                value="other"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Other
              </TabsTrigger>
            </TabsList>
          </div>

          {Object.entries(skillCategories).map(([key, category]) => (
            <TabsContent key={key} value={key} className="mt-0">
              <Card
                className={`border-0 shadow-lg transition-all duration-1000 delay-500 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary">
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold mb-2">
                        {category.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-6">
                    {category.skills.map((skill, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-muted-foreground">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-primary to-blue-500 rounded-full transition-all duration-1000 ease-out"
                            style={{
                              width: isVisible ? `${skill.level}%` : "0%",
                              transitionDelay: `${index * 100 + 600}ms`,
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
