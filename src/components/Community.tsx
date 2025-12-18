import { useState } from "react";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { CheckCircle } from "lucide-react";

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

  const handleInputChange = (field: string, value: string) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  const handlePlatformChange = (platform: string) =>
    setFormData((prev) => ({
      ...prev,
      platforms: {
        ...prev.platforms,
        [platform]: !prev.platforms[platform as keyof typeof prev.platforms],
      },
    }));

  const handleSocialLinkChange = (platform: string, value: string) =>
    setFormData((prev) => ({
      ...prev,
      socialLinks: { ...prev.socialLinks, [platform]: value },
    }));

  const handleNext = () => setCurrentStep((s) => Math.min(s + 1, 3));
  const handleBack = () => setCurrentStep((s) => Math.max(s - 1, 1));

  const handleSubmit = async () => {
    const payload = {
      fullName: formData.name,
      email: formData.email,
      contactNumber: formData.phone,
      businessName: formData.business,
      mostActivePlatform: Object.entries(formData.platforms)
        .filter(([_, v]) => v)
        .map(([k]) => k)
        .join(", "),
      ...formData.socialLinks,
    };

    await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    setSubmitted(true);
  };

  const isStep1Valid = formData.name && formData.email;
  const isStep2Valid = Object.values(formData.platforms).some(Boolean);

  if (submitted) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-[#2d6a4f]">
        <div className="text-center">
          <CheckCircle className="h-16 w-16 text-[#daa520] mx-auto mb-4" />
          <h2 className="text-3xl text-white font-bold">
            Welcome to the Community!
          </h2>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen py-20 px-4 bg-[#2d6a4f]">
      <div className="max-w-3xl mx-auto bg-white/5 p-8 rounded-3xl">

        {/* STEP 1 */}
        {currentStep === 1 && (
          <>
            <Label className="text-white">Full Name *</Label>
            <Input onChange={(e) => handleInputChange("name", e.target.value)} />

            <Label className="text-white mt-4">Email *</Label>
            <Input onChange={(e) => handleInputChange("email", e.target.value)} />

            <Label className="text-white mt-4">Phone</Label>
            <Input onChange={(e) => handleInputChange("phone", e.target.value)} />

            <Label className="text-white mt-4">Business</Label>
            <Input onChange={(e) => handleInputChange("business", e.target.value)} />
          </>
        )}

        {/* STEP 2 */}
        {currentStep === 2 && (
          <div className="grid grid-cols-2 gap-4">
            {Object.keys(formData.platforms).map((platform) => (
              <div key={platform} className="flex items-center gap-2">
                <Checkbox
                  checked={formData.platforms[platform as keyof typeof formData.platforms]}
                  onCheckedChange={() => handlePlatformChange(platform)}
                />
                <Label className="text-white capitalize">{platform}</Label>
              </div>
            ))}
          </div>
        )}

        {/* STEP 3 */}
        {currentStep === 3 && (
          <>
            {Object.keys(formData.socialLinks).map((platform) => (
              <div key={platform} className="mt-4">
                <Label className="text-white capitalize">{platform}</Label>
                <Input
                  placeholder={`https://${platform}.com/username`}
                  onChange={(e) =>
                    handleSocialLinkChange(platform, e.target.value)
                  }
                />
              </div>
            ))}
          </>
        )}

        {/* NAVIGATION */}
        <div className="flex justify-between mt-8">
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
            <Button onClick={handleSubmit}>Join Community</Button>
          )}
        </div>

      </div>
    </section>
  );
}
