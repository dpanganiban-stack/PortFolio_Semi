import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";

const educationList = [

  {
    degree: "Eating",
    description:
      "Enjoying a variety of cuisines and cooking new recipes.",
    achievements: [
      ""
    ],
  },
  {
    degree: "Playing Online Games",
    description:
      "Playing various online games.",
  },
];

export default function Education() {
  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Hobbies</h1>
        <p className="text-muted-foreground mt-1">
      
        </p>
      </div>

      <div className="space-y-6">
        {educationList.map((item, idx) => (
          <Card key={idx}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  
                  </div>

                  <div>
                    <CardTitle className="text-xl">
                      {item.degree}
                    </CardTitle>
                    <CardDescription>
                 
                    </CardDescription>
                  </div>
                </div>

                <span className="text-sm font-medium text-muted-foreground">
                 
                </span>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                {item.description}
              </p>

              <div>
                <h4 className="text-sm font-semibold flex items-center gap-1.5 mb-2">
                  <Award className="h-4 w-4 text-primary" />
                  Key Highlights
                </h4>

                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                
                  
                  
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
} 