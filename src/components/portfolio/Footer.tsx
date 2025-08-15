import { Badge } from "@/components/ui/badge";
import { Heart, Code } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t border-border/50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="font-display text-xl font-bold mb-4">Razzahi Naleer</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                BSc Hons IT Student at University of Moratuwa, passionate about 
                web development and cybersecurity.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2 text-sm">
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  About
                </button>
                <button 
                  onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Skills
                </button>
                <button 
                  onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Experience
                </button>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </button>
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="font-semibold mb-4">Built With</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-xs">React</Badge>
                <Badge variant="secondary" className="text-xs">TypeScript</Badge>
                <Badge variant="secondary" className="text-xs">Tailwind CSS</Badge>
                <Badge variant="secondary" className="text-xs">Vite</Badge>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-border/50">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>Made with</span>
                <Heart className="h-4 w-4 text-red-500 fill-current" />
                <span>and</span>
                <Code className="h-4 w-4 text-primary" />
                <span>by Razzahi Naleer</span>
              </div>
              
              <div className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;