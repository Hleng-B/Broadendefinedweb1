import { ImageWithFallback } from "./figma/ImageWithFallback";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Increase brand awareness and visibility",
  "Build engaged online communities",
  "Drive website traffic and conversions",
  "Establish thought leadership",
  "Boost customer loyalty and retention",
  "Generate qualified leads"
];

export function Stats() {
  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-br from-[#2d6a4f] to-[#2d6a4f]/90 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#daa520] rounded-full blur-3xl opacity-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#c1292e] rounded-full blur-3xl opacity-10" />
      
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 order-2 lg:order-1">
            <h2 className="text-4xl font-extrabold">Why Choose Broaden Defined?</h2>
            
            <p className="text-xl text-white/90">
              We don't just post content – we create meaningful connections between your 
              brand and your audience. Our proven strategies deliver measurable results.
            </p>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#daa520] flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-white/90">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative order-1 lg:order-2">
            <div className="absolute inset-0 bg-[#daa520] rounded-3xl blur-3xl opacity-20" />
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1653565684985-0b1a64cf7afc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwYnVzaW5lc3MlMjB0ZWFtJTIwYmxhY2slMjBwZW9wbGV8ZW58MXx8fHwxNzYyMTY3MTkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Diverse Digital Marketing Team"
              className="relative rounded-3xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
