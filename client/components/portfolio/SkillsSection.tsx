import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Blockchain & Web3",
      skills: [
        { name: "Solidity", level: 95 },
        { name: "Ethereum", level: 90 },
        { name: "Web3.js/Ethers.js", level: 88 },
        { name: "Smart Contract Security", level: 85 },
        { name: "DeFi Protocols", level: 82 },
        { name: "IPFS", level: 75 }
      ]
    },
    {
      title: "Frontend Development",
      skills: [
        { name: "React/Next.js", level: 92 },
        { name: "TypeScript", level: 90 },
        { name: "JavaScript", level: 95 },
        { name: "Tailwind CSS", level: 88 },
        { name: "React Query", level: 85 },
        { name: "State Management", level: 87 }
      ]
    },
    {
      title: "Backend & DevOps",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express/Fastify", level: 85 },
        { name: "PostgreSQL/MongoDB", level: 82 },
        { name: "Docker", level: 80 },
        { name: "AWS/GCP", level: 78 },
        { name: "CI/CD", level: 75 }
      ]
    },
    {
      title: "Tools & Frameworks",
      skills: [
        { name: "Hardhat/Foundry", level: 90 },
        { name: "Git/GitHub", level: 95 },
        { name: "Jest/Vitest", level: 85 },
        { name: "GraphQL", level: 80 },
        { name: "Prisma", level: 82 },
        { name: "Figma", level: 70 }
      ]
    }
  ];

  const certifications = [
    "Ethereum Developer Certification",
    "AWS Solutions Architect",
    "Certified Blockchain Developer",
    "DeFi Security Specialist"
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 section-bg-primary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive skill set covering the entire blockchain development stack,
            from smart contracts to user interfaces.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow card-bg-gradient project-card-interactive">
              <CardHeader>
                <CardTitle className="text-xl text-primary">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="card-bg-enhanced interactive-gradient-hover glow-on-hover">
          <CardHeader>
            <CardTitle className="text-center text-xl">Certifications & Achievements</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3 justify-center">
              {certifications.map((cert, index) => (
                <Badge key={index} variant="secondary" className="text-sm py-2 px-4">
                  {cert}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
