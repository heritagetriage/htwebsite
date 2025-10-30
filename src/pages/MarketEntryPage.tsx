import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ArrowRight, Target, Users, Globe, TrendingUp, MapPin, BarChart } from 'lucide-react';

const MarketEntryPage: React.FC = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-out-cubic',
            once: true,
            offset: 100,
        });
    }, []);

    const services = [
        {
            icon: BarChart,
            title: 'Market assessment and target selection',
            description: 'We help you identify where the real opportunities lie by analyzing demand, competition, and the regulatory landscape.'
        },
        {
            icon: Target,
            title: 'Entry strategy and go-to-market roadmap',
            description: 'We turn insights into action with a clear plan for positioning, pricing, and channel strategy.'
        },
        {
            icon: Users,
            title: 'Partner identification and matchmaking',
            description: 'Through our established networks, we connect you with trusted distributors, agents, and local partners who share your values and goals.'
        },
        {
            icon: TrendingUp,
            title: 'Investment facilitation and FDI support',
            description: 'From government relations to site selection and incentive navigation, we guide you through every step of your investment journey.'
        },
        {
            icon: Globe,
            title: 'On-the-ground logistics and protocol',
            description: 'Our in-country teams provide end-to-end support, from registration and customs clearance to travel, meetings, and local coordination.'
        },
        {
            icon: MapPin,
            title: 'Performance tracking and scale-up',
            description: 'Once launched, we help you measure success, adjust strategies, and scale sustainably across regions.'
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <div className="inline-block px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-600 mb-6">
                            MARKET ENTRY & FDI FACILITATION
                        </div>
                        <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-8 leading-tight">
                            Market Entry &
                            <br />
                            <span className="font-bold">FDI Facilitation</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            Every successful market entry begins with a story—one that starts with vision and grows through the right partnerships.
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
                                src="/images/services/market-entry.png"
                                alt="Market Entry & FDI Facilitation"
                                className="w-full rounded-2xl shadow-2xl"
                            />
                            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-lg">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-gray-900">Africa</div>
                                    <div className="text-sm text-gray-600">Focus Markets</div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Content */}
                        <div className="space-y-8" data-aos="fade-left">
                            <h2 className="text-3xl font-bold text-gray-900">
                                Your Gateway to African Markets
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                When a company comes to us, they often have the same goal: "We know there's opportunity in Africa, but we don't know where to begin." At Heritage Triage, we make that beginning clear, structured, and successful.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Our team bridges strategy and execution, combining local intelligence with global business experience to help you confidently expand into Africa's most promising markets; starting with Ghana and Nigeria. We handle the groundwork so your team can focus on what matters most: building relationships, growing your brand, and delivering results.
                            </p>
                        </div>
                    </div>

                    {/* Services Section */}
                    <div className="mb-20">
                        <div className="text-center mb-16" data-aos="fade-up">
                            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
                                Our <span className="font-bold">Services</span>
                            </h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Comprehensive market entry and FDI facilitation services
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {services.map((service, index) => {
                                const IconComponent = service.icon;
                                return (
                                    <div
                                        key={index}
                                        className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300"
                                        data-aos="fade-up"
                                        data-aos-delay={index * 100}
                                    >
                                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                                            <IconComponent className="w-8 h-8 text-blue-600" />
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
                    </div>

                    {/* Philosophy Section */}
                    <div className="bg-gray-50 rounded-3xl p-12 mb-20" data-aos="fade-up">
                        <div className="text-center max-w-4xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                More Than Market Entry
                            </h2>
                            <p className="text-xl text-gray-600 leading-relaxed">
                                At Heritage Triage, we believe market entry isn't just a transaction: it's a transformation. With the right strategy, partners, and guidance, your story in Africa can be one of long-term growth and impact.
                            </p>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 text-center text-white" data-aos="fade-up">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Are you ready to begin yours?
                        </h2>
                        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                            Schedule your free 30-minute discovery call and let's build your roadmap to success together.
                        </p>
                        <a
                            href="/contact"
                            className="inline-flex items-center bg-white text-blue-600 px-10 py-5 rounded-full text-lg font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg"
                        >
                            Schedule Your Discovery Call
                            <ArrowRight className="ml-3 w-5 h-5" />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MarketEntryPage;