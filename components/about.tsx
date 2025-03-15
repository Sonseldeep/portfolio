import Image from "next/image";
import { CheckCircle } from "lucide-react";

export default function About() {
  const personalDetails = [
    { label: "Name", value: "Sandeep Shrestha" },
    { label: "Email", value: "sonseldeep.np@gmail.com" },
    { label: "Education", value: "Amrit Science Campus" },
    { label: "LinkedIn", value: "sonseldeep" },
    { label: "Location", value: "Kathmandu, Nepal" },
    {
      label: "Interests",
      value: "Web Development,Open Source, Poetry & Philoshopy, Data Analysis",
    },
  ];

  const highlights = [
    "Eager to learn new technologies and methodologies",
    "Learning React JS, and interesetd in .Net framework",
    "Strong problem-solving and analytical skills",
    "Committed to writing clean, maintainable code",
    "Leadership quality, can disolve in new enviroment easily",
  ];

  return (
    <section id="about" className="py-20 bg-muted/30 dark:bg-muted/10 relative">
      <div className="absolute inset-0 -z-10 opacity-30 dark:opacity-10">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary rounded-full mb-6"></div>
          <p className="max-w-2xl text-muted-foreground">
            Get to know more about me, my background, and what drives my passion
            for technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-blue-600/20 rounded-lg blur-lg"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-lg overflow-hidden border-2 border-primary/20">
                <Image
                  src="/FocusSandeepHD.png"
                  alt="Sandeep Shrestha"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Computer Science Student at{" "}
              <span className="text-primary">Amrit Science Campus</span>
            </h3>
            <p className="text-muted-foreground">
              I'm a passionate Computer Science student with a keen interest in
              web development and software engineering. I enjoy solving complex
              problems and building applications that make a difference in
              people's lives.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {personalDetails.map((detail, index) => (
                <div key={index} className="space-y-1">
                  <h4 className="font-medium text-sm text-muted-foreground">
                    {detail.label}:
                  </h4>
                  <p className="font-medium">{detail.value}</p>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">{highlight}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
