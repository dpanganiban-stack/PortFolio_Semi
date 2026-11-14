import "./about.css";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/next-app/components/ui/badge";


const skills = [
  "JavaScript / TypeScript",
  "React + Next.js",
  "Tailwind CSS",
  "Node.js & Express",
  "MySQL / Oracle",
  "Git & GitHub",
  "REST APIs & Spring",
  "AWS",
];

export default function About() {
  return (
    <div className="about-wrapper">
      <div className="about-container">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">About Me</h1>
          <p className="text-muted-foreground mt-1">
            A little about my background, passion, and technical skillset.
          </p>
        </div>

        <Card className="about-card">
          <div className="profile-layout">
            {/* Picture on the left */}
            <img
              src="/Darryl.jpg"
              alt="Darryl"
              className="profile-image"
            />

            {/* Story on the right */}
            <div className="story-content">
              <CardHeader className="p-0 pb-3">
                <CardTitle>My Story</CardTitle>
              </CardHeader>
              <CardContent className="p-0 text-muted-foreground leading-relaxed">
                <p>
                  Hi! I&apos;m Darryl, a creative and tech-driven student who
                  enjoys building things, designing visuals, and mastering
                  mobile games. I love exploring both the artistic and digital
                  world—from drawing characters to coding simple programs, and
                  even competing in games where strategy and skill matter.
                  I&apos;m always learning, improving, and finding new ways to
                  turn my skills into something useful for others.
                </p>
              </CardContent>
            </div>
          </div>
        </Card>

        <Card className="about-card">
          <CardHeader>
            <CardTitle>Technical Skillset</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="skills-list">
              {skills.map((skill) => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}