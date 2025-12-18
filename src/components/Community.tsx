import { useState } from "react";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { CheckCircle } from "lucide-react";

/* 🔗 GOOGLE APPS SCRIPT ENDPOINT */
const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwDLWgLKA931sl-QDRR3fDtCf7EQIZ2D4tCw9L3T--FhI3KpzG5lbPzyLNds2_pDFLM/exec";

export function Community() {
  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    platforms: {
      instagram: false,
      facebook: false,
      twitter: false,
      tiktok: false,
      youtube: false,
      notActive: false,
    },
    socialLinks: {
      tiktok: "",
      instagram: "",
      twitter: "",
      facebook: "",
    },
  });

  const handlePlatformChange = (platform: string) => {
    setFormData((prev) => ({
      ...prev,
      platforms: {
        ...prev.platforms,
        [platform]: !prev.platforms[platform as keyof typeof prev.platforms],
      },
    }));
  };

  const handleSocialLinkChange = (platform: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      socialLinks: {
        ...prev.socialLinks,
        [platform]: value,
      },
    }));
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleNext = () => currentStep < 3 && setCurrentStep(currentStep + 1);
  const handleBack = () => currentStep > 1 && setCurrentStep(currentStep - 1);

  /* ✅ SUBMIT TO GOOGLE APPS SCRIPT */
  const handleSubmit = async () => {
    const payload = {
      fullName: formData.name,
      email: formData.email,
      contactNumber: formData.phone,
      businessName: formData.business,

      mostActivePlatform: Object.entries(formData.platforms)
        .filter(([_, value]) => value)
        .map(([key]) => key)
        .join(", "),

      tiktok: formData.socialLinks.tiktok,
      instagram: formData.socialLinks.instagram,
      twitter: formData.socialLinks.twitter,
      facebook: formData.socialLinks.facebook,
    };

    try {
      await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      setSubmitted(true);
    } catch (error) {
      console.error("Submission error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  const isStep1Valid = formData.name && formData.email;
  const isStep2Valid = Object.values(formData.platforms).some(Boolean);

  /* ✅ SUCCESS SCREEN */
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
              Thank you for joining Broaden Defined. We'll be in touch soon.
            </p>
          </div>
        </div>
      </section>
    );
  }

  /* ✅ FORM UI (UNCHANGED) */
  return (
    <section className="min-h-screen py-20 px-4 bg-[#2d6a4f]">
      <div className="container mx-auto max-w-4xl">

        {/* HEADER */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-white mb-4">
            Join Our Community
          </h1>
          <p className="text-xl text-white/90">
            Connect with brands and grow your influence
          </p>
        </div>

        {/* FORM CARD */}
        <div className="bg-white/5 border border-white/10 rounded-3xl shadow-xl p-8 md:p-12">

          {/* STEPS */}
          {currentStep === 1 && (
            <>
              <Label className="text-white">Full Name *</Label>
              <Input value={formData.name} onChange={(e) => handleInputChange("name", e.target.value)} />

              <Label className="text-white mt-4">Email *</Label>
              <Input value={formData.email} onChange={(e) => handleInputChange("email", e.target.value)} />

              <Label className="text-white mt-4">Phone</Label>
              <Input value={formData.phone} onChange={(e) => handleInputChange("phone", e.target.value)} />

              <Label className="text-white mt-4">Business</Label>
              <Input value={formData.business} onChange={(e) => handleInputChange("business", e.target.value)} />
            </>
          )}

          {/* NAV BUTTONS */}
          <div className="flex justify-between mt-10">
            <Button onClick={handleBack} disabled={currentStep === 1}>
              Back
            </Button>

            {currentStep < 3 ? (
              <Button
                onClick={handleNext}
                disabled={currentStep === 1 ? !isStep1Valid : !isStep2Valid}
              >
                Next
              </Button>
            ) : (
              <Button onClick={handleSubmit}>
                Join Community
              </Button>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
