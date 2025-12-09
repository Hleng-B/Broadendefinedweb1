import { useState } from "react";
import { Button } from "./ui/button";
import logoImage from "../assets/bdlogo.jpg";

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const offset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};

interface HeaderProps {
  onNavigate?: (page: "home" | "blog" | "community") => void;
}

export function Header({ onNavigate }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (section: string) => {
    setMenuOpen(false);

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

        {/* Logo */}
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

        {/* DESKTOP NAV */}
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

        {/* DESKTOP BUTTON */}
        <div className="hidden md:flex items-center gap-4">
          <Button
            onClick={() => onNavigate?.("community")}
            className="bg-[#daa520] hover:bg-[#daa520]/90"
          >
            Join Our Community
          </Button>
        </div>

        {/* MOBILE HAMBURGER BUTTON */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-[#2d6a4f] border-t border-white/10 px-4 py-6 space-y-4">

          <button
            onClick={() => handleNavClick("home")}
            className="block w-full text-left text-white text-lg font-semibold"
          >
            Home
          </button>

          <button
            onClick={() => handleNavClick("about")}
            className="block w-full text-left text-white text-lg font-semibold"
          >
            About
          </button>

          <button
            onClick={() => handleNavClick("services")}
            className="block w-full text-left text-white text-lg font-semibold"
          >
            Services
          </button>

          <button
            onClick={() => handleNavClick("portfolio")}
            className="block w-full text-left text-white text-lg font-semibold"
          >
            Portfolio
          </button>

          <button
            onClick={() => handleNavClick("contact")}
            className="block w-full text-left text-white text-lg font-semibold"
          >
            Contact
          </button>

          <Button
            onClick={() => {
              setMenuOpen(false);
              onNavigate?.("community");
            }}
            className="w-full bg-[#daa520] hover:bg-[#daa520]/90 py-3 text-lg"
          >
            Join Our Community
          </Button>
        </div>
      )}
    </header>
  );
}
