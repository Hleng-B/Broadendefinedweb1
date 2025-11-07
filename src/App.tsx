import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Process } from "./components/Process";
import { Stats } from "./components/Stats";
import { Testimonials } from "./components/Testimonials";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
import { Portfolio } from "./components/Portfolio";
import { Blog } from "./components/Blog";
import { Community } from "./components/Community";

export default function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "blog" | "community">("home");

  const handleNavigate = (page: "home" | "blog" | "community") => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onNavigate={handleNavigate} />
      {currentPage === "home" ? (
        <main>
          <Hero />
          <Features />
          <Process />
          <Portfolio />
          <Stats />
          <Testimonials />
          <CTA />
        </main>
      ) : currentPage === "blog" ? (
        <main>
          <Blog />
        </main>
      ) : (
        <main>
          <Community />
        </main>
      )}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
