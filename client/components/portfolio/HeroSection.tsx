import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Download, ExternalLink } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center hero-enhanced px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-interactive-purple/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-interactive-cyan/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-interactive-emerald/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <Badge variant="secondary" className="mb-4 interactive-gradient-hover transition-all duration-300 glow-on-hover">
              Available for Freelance & Full-time
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-interactive-purple to-interactive-cyan bg-clip-text text-transparent">
              Full Stack Blockchain Developer
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl lg:max-w-none mb-8 leading-relaxed">
              Building the future of decentralized applications with expertise in
              <span className="text-primary font-semibold"> smart contracts</span>,
              <span className="text-primary font-semibold"> DeFi protocols</span>, and
              <span className="text-primary font-semibold"> Web3 infrastructure</span>.
              Passionate about creating innovative solutions that bridge traditional finance with blockchain technology.
            </p>

            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
              <Badge variant="outline" className="tech-badge-interactive">Solidity</Badge>
              <Badge variant="outline" className="tech-badge-interactive">Ethereum</Badge>
              <Badge variant="outline" className="tech-badge-interactive">React</Badge>
              <Badge variant="outline" className="tech-badge-interactive">Node.js</Badge>
              <Badge variant="outline" className="tech-badge-interactive">TypeScript</Badge>
              <Badge variant="outline" className="tech-badge-interactive">Web3.js</Badge>
              <Badge variant="outline" className="tech-badge-interactive">DeFi</Badge>
              <Badge variant="outline" className="tech-badge-interactive">Smart Contracts</Badge>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8">
              <Button size="lg" className="w-full sm:w-auto interactive-gradient glow-on-hover border-0 transition-all duration-300">
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto border-gradient-hover transition-all duration-300 hover:scale-105">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>

            <div className="flex gap-6 justify-center lg:justify-start">
              <Button variant="ghost" size="icon" className="hover:scale-110 transition-all duration-300 hover:bg-interactive-purple/20 hover:text-interactive-purple glow-on-hover">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
              <Button variant="ghost" size="icon" className="hover:scale-110 transition-all duration-300 hover:bg-interactive-cyan/20 hover:text-interactive-cyan glow-on-hover">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
              <Button variant="ghost" size="icon" className="hover:scale-110 transition-all duration-300 hover:bg-interactive-emerald/20 hover:text-interactive-emerald glow-on-hover">
                <ExternalLink className="h-5 w-5" />
                <span className="sr-only">Portfolio</span>
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative elements around image */}
              <div className="absolute -inset-4 bg-gradient-to-r from-interactive-purple/20 to-interactive-cyan/20 rounded-full blur-xl"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-interactive-purple/30 to-interactive-cyan/30 rounded-full blur-lg"></div>

              {/* Profile image container */}
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-gradient glow-on-hover transition-all duration-300">
                {/* Placeholder for profile image */}
                <div className="w-full h-full bg-gradient-to-br from-interactive-purple/10 to-interactive-cyan/10 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-r from-interactive-purple to-interactive-cyan rounded-full flex items-center justify-center">
                      <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    </div>
                    <p className="text-sm text-muted-foreground">Profile Photo</p>
                    <p className="text-xs text-muted-foreground">Add your PNG image here</p>
                  </div>
                </div>

                {/* Uncomment and replace src when you have a profile image */}
                {/* <img
                  src="/path-to-your-profile-image.png"
                  alt="Blockchain Developer Profile"
                  className="w-full h-full object-cover"
                /> */}
              </div>

              {/* Floating tech icons around image */}
              <div className="absolute top-8 -left-8 w-12 h-12 bg-interactive-purple/10 rounded-full flex items-center justify-center animate-bounce">
                <svg className="w-6 h-6 text-interactive-purple" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <div className="absolute top-16 -right-6 w-10 h-10 bg-interactive-cyan/10 rounded-full flex items-center justify-center animate-pulse">
                <svg className="w-5 h-5 text-interactive-cyan" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <div className="absolute bottom-12 -left-6 w-8 h-8 bg-interactive-emerald/10 rounded-full flex items-center justify-center animate-pulse delay-500">
                <svg className="w-4 h-4 text-interactive-emerald" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
