import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Download, ExternalLink } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <Badge variant="secondary" className="mb-4">
            Available for Freelance & Full-time
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Full Stack Blockchain Developer
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            Building the future of decentralized applications with expertise in 
            <span className="text-primary font-semibold"> smart contracts</span>, 
            <span className="text-primary font-semibold"> DeFi protocols</span>, and 
            <span className="text-primary font-semibold"> Web3 infrastructure</span>. 
            Passionate about creating innovative solutions that bridge traditional finance with blockchain technology.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center mb-8">
          <Badge variant="outline">Solidity</Badge>
          <Badge variant="outline">Ethereum</Badge>
          <Badge variant="outline">React</Badge>
          <Badge variant="outline">Node.js</Badge>
          <Badge variant="outline">TypeScript</Badge>
          <Badge variant="outline">Web3.js</Badge>
          <Badge variant="outline">DeFi</Badge>
          <Badge variant="outline">Smart Contracts</Badge>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button size="lg" className="w-full sm:w-auto">
            <Mail className="mr-2 h-4 w-4" />
            Get In Touch
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto">
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </Button>
        </div>

        <div className="flex gap-6 justify-center">
          <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform">
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Button>
          <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform">
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Button>
          <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform">
            <ExternalLink className="h-5 w-5" />
            <span className="sr-only">Portfolio</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
