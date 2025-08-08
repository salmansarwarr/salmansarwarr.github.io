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
          title: "CoinBoom",
          description:
            "A comprehensive cryptocurrency tracking platform that identifies trending tokens and provides real-time market data. Features advanced filtering, promoted coins section, and multi-chain support for discovering the next crypto boom opportunities.",
          icon: TrendingUp,
          technologies: ["React", "Node.js", "Dexscreener", "Mongodb", "Coingecko"],
          features: [
            "Real-time price tracking",
            "Multi-chain support",
            "Trending algorithm",
            "Promoted listings",
          ],
          github: "https://github.com/salmansarwarr/coinboom",
          demo: "https://coinboom.net",
          status: "Live Production",
        },
        {
          title: "Horsely NFT Collection",
          description:
            "An equestrian-themed NFT marketplace featuring horse genetics and fractional ownership. Each NFT contains unique genetic data for virtual breeding, competitions, and immersive equestrian experiences with ERC-721 tokens on Ethereum.",
          icon: Users,
          technologies: [
            "Solidity",
            "Next.js",
            "IPFS",
            "Ethereum",
            "TypeScript",
          ],
          features: [
            "Genetic data system",
            "Fractional ownership",
            "Breeding simulation",
            "Virtual competitions",
          ],
          github: "https://github.com/salmansarwarr/horsly-server",
          demo: "https://horselyworld.com",
          status: "Live Production",
        },
        {
          title: "Forge3 Talent Platform",
          description:
            "A Solana talent marketplace connecting developers with crypto projects. Focusing on DeFi, NFT, and blockchain development expertise.",
          icon: Shield,
          technologies: ["React", "Anchor", "Rust", "Solana", "TypeScript"],
          features: [
            "Decentralized Escrow",
            "Web3 talent pool",
            "Smart matching",
            "Project collaboration",
          ],
          github: "https://forge3.co",
          demo: "https://forge3.co",
          status: "Live Production",
        },
        {
          title: "Passve",
          description:
            "A modern Staking & APY application with frontend providing seamless user experiences. Built with contemporary web technologies and optimized for performance in the decentralized ecosystem.",
          icon: Coins,
          technologies: [
            "React",
            "Solidity",
            "Web3.js",
            "Node.js",
            "Wagmi",
          ],
          features: [
            "Modern UI/UX",
            "Staking & APY",
            "Performance optimized",
            "Cross-platform support",
          ],
          github: "https://github.com/salmansarwarr/passve",
          demo: "https://passve.com",
          status: "Live Production",
        },
      ];

  const stats = [
    { label: "Projects Completed", value: "25+" },
    { label: "Smart Contracts Deployed", value: "50+" },
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
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
                      onClick={() =>
                        window.open(
                          project.github,
                          "_blank",
                        )
                      }
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      className={`flex-1 bg-interactive-pink hover:bg-${currentColor}/90 glow-on-hover transition-all duration-300`}
                      onClick={() =>
                        window.open(
                          project.demo,
                          "_blank",
                        )
                      }
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
          <Button
            onClick={() =>
              window.open("https://github.com/salmansarwarr", "_blank")
            }
            variant="outline"
            size="lg"
          >
            <Github className="mr-2 h-4 w-4" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
}
