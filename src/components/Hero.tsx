import { Button } from "./ui/button";
import { TrendingUp } from "lucide-react";
import heroImage from "figma:asset/228926c3178a3f4cfec1a2864ad18c7d50d9c2c0.png";

const scrollToPortfolio = () => {
  const element = document.getElementById("portfolio");
  if (element) {
    const offset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
  }
};

export function Hero() {
  return (
    <section id="home" className="py-20 px-4 bg-[#2d6a4f]">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-white rounded-full border border-white/20">
              <TrendingUp className="h-4 w-4" />
             
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-extrabold text-white">
              Grow Your Social Media Presence
            </h1>
            
            <p className="text-xl text-white/90 max-w-lg">
              We help businesses expand their digital footprint through strategic social media marketing, 
              content creation, and data-driven campaigns that deliver real results.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="gap-2 bg-[#daa520] hover:bg-[#daa520]/90"
                onClick={scrollToPortfolio}
              >
                View Our Work
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#2d6a4f] via-[#daa520] to-[#c1292e] rounded-3xl blur-3xl opacity-20" />
            <img
              src={heroImage}
              alt="Broaden Defined - Professional Social Media Marketing"
              className="relative rounded-3xl shadow-2xl w-full object-cover aspect-square"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
