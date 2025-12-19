import React, { useState } from "react";
import Logo from "../assets/bd-logo.jpg";

interface Props {
  onNav: (page: string) => void;
}

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

export default function NavBar({ onNav }: Props) {
  const [open, setOpen] = useState(false);

  const menu = [
    { label: "Home", value: "home" },
    { label: "About", value: "about" },
    { label: "Services", value: "services" },
    { label: "Portfolio", value: "portfolio" },
    { label: "Blog", value: "blog" },
    { label: "Contact", value: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#2d6a4f] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo + Brand */}
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => onNav("home")}
        >
          <img
            src={Logo}
            alt="BD Logo"
            className="w-12 h-12 rounded-md object-cover"
          />
          <h1 className="font-bold tracking-wide text-lg">
            BROADEN DEFINED
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {menu.map((item) => (
            <button
              key={item.value}
              onClick={() => onNav(item.value)}
              className="hover:text-[#daa520] transition"
            >
              {item.label}
            </button>
          ))}

          {/* JOIN COMMUNITY – FORCED REDIRECT */}
          <button
            onClick={openCommunityForm}
            className="bg-[#daa520] hover:bg-[#c49a1c] px-4 py-2 rounded-md transition font-semibold"
          >
            Join Community
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-[#2d6a4f] px-6 pb-4 space-y-4">
          {menu.map((item) => (
            <button
              key={item.value}
              onClick={() => {
                onNav(item.value);
                setOpen(false);
              }}
              className="block w-full text-left text-white text-lg py-2 hover:text-[#daa520]"
            >
              {item.label}
            </button>
          ))}

          {/* MOBILE JOIN COMMUNITY – FORCED REDIRECT */}
          <button
            onClick={() => {
              setOpen(false);
              openCommunityForm();
            }}
            className="block w-full bg-[#daa520] hover:bg-[#c49a1c] px-4 py-2 rounded-md font-semibold text-lg text-center"
          >
            Join Community
          </button>
        </div>
      )}
    </nav>
  );
}
