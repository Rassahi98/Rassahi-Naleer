import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, MapPin, User, Target } from "lucide-react";


const About = () => {
  return (
    <section id="about" className="py-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 to-transparent" />
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-gradient-to-l from-primary/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-r from-accent/5 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-primary">Me</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A passionate student and developer with a keen interest in technology and cybersecurity
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Personal Info Card */}
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-card via-card to-primary/5 backdrop-blur-sm hover:shadow-2xl hover:scale-105 transition-all duration-500 group animate-slide-in-left">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
              <CardHeader className="relative z-10">
                <CardTitle className="flex items-center gap-2">
                  <div className="p-2 bg-gradient-to-br from-primary to-accent rounded-lg">
                    <User className="h-5 w-5 text-white" />
                  </div>
                  Personal Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 relative z-10">
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-muted-foreground mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground text-sm">
                      Kachekkoditheevu Kinniya-05<br />
                      Colombo, Western Province, Sri Lanka
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <GraduationCap className="h-4 w-4 text-muted-foreground mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Current Status</p>
                    <p className="text-muted-foreground text-sm">
                      BSc Hons in Information Technology<br />
                      University of Moratuwa (2023 - Present)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Target className="h-4 w-4 text-muted-foreground mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Specialization</p>
                    <p className="text-muted-foreground text-sm">
                      Cyber Security Enthusiast<br />
                      Full-Stack Web Development
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Background Card */}
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-card via-card to-accent/5 backdrop-blur-sm hover:shadow-2xl hover:scale-105 transition-all duration-500 group animate-slide-in-right">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  Educational Journey
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">University of Moratuwa</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    BSc Hons in Information Technology
                  </p>
                  <Badge variant="secondary" className="text-xs">
                    March 2023 - Present
                  </Badge>
                  <p className="text-sm text-muted-foreground mt-2">
                    Currently in my 2nd year, focusing on software engineering, 
                    cybersecurity fundamentals, and modern web technologies.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Kinniya Central College</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Secondary Education
                  </p>
                  <Badge variant="secondary" className="text-xs">
                    April 2015 - December 2018
                  </Badge>
                  <p className="text-sm text-muted-foreground mt-2">
                    Completed my advanced level studies with a strong foundation 
                    in mathematics and sciences.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Info */}
          <Card className="mt-8 border-0 shadow-lg bg-card/50 backdrop-blur-sm">
            <CardContent className="pt-6">
              <h3 className="font-display text-2xl font-semibold mb-4 text-center">
                What Drives Me
              </h3>
              <p className="text-muted-foreground text-center leading-relaxed max-w-3xl mx-auto">
                I'm passionate about creating innovative web solutions and exploring the ever-evolving 
                landscape of cybersecurity. As a freelance mathematics teacher, I've developed strong 
                communication skills and the ability to break down complex concepts into understandable parts. 
                My goal is to combine my technical expertise with my educational background to create 
                meaningful digital experiences that make a positive impact.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;