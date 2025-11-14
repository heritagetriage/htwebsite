import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ArrowRight, Monitor, ShoppingCart, Globe, Palette, Settings, CheckCircle } from 'lucide-react';

const WebsiteDesignPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init({
            duration: 800,
            easing: 'ease-out-cubic',
            once: true,
            offset: 100,
        });
    }, []);

    const solutions = [
        {
            icon: Monitor,
            title: 'Corporate & Portfolio Websites',
            description: 'Showcase your brand\'s story, values, and offerings with a professional corporate website that reflects credibility and innovation. We design clean, responsive sites that make navigation effortless and communication effective.'
        },
        {
            icon: ShoppingCart,
            title: 'E-Commerce Platforms',
            description: 'Transform your business with a modern online store designed for sales growth and user convenience. From intuitive product catalogs to secure payment gateways, we help you sell smarter with an interface your customers will love.'
        },
        {
            icon: Globe,
            title: 'Web Applications & Portals',
            description: 'We develop dynamic web applications and internal portals that streamline business operations, from employee dashboards to client service portals — tailored to your workflow and integrated with your ERP or CRM systems.'
        },
        {
            icon: Palette,
            title: 'UI/UX Design',
            description: 'Our design philosophy focuses on clarity, usability, and brand harmony. Every pixel serves a purpose — ensuring your website not only looks stunning but also provides a frictionless experience that keeps users coming back.'
        },
        {
            icon: Settings,
            title: 'Maintenance & Optimization',
            description: 'A great website isn\'t built once — it\'s continuously improved. We provide ongoing maintenance, speed optimization, and content updates to ensure your site remains fast, secure, and SEO-friendly.'
        }
    ];

    const features = [
        'Custom-built for your brand: No templates, no shortcuts — every site is crafted from the ground up.',
        'Responsive on all devices: Seamlessly adapts to desktop, tablet, and mobile.',
        'SEO-ready: Structured for visibility and discoverability on major search engines.',
        'Integrated with business tools: Connects with CRMs, analytics, payment gateways, and more.',
        'Scalable and future-proof: Built with modern frameworks to support your growth.'
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-purple-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <div className="inline-block px-4 py-2 bg-purple-100 rounded-full text-sm font-medium text-purple-600 mb-6">
                            🌍 WEBSITE DESIGN & DEVELOPMENT
                        </div>
                        <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-8 leading-tight">
                            Build a Digital Presence
                            <br />
                            <span className="font-bold">That Works for You</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            At Heritage Triage, we don't just design websites — we craft digital experiences that connect, engage, and convert. Your website is often the first impression people have of your brand, and we make it count by combining creativity, functionality, and performance in every line of code.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                        {/* Left Column - Image */}
                        <div className="relative" data-aos="fade-right">
                            <img
                                src="/images/newimages/websitedesign.jpg"
                                alt="Website Design & Development"
                                className="w-full rounded-2xl shadow-2xl"
                            />
                            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-lg">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-gray-900">100%</div>
                                    <div className="text-sm text-gray-600">Custom Built</div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Content */}
                        <div className="space-y-8" data-aos="fade-left">
                            <h2 className="text-3xl font-bold text-gray-900">
                                Custom Solutions for Every Need
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Whether you need a sleek company profile, an interactive web portal, or a fully integrated e-commerce platform, we deliver custom-built solutions that align perfectly with your goals and audience.
                            </p>
                        </div>
                    </div>

                    {/* Solutions Section */}
                    <div className="mb-20">
                        <div className="text-center mb-16" data-aos="fade-up">
                            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
                                💻 Our Web Development <span className="font-bold">Solutions</span>
                            </h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Comprehensive web development services tailored to your business needs
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {solutions.map((solution, index) => {
                                const IconComponent = solution.icon;
                                return (
                                    <div
                                        key={index}
                                        className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300"
                                        data-aos="fade-up"
                                        data-aos-delay={index * 100}
                                    >
                                        <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                                            <IconComponent className="w-8 h-8 text-purple-600" />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-4">
                                            {solution.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {solution.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Features Section */}
                    <div className="bg-gray-50 rounded-3xl p-12 mb-20" data-aos="fade-up">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                🌟 What Makes Our Websites Stand Out
                            </h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-start">
                                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                                    <span className="text-lg text-gray-600">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-12 text-center text-white" data-aos="fade-up">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            🚀 Bring Your Brand to Life Online
                        </h2>
                        <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                            Your website is your digital home — make it stand out. Let's design a platform that reflects your vision, builds trust, and drives real results.
                        </p>
                        <a
                            href="/contact"
                            className="inline-flex items-center bg-white text-blue-600 px-10 py-5 rounded-full text-lg font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg"
                        >
                            Contact Us Today
                            <ArrowRight className="ml-3 w-5 h-5" />
                        </a>
                        <p className="text-blue-200 mt-4 text-sm">
                            Start your website project and transform your digital presence.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WebsiteDesignPage;