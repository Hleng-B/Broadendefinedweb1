import { Card } from "./ui/card";
import { Search, Lightbulb, Rocket, BarChart2 } from "lucide-react";
import teamImage from "figma:asset/7e3d7074d35b19e5f595f75ac1fdfbd214bb1909.png";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery & Research",
    description: "We analyze your brand, competitors, and target audience to understand what makes you unique.",
    color: "#ffffff"
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Strategy Development",
    description: "Custom-tailored strategies designed to achieve your specific business objectives.",
    color: "#daa520"
  },
  {
    number: "03",
    icon: Rocket,
    title: "Execution & Launch",
    description: "Professional content creation and campaign launch across all relevant platforms.",
    color: "#c1292e"
  },
  {
    number: "04",
    icon: BarChart2,
    title: "Optimize & Scale",
    description: "Continuous monitoring, testing, and optimization to maximize your results.",
    color: "#daa520"
  }
];

export function Process() {
  return (
    <section id="about" className="py-20 px-4 bg-[#2d6a4f]">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto mb-16">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-block px-4 py-2 bg-white/10 text-white rounded-full mb-4">
                Our Process
              </div>
              <h2 className="text-5xl font-extrabold mb-4 text-white">How We Work</h2>
              <p className="text-xl text-white/90">
                A proven, systematic approach to growing your social media presence and achieving your goals.
              </p>
            </div>
            
            {/* Circular Image */}
            <div className="flex-shrink-0">
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                <img 
                  src={teamImage} 
                  alt="Broaden Defined Team Member"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={index} className="p-6 relative overflow-hidden bg-white/5 border-white/10 hover:shadow-xl transition-all">
                <div 
                  className="text-6xl absolute top-4 right-4 opacity-10 text-white"
                  style={{ color: step.color }}
                >
                  {step.number}
                </div>
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${step.color}25` }}
                >
                  <Icon className="h-6 w-6" style={{ color: step.color }} />
                </div>
                <h3 className="text-xl mb-2 text-white">{step.title}</h3>
                <p className="text-white/80">{step.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}