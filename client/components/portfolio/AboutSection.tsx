import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Globe, Shield } from "lucide-react";

export default function AboutSection() {
  const expertise = [
    {
      icon: Code,
      title: "Smart Contract Development",
      description: "Expert in Solidity, Vyper, and smart contract security best practices. Built and audited 50+ smart contracts.",
      technologies: ["Solidity", "Vyper", "Hardhat", "Foundry", "OpenZeppelin"]
    },
    {
      icon: Globe,
      title: "Frontend Development",
      description: "Creating intuitive Web3 interfaces with modern frameworks. Specialized in connecting DApps to various blockchains.",
      technologies: ["React", "Next.js", "TypeScript", "Web3.js", "Ethers.js"]
    },
    {
      icon: Database,
      title: "Backend & Infrastructure",
      description: "Building scalable backend systems and blockchain infrastructure. Experience with cloud deployment and DevOps.",
      technologies: ["Node.js", "Express", "PostgreSQL", "AWS", "Docker"]
    },
    {
      icon: Shield,
      title: "DeFi & Security",
      description: "Deep understanding of DeFi protocols, yield farming, and blockchain security. Focused on building secure financial applications.",
      technologies: ["DeFi", "Yield Farming", "Security Audits", "MEV", "Flash Loans"]
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            With 5+ years of experience in full-stack development and 3+ years specializing in blockchain technology,
            I help businesses transition to Web3 and build innovative decentralized solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {expertise.map((item, index) => {
            const IconComponent = item.icon;
            const colors = ['interactive-purple', 'interactive-cyan', 'interactive-emerald', 'interactive-orange'];
            const currentColor = colors[index % colors.length];
            return (
              <Card key={index} className={`project-card-interactive border-l-4 border-l-${currentColor}`}>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-2 bg-${currentColor}/10 rounded-lg glow-on-hover`}>
                      <IconComponent className={`h-6 w-6 text-${currentColor}`} />
                    </div>
                    <CardTitle className="text-xl color-shift-hover">{item.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    {item.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs tech-badge-interactive">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 interactive-gradient-hover rounded-2xl p-8 text-center border-gradient glow-on-hover">
          <h3 className="text-2xl font-semibold text-foreground mb-4 interactive-gradient bg-clip-text text-transparent">My Mission</h3>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            To democratize access to financial services through blockchain technology while maintaining
            the highest standards of security and user experience. I believe in building solutions that
            are not only innovative but also practical and accessible to everyone.
          </p>
        </div>
      </div>
    </section>
  );
}
