import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Code, Shield, Database, Globe, BookOpen } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Frontend Development",
      skills: [
        { name: "React.js", level: 90, color: "bg-blue-500" },
        { name: "Next.js", level: 85, color: "bg-black" },
        { name: "TypeScript", level: 80, color: "bg-blue-600" },
        { name: "Tailwind CSS", level: 85, color: "bg-cyan-500" },
        { name: "HTML/CSS", level: 95, color: "bg-orange-500" },
      ]
    },
    {
      icon: Database,
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 85, color: "bg-green-600" },
        { name: "Express.js", level: 80, color: "bg-gray-700" },
        { name: "MongoDB", level: 75, color: "bg-green-500" },
        { name: "PostgreSQL", level: 70, color: "bg-blue-700" },
        { name: "REST APIs", level: 85, color: "bg-purple-500" },
      ]
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      skills: [
        { name: "Network Security", level: 70, color: "bg-red-500" },
        { name: "Ethical Hacking", level: 65, color: "bg-red-600" },
        { name: "Security Analysis", level: 75, color: "bg-red-400" },
        { name: "Risk Assessment", level: 70, color: "bg-orange-600" },
      ]
    },
    {
      icon: Globe,
      title: "Tools & Technologies",
      skills: [
        { name: "Git/GitHub", level: 90, color: "bg-gray-800" },
        { name: "VS Code", level: 95, color: "bg-blue-500" },
        { name: "Docker", level: 60, color: "bg-blue-400" },
        { name: "Linux", level: 75, color: "bg-yellow-600" },
      ]
    }
  ];

  const softSkills = [
    "Problem Solving",
    "Team Collaboration",
    "Communication",
    "Teaching & Mentoring",
    "Project Management",
    "Critical Thinking",
    "Adaptability",
    "Leadership"
  ];

  return (
    <section id="skills" className="py-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-gradient-to-tl from-accent/10 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Skills & <span className="text-primary">Expertise</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and areas of expertise
            </p>
          </div>

          {/* Technical Skills */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {skillCategories.map((category, index) => (
              <Card 
                key={category.title} 
                className="border-0 shadow-2xl bg-gradient-to-br from-card via-card to-primary/5 backdrop-blur-sm hover:shadow-2xl hover:scale-105 transition-all duration-500 group relative overflow-hidden"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Animated background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardHeader className="relative z-10">
                  <CardTitle className="flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-br from-primary to-accent rounded-lg">
                      <category.icon className="h-5 w-5 text-white" />
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 relative z-10">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2"
                      />
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Soft Skills */}
          <Card className="border-0 shadow-lg bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                Soft Skills & Personal Qualities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill, index) => (
                  <Badge 
                    key={skill} 
                    variant="secondary"
                    className="px-3 py-1 hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
                    style={{ 
                      animationDelay: `${index * 0.1}s`,
                      animation: 'fade-in 0.6s ease-out both'
                    }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Always learning and expanding my skillset
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;