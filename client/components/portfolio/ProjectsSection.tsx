import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Github,
  ExternalLink,
  TrendingUp,
  Shield,
  Coins,
  Users,
} from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "DeFiYield Protocol",
      description:
        "A decentralized yield farming platform with automated portfolio rebalancing and risk management. Features include multi-strategy yield optimization, liquidity provision across DEXs, and governance token mechanisms.",
      icon: TrendingUp,
      technologies: ["Solidity", "React", "Web3.js", "Node.js", "PostgreSQL"],
      features: [
        "$2M+ TVL",
        "Gas-optimized contracts",
        "Multi-chain support",
        "Automated rebalancing",
      ],
      github: "#",
      demo: "#",
      status: "Live Production",
    },
    {
      title: "CryptoSecure Wallet",
      description:
        "A non-custodial multi-signature wallet with advanced security features including hardware wallet integration, social recovery, and transaction batching for gas optimization.",
      icon: Shield,
      technologies: [
        "Solidity",
        "TypeScript",
        "Next.js",
        "Ethers.js",
        "Firebase",
      ],
      features: [
        "Multi-sig security",
        "Hardware wallet support",
        "Social recovery",
        "Gas optimization",
      ],
      github: "#",
      demo: "#",
      status: "Beta Testing",
    },
    {
      title: "NFT Marketplace Pro",
      description:
        "A feature-rich NFT marketplace supporting ERC-721 and ERC-1155 tokens with royalty management, batch minting, and advanced filtering. Includes auction mechanisms and collection management.",
      icon: Coins,
      technologies: ["Solidity", "React", "IPFS", "Graph Protocol", "MongoDB"],
      features: [
        "Royalty management",
        "Batch operations",
        "Advanced filters",
        "Auction system",
      ],
      github: "#",
      demo: "#",
      status: "Live Production",
    },
    {
      title: "DAO Governance Platform",
      description:
        "A comprehensive governance platform for DAOs with proposal creation, voting mechanisms, treasury management, and delegation features. Supports quadratic voting and token-weighted decisions.",
      icon: Users,
      technologies: [
        "Solidity",
        "React",
        "Graph Protocol",
        "TypeScript",
        "Redis",
      ],
      features: [
        "Quadratic voting",
        "Treasury management",
        "Delegation system",
        "Analytics dashboard",
      ],
      github: "#",
      demo: "#",
      status: "Development",
    },
  ];

  const stats = [
    { label: "Projects Completed", value: "25+" },
    { label: "Smart Contracts Deployed", value: "50+" },
    { label: "Total Value Locked", value: "$5M+" },
    { label: "Active Users", value: "10K+" },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 section-bg-tertiary blockchain-bg relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A selection of blockchain projects showcasing expertise in DeFi,
            NFTs, DAOs, and Web3 infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="text-center card-bg-enhanced glow-on-hover transition-all duration-300"
            >
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
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
                className="project-card-interactive border-gradient-hover group card-bg-gradient"
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-2 bg-${currentColor}/10 rounded-lg group-hover:bg-${currentColor}/20 transition-all duration-300 glow-on-hover`}
                      >
                        <IconComponent
                          className={`h-6 w-6 text-${currentColor}`}
                        />
                      </div>
                      <div>
                        <CardTitle className="text-xl">
                          {project.title}
                        </CardTitle>
                        <Badge variant="outline" className="mt-1 text-xs">
                          {project.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <h4 className="font-medium text-sm text-foreground">
                      Key Features:
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="text-xs text-muted-foreground flex items-center"
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-medium text-sm text-foreground">
                      Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="text-xs tech-badge-interactive"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-gradient-hover transition-all duration-300 hover:scale-105"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      className={`flex-1 bg-${currentColor} hover:bg-${currentColor}/90 glow-on-hover transition-all duration-300`}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            <Github className="mr-2 h-4 w-4" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
}
