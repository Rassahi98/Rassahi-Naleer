import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, GraduationCap, Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      type: "work",
      title: "Mathematics Teacher",
      company: "Freelance",
      location: "Remote",
      period: "January 2024 - Present",
      duration: "1 year 8 months",
      description: [
        "Providing personalized mathematics tutoring to students of various academic levels",
        "Developing comprehensive lesson plans and educational materials",
        "Utilizing digital tools and platforms to enhance online learning experiences",
        "Building strong communication skills through one-on-one and group teaching sessions",
        "Adapting teaching methods to suit different learning styles and student needs"
      ],
      skills: ["Teaching", "Communication", "Problem Solving", "Educational Technology", "Curriculum Development"]
    },
    {
      type: "education",
      title: "BSc Hons in Information Technology",
      company: "University of Moratuwa",
      location: "Colombo, Western Province, Sri Lanka",
      period: "March 2023 - Present",
      duration: "2 years 6 months",
      description: [
        "Pursuing comprehensive education in Information Technology with focus on software engineering",
        "Studying advanced concepts in cybersecurity, network security, and ethical hacking",
        "Working on various projects involving React.js, Next.js, and Node.js development",
        "Participating in coding competitions and tech workshops",
        "Collaborating with peers on group projects and research initiatives"
      ],
      skills: ["Software Engineering", "Cybersecurity", "Web Development", "Database Management", "Project Management"]
    },
    {
      type: "education",
      title: "Secondary Education",
      company: "Kinniya Central College",
      location: "Kinniya, Eastern Province, Sri Lanka",
      period: "April 2015 - December 2018",
      duration: "3 years 9 months",
      description: [
        "Completed Advanced Level studies with strong performance in Mathematics and Sciences",
        "Participated in various academic competitions and extracurricular activities",
        "Developed foundational knowledge in mathematics, physics, and chemistry",
        "Built leadership skills through student council participation",
        "Maintained consistent academic excellence throughout the program"
      ],
      skills: ["Mathematics", "Sciences", "Leadership", "Academic Research", "Time Management"]
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/10 to-transparent" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-primary/5 to-transparent rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-gradient-to-l from-accent/5 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Experience & <span className="text-primary">Education</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              My journey through education and professional experiences that have shaped my skills
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card 
                key={index}
                className="border-0 shadow-2xl bg-gradient-to-br from-card via-card to-primary/5 backdrop-blur-sm hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 relative overflow-hidden group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Timeline line */}
                <div className="absolute left-6 top-12 bottom-6 w-0.5 bg-gradient-to-b from-primary to-accent opacity-30" />
                
                <CardHeader className="relative z-10">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center relative z-10 shadow-lg">
                      {exp.type === "work" ? (
                        <Briefcase className="h-6 w-6 text-white" />
                      ) : (
                        <GraduationCap className="h-6 w-6 text-white" />
                      )}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-xl mb-2">{exp.title}</CardTitle>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Briefcase className="h-4 w-4" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.period}</span>
                          <Badge variant="outline" className="ml-2">
                            {exp.duration}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="ml-14 space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">Key Responsibilities & Achievements</h4>
                    <ul className="space-y-2">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Skills Developed</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <Badge 
                          key={skill} 
                          variant="secondary"
                          className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Summary Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">2+</div>
              <div className="text-sm text-muted-foreground">Years at University</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">1+</div>
              <div className="text-sm text-muted-foreground">Years Teaching</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">10+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">3</div>
              <div className="text-sm text-muted-foreground">Core Technologies</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;