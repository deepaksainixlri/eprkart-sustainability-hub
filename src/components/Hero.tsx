import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-sustainability.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Sustainability and environmental compliance" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-up">
            Environmental Compliance
            <span className="block text-4xl md:text-6xl text-sustainability-light">Made Simple</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl animate-fade-up">
            EPRkart.com supports businesses with digital and strategic environmental compliance 
            services across India and abroad. Your trusted partner for sustainability solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              Explore Services
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-white/10 text-white border-white/30 hover:bg-white/20">
              Contact Us
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center animate-fade-up">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold">EPR</div>
              <div className="text-sm text-white/80">Extended Producer Responsibility</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold">Plastic Credits</div>
              <div className="text-sm text-white/80">Sustainable Solutions</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold">Green Credits</div>
              <div className="text-sm text-white/80">Environmental Impact</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold">Carbon Credits</div>
              <div className="text-sm text-white/80">Climate Action</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;