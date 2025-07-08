import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to start your sustainability journey? Contact our experts for 
            personalized environmental compliance solutions.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <Card className="shadow-elegant border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
                    <Input placeholder="Enter your first name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                    <Input placeholder="Enter your last name" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <Input type="email" placeholder="Enter your email address" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Company</label>
                  <Input placeholder="Enter your company name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Service Interest</label>
                  <Input placeholder="EPR, Plastic Credits, Green Credits, Carbon Credits" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <Textarea 
                    placeholder="Tell us about your environmental compliance needs..."
                    className="min-h-[120px]"
                  />
                </div>
                <Button className="w-full" size="lg">
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-8">
            <Card className="shadow-elegant border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-sustainability-light rounded-full">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Email Us</h3>
                    <p className="text-muted-foreground">info@eprkart.com</p>
                    <p className="text-muted-foreground">support@eprkart.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-elegant border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-sustainability-light rounded-full">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Call Us</h3>
                    <p className="text-muted-foreground">+91 XXX XXX XXXX</p>
                    <p className="text-sm text-muted-foreground">Mon-Fri: 9:00 AM - 6:00 PM IST</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-elegant border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-sustainability-light rounded-full">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Visit Us</h3>
                    <p className="text-muted-foreground">Paryasam Management and</p>
                    <p className="text-muted-foreground">Consultants Private Limited</p>
                    <p className="text-muted-foreground">India</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-primary text-white shadow-green border-0">
              <CardContent className="p-6 text-center">
                <Clock className="w-8 h-8 mx-auto mb-3" />
                <h3 className="font-bold mb-2">Quick Response Guarantee</h3>
                <p className="text-white/90">We respond to all inquiries within 24 hours during business days.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;