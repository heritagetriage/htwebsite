import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { submitContactForm } from "../../services/api";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!privacyAccepted) {
      setError('Please accept the privacy policy to continue.');
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      console.log('Submitting contact form data:', formData);
      const result = await submitContactForm(formData);
      console.log('Contact form submitted successfully:', result);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", company: "", phone: "", message: "" });
      setPrivacyAccepted(false);
    } catch (error) {
      console.error("Contact form submission failed:", error);
      setError(error instanceof Error ? error.message : 'Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="min-h-screen bg-white flex items-center justify-center py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <div className="w-8 h-8 bg-green-500 rounded-full"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              Message <span className="font-bold">Sent</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Thank you for reaching out. We'll get back to you within 24 hours to discuss your international expansion goals.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="inline-flex items-center text-gray-900 font-medium hover:text-gray-600 transition-colors group"
            >
              Send Another Message
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <div className="inline-block px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-600 mb-8">
            GET IN TOUCH
          </div>
          <h1 className="text-5xl md:text-7xl font-light text-gray-900 mb-8 leading-tight">
            Let's Start a
            <br />
            <span className="font-bold">Conversation</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to expand your business internationally? Share your vision with us and let's create a strategic roadmap for your global success.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-start">
          {/* Left Column - Company Info */}
          <div className="space-y-16" data-aos="fade-right">
            <div>
              <h2 className="text-3xl font-light text-gray-900 mb-6">
                heritage<span className="font-bold">triage</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Professional & modern, a consultancy designed to help your business stand out from the rest.
              </p>
            </div>

            {/* Contact Information - Vertical Stack */}
            <div className="space-y-12">
              {/* Contact Us */}
              <div>
                <h4 className="text-gray-500 text-sm font-medium mb-6 uppercase tracking-wider">
                  Contact us:
                </h4>
                <div className="space-y-4">
                  <div>
                    <a
                      href="mailto:adwoa-adubra@heritagetriage.com"
                      className="text-gray-700 hover:text-gray-900 transition-colors block text-base"
                    >
                      info@heritagetriage.com
                    </a>
                  </div>
                  <div>
                    <a
                      href="tel:+14257611874"
                      className="text-gray-700 hover:text-gray-900 transition-colors block text-base"
                    >
                      +1 (425) 761-1874
                    </a>
                  </div>
                </div>
              </div>

              {/* Our Address */}
              <div>
                <h4 className="text-gray-500 text-sm font-medium mb-6 uppercase tracking-wider">
                  Our address:
                </h4>
                <div className="text-gray-700 space-y-2 text-base">
                  <p>Heritage Triage LLC</p>
                  <p>Sammamish, WA 98074</p>
                  <p>United States</p>
                </div>
              </div>

              {/* Our Social */}
              <div>
                <h4 className="text-gray-500 text-sm font-medium mb-6 uppercase tracking-wider">
                  Our social:
                </h4>
                <div className="flex space-x-4">
                  <a
                    href="https://linkedin.com/company/heritage-triage"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors text-gray-600 text-sm font-medium"
                  >
                    in
                  </a>
                  <a
                    href="https://twitter.com/heritagetriage"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors text-gray-600 text-sm font-medium"
                  >
                    tw
                  </a>
                  <a
                    href="https://facebook.com/heritagetriage"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors text-gray-600 text-sm font-medium"
                  >
                    fb
                  </a>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-8">Business Hours</h3>
              <div className="space-y-4 text-gray-600">
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium">Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM PST</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium">Saturday</span>
                  <span>10:00 AM - 2:00 PM PST</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium">Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white" data-aos="fade-left">
            <form onSubmit={handleSubmit} className="space-y-10">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        name: e.target.value,
                      }))
                    }
                    className="w-full px-0 py-5 text-lg bg-transparent border-0 border-b-2 border-gray-200 focus:border-gray-900 focus:ring-0 focus:outline-none transition-colors placeholder-gray-400"
                    placeholder="Your Name *"
                  />
                </div>

                <div className="space-y-2">
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                    className="w-full px-0 py-5 text-lg bg-transparent border-0 border-b-2 border-gray-200 focus:border-gray-900 focus:ring-0 focus:outline-none transition-colors placeholder-gray-400"
                    placeholder="Your Email *"
                  />
                </div>
              </div>

              {/* Company and Phone Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        company: e.target.value,
                      }))
                    }
                    className="w-full px-0 py-5 text-lg bg-transparent border-0 border-b-2 border-gray-200 focus:border-gray-900 focus:ring-0 focus:outline-none transition-colors placeholder-gray-400"
                    placeholder="Company Name"
                  />
                </div>

                <div className="space-y-2">
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        phone: e.target.value,
                      }))
                    }
                    className="w-full px-0 py-5 text-lg bg-transparent border-0 border-b-2 border-gray-200 focus:border-gray-900 focus:ring-0 focus:outline-none transition-colors placeholder-gray-400"
                    placeholder="Phone Number"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <textarea
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      message: e.target.value,
                    }))
                  }
                  className="w-full px-0 py-5 text-lg bg-transparent border-0 border-b-2 border-gray-200 focus:border-gray-900 focus:ring-0 focus:outline-none transition-colors placeholder-gray-400 resize-none"
                  placeholder="Tell us about your international expansion goals and how we can help... *"
                />
              </div>

              {/* Privacy Policy Checkbox */}
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="privacy-policy"
                    checked={privacyAccepted}
                    onChange={(e) => setPrivacyAccepted(e.target.checked)}
                    className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    required
                  />
                  <label htmlFor="privacy-policy" className="text-sm text-gray-600 leading-relaxed">
                    I agree to the processing of personal data and agree to the privacy policy.
                    Heritage Triage is committed to protecting your information. Your information will be used in accordance with the applicable data privacy law, our internal policies and our privacy policy. As Heritage Triage is a global organisation, your information may be stored and processed by Heritage Triage and its affiliates in countries outside your country of residence, but wherever your information is processed, we will handle it with the same care and respect for your privacy.
                  </label>
                </div>
              </div>

              {/* Error Display */}
              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
                  <p className="text-sm">{error}</p>
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-8">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group inline-flex items-center text-lg font-medium text-gray-900 hover:text-gray-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-900 mr-3"></div>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      Send Message
                      <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="mt-20 pt-12 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
            <div className="flex space-x-8 mb-4 md:mb-0">
              <a href="/services" className="hover:text-gray-900 transition-colors">Services</a>
              <a href="/about" className="hover:text-gray-900 transition-colors">About</a>
              <a href="/events" className="hover:text-gray-900 transition-colors">Events</a>
              <a href="/contact" className="hover:text-gray-900 transition-colors">Contact</a>
              <a href="/booking" className="hover:text-gray-900 transition-colors">Book Consultation</a>
            </div>
            <div className="flex space-x-8">
              <a href="/terms" className="hover:text-gray-900 transition-colors">Terms and conditions</a>
              <a href="/privacy" className="hover:text-gray-900 transition-colors">Privacy policy</a>
            </div>
          </div>
          <div className="text-center mt-8 text-gray-400 text-sm">
            © 2025 Heritage Triage LLC. All rights reserved.
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;