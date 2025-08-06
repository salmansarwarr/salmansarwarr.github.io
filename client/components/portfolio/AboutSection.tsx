import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Globe, Shield } from "lucide-react";

export default function AboutSection() {
  const expertise = [
    {
      icon: Code,
      title: "Blockchain Development",
      description:
        "Expert in Ethereum, Solana, and Polkadot development. Built production-ready dApps with smart contracts handling $500K+ in transaction volume.",
      technologies: ["Solidity", "Rust", "Hardhat", "Anchor", "Substrate"],
    },
    {
      icon: Globe,
      title: "Frontend Development",
      description:
        "Creating intuitive Web3 interfaces with React.js and Next.js. Specialized in wallet integration and user onboarding optimization.",
      technologies: ["React.js", "Next.js", "TypeScript", "MetaMask", "Phantom"],
    },
    {
      icon: Database,
      title: "Backend & Database",
      description:
        "Building scalable backend systems with modern frameworks. Experience with various databases and authentication systems.",
      technologies: ["Node.js", "Express.js", "Nest.js", "PostgreSQL", "MongoDB"],
    },
    {
      icon: Shield,
      title: "Testing & Deployment",
      description:
        "Rigorous testing protocols and deployment strategies. Zero security incidents through comprehensive testing and code reviews.",
      technologies: [
        "Hardhat",
        "Jest",
        "AWS",
        "Vercel",
        "IPFS",
      ],
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 section-bg-secondary blockchain-bg relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            With 3+ years of hands-on experience in full-stack and decentralized application development,
            I specialize in building scalable blockchain solutions across Ethereum, Solana, and Polkadot ecosystems
            with a passion for clean code, performance optimization, and user-centric design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {expertise.map((item, index) => {
            const IconComponent = item.icon;
            const colors = [
              "interactive-pink",
              "interactive-rose",
              "interactive-purple",
              "interactive-coral",
            ];
            const currentColor = colors[index % colors.length];
            return (
              <Card
                key={index}
                className={`project-card-interactive border-l-4 border-l-${currentColor} card-bg-enhanced`}
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className={`p-2 bg-${currentColor}/10 rounded-lg glow-on-hover`}
                    >
                      <IconComponent
                        className={`h-6 w-6 text-${currentColor}`}
                      />
                    </div>
                    <CardTitle className="text-xl color-shift-hover">
                      {item.title}
                    </CardTitle>
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    {item.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="text-xs tech-badge-interactive"
                      >
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
          <h3 className="text-2xl font-semibold text-foreground mb-4 interactive-gradient bg-clip-text text-transparent">
            My Mission
          </h3>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            To democratize access to financial services through blockchain
            technology while maintaining the highest standards of security and
            user experience. I believe in building solutions that are not only
            innovative but also practical and accessible to everyone.
          </p>
        </div>
      </div>
    </section>
  );
}
