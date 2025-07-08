import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, Recycle, TreePine, Globe } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Recycle className="w-12 h-12 text-primary" />,
      title: "Extended Producer Responsibility (EPR)",
      description: "Comprehensive EPR compliance solutions helping businesses meet regulatory requirements for packaging waste management across India.",
      features: ["Regulatory Compliance", "Waste Management", "Documentation Support", "Industry Expertise"]
    },
    {
      icon: <Leaf className="w-12 h-12 text-primary" />,
      title: "Plastic Credits",
      description: "Strategic plastic credit solutions enabling businesses to offset their plastic footprint through verified environmental projects.",
      features: ["Plastic Offset Programs", "Verified Credits", "Impact Measurement", "Sustainability Reporting"]
    },
    {
      icon: <TreePine className="w-12 h-12 text-primary" />,
      title: "Green Credits",
      description: "Green credit programs supporting environmental restoration and biodiversity conservation through verified green initiatives.",
      features: ["Forest Conservation", "Biodiversity Projects", "Environmental Restoration", "Impact Tracking"]
    },
    {
      icon: <Globe className="w-12 h-12 text-primary" />,
      title: "Carbon Credits",
      description: "Carbon offset solutions helping organizations achieve net-zero goals through verified carbon reduction and sequestration projects.",
      features: ["Carbon Footprint Analysis", "Offset Programs", "Verification Services", "Climate Strategy"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive environmental compliance and sustainability solutions 
            designed to help your business thrive while protecting our planet.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="shadow-elegant hover:shadow-green transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-4 bg-sustainability-light rounded-full w-fit">
                  {service.icon}
                </div>
                <CardTitle className="text-2xl font-bold text-foreground mb-2">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-base text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;