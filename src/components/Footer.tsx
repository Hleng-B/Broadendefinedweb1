import { Instagram, Facebook, Linkedin, Twitter, Mail, MapPin, Phone } from "lucide-react";
import logoImage from "figma:asset/96cd4127134b74547421709c0027747604e12586.png";

interface FooterProps {
  onNavigate?: (page: "home" | "blog" | "community") => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-[#2d6a4f] text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
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
            <h3 className="mb-4 text-white">Services</h3>
            <ul className="space-y-2 text-white">
              <li><a href="#" className="hover:text-[#daa520] transition-colors">Social Media Management</a></li>
              <li><a href="#" className="hover:text-[#daa520] transition-colors">Content Creation</a></li>
              <li><a href="#" className="hover:text-[#daa520] transition-colors">Paid Advertising</a></li>
              <li><a href="#" className="hover:text-[#daa520] transition-colors">Brand Strategy</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-white">Company</h3>
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
          </div>
          
          <div>
            <h3 className="mb-4 text-white">Contact</h3>
            <ul className="space-y-3 text-white">
              <li className="flex items-start gap-2">
                <Phone className="h-5 w-5 flex-shrink-0 mt-0.5 text-white" />
                <span>081-735-1868</span>
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
    </footer>
  );
}
