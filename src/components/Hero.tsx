import { Button } from "./ui/button";
import heroImage from "../assets/bdlogo.jpg";

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
          
          {/* LEFT SIDE */}
          <div className="space-y-8">
            
            {/* BADGE */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-white rounded-full border border-white/20">
              <span className="font-semibold tracking-wide">
                Digital Marketing & PR Experts
              </span>
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