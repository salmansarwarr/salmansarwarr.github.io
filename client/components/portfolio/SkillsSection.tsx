import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Blockchain & Smart Contracts",
      skills: [
        { name: "Ethereum (Solidity)", level: 95 },
        { name: "Solana (Rust/Anchor)", level: 90 },
        { name: "Polkadot (Substrate)", level: 85 },
        { name: "Hardhat/Truffle", level: 92 },
        { name: "Smart Contract Testing", level: 88 },
        { name: "Web3 Integration", level: 90 }
      ]
    },
    {
      title: "Frontend Development",
      skills: [
        { name: "React.js", level: 95 },
        { name: "Next.js", level: 92 },
        { name: "TypeScript", level: 90 },
        { name: "Redux Toolkit", level: 85 },
        { name: "Web3 Wallets", level: 88 },
        { name: "Responsive Design", level: 90 }
      ]
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express.js", level: 88 },
        { name: "Nest.js", level: 82 },
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 88 },
        { name: "Prisma ORM", level: 80 }
      ]
    },
    {
      title: "Testing & Deployment",
      skills: [
        { name: "Hardhat Testing", level: 90 },
        { name: "Jest", level: 85 },
        { name: "AWS", level: 80 },
        { name: "Vercel/Netlify", level: 92 },
        { name: "IPFS/Pinata", level: 85 },
        { name: "GitHub", level: 95 }
      ]
    }
  ];

  const certifications = [
    "Ethereum Developer Degree - LearnWeb3.io",
    "Solana Blockchain Developer Bootcamp - Udemy",
    "Polkadot & Substrate Development - RiseIn",
    "Anryton Blockchain Hackathon - 2nd Position Winner"
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 section-bg-primary doodle-bg-pattern relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive skill set covering the entire blockchain development
            stack, from smart contracts to user interfaces.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow card-bg-gradient project-card-interactive"
            >
              <CardHeader>
                <CardTitle className="text-xl text-primary">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">
                        {skill.name}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
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
            <CardTitle className="text-center text-xl">
              Certifications & Achievements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3 justify-center">
              {certifications.map((cert, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="text-sm py-2 px-4"
                >
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
