import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Code, Github, Linkedin, Mail, Twitter, Globe } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "#", label: "Email" },
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Smart Contract Development",
    "DeFi Protocol Design",
    "Web3 Frontend Development",
    "Blockchain Consultation",
    "Security Audits",
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="footer-bg-rich border-t border-border/30 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-48 h-48 bg-interactive-pink/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-interactive-rose/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-interactive-pink/10 rounded-lg">
                <Code className="h-6 w-6 text-interactive-pink" />
              </div>
              <span className="font-bold text-lg bg-gradient-to-r from-interactive-pink to-interactive-rose bg-clip-text text-transparent">
                Sulman Sarwar
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Blockchain & Web Developer with 3+ years of experience specializing in
              Ethereum, Solana, and Polkadot ecosystems. Building scalable dApps and smart contracts.
            </p>
            <div className="flex gap-2">
              {socialLinks.map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <Button
                    key={index}
                    variant="ghost"
                    size="icon"
                    className="hover:scale-110 transition-transform"
                  >
                    <IconComponent className="h-4 w-4" />
                    <span className="sr-only">{link.label}</span>
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <div className="space-y-2">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Services</h3>
            <div className="space-y-2">
              {services.map((service, index) => (
                <div key={index} className="text-sm text-muted-foreground">
                  {service}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Get In Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>muhammadsalmansarwar32@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Globe className="h-4 w-4" />
                <span>Karachi, Pakistan</span>
              </div>
            </div>
            <Button className="w-full sm:w-auto">
              <Mail className="mr-2 h-4 w-4" />
              Start a Project
            </Button>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div>
            © {currentYear} Sulman Sarwar. All rights reserved.
          </div>
          <div className="flex gap-6">
            <button className="hover:text-primary transition-colors">
              Privacy Policy
            </button>
            <button className="hover:text-primary transition-colors">
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
