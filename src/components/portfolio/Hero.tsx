import { Button } from "@/components/ui/button";
import { ArrowDown, Linkedin, Mail, Phone } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background gradients */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.1),transparent_70%)]" />
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-accent/15 to-primary/15 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-2xl animate-glow" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Profile Image */}
          <div className="flex-shrink-0 animate-fade-in">
            {/* <img
              src="/profile.jpg" // place your image in public folder
              alt="Razzahi Naleer"
              className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover shadow-2xl border-4 border-primary/30 hover:scale-105 transition-transform duration-500"
            /> */}
            <img
            src="/profile.jpg"
            alt="Razzahi Naleer"
            className="w-36 h-36 md:w-48 md:h-48 rounded-full object-cover shadow-xl border-4 border-primary/30"
            />

          </div>

          {/* Hero Text */}
          <div className="text-center md:text-left flex-1 animate-fade-in">
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary via-accent to-primary-glow bg-clip-text text-transparent animate-glow">
                Razzahi Naleer
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              Student @ UOM || BSc Hons in IT || Cyber Security Enthusiast
            </p>

            <p className="text-lg text-muted-foreground mb-6 max-w-xl">
              Passionate about React.js, Next.js, and Node.js development. Currently pursuing my degree at University of Moratuwa while exploring the fascinating world of cybersecurity.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mb-6 justify-center md:justify-start">
              <Button
                onClick={() => scrollToSection("contact")}
                size="lg"
                className="relative bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground shadow-lg hover:shadow-2xl transition-all duration-500 group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-glow to-accent-glow opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                Get In Touch
              </Button>

              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-primary/20 hover:border-primary hover:bg-primary/5 transition-all duration-300"
              >
                <a
                  href="https://www.linkedin.com/in/razzahi-naleer-7789aa328"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
            </div>

            {/* Quick contact info */}
            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground justify-center md:justify-start">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>0751718888</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>rassahihaneef@gmail.com</span>
              </div>
              <div>
                Colombo, Western Province, Sri Lanka
              </div>
            </div>

            {/* Scroll indicator */}
            <div className="mt-6">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => scrollToSection("about")}
                className="animate-bounce hover:animate-none transition-all duration-300"
              >
                <ArrowDown className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
