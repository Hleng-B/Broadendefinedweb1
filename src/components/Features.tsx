import { Card } from "./ui/card";
import {
  Instagram,
  Facebook,
  Linkedin,
  TrendingUp,
  Target,
  BarChart3,
} from "lucide-react";

const services = [
  {
    icon: Instagram,
    title: "Social Media Management",
    description:
      "Complete management of your social media accounts with engaging content and community interaction.",
    color: "#c1292e",
  },
  {
    icon: Target,
    title: "Brand Campaigns",
    description:
      "Comprehensive brand positioning and messaging across all digital channels.",
    color: "#daa520",
  },
  {
    icon: TrendingUp,
    title: "Content Creation",
    description:
      "High-quality, engaging content tailored to your brand voice and audience preferences.",
    color: "#ffffff",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description:
      "Detailed insights and performance metrics to track growth and optimize strategies.",
    color: "#daa520",
  },
  {
    icon: Facebook,
    title: "Brand Strategy",
    description:
      "Data-driven strategies that are designed to reach your ideal audience",
    color: "#c1292e",
  },
  {
    icon: Linkedin,
    title: "Influencer Marketing",
    description:
      "Connect with the right influencers to amplify your message and reach new audiences.",
    color: "#ffffff",
  },
];

export function Features() {
  return (
    <section id="services" className="py-20 px-4 bg-[#2d6a4f]">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-white/10 text-white rounded-full mb-4">
            Our Services
          </div>
          <h2 className="text-5xl font-extrabold mb-4 text-white">
            Everything You Need to Succeed Online
          </h2>
          <p className="text-xl text-white/90">
            From strategy to execution, we provide comprehensive
            digital marketing solutions tailored to your
            business goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="p-6 hover:shadow-xl transition-all bg-white/5 border-white/10 hover:border-[#daa520]/50"
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{
                    backgroundColor: `${service.color}25`,
                  }}
                >
                  <Icon
                    className="h-6 w-6"
                    style={{ color: service.color }}
                  />
                </div>
                <h3 className="text-xl mb-2 text-white">
                  {service.title}
                </h3>
                <p className="text-white/80">
                  {service.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}