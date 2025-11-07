import { ImageWithFallback } from './figma/ImageWithFallback';

interface BlogPost {
  id: number;
  title: string;
  description: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "INFLUENCER 101: HOW SOUTH AFRICAN INFLUENCERS CAN WORK WITH BRANDS",
    description: "Are you an aspiring influencer or content creator? Learn how to collaborate with brands and monetize your social media presence in South Africa.",
    image: "https://images.unsplash.com/photo-1758519289587-addc908423e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdWx0aXJhY2lhbCUyMGJ1c2luZXNzJTIwY29sbGFib3JhdGlvbnxlbnwxfHx8fDE3NjIzMzY0NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 2,
    title: "WORKING AS AN INFLUENCER WITH BRAND SERVICES IN SOUTH AFRICA",
    description: "WORKING AS AN INFLUENCER WITH BRAND SERVICES IN SOUTH AFRICA",
    image: "https://images.unsplash.com/photo-1739298061707-cefee19941b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGJ1c2luZXNzJTIwY29sbGFib3JhdGlvbiUyMG1lZXRpbmd8ZW58MXx8fHwxNzYyMzM1MTkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 3,
    title: "Influencer Marketing in South Africa",
    description: "In the context of Influencer Marketing in South Africa, the diverse cultural landscape and social dynamics offer unique opportunities for brands.",
    image: "https://images.unsplash.com/photo-1653565684985-0b1a64cf7afc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMHBlb3BsZSUyMG1hcmtldGluZyUyMHRlYW18ZW58MXx8fHwxNzYyMzM2NjEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

export function Blog() {
  return (
    <div className="min-h-screen bg-[#2d6a4f]">
      <div className="container mx-auto px-4 py-20 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
            INSIGHTS &  STRATEGIES
          </h1>
          <p className="text-white/90 max-w-4xl mx-auto">
            Discover our insider tips, bold launches & 
            social stories that will leave you inspired. From service innovations to behind-the-scenes sneak peeks, our blog is your ultimate 
            destination for our inside scoop. Get ready to be informed, entertained, & inspired!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div 
              key={post.id} 
              className="group cursor-pointer"
            >
              <div className="mb-4 overflow-hidden rounded-lg">
                <ImageWithFallback 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-white mb-3">
                {post.title}
              </h3>
              <p className="text-white/80">
                {post.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
