import { Instagram, Facebook, Linkedin, Twitter, Mail, MapPin, Phone, ArrowUp } from "lucide-react";
import logoImage from "../assets/transLogo.png";

interface FooterProps {
  onNavigate?: (page: "home" | "blog" | "community") => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-[#2d6a4f] text-white py-12 px-4 relative">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <img 
                src={logoImage} 
                alt="Broaden Defined Logo" 
                className="h-20 w-auto object-contain"
              />
            </div>
            <p className="text-white mb-4">
              Helping businesses grow their social media presence with strategic marketing solutions.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/broaden_defined" target="_blank" rel="noopener noreferrer" className="hover:text-[#daa520] transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.facebook.com/share/1Gf29wCHAU/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="hover:text-[#daa520] transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
               <a href="https://www.linkedin.com/company/broaden-defined/" target="_blank" rel="noopener noreferrer" className="hover:text-[#daa520] transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
          
            </div>
          </div>
          
          <div>
            <h3 className="mb-4 text-[#daa520] font-bold text-lg">Company</h3>
            <ul className="space-y-2 text-white">
              <li><a href="#about" className="hover:text-[#daa520] transition-colors">About Us</a></li>
              <li><a href="#portfolio" className="hover:text-[#daa520] transition-colors">Portfolio</a></li>
              <li>
                <button 
                  onClick={() => onNavigate?.("blog")}
                  className="hover:text-[#daa520] transition-colors"
                >
                  Blog
                </button>
              </li>
            </ul>
            
            {/* Join Our Community Button */}
            <div className="mt-6">
              <button
                onClick={() => onNavigate?.("community")}
                className="bg-[#c1292e] text-white px-6 py-3 rounded-lg hover:bg-[#a01f23] transition-colors w-full sm:w-auto"
              >
                Join Our Community
              </button>
            </div>
          </div>
          
          <div>
            <h3 className="mb-4 text-[#daa520] font-bold text-lg">Contact</h3>
            <ul className="space-y-3 text-white">
              <li className="flex items-start gap-2">
                <Phone className="h-5 w-5 flex-shrink-0 mt-0.5 text-white" />
                 <a 
        href="tel:+27817351868" 
        className="hover:text-[#daa520] transition-colors"
      >
        081-735-1868
      </a>
    </li>
              <li className="flex items-start gap-2">
                <Mail className="h-5 w-5 flex-shrink-0 mt-0.5 text-white" />
                <a href="mailto:info@broadendefined.co.za" className="hover:text-[#daa520] transition-colors break-all">
                  info@broadendefined.co.za
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5 text-white" />
                <span>Johannesburg, South Africa</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white">
            © 2025 Broaden Defined. All rights reserved.
          </p>
          <div className="flex gap-6 text-white">
            <a href="#" className="hover:text-[#daa520] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#daa520] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
      
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-[#c1292e] hover:bg-[#a01f23] text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-6 w-6" />
      </button>
    </footer>
  );
}