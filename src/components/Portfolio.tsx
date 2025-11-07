import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import projectImage1 from "figma:asset/2001709a1d49d00af87863e551c2935a48fece69.png";
import projectImage2 from "figma:asset/2d98dad83b66cbc4955cac0cbdf23b680dc5c0c5.png";
import projectImage3 from "figma:asset/2c99fa1928f8010307d14d311d3523aa1fbf5008.png";
import projectImage4 from "figma:asset/a776095cec35a2c61edb625496ed28605f9936c9.png";
import projectImage5 from "figma:asset/9d79f91efd280459c23bd67279d91a1030759c00.png";
import projectImage6 from "figma:asset/86f98d87bf9ef157bbc62f6d3e023291036353af.png";

const projects = [
  {
    image: projectImage1,
    title: "In The Kitchen With Ann",
    description: "Grew Instagram following by 355% (173 to 787 followers) with targeted content strategy and consistent engagement, helping this food content creator expand their reach.",
    bgColor: "#2d6a4f"
  },
  {
    image: projectImage2,
    title: "In The Kitchen With Kamboyisa",
    description: "Transformed social media presence from 122 to 451 followers (270% growth) through authentic storytelling and community building for this culinary brand.",
    bgColor: "#2d6a4f"
  },
  {
    image: projectImage3,
    title: "Tshegofatso Ncube Photography",
    description: "Achieved 293% Instagram growth (154 to 606 followers) with visually stunning content curation and strategic hashtag optimization for this photography business.",
    bgColor: "#2d6a4f"
  },
  {
    image: projectImage4,
    title: "Keto Chef Tshego",
    description: "Increased followers from 121 to 426 (252% growth) by showcasing delicious keto recipes and building an engaged health-focused community.",
    bgColor: "#2d6a4f"
  },
  {
    image: projectImage5,
    title: "Lulu's Box",
    description: "Doubled social media presence from 113 to 278 followers (146% growth) with product-focused content and creative brand storytelling for this gifting business.",
    bgColor: "#2d6a4f"
  },
  {
    image: projectImage6,
    title: "Malesela Mmusi Visual Art",
    description: "Expanded audience from 175 to 406 followers (132% increase) through artistic content curation and gallery-style presentation of this visual artist's work.",
    bgColor: "#2d6a4f"
  }
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
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">
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
                      <h3 className="mb-4 text-white">{projects[currentIndex].title}</h3>
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
