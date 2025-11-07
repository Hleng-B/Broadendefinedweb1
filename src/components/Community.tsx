import { useState } from "react";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { CheckCircle } from "lucide-react";

export function Community() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
 
    
    // Step 2
    name: "",
    email: "",
    phone: "",
    business: "",
    
       // Step 1
    platforms: {
      instagram: false,
      facebook: false,
      twitter: false,
      tiktok: false,
      youtube: false,
      notActive: false,
    },
    // Step 3
    socialLinks: {
      tiktok: "",
      instagram: "",
      twitter: "",
      facebook: "",
    },
  });

  const [submitted, setSubmitted] = useState(false);

  const handlePlatformChange = (platform: string) => {
    setFormData({
      ...formData,
      platforms: {
        ...formData.platforms,
        [platform]: !formData.platforms[platform as keyof typeof formData.platforms],
      },
    });
  };

  const handleSocialLinkChange = (platform: string, value: string) => {
    setFormData({
      ...formData,
      socialLinks: {
        ...formData.socialLinks,
        [platform]: value,
      },
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  const isStep1Valid = formData.name && formData.email;
  const isStep2Valid = Object.values(formData.platforms).some(val => val);

  if (submitted) {
    return (
      <section className="min-h-screen py-20 px-4 bg-[#2d6a4f] flex items-center justify-center">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-12 shadow-lg">
            <div className="w-20 h-20 bg-[#daa520] rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-12 w-12 text-white" />
            </div>
            <h2 className="text-4xl font-extrabold text-white mb-4">
              Welcome to the Community!
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Thank you for joining Broaden Defined. We'll be in touch soon with exclusive opportunities
              to collaborate with exciting brands and grow your influence.
            </p>
            <div className="space-y-2 text-white/80">
              <p>✓ Exclusive Brand Collaborations</p>
              <p>✓ Content Creation Tips & Resources</p>
              <p>✓ Community Support & Networking</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen py-20 px-4 bg-[#2d6a4f]">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">
            Join Our Community
          </h1>
          <p className="text-xl text-white/90">
            Connect with brands and grow your influence
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white/5 border border-white/10 rounded-3xl shadow-xl p-8 md:p-12">
          {/* Progress Indicator */}
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center w-full max-w-md">
              {[1, 2, 3].map((step, index) => (
                <div key={step} className="flex items-center flex-1">
                  <div className="relative flex flex-col items-center flex-1">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                        currentStep >= step
                          ? "bg-[#daa520] text-white ring-4 ring-[#daa520]/20"
                          : "bg-gray-200 text-gray-500"
                      }`}
                    >
                      {step}
                    </div>
                  </div>
                  {index < 2 && (
                    <div
                      className={`h-1 flex-1 mx-2 transition-all ${
                        currentStep > step ? "bg-[#daa520]" : "bg-gray-200"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Step 1: Contact Information */}
          {currentStep === 1 && (
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-extrabold text-white mb-2">
                  Tell Us About Yourself
                </h2>
                <p className="text-white/80">We'd love to get to know you better</p>
              </div>

              <div className="space-y-6">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Enter your full name"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="your.email@example.com"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="+27 XX XXX XXXX"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="business">Business/Brand Name (if applicable)</Label>
                  <Input
                    id="business"
                    type="text"
                    value={formData.business}
                    onChange={(e) => handleInputChange("business", e.target.value)}
                    placeholder="Your business or brand name"
                    className="mt-2"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Social Media Platforms */}
          {currentStep === 2 && (
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-extrabold text-white mb-2">
                  Which Social Media Platforms Are You Most Active On?
                </h2>
                <p className="text-white/80">Select all that apply</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3 p-4 rounded-lg border-2 border-white/20 hover:border-[#daa520] transition-all">
                  <Checkbox
                    id="instagram"
                    checked={formData.platforms.instagram}
                    onCheckedChange={() => handlePlatformChange("instagram")}
                    className="mt-1"
                  />
                  <div>
                    <Label htmlFor="instagram" className="cursor-pointer">
                      Instagram
                    </Label>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-4 rounded-lg border-2 border-white/20 hover:border-[#daa520] transition-all">
                  <Checkbox
                    id="facebook"
                    checked={formData.platforms.facebook}
                    onCheckedChange={() => handlePlatformChange("facebook")}
                    className="mt-1"
                  />
                  <div>
                    <Label htmlFor="facebook" className="cursor-pointer">
                      Facebook
                    </Label>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-4 rounded-lg border-2 border-white/20 hover:border-[#daa520] transition-all">
                  <Checkbox
                    id="twitter"
                    checked={formData.platforms.twitter}
                    onCheckedChange={() => handlePlatformChange("twitter")}
                    className="mt-1"
                  />
                  <div>
                    <Label htmlFor="twitter" className="cursor-pointer">
                      Twitter
                    </Label>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-4 rounded-lg border-2 border-white/20 hover:border-[#daa520] transition-all">
                  <Checkbox
                    id="tiktok"
                    checked={formData.platforms.tiktok}
                    onCheckedChange={() => handlePlatformChange("tiktok")}
                    className="mt-1"
                  />
                  <div>
                    <Label htmlFor="tiktok" className="cursor-pointer">
                      TikTok
                    </Label>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-4 rounded-lg border-2 border-white/20 hover:border-[#daa520] transition-all">
                  <Checkbox
                    id="youtube"
                    checked={formData.platforms.youtube}
                    onCheckedChange={() => handlePlatformChange("youtube")}
                    className="mt-1"
                  />
                  <div>
                    <Label htmlFor="youtube" className="cursor-pointer">
                      YouTube
                    </Label>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-4 rounded-lg border-2 border-white/20 hover:border-[#daa520] transition-all">
                  <Checkbox
                    id="notActive"
                    checked={formData.platforms.notActive}
                    onCheckedChange={() => handlePlatformChange("notActive")}
                    className="mt-1"
                  />
                  <div>
                    <Label htmlFor="notActive" className="cursor-pointer">
                      I am not on social media
                    </Label>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Social Media Links */}
          {currentStep === 3 && (
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-extrabold text-white mb-2">
                  Share Your Social Media Links
                </h2>
                <p className="text-white/80">
                  Connect your social profiles so we can better understand your presence
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <Label htmlFor="tiktok">TikTok</Label>
                  <Input
                    id="tiktok"
                    type="text"
                    value={formData.socialLinks.tiktok}
                    onChange={(e) => handleSocialLinkChange("tiktok", e.target.value)}
                    placeholder="https://tiktok.com/@username"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="instagram">Instagram</Label>
                  <Input
                    id="instagram"
                    type="text"
                    value={formData.socialLinks.instagram}
                    onChange={(e) => handleSocialLinkChange("instagram", e.target.value)}
                    placeholder="https://instagram.com/username"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="twitter">Twitter</Label>
                  <Input
                    id="twitter"
                    type="text"
                    value={formData.socialLinks.twitter}
                    onChange={(e) => handleSocialLinkChange("twitter", e.target.value)}
                    placeholder="https://twitter.com/username"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="facebook">Facebook</Label>
                  <Input
                    id="facebook"
                    type="text"
                    value={formData.socialLinks.facebook}
                    onChange={(e) => handleSocialLinkChange("facebook", e.target.value)}
                    placeholder="https://facebook.com/username"
                    className="mt-2"
                  />
                </div>
              </div>

              <div className="bg-white/5 border border-white/20 rounded-lg p-6">
                <p className="text-sm text-white/90">
                  By clicking "Join Community", you'll get exclusive access to:
                </p>
                <ul className="mt-3 space-y-2 text-sm text-white/80">
                  <li>✓ Brand collaboration opportunities</li>
                  <li>✓ Content creator tips and resources</li>
                  <li>✓ Community networking events</li>
                  <li>✓ Industry insights and trends</li>
                </ul>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-12 pt-8 border-t border-white/20">
            <Button
              onClick={handleBack}
              disabled={currentStep === 1}
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-[#2d6a4f]"
            >
              Back
            </Button>

            {currentStep < 3 ? (
              <Button
                onClick={handleNext}
                disabled={currentStep === 1 ? !isStep1Valid : currentStep === 2 ? !isStep2Valid : false}
                size="lg"
                className="bg-[#daa520] hover:bg-[#daa520]/90"
              >
                Next
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                size="lg"
                className="bg-[#daa520] hover:bg-[#daa520]/90"
              >
                Join Community
              </Button>
            )}
          </div>

          {/* Step Counter */}
          <div className="text-center mt-4 text-sm text-white/70">
            {currentStep}/3
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-12 text-center max-w-2xl mx-auto">
          <h3 className="text-2xl font-extrabold text-white mb-4">
            Why Join Broaden Defined Community?
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-white/80">
            <div>
              <div className="text-3xl mb-2">🤝</div>
              <p>Collaborate with leading brands</p>
            </div>
            <div>
              <div className="text-3xl mb-2">📈</div>
              <p>Grow your influence with expert guidance</p>
            </div>
            <div>
              <div className="text-3xl mb-2">💡</div>
              <p>Access exclusive resources and insights</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
