import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ContactForm from '../components/Home/ContactForm';

const ContactPage: React.FC = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-out-cubic',
            once: true,
            offset: 100,
        });
    }, []);

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center" data-aos="fade-up">
                        <div className="inline-block px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-600 mb-6">
                            GET IN TOUCH
                        </div>
                        <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-8 leading-tight">
                            Contact
                            <br />
                            <span className="font-bold">Heritage Triage</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Ready to expand your business internationally? Share your vision with us and let's create a strategic roadmap for your global success.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <ContactForm />
        </div>
    );
};

export default ContactPage;