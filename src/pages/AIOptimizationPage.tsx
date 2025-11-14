import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ArrowRight, Brain, Target, Shield, Zap, Users, CheckCircle } from 'lucide-react';

const AIOptimizationPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init({
            duration: 800,
            easing: 'ease-out-cubic',
            once: true,
            offset: 100,
        });
    }, []);

    const principles = [
        {
            icon: Target,
            title: 'Clarity',
            description: 'We bring clear understanding to complex AI challenges, helping you see the path forward with confidence.'
        },
        {
            icon: Brain,
            title: 'Strategy',
            description: 'Our strategic approach ensures AI initiatives align with your business objectives and deliver measurable value.'
        },
        {
            icon: Shield,
            title: 'Structure',
            description: 'We provide robust frameworks and methodologies that ensure sustainable and scalable AI implementation.'
        },
        {
            icon: Zap,
            title: 'Execution',
            description: 'From strategy to deployment, we deliver results through disciplined execution and continuous optimization.'
        }
    ];

    const expertise = [
        'Cybersecurity and AI risk management',
        'Life sciences and healthcare applications',
        'Retail and e-commerce optimization',
        'AI ethics and responsible implementation',
        'Cross-industry best practices and frameworks'
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-indigo-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <div className="inline-block px-4 py-2 bg-indigo-100 rounded-full text-sm font-medium text-indigo-600 mb-6">
                            🤖 AI OPTIMIZATION SERVICES
                        </div>
                        <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-8 leading-tight">
                            AI Strategy with
                            <br />
                            <span className="font-bold">Purpose & Clarity</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            Clarity, Strategy, Structure, and Execution — for business leaders navigating AI with purpose.
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
                                src="/images/newimages/ai.jpg"
                                alt="AI Optimization Strategy"
                                className="w-full rounded-2xl shadow-2xl"
                            />
                            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-lg">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-gray-900">AI</div>
                                    <div className="text-sm text-gray-600">Excellence</div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Content */}
                        <div className="space-y-8" data-aos="fade-left">
                            <h2 className="text-3xl font-bold text-gray-900">
                                More Than Implementation
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Heritage Triage delivers more than implementation—we bring clarity, alignment, and momentum to every phase of your AI journey.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Built with input from experts in cybersecurity, life sciences, retail, and AI ethics, our offerings are grounded in real-world experience and guided by our proprietary BridgePair™ model, ensuring both strategic clarity and execution excellence.
                            </p>
                        </div>
                    </div>

                    {/* Core Principles Section */}
                    <div className="mb-20">
                        <div className="text-center mb-16" data-aos="fade-up">
                            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
                                Our Core <span className="font-bold">Principles</span>
                            </h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Four foundational pillars that guide every AI optimization initiative
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {principles.map((principle, index) => {
                                const IconComponent = principle.icon;
                                return (
                                    <div
                                        key={index}
                                        className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300 text-center"
                                        data-aos="fade-up"
                                        data-aos-delay={index * 100}
                                    >
                                        <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                            <IconComponent className="w-8 h-8 text-indigo-600" />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-4">
                                            {principle.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {principle.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Expertise Section */}
                    <div className="bg-gray-50 rounded-3xl p-12 mb-20" data-aos="fade-up">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                🎯 Industry Expertise
                            </h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Our AI strategies are informed by deep expertise across multiple industries and domains
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                            {expertise.map((item, index) => (
                                <div key={index} className="flex items-start">
                                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                                    <span className="text-lg text-gray-600">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* BridgePair Model Section */}
                    <div className="bg-indigo-50 rounded-3xl p-12 mb-20" data-aos="fade-up">
                        <div className="text-center max-w-4xl mx-auto">
                            <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Users className="w-10 h-10 text-indigo-600" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                The BridgePair™ Model
                            </h2>
                            <p className="text-xl text-gray-600 leading-relaxed">
                                Our proprietary methodology that bridges the gap between AI strategy and execution, ensuring both strategic clarity and operational excellence throughout your AI transformation journey.
                            </p>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-12 text-center text-white" data-aos="fade-up">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            🚀 Navigate AI with Purpose
                        </h2>
                        <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                            Ready to transform your business with strategic AI implementation? Let's bring clarity and momentum to your AI journey.
                        </p>
                        <a
                            href="/contact"
                            className="inline-flex items-center bg-white text-blue-600 px-10 py-5 rounded-full text-lg font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg"
                        >
                            Start Your AI Strategy
                            <ArrowRight className="ml-3 w-5 h-5" />
                        </a>
                        <p className="text-blue-200 mt-4 text-sm">
                            Schedule a consultation to explore how AI can drive your business forward.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AIOptimizationPage;