import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ArrowRight, Smartphone, Globe, BarChart3, Target, Zap, Users } from 'lucide-react';

const DigitalStrategyPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init({
            duration: 800,
            easing: 'ease-out-cubic',
            once: true,
            offset: 100,
        });
    }, []);

    const services = [
        {
            icon: Target,
            title: 'Digital transformation strategy',
            description: 'Comprehensive roadmaps that align digital initiatives with business objectives, ensuring technology serves your strategic goals.'
        },
        {
            icon: Smartphone,
            title: 'Multi-platform campaigns',
            description: 'Integrated campaigns across social media, search, display, and emerging platforms that reach your audience where they are.'
        },
        {
            icon: BarChart3,
            title: 'Data-driven optimization',
            description: 'Advanced analytics and performance tracking that turn insights into action, continuously improving campaign effectiveness.'
        },
        {
            icon: Users,
            title: 'Audience development',
            description: 'Strategic audience building and engagement programs that create lasting relationships with your target markets.'
        },
        {
            icon: Globe,
            title: 'Global digital presence',
            description: 'Cross-border digital strategies that navigate cultural nuances and regulatory requirements in international markets.'
        },
        {
            icon: Zap,
            title: 'Emerging technology integration',
            description: 'Stay ahead with AI, automation, and emerging digital tools that give you competitive advantage in your industry.'
        }
    ];

    const stats = [
        { number: '300%', label: 'Average increase in digital engagement' },
        { number: '85%', label: 'Client retention rate' },
        { number: '50+', label: 'Markets served globally' },
        { number: '24/7', label: 'Campaign monitoring and optimization' }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-purple-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <div className="inline-block px-4 py-2 bg-purple-100 rounded-full text-sm font-medium text-purple-600 mb-6">
                            DIGITAL STRATEGY
                        </div>
                        <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-8 leading-tight">
                            Digital
                            <br />
                            <span className="font-bold">Strategy</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            In today's digital-first world, your online presence is your global presence. We create comprehensive digital strategies that connect you with audiences across borders, cultures, and platforms—turning digital touchpoints into meaningful business relationships.
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="text-center"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-gray-600 font-medium">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                        <div className="relative" data-aos="fade-right">
                            <img
                                src="/images/services/digital-strategy.png"
                                alt="Digital Strategy"
                                className="w-full rounded-2xl shadow-2xl"
                            />
                        </div>

                        <div className="space-y-8" data-aos="fade-left">
                            <h2 className="text-3xl font-bold text-gray-900">
                                Where Strategy Meets Innovation
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Digital transformation isn't just about technology—it's about reimagining how you connect with your audience. Our team combines strategic thinking with cutting-edge digital tools to create experiences that engage, convert, and build lasting relationships.
                            </p>
                            <div className="bg-purple-50 p-6 rounded-xl border-l-4 border-purple-500">
                                <p className="text-purple-800 font-medium">
                                    "The best digital strategies don't just follow trends—they anticipate where your audience is going next."
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Services Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                        {services.map((service, index) => {
                            const IconComponent = service.icon;
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
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>

                    {/* Approach Section */}
                    <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-3xl p-12 text-white mb-20" data-aos="fade-up">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl font-bold mb-6">
                                    Our Digital-First Approach
                                </h2>
                                <p className="text-purple-100 text-lg leading-relaxed mb-8">
                                    We don't just create digital campaigns—we build digital ecosystems that work together to amplify your message, engage your audience, and drive measurable results across every touchpoint.
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-center">
                                        <div className="w-2 h-2 bg-purple-300 rounded-full mr-4"></div>
                                        <span className="text-purple-100">Audience-first strategy development</span>
                                    </li>
                                    <li className="flex items-center">
                                        <div className="w-2 h-2 bg-purple-300 rounded-full mr-4"></div>
                                        <span className="text-purple-100">Cross-platform integration and optimization</span>
                                    </li>
                                    <li className="flex items-center">
                                        <div className="w-2 h-2 bg-purple-300 rounded-full mr-4"></div>
                                        <span className="text-purple-100">Real-time performance monitoring and adjustment</span>
                                    </li>
                                    <li className="flex items-center">
                                        <div className="w-2 h-2 bg-purple-300 rounded-full mr-4"></div>
                                        <span className="text-purple-100">Continuous innovation and trend integration</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="relative">
                                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                                    <h3 className="text-xl font-bold mb-4">Digital Strategy Framework</h3>
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <span>Discovery & Analysis</span>
                                            <div className="w-24 h-2 bg-white/20 rounded-full">
                                                <div className="w-full h-full bg-white rounded-full"></div>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span>Strategy Development</span>
                                            <div className="w-24 h-2 bg-white/20 rounded-full">
                                                <div className="w-4/5 h-full bg-white rounded-full"></div>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span>Implementation</span>
                                            <div className="w-24 h-2 bg-white/20 rounded-full">
                                                <div className="w-3/5 h-full bg-white rounded-full"></div>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span>Optimization</span>
                                            <div className="w-24 h-2 bg-white/20 rounded-full">
                                                <div className="w-2/5 h-full bg-white rounded-full"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="bg-gray-50 rounded-3xl p-12 text-center" data-aos="fade-up">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Ready to transform your digital presence?
                        </h2>
                        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                            Let's create a digital strategy that doesn't just keep up with change—it anticipates it. Schedule a consultation to explore how we can amplify your digital impact.
                        </p>
                        <a
                            href="/contact"
                            className="inline-flex items-center bg-purple-600 text-white px-10 py-5 rounded-full text-lg font-semibold hover:bg-purple-700 transition-all duration-300 shadow-lg"
                        >
                            Start Your Digital Transformation
                            <ArrowRight className="ml-3 w-5 h-5" />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DigitalStrategyPage;