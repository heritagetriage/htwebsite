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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await submitContactForm(formData);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", company: "", phone: "", message: "" });
    } catch (error) {
      console.error("Error submitting contact form:", error);
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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-block px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-600 mb-8">
            GET IN TOUCH
          </div>
          <h1 className="text-5xl md:text-7xl font-light text-gray-900 mb-8 leading-tight">
            Let's Start a
            <br />
            <span className="font-bold">Conversation</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Ready to expand your business internationally? Share your vision with us and let's create a strategic roadmap for your global success.
          </p>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Name and Email Row */}
            <div className="grid md:grid-cols-2 gap-8">
              <div>
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
                  className="w-full px-0 py-4 text-lg bg-transparent border-0 border-b-2 border-gray-200 focus:border-gray-900 focus:ring-0 focus:outline-none transition-colors placeholder-gray-400"
                  placeholder="Your Name *"
                />
              </div>

              <div>
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
                  className="w-full px-0 py-4 text-lg bg-transparent border-0 border-b-2 border-gray-200 focus:border-gray-900 focus:ring-0 focus:outline-none transition-colors placeholder-gray-400"
                  placeholder="Your Email *"
                />
              </div>
            </div>

            {/* Company and Phone Row */}
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      company: e.target.value,
                    }))
                  }
                  className="w-full px-0 py-4 text-lg bg-transparent border-0 border-b-2 border-gray-200 focus:border-gray-900 focus:ring-0 focus:outline-none transition-colors placeholder-gray-400"
                  placeholder="Company Name"
                />
              </div>

              <div>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      phone: e.target.value,
                    }))
                  }
                  className="w-full px-0 py-4 text-lg bg-transparent border-0 border-b-2 border-gray-200 focus:border-gray-900 focus:ring-0 focus:outline-none transition-colors placeholder-gray-400"
                  placeholder="Phone Number"
                />
              </div>
            </div>

            {/* Message */}
            <div>
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
                className="w-full px-0 py-4 text-lg bg-transparent border-0 border-b-2 border-gray-200 focus:border-gray-900 focus:ring-0 focus:outline-none transition-colors placeholder-gray-400 resize-none"
                placeholder="Tell us about your international expansion goals and how we can help... *"
              />
            </div>

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

        {/* Contact Information */}
        <div className="mt-20 pt-16 border-t border-gray-200" data-aos="fade-up">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">
                Email Us
              </h3>
              <a
                href="mailto:adwoa-adubra@heritagetriage.com"
                className="text-lg text-gray-900 hover:text-gray-600 transition-colors"
              >
                adwoa-adubra@heritagetriage.com
              </a>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">
                Call Us
              </h3>
              <a
                href="tel:+14257611874"
                className="text-lg text-gray-900 hover:text-gray-600 transition-colors"
              >
                +1 (425) 761-1874
              </a>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">
                Visit Us
              </h3>
              <p className="text-lg text-gray-900">
                Sammamish, WA 98074
                <br />
                United States
              </p>
            </div>
          </div>
        </div>

        {/* Business Hours */}
        <div className="mt-16 text-center" data-aos="fade-up">
          <div className="inline-block bg-gray-50 rounded-2xl p-8">
            <h3 className="text-lg font-bold text-gray-900 mb-6">Business Hours</h3>
            <div className="space-y-2 text-gray-600">
              <div className="flex justify-between items-center min-w-[280px]">
                <span>Monday - Friday</span>
                <span>9:00 AM - 6:00 PM PST</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Saturday</span>
                <span>10:00 AM - 2:00 PM PST</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Sunday</span>
                <span>Closed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;