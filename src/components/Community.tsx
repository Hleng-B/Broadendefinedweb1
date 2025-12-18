import { useState } from "react";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
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

  /* ---------- HANDLERS ---------- */

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handlePlatformChange = (platform: string) => {
    setFormData((prev) => ({
      ...prev,
      platforms: {
        ...prev.platforms,
        [platform]:
          !prev.platforms[platform as keyof typeof prev.platforms],
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

  const handleNext = () => currentStep < 3 && setCurrentStep((s) => s + 1);
  const handleBack = () => currentStep > 1 && setCurrentStep((s) => s - 1);

  /* ---------- SUBMIT ---------- */

  const handleSubmit = async () => {
    const payload = {
      fullName: formData.name,
      email: formData.email,
      contactNumber: formData.phone,
      businessName: formData.business,
      platforms: formData.platforms,
      socialLinks: formData.socialLinks,
    };

    try {
      await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      setSubmitted(true);
    } catch (err) {
      alert("Submission failed. Please try again.");
      console.error(err);
    }
  };

  /* ---------- VALIDATION ---------- */

  const isStep1Valid = formData.name.trim() && formData.email.trim();
  const isStep2Valid =
    currentStep !== 2 ||
    Object.values(formData.platforms).some(Boolean);

  /* ---------- SUCCESS ---------- */

  if (submitted) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-[#2d6a4f] px-4">
        <div className="bg-white/5 border border-white/10 rounded-3xl p-12 text-center max-w-xl">
          <div className="w-20 h-20 bg-[#daa520] rounded-full mx-auto flex items-center justify-center mb-6">
            <CheckCircle className="h-12 w-12 text-white" />
          </div>
          <h2 className="text-4xl font-extrabold text-white mb-4">
            Welcome to the Community!
          </h2>
          <p className="text-white/90">
            Thank you for joining Broaden Defined. We'll be in touch soon.
          </p>
        </div>
      </section>
    );
  }

  /* ---------- FORM ---------- */

  return (
    <section className="min-h-screen bg-[#2d6a4f] py-20 px-4">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-5xl font-extrabold text-white text-center mb-4">
          Join Our Community
        </h1>
        <p className="text-white/80 text-center mb-12">
          Connect with brands and grow your influence
        </p>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-10">

          {/* STEP 1 */}
          {currentStep === 1 && (
            <div className="space-y-4">
              <Label className="text-white">Full Name *</Label>
              <Input value={formData.name} onChange={(e) => handleInputChange("name", e.target.value)} />

              <Label className="text-white">Email *</Label>
              <Input value={formData.email} onChange={(e) => handleInputChange("email", e.target.value)} />

              <Label className="text-white">Phone</Label>
              <Input value={formData.phone} onChange={(e) => handleInputChange("phone", e.target.value)} />

              <Label className="text-white">Business</Label>
              <Input value={formData.business} onChange={(e) => handleInputChange("business", e.target.value)} />
            </div>
          )}

          {/* STEP 2 */}
          {currentStep === 2 && (
            <div className="space-y-4">
              <p className="text-white mb-2">Platforms you are active on:</p>

              {Object.keys(formData.platforms).map((platform) => (
                <div key={platform} className="flex items-center gap-3">
                  <Checkbox
                    checked={formData.platforms[platform as keyof typeof formData.platforms]}
                    onCheckedChange={() => handlePlatformChange(platform)}
                  />
                  <Label className="text-white capitalize">
                    {platform.replace("notActive", "Not Active")}
                  </Label>
                </div>
              ))}
            </div>
          )}

          {/* STEP 3 */}
          {currentStep === 3 && (
            <div className="space-y-4">
              <Label className="text-white">TikTok</Label>
              <Input value={formData.socialLinks.tiktok} onChange={(e) => handleSocialLinkChange("tiktok", e.target.value)} />

              <Label className="text-white">Instagram</Label>
              <Input value={formData.socialLinks.instagram} onChange={(e) => handleSocialLinkChange("instagram", e.target.value)} />

              <Label className="text-white">Twitter</Label>
              <Input value={formData.socialLinks.twitter} onChange={(e) => handleSocialLinkChange("twitter", e.target.value)} />

              <Label className="text-white">Facebook</Label>
              <Input value={formData.socialLinks.facebook} onChange={(e) => handleSocialLinkChange("facebook", e.target.value)} />
            </div>
          )}

          {/* NAVIGATION */}
          <div className="flex justify-between mt-10">
            <Button onClick={handleBack} disabled={currentStep === 1}>
              Back
            </Button>

            {currentStep < 3 ? (
              <Button onClick={handleNext} disabled={currentStep === 1 ? !isStep1Valid : !isStep2Valid}>
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
