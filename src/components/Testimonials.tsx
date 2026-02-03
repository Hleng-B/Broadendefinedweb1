const testimonials = [
  {
    quote: "' I am sure I am allowed to say WOW.I am impressed beyond my expectations, I never expected such great work for my daughter's page. Well done Broaden Defined.'",
    name: "Coach Tshepiso",
  },
  {
    quote: "'I don't think all these big brands I have collaborated with would have recognised me if it was not for Broaden Defined'",
    name: "Anelisa",
  },
  {
    quote: "'What I love about Broaden Defined is we get authentic followers and engagement'",
    name: "Moreen",
  },
  {
    quote: "'You have helped me to grow my presence online, thank you Broaden Defined!'",
    name: "Zanele Dlamini",
  },
  {
    quote: "'I still remember when I got my first client on Instagram,I was over the moon. My account being managed by Broaden Defined made this happen.'",
    name: "SP Unique Creations",
  },
  {
    quote: "You never disappoint, great job! I love the colour, the wording, the pictures, everything is amazing.",
    name: "Coach T",
  },
  {
    quote: "After just a day of posting, I saw an increase of +14 followers on my profile. I am a satisfied customer!",
    name: "Influencer D",
  },
  {
    quote: "I see the growth and engagement. Thank you Broaden Defined!",
    name: "Entrepreneur S",
  },
  {
    quote: "The team at Broaden Defined completely transformed our social media presence. Our engagement has skyrocketed!",
    name: "Business Owner M",
  },
  {
    quote: "Professional, creative, and results-driven. They understand our brand voice perfectly and deliver exceptional content.",
    name: "Marketing Manager L",
  },
  {
    quote: "Best investment we made for our brand. The ROI speaks for itself - 200% increase in leads from social media!",
    name: "CEO K",
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
