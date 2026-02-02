import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import projectImage1 from "../assets/broadend.png";
import projectImage2 from "../assets/fouronewine.png";
import projectImage3 from "../assets/leflora.png";
import projectImage4 from "../assets/mlconsulting.png";
import projectImage5 from "../assets/zaneida.png";
import projectImage6 from "../assets/aronka.png";
import projectImage7 from "../assets/amelz.png";
import projectImage8 from "../assets/bokamoso.png";
import projectImage9 from "../assets/dreamcare.png";
import projectImage10 from "../assets/wordsofspring.png";

const projects = [
  {
    image: projectImage1,
    title: "Broaden Defined",
    description: "Managed and grew the brands social media presence through curated content, visual storytelling, and consistent audience engagement.",
    bgColor: "#2d6a4f"
  },
  {
    image: projectImage2,
    title: "Four One Wine",
    description: "Managed and grew the brands social media presence through curated content, visual storytelling, and consistent audience engagement.",
    bgColor: "#2d6a4f"
  },
  {
    image: projectImage3,
    title: "Leflora Wellness Clinic",
    description: "Strengthened their online presence with consistent branding and educational health content.<br>Helped increase posts, engagement, and overall page activity.Improved the clinics digital visibility and community reach.",
    bgColor: "#2d6a4f"
  },
  {
    image: projectImage4,
    title: "ML Consulting",
    description: "Strengthened online visibility by creating educational and purpose-driven content tailored to retirees and mature audiences.",
    bgColor: "#2d6a4f"
  },
  {
    image: projectImage5,
    title: "Zaneida Global Cosmetics",
    description: "Revamped their visual identity with a clean, luxury-aligned aesthetic.Boosted engagement and follower growth through product-focused content.Enhanced the brands credibility and online presentation.",
    bgColor: "#2d6a4f"
  },
  {
    image: projectImage6,
    title: "Aronka Bophelo",
    description: "Improved engagement and follower growth through curated content.",
    bgColor: "#2d6a4f"
  },
  {
    image: projectImage7,
    title: "Amelz Wellness Clinic",
    description: "Grew the page into a stronger, more engaged and content consistent page which improved visibility.",
    bgColor: "#2d6a4f"
  },
  {
    image: projectImage8,
    title: "Bokamoso BaLona Training",
    description: "Strengthened their online presence with consistent content that aligns with the development and training services the organisation offers.",
    bgColor: "#2d6a4f"
  },
  {
    image: projectImage9,
    title: "Dream Care Wellness",
    description: "Strengthened their online presence with consistent content that aligns with their wellness services.",
    bgColor: "#2d6a4f"
  },
  {
    image: projectImage10,
    title: "Words Of Spring",
    description: "Strengthened their online presence with consistent content that boosts visibility.",
    bgColor: "#2d6a4f"
  },
 
];

export function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const goToPrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
    }),
  };

  return (
    <section id="portfolio" className="py-20 px-5 bg-[#2d6a4f]">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-white/10 text-white rounded-full mb-4">
            Portfolio
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Our Projects
          </h1>
          <p className="text-xl text-white/90 mb-2">
            Real Results for Real Businesses
          </p>
          <p className="text-white/80 max-w-3xl mx-auto">
            Discover some of our latest projects-crafted with creativity, precision, and passion to help businesses grow their social media presence and achieve measurable results.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto relative">
          <div className="relative overflow-hidden min-h-[600px] md:min-h-[500px]">
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute inset-0 w-full"
              >
                <div className="bg-white/5 rounded-xl shadow-2xl overflow-hidden border border-white/10 h-full">
                  <div className="grid md:grid-cols-2 gap-0 h-full">
                    <div className="w-full h-96 md:h-[500px] flex items-center justify-center" style={{ backgroundColor: projects[currentIndex].bgColor }}>
                      <img 
                        src={projects[currentIndex].image} 
                        alt={projects[currentIndex].title} 
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                      <h3 className="mb-4 text-2xl font-bold text-[#daa520] ">{projects[currentIndex].title}</h3>
                      <p className="text-white/80 leading-relaxed">{projects[currentIndex].description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-[#daa520] hover:bg-[#daa520]/90 text-white rounded-full p-3 shadow-lg transition-all"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-[#daa520] hover:bg-[#daa520]/90 text-white rounded-full p-3 shadow-lg transition-all"
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all rounded-full ${
                  index === currentIndex
                    ? "w-12 h-3 bg-white"
                    : "w-3 h-3 bg-white/30 hover:bg-white/60"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
