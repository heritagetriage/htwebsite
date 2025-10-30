import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ArrowRight, Zap, Cpu, Globe, TrendingUp, Lightbulb, Settings } from 'lucide-react';

const InnovationEfficiencyPage: React.FC = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-out-cubic',
            once: true,
            offset: 100,
        });
    }, []);

    const innovations = [
        {
            icon: Cpu,
            title: 'AI Integration',
            description: 'Leveraging artificial intelligence to enhance expansion strategies and automate complex processes.'
        },
        {
            icon: Settings,
            title: 'Smart GTM Processes',
            description: 'Building intelligent go-to-market frameworks that adapt to local market conditions.'
        },
        {
            icon: Globe,
            title: 'Dynamic Market Solutions',
            description: 'Specialized focus on emerging economies across Africa, Asia, and Latin America.'
        },
        {
            icon: Lightbulb,
            title: 'Continuous Innovation',
            description: 'Constantly experimenting with new models, tools, and frameworks for better results.'
        },
        {
            icon: Zap,
            title: 'Simplified Complexity',
            description: 'Making complex international expansion processes more manageable and efficient.'
        },
        {
            icon: TrendingUp,
            title: 'Sustainable Results',
            description: 'Focus on solutions that deliver long-term value and competitive advantage.'
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-purple-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <div className="inline-block px-4 py-2 bg-purple-100 rounded-full text-sm font-medium text-purple-600 mb-6">
                            STRATEGIC FOCUS
                        </div>
                        <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-8 leading-tight">
                            Innovation &
                            <br />
                            <span className="font-bold">Efficiency</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            Heritage Triage continuously experiments with new models, tools, and frameworks to help clients achieve faster, more sustainable results. From integrating AI into expansion strategies to building smarter GTM processes, we focus on innovation that simplifies complexity and maximizes efficiency.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                        <div className="relative" data-aos="fade-right">
                            <img
                                src="/images/strategic-focus/innovation-efficiency.png"
                                alt="Innovation & Efficiency"
                                className="w-full rounded-2xl shadow-2xl"
                            />
                        </div>

                        <div className="space-y-8" data-aos="fade-left">
                            <h2 className="text-3xl font-bold text-gray-900">
                                Leading Through Innovation
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                We focus on innovation that simplifies complexity and maximizes efficiency—especially in dynamic markets like Africa and emerging economies across Asia and Latin America. Our approach combines cutting-edge technology with proven methodologies to deliver exceptional results.
                            </p>
                            <div className="bg-purple-50 p-6 rounded-xl border-l-4 border-purple-500">
                                <p className="text-purple-800 font-medium">
                                    "Innovation without efficiency is just complexity. Efficiency without innovation is just status quo. We deliver both."
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Innovation Areas Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                        {innovations.map((innovation, index) => {
                            const IconComponent = innovation.icon;
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
                                        {innovation.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {innovation.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>

                    {/* Focus Markets Section */}
                    <div className="bg-gray-50 rounded-3xl p-12 mb-20" data-aos="fade-up">
                        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
                            Dynamic Markets We Specialize In
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Globe className="w-10 h-10 text-purple-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Africa</h3>
                                <p className="text-gray-600">
                                    Rapidly growing economies with unique opportunities for innovation and digital transformation.
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <TrendingUp className="w-10 h-10 text-purple-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Asia</h3>
                                <p className="text-gray-600">
                                    Emerging Asian markets with dynamic business environments and technological advancement.
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Zap className="w-10 h-10 text-purple-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Latin America</h3>
                                <p className="text-gray-600">
                                    Fast-evolving markets with significant potential for innovative business solutions and growth.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-3xl p-12 text-center text-white" data-aos="fade-up">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Ready to innovate your expansion strategy?
                        </h2>
                        <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
                            Let's explore how cutting-edge innovation and proven efficiency can accelerate your growth in dynamic global markets.
                        </p>
                        <a
                            href="/contact"
                            className="inline-flex items-center bg-white text-purple-600 px-10 py-5 rounded-full text-lg font-semibold hover:bg-purple-50 transition-all duration-300 shadow-lg"
                        >
                            Innovate Your Growth Strategy
                            <ArrowRight className="ml-3 w-5 h-5" />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default InnovationEfficiencyPage;