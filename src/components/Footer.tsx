import { Separator } from "@/components/ui/separator";
import { Leaf } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Leaf className="w-8 h-8" />
              <span className="text-2xl font-bold">EPRkart.com</span>
            </div>
            <p className="text-white/80 mb-4 max-w-md">
              A brand of Paryasam Management and Consultants Private Limited. 
              Leading the way in environmental compliance and sustainability solutions 
              across India and abroad.
            </p>
            <div className="text-sm text-white/60">
              <p>Paryasam Management and Consultants Private Limited</p>
              <p>Environmental Compliance | Sustainability Solutions</p>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-white/80">
              <li>Extended Producer Responsibility</li>
              <li>Plastic Credits</li>
              <li>Green Credits</li>
              <li>Carbon Credits</li>
              <li>Compliance Consulting</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-white/80">
              <li>About Us</li>
              <li>Our Team</li>
              <li>Careers</li>
              <li>News & Updates</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8 bg-white/20" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/60">
          <p>&copy; 2024 Paryasam Management and Consultants Private Limited. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;