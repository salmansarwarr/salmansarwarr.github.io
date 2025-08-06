import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Code, Github, Linkedin, Mail } from "lucide-react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "nav-bg-glass shadow-lg border-b border-border/20" : "bg-transparent"
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-interactive-purple/10 rounded-lg glow-on-hover transition-all duration-300">
              <Code className="h-6 w-6 text-interactive-purple" />
            </div>
            <span className="font-bold text-lg text-foreground interactive-gradient bg-clip-text text-transparent">BlockchainDev</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-muted-foreground nav-link-interactive text-sm font-medium"
              >
                {item.name}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="icon" className="hover:bg-interactive-purple/20 hover:text-interactive-purple glow-on-hover transition-all duration-300">
              <Github className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-interactive-cyan/20 hover:text-interactive-cyan glow-on-hover transition-all duration-300">
              <Linkedin className="h-4 w-4" />
            </Button>
            <Button size="sm" className="interactive-gradient glow-on-hover border-0 transition-all duration-300">
              <Mail className="mr-2 h-4 w-4" />
              Contact
            </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="text-left text-foreground hover:text-primary transition-colors py-2 px-4 rounded-lg hover:bg-muted"
                  >
                    {item.name}
                  </button>
                ))}
                <div className="flex gap-2 pt-4">
                  <Button variant="ghost" size="icon">
                    <Github className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                </div>
                <Button className="w-full">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Me
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
