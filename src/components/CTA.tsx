import { Button } from "./ui/button";
import { ArrowRight, Mail, Phone } from "lucide-react";
import contactImage from "figma:asset/68cc2006a2371b46dc75e42593c8d18e8d22e69d.png";

export function CTA() {
  return (
    <section id="contact" className="py-20 px-4 bg-[#2d6a4f]">
      <div className="container mx-auto">
        <div className="bg-gradient-to-br from-[#2d6a4f] via-[#2d6a4f] to-[#2d6a4f]/90 rounded-3xl p-12 lg:p-20 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#c1292e] rounded-full blur-3xl opacity-20" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#daa520] rounded-full blur-3xl opacity-20" />
          
          <div className="relative z-10 max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Text and Buttons Content */}
              <div className="flex-1 text-center lg:text-left">
                <h2 className="text-5xl lg:text-5xl font-extrabold mb-6">
                  Ready to Grow Your Brand?
                </h2>
                <p className="text-xl mb-8 opacity-90">
                  Let's discuss how we can help you achieve your social media goals. 
                  Get a consultation and strategy session today.
                </p>
                
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
                  <a href="mailto:bathabilemnguni96@gmail.com?subject=Consultation%20Enquiry">
                    <Button size="lg" className="gap-2 bg-[#daa520] hover:bg-[#daa520]/90 text-white">
                      <Mail className="h-5 w-5" />
                      Get Consultation
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </a>
                 
                  <a href="tel:+27817351868">
                    <Button size="lg" className="gap-2 bg-[#daa520] hover:bg-[#daa520]/90 text-white">
                      <Phone className="h-5 w-5" />
                      Call: 081-735-1868
                    </Button>
                  </a>
                </div>
                
                <div className="flex flex-wrap gap-6 justify-center lg:justify-start text-sm opacity-75">
                  <span>✓ Comprehensive Strategy Session</span>
                  <span>✓ No Long-term Contracts</span>
                  <span>✓ Proven Results</span>
                </div>
              </div>

              {/* Curved Edge Square Image */}
              <div className="flex-shrink-0">
                <div className="w-80 h-96 rounded-3xl overflow-hidden border-4 border-white/20 shadow-2xl">
                  <img 
                    src={contactImage} 
                    alt="Broaden Defined Team"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}