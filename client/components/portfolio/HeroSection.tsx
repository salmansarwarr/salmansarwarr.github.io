import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Download, ExternalLink } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center hero-enhanced px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-interactive-pink/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-interactive-rose/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-interactive-purple/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-8">
          <Badge
            variant="secondary"
            className="mb-4 interactive-gradient-hover transition-all duration-300 glow-on-hover"
          >
            Available for Freelance & Full-time
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 bg-gradient-to-r from-interactive-pink to-interactive-rose bg-clip-text text-transparent">
            Blockchain & Web Developer
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            Enthusiastic and solutions-driven Blockchain Developer with
            <span className="text-primary font-semibold"> 3+ years of hands-on experience</span>
            {" "}in
            <span className="text-primary font-semibold"> full-stack and dApp development</span>
            . Proven expertise in building and deploying smart contracts, integrating Web3 technologies, and creating scalable blockchain solutions across
            <span className="text-primary font-semibold">
              {" "}
              Ethereum, Solana, and Polkadot
            </span>
            {" "}ecosystems.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center mb-8">
          <Badge variant="outline" className="tech-badge-interactive">
            Solidity
          </Badge>
          <Badge variant="outline" className="tech-badge-interactive">
            Ethereum
          </Badge>
          <Badge variant="outline" className="tech-badge-interactive">
            React
          </Badge>
          <Badge variant="outline" className="tech-badge-interactive">
            Node.js
          </Badge>
          <Badge variant="outline" className="tech-badge-interactive">
            TypeScript
          </Badge>
          <Badge variant="outline" className="tech-badge-interactive">
            Web3.js
          </Badge>
          <Badge variant="outline" className="tech-badge-interactive">
            DeFi
          </Badge>
          <Badge variant="outline" className="tech-badge-interactive">
            Smart Contracts
          </Badge>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            size="lg"
            className="w-full sm:w-auto interactive-gradient glow-on-hover border-0 transition-all duration-300"
          >
            <Mail className="mr-2 h-4 w-4" />
            Get In Touch
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="w-full sm:w-auto border-gradient-hover transition-all duration-300 hover:scale-105"
          >
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </Button>
        </div>

        <div className="flex gap-6 justify-center">
          <Button
            variant="ghost"
            size="icon"
            className="hover:scale-110 transition-all duration-300 hover:bg-interactive-pink/20 hover:text-interactive-pink glow-on-hover"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="hover:scale-110 transition-all duration-300 hover:bg-interactive-rose/20 hover:text-interactive-rose glow-on-hover"
          >
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="hover:scale-110 transition-all duration-300 hover:bg-interactive-purple/20 hover:text-interactive-purple glow-on-hover"
          >
            <ExternalLink className="h-5 w-5" />
            <span className="sr-only">Portfolio</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
