import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, Globe2, Award } from "lucide-react";

const About = () => {
  const stats = [
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Compliance Expertise",
      description: "Deep understanding of environmental regulations across India and international markets"
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Business Support",
      description: "Dedicated support for businesses of all sizes seeking environmental compliance"
    },
    {
      icon: <Globe2 className="w-8 h-8 text-primary" />,
      title: "Global Reach",
      description: "Services extending across India and international markets for comprehensive coverage"
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "Digital Innovation",
      description: "Cutting-edge digital solutions streamlining environmental compliance processes"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About EPRkart.com
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                <strong className="text-foreground">EPRkart.com</strong> is the brand name of 
                <strong className="text-foreground"> Paryasam Management and Consultants Private Limited</strong>, 
                a sustainability-driven company at the forefront of environmental compliance solutions.
              </p>
              <p>
                We specialize in providing businesses with comprehensive digital and strategic services 
                related to Extended Producer Responsibility (EPR), Plastic Credits, Green Credits, and Carbon Credits.
              </p>
              <p>
                Our mission is to make environmental compliance accessible, efficient, and effective for 
                businesses across India and abroad, supporting the global transition to sustainable practices.
              </p>
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-accent/50 border-0 shadow-elegant hover:shadow-green transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 p-3 bg-sustainability-light rounded-full w-fit">
                    {stat.icon}
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{stat.title}</h3>
                  <p className="text-sm text-muted-foreground">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;