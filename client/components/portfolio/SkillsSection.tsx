import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ExternalLink } from "lucide-react";

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
        { name: "Web3 Integration", level: 90 },
      ],
    },
    {
      title: "Frontend Development",
      skills: [
        { name: "React.js", level: 95 },
        { name: "Next.js", level: 92 },
        { name: "TypeScript", level: 90 },
        { name: "Redux Toolkit", level: 85 },
        { name: "Web3 Wallets", level: 88 },
        { name: "Responsive Design", level: 90 },
      ],
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express.js", level: 88 },
        { name: "Nest.js", level: 82 },
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 88 },
        { name: "Prisma ORM", level: 80 },
      ],
    },
    {
      title: "Testing & Deployment",
      skills: [
        { name: "Hardhat Testing", level: 90 },
        { name: "Jest", level: 85 },
        { name: "AWS", level: 80 },
        { name: "Vercel/Netlify", level: 92 },
        { name: "IPFS/Pinata", level: 85 },
        { name: "GitHub", level: 95 },
      ],
    },
  ];

  const certifications = [
    {title: "Ethereum Developer Degree - LearnWeb3.io", link: 'https://opensea.io/item/matic/0x60f028C82f9f3bF71e0C13fE9e8E7f916b345C00/492323'},
    {title: "Solana Blockchain Developer Bootcamp - Udemy", link: 'https://www.udemy.com/certificate/UC-cf2a3838-ddf2-40fb-a9bc-42ad3e233460/?fbclid=IwZXh0bgNhZW0CMTEAAR0yupAiXKs6rLy2x2D7-NvIJvI0TQL2JJ--6Bgd-bTHlidwZHbqPQRsErE_aem_AZFScVQnjKwUb3w6b0S9dDRGfCm0joY4yhZFUoRt1bISrvMIV_Aepd1gNz5R_mLcLgwSPci6sfIQGkk2HJFAAjtn'},
    {title: "Polkadot & Substrate Development - RiseIn", link: 'https://www.risein.com/certificates/9imPP-d9'},
    {title: "Anryton Blockchain Hackathon - 2nd Position Winner", link: 'https://www.linkedin.com/posts/mmubashirkhan_csitneduet-blockchaininnovation-web3developers-activity-7301320903244627969-Gyjg?utm_source=share&utm_medium=member_desktop&rcm=ACoAADyraNgBCXFEuGCkuofHiXlCTbYFHCA-j8A'},
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 section-bg-primary blockchain-bg relative">
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

        <Card className="card-bg-enhanced interactive-gradient-hover transition-all glow-on-hover">
          <CardHeader>
            <CardTitle className="text-center text-xl">
              Certifications & Achievements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3 justify-center">
              {certifications.map((cert, index) => (
                <>                
                <Badge
                  key={index}
                  variant="secondary"
                  onClick={() => window.open(cert.link, '_blank')}
                  className="text-sm py-2 px-4 cursor-pointer"
                >
                  {cert.title}
                  <ExternalLink size={16} className="ml-2"/>
                </Badge>
                </>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
