import { useState } from "react";
import { Button } from "./ui/button";
import logoImage from "../assets/transLogo.png";

/* ================================
   COMMUNITY GOOGLE FORM REDIRECT
================================ */
const openCommunityForm = () => {
  window.open(
    "https://docs.google.com/forms/d/e/1FAIpQLSfZ8x51xMwzMUvi0VtM2MLKsCltTqCwSBTy3KLoTSwGZHHDow/viewform?usp=dialog",
    "_blank",
    "noopener,noreferrer"
  );
};

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

        {/* LOGO */}
        <button
          onClick={() => handleNavClick("home")}
          className="flex items-center cursor-pointer transition-transform hover:scale-105"
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
            className="text-white hover:text-[#daa520] transition-colors duration-300 font-extrabold"
          >
            Home
          </button>

          <button
            onClick={() => handleNavClick("about")}
            className="text-white hover:text-[#daa520] transition-colors duration-300 font-extrabold"
          >
            About
          </button>

          <button
            onClick={() => handleNavClick("services")}
            className="text-white hover:text-[#daa520] transition-colors duration-300 font-extrabold"
          >
            Services
          </button>

          <button
            onClick={() => handleNavClick("portfolio")}
            className="text-white hover:text-[#daa520] transition-colors duration-300 font-extrabold"
          >
            Portfolio
          </button>

          <button
            onClick={() => handleNavClick("contact")}
            className="text-white hover:text-[#daa520] transition-colors duration-300 font-extrabold"
          >
            Contact
          </button>
        </nav>

        {/* DESKTOP JOIN COMMUNITY */}
        <div className="hidden md:flex items-center gap-4">
          <Button
            onClick={openCommunityForm}
            className="bg-[#daa520] hover:bg-[#daa520]/90 text-white font-bold transition-all duration-300"
          >
            Join Our Community
          </Button>
        </div>

        {/* MOBILE HAMBURGER */}
        <button
          className="md:hidden text-3xl transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={menuOpen ? "text-[#daa520]" : "text-white hover:text-[#daa520]"}>
            {menuOpen ? <span style={{ color: "#daa520" }}>✖</span> : "☰"}
          </span>
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-[#2d6a4f]/50 backdrop-blur-sm border-t border-white/10 px-4 py-6 space-y-4">

          <button
            onClick={() => handleNavClick("home")}
            className="block w-full text-left text-white hover:text-[#daa520] text-lg font-semibold py-2"
          >
            Home
          </button>

          <button
            onClick={() => handleNavClick("about")}
            className="block w-full text-left text-white hover:text-[#daa520] text-lg font-semibold py-2"
          >
            About
          </button>

          <button
            onClick={() => handleNavClick("services")}
            className="block w-full text-left text-white hover:text-[#daa520] text-lg font-semibold py-2"
          >
            Services
          </button>

          <button
            onClick={() => handleNavClick("portfolio")}
            className="block w-full text-left text-white hover:text-[#daa520] text-lg font-semibold py-2"
          >
            Portfolio
          </button>

          <button
            onClick={() => handleNavClick("contact")}
            className="block w-full text-left text-white hover:text-[#daa520] text-lg font-semibold py-2"
          >
            Contact
          </button>

          {/* MOBILE JOIN COMMUNITY */}
          <Button
            onClick={() => {
              setMenuOpen(false);
              openCommunityForm();
            }}
            className="w-full bg-[#daa520] hover:bg-[#daa520]/90 py-3 text-lg font-bold transition-all duration-300"
          >
            Join Our Community
          </Button>
        </div>
      )}
    </header>
  );
}
