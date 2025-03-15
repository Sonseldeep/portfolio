import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Briefcase, Calendar } from "lucide-react";

export default function Experience() {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Amrit Science Campus",
      duration: "2022 - 2026",
      description:
        "Third Year Student, studying computer science fundamentals, data structures, algorithms, and software development, digital logic. CGPA: 3.33 till now ",
    },
    {
      degree: "National Education Board",
      institution: "Capital Secondary School ( CCRC )",
      duration: "2020 - 2022",
      description:
        "Completed higher secondary education in science stream with GPA : 3.62 in grade twelve and GPA: 3.75 in grade eleven",
    },
    {
      degree: "Secondary Education Examination [ SEE ]",
      institution: "Shree Jana Vikash Secondary School, Rampur Palpa",
      duration: "2019 - 2020",
      description:
        "scored 3.85 GPA out of 4 in grade ten (10) with additional subject like Accounting and Optional Mathematics",
    },
    {
      degree: "Basic Level Examination [ BLE ]",
      institution: "Deep Boarding Secondary School, Butwal",
      duration: "2019 - 2020",
      description:
        "scored 3.65 GPA out of 4 in grade eight (8) with additional subject like Optional Mathematics, computer science and moral education",
    },
  ];

  const experience = [
    {
      position: "Colleg Representative",
      company: "Code for Change",
      duration: "Feb 2025 - Present ",
      description:
        "I’ve been honored with the role of Class Representative (CR) for the tenure 24/25 at Amrit Campus (ASCOL)! 🌟 Looking forward to collaborating with my peers, fostering a positive academic environment, and learning from the incredible individuals around me. Here’s to growth, leadership, and making meaningful connections! 💡✨",
    },
    {
      position: "Executive Committee Member",
      company: "ASCOL I.T Club",
      duration: "May 2024 - Present",
      description: "Executive Committee Member of on campus ASCOL IT club",
    },
    {
      position: "Event Team",
      company: "Hult Prize at Amrit Science Campus",
      duration: "Nov 2024 - Feb 2025",
      description:
        "Teamwork makes the dream work! Had an amazing time collaborating with the event team for the HULT Prize ASCOL 24.25. We learned so much from each other and successfully pulled off a fantastic event. Grateful for this experience and the connections I made.",
    },
    {
      position: "Volunteer",
      company: "Kalpabriksha Nepal",
      duration: "1 Jan 2025 - 4 Jan 2025",
      description:
        "It was truly inspiring to be part of an event focused on embracing the difference.I learned so much, from valuable soft skills like public speaking to the importance of inclusivity and diversity.",
    },
    {
      position: "Logistics Manager",
      company: "PIE & AI : Kathmandu",
      duration: "July 2024 - Present",
      description:
        "It was truly inspiring to be part of an event focused on embracing the difference.I learned so much, from valuable soft skills like public speaking to the importance of inclusivity and diversity.",
    },
    {
      position: "DataCamp Fellowship 2024",
      company: "Sunway Student Representative Council",
      duration: "July 2024 - Present",
      description: "Selected on Data fellowship program ",
    },
    {
      position: "Hackademia College Ambassador",
      company: "Hackademia",
      duration: "July 2024 - Sept 2024",
      description: "Selected on College Ambassador from our college ASCOl ",
    },
  ];

  return (
    <section id="experience" className="py-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 opacity-30 dark:opacity-10">
        <div className="absolute top-1/2 right-0 w-1/4 h-1/4 bg-primary/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Experience & Education</h2>
          <div className="w-20 h-1 bg-primary rounded-full mb-6"></div>
          <p className="max-w-2xl text-muted-foreground">
            My academic background and professional journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                <GraduationCap className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-semibold">Education</h3>
            </div>
            <div className="space-y-8 relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border"></div>
              {education.map((item, index) => (
                <div key={index} className="relative pl-14">
                  <div className="absolute left-0 top-0 w-12 h-12 rounded-full border-2 border-primary bg-background flex items-center justify-center z-10">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  <Card className="border-0 shadow-md">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl">{item.degree}</CardTitle>
                      <div className="text-sm text-muted-foreground">
                        {item.institution} | {item.duration}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                <Briefcase className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-semibold">Work Experience</h3>
            </div>
            <div className="space-y-8 relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border"></div>
              {experience.map((item, index) => (
                <div key={index} className="relative pl-14">
                  <div className="absolute left-0 top-0 w-12 h-12 rounded-full border-2 border-primary bg-background flex items-center justify-center z-10">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  <Card className="border-0 shadow-md">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl">{item.position}</CardTitle>
                      <div className="text-sm text-muted-foreground">
                        {item.company} | {item.duration}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
