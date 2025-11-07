import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import testimonial1 from "figma:asset/09d736e451038a37c904ecb0910b60ef448a03a5.png";
import testimonial2 from "figma:asset/fdd61d7f928280f36e5f0e3a878b0b1a7fe5bf6a.png";
import testimonial3 from "figma:asset/02aea8accbbbda4e0223a0f1e26f84cd91b8006e.png";
import testimonial4 from "figma:asset/c931160e162d1191581efaa1ebcd25382d216d49.png";
import testimonial5 from "figma:asset/3cfa70002231b6618c4d892e7c7336c2bf21da13.png";
import testimonial6 from "figma:asset/5030fad40cae3aff18e88ff06c899dbc7ca7afce.png";

const testimonials = [
  {
    image: testimonial1,
    alt: "Client Testimonial - First Brand Campaign"
  },
  {
    image: testimonial2,
    alt: "Client Testimonial - Second Brand Campaign"
  },
  {
    image: testimonial3,
    alt: "Client Testimonial - Third Brand Campaign"
  },
  {
    image: testimonial4,
    alt: "Client Testimonial - Five Brand Campaigns"
  },
  {
    image: testimonial5,
    alt: "Client Testimonial - Fifth Brand Campaign"
  },
  {
    image: testimonial6,
    alt: "Client Testimonial - Sixth Brand Campaign"
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const goToPrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
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
    <section className="py-20 px-4 bg-[#2d6a4f]">
      <div className="container mx-auto max-w-6xl text-center">
        <div className="inline-block px-4 py-2 bg-white/10 text-white rounded-full mb-4">
          Testimonials
        </div>
        <h2 className="text-5xl font-extrabold text-white mb-2">What Our Clients Say</h2>
        <p className="text-white/80 mb-12">A glimpse at some of our amazing clients.</p>

        <div className="max-w-4xl mx-auto relative">
          <div className="relative overflow-hidden min-h-[500px]">
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
                <div className="bg-white/5 rounded-2xl shadow-2xl overflow-hidden border border-white/10 h-full flex items-center justify-center">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].alt} 
                    className="w-full h-auto object-contain max-h-[500px]"
                  />
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-[#daa520] hover:bg-[#daa520]/90 text-white rounded-full p-3 shadow-lg transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-[#daa520] hover:bg-[#daa520]/90 text-white rounded-full p-3 shadow-lg transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all rounded-full ${
                  index === currentIndex
                    ? "w-12 h-3 bg-white"
                    : "w-3 h-3 bg-white/30 hover:bg-white/60"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}