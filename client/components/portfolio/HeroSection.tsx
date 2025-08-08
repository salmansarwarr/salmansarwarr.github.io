import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Download, ExternalLink } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="min-h-screen mt-[4.2rem] py-8 flex items-center justify-center hero-enhanced blockchain-bg px-4 sm:px-6 lg:px-20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-interactive-pink/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-interactive-rose/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-interactive-purple/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid lg:grid-cols-2 justify-center items-center ">
          {/* Left Column - Content */}
          <div className="flex flex-col justify-center space-y-8">
            <div>
              {/* <Badge
                variant="secondary"
                className="mb-6 interactive-gradient-hover transition-all duration-300 glow-on-hover"
              >
                Available for Freelance & Full-time
              </Badge> */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 bg-gradient-to-r from-interactive-pink to-interactive-rose bg-clip-text text-transparent leading-tight">
                Blockchain & Web Developer
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed">
                Enthusiastic and solutions-driven Blockchain Developer with
                <span className="text-primary font-semibold">
                  {" "}
                  3+ years of hands-on experience
                </span>{" "}
                in
                <span className="text-primary font-semibold">
                  {" "}
                  full-stack and dApp development
                </span>
                . Proven expertise in building and deploying smart contracts,
                integrating Web3 technologies, and creating scalable blockchain
                solutions across
                <span className="text-primary font-semibold">
                  {" "}
                  Ethereum, Solana, and Polkadot
                </span>{" "}
                ecosystems.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Badge variant="outline" className="tech-badge-interactive">
                Solidity
              </Badge>
              <Badge variant="outline" className="tech-badge-interactive">
                Rust
              </Badge>
              <Badge variant="outline" className="tech-badge-interactive">
                React.js
              </Badge>
              <Badge variant="outline" className="tech-badge-interactive">
                Next.js
              </Badge>
              <Badge variant="outline" className="tech-badge-interactive">
                TypeScript
              </Badge>
              <Badge variant="outline" className="tech-badge-interactive">
                Ethereum
              </Badge>
              <Badge variant="outline" className="tech-badge-interactive">
                Solana
              </Badge>
              <Badge variant="outline" className="tech-badge-interactive">
                Polkadot
              </Badge>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                            onClick={() =>
                              window.open("mailto:muhammadsalmansarwar32@gmail.com", "_blank")
                            }
                size="lg"
                className="w-full sm:w-auto interactive-gradient glow-on-hover border-0 transition-all duration-300"
              >
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
              <Button
              onClick={() => window.open("/resume.pdf", "_blank")}
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-gradient-hover transition-all duration-300 hover:scale-105"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>

            <div className=" hidden lg:flex gap-6">
              <Button
                            onClick={() =>
                              window.open("https://github.com/salmansarwarr", "_blank")
                            }
                variant="ghost"
                size="icon"
                className="hover:scale-110 transition-all duration-300 hover:bg-interactive-pink/20 hover:text-interactive-pink glow-on-hover"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
              <Button
                            onClick={() =>
                              window.open(
                                "https://www.linkedin.com/in/-salmansarwar/",
                                "_blank",
                              )
                            }
                variant="ghost"
                size="icon"
                className="hover:scale-110 transition-all duration-300 hover:bg-interactive-rose/20 hover:text-interactive-rose glow-on-hover"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="hidden lg:flex items-center justify-center lg:justify-end">
            <div className="relative">
              {/* Replace this div with your actual image */}
              <img
                src="/pxl.jpg"
                alt="Salman Sarwar"
                className="w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover border border-interactive-pink/30"
              />
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-interactive-pink rounded-full animate-bounce opacity-80"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-interactive-rose rounded-full animate-bounce delay-300 opacity-80"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
