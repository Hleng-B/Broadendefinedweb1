import { Button } from "./ui/button";
import logoImage from "figma:asset/96cd4127134b74547421709c0027747604e12586.png";

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const offset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
};

interface HeaderProps {
  onNavigate?: (page: "home" | "blog" | "community") => void;
}

export function Header({ onNavigate }: HeaderProps) {
  const handleNavClick = (section: string) => {
    if (onNavigate) {
      onNavigate("home");
      setTimeout(() => scrollToSection(section), 100);
    } else {
      scrollToSection(section);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#2d6a4f]/95 backdrop-blur-sm border-b border-white/10 px-4 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <button 
          onClick={() => handleNavClick("home")}
          className="flex items-center cursor-pointer"
        >
          <img 
            src={logoImage} 
            alt="Broaden Defined Logo" 
            className="h-16 w-auto object-contain"
          />
        </button>

        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => handleNavClick("home")}
            className="text-white hover:text-[#daa520] transition-colors font-extrabold"
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick("about")}
            className="text-white hover:text-[#daa520] transition-colors font-extrabold"
          >
            About
          </button>
          <button
            onClick={() => handleNavClick("services")}
            className="text-white hover:text-[#daa520] transition-colors font-extrabold"
          >
            Services
          </button>
          <button
            onClick={() => handleNavClick("portfolio")}
            className="text-white hover:text-[#daa520] transition-colors font-extrabold"
          >
            Portfolio
          </button>
          <button
            onClick={() => handleNavClick("contact")}
            className="text-white hover:text-[#daa520] transition-colors font-extrabold"
          >
            Contact
          </button>
        </nav>

        <div className="flex items-center gap-4">
          <Button
            onClick={() => onNavigate?.("community")}
            className="hidden md:inline-flex bg-[#daa520] hover:bg-[#daa520]/90"
          >
            Join Our Community
          </Button>
        </div>
      </div>
    </header>
  );
}
