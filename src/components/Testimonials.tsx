const testimonials = [
  {
    quote: "' I am sure I am allowed to say WOW.I am impressed beyond my expectations, I never expected such great work for my daughter's page. Well done Z.'",
    name: "Coach Tshepiso",
  },
  {
    quote: "'I don't think all these big brands I have collaborated with would have recognised me if it was not for Zanele'",
    name: "Anelisa",
  },
  {
    quote: "'What I love about Zanele is we get authentic followers and engagement'",
    name: "Moreen",
  },
  {
    quote: "'You have helped me to grow my presence online, thank you Zanele'",
    name: "Zanele Dlamini",
  },
  {
    quote: "'I still remember when I got my first client on Instagram,I was over the moon. My account being managed by Zanele made this happen.'",
    name: "SP Unique Creations",
  },
  
];

export function Testimonials() {
  return (
    <section className="py-20 px-4 bg-[#2d6a4f]">
      <div className="container mx-auto max-w-6xl text-center">
        <div className="inline-block px-4 py-2 bg-white/10 text-white rounded-full mb-4">
          Testimonials
        </div>
        <h2 className="text-5xl font-bold text-white mb-2">What Our Clients Say</h2>
        <p className="text-white/80 mb-12">A glimpse at some of our amazing clients.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 flex flex-col"
            >
              <p className="text-white mb-6 flex-grow italic">
                "{testimonial.quote}"
              </p>
              <div className="mt-auto">
                <p className="text-[#daa520] mb-1">
                  {testimonial.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
