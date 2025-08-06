import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building, Award } from "lucide-react";

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Senior Blockchain Developer",
      company: "CryptoTech Solutions",
      location: "Remote",
      duration: "2022 - Present",
      type: "Full-time",
      description:
        "Leading blockchain development team, architecting DeFi protocols and smart contracts. Responsible for security audits and gas optimization strategies.",
      achievements: [
        "Built DeFi protocol with $2M+ TVL",
        "Reduced gas costs by 40% through optimization",
        "Led team of 5 developers",
        "Implemented security best practices",
      ],
      technologies: [
        "Solidity",
        "Ethereum",
        "DeFi",
        "Security Audits",
        "Team Leadership",
      ],
    },
    {
      title: "Full Stack Blockchain Developer",
      company: "Web3 Innovations",
      location: "New York, NY",
      duration: "2021 - 2022",
      type: "Full-time",
      description:
        "Developed end-to-end Web3 applications including NFT marketplaces, DAO governance platforms, and wallet integrations.",
      achievements: [
        "Deployed 20+ smart contracts",
        "Built NFT marketplace with 1K+ users",
        "Integrated multiple wallet providers",
        "Mentored junior developers",
      ],
      technologies: ["React", "Node.js", "Solidity", "Web3.js", "MongoDB"],
    },
    {
      title: "Blockchain Consultant",
      company: "Freelance",
      location: "Remote",
      duration: "2020 - 2021",
      type: "Contract",
      description:
        "Provided blockchain consulting services to startups and enterprises. Specialized in smart contract development, tokenomics design, and Web3 strategy.",
      achievements: [
        "Consulted for 15+ projects",
        "Designed tokenomics for 3 ICOs",
        "Conducted security audits",
        "Delivered technical workshops",
      ],
      technologies: [
        "Solidity",
        "Smart Contracts",
        "Tokenomics",
        "Security",
        "Strategy",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "TechStart Inc.",
      location: "San Francisco, CA",
      duration: "2019 - 2020",
      type: "Full-time",
      description:
        "Built scalable web applications using modern frontend and backend technologies. Transitioned team to TypeScript and implemented CI/CD pipelines.",
      achievements: [
        "Reduced load times by 60%",
        "Implemented TypeScript migration",
        "Built automated testing suite",
        "Designed microservices architecture",
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "AWS", "TypeScript"],
    },
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University of Technology",
      year: "2018",
      honors: "Magna Cum Laude",
    },
    {
      degree: "Blockchain Developer Certification",
      school: "Ethereum Foundation",
      year: "2020",
      honors: "Distinguished Graduate",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 section-bg-accent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Experience & Education
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A progressive career journey from traditional full-stack development
            to specialized blockchain expertise.
          </p>
        </div>

        <div className="space-y-8 mb-16">
          <h3 className="text-2xl font-semibold text-foreground mb-8">
            Professional Experience
          </h3>
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow card-bg-enhanced project-card-interactive"
            >
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl text-primary">
                      {exp.title}
                    </CardTitle>
                    <div className="flex items-center gap-4 mt-2 text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Building className="h-4 w-4" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col sm:items-end gap-2">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.duration}</span>
                    </div>
                    <Badge variant="outline">{exp.type}</Badge>
                  </div>
                </div>
                <CardDescription className="text-base leading-relaxed mt-4">
                  {exp.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium text-sm text-foreground mb-3 flex items-center gap-2">
                    <Award className="h-4 w-4" />
                    Key Achievements:
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li
                        key={achIndex}
                        className="text-sm text-muted-foreground flex items-start gap-2"
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-sm text-foreground mb-3">
                    Technologies:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="space-y-8">
          <h3 className="text-2xl font-semibold text-foreground mb-8">
            Education
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow card-bg-gradient glow-on-hover"
              >
                <CardHeader>
                  <CardTitle className="text-lg">{edu.degree}</CardTitle>
                  <CardDescription className="text-base">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{edu.school}</span>
                      <span>{edu.year}</span>
                    </div>
                    {edu.honors && (
                      <Badge variant="secondary" className="mt-2">
                        {edu.honors}
                      </Badge>
                    )}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
