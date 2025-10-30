import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ArrowRight, Globe, TrendingUp, Users, MapPin, Briefcase, CheckCircle } from 'lucide-react';

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
            icon: Globe,
            title: 'Market research & analysis',
            description: 'Comprehensive market intelligence that identifies opportunities, assesses competition, and validates your business case for expansion.'
        },
        {
            icon: TrendingUp,
            title: 'Entry strategy development',
            description: 'Customized market entry strategies that align with your business objectives and maximize your chances of success in new markets.'
        },
        {
            icon: Users,
            title: 'Stakeholder mapping & engagement',
            description: 'Identify and connect with key stakeholders, partners, and decision-makers who can accelerate your market entry.'
        },
        {
            icon: MapPin,
            title: 'Regulatory navigation',
            description: 'Expert guidance through complex regulatory environments, ensuring compliance and smooth market entry processes.'
        },
        {
            icon: Briefcase,
            title: 'FDI facilitation',
            description: 'End-to-end support for foreign direct investment processes, from initial planning to successful implementation.'
        },
        {
            icon: CheckCircle,
            title: 'Launch execution',
            description: 'Coordinated launch campaigns that create market awareness and establish your presence with impact and credibility.'
        }
    ];

    const stats = [
        { number: '', label: 'Markets successfully entered' },
        { number: '95%', label: 'Client success rate' },
        { number: '$2B+', label: 'FDI facilitated' },
        { number: '25+', label: 'Countries served' }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <div className="inline-block px-4 py-2 bg-blue-100 rounded-full text-sm font-medium text-blue-600 mb-6">
                            MARKET ENTRY & FDI FACILITATION
                        </div>
                        <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-8 leading-tight">
                            Market Entry &
                            <br />
                            <span className="font-bold">FDI Facilitation</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            Expanding into new markets requires more than ambition—it demands strategic insight, local expertise, and flawless execution. We guide organizations through every step of market entry, from initial research to successful launch and beyond.
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
                                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
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
                                src="/images/services/market-entry.png"
                                alt="Market Entry & FDI Facilitation"
                                className="w-full rounded-2xl shadow-2xl"
                            />
                        </div>

                        <div className="space-y-8" data-aos="fade-left">
                            <h2 className="text-3xl font-bold text-gray-900">
                                Your Gateway to Global Markets
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Every market has its unique dynamics, cultural nuances, and regulatory requirements. Our team combines deep local knowledge with global best practices to create market entry strategies that work—reducing risk, accelerating timelines, and maximizing your investment returns.
                            </p>
                            <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
                                <p className="text-blue-800 font-medium">
                                    "Success in new markets isn't about luck—it's about preparation, partnerships, and precise execution."
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

                    {/* Process Section */}
                    <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-12 text-white mb-20" data-aos="fade-up">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4">
                                Our Market Entry Process
                            </h2>
                            <p className="text-blue-100 text-lg max-w-3xl mx-auto">
                                A proven methodology that transforms market opportunities into business success
                            </p>
                        </div>
                        <div className="grid md:grid-cols-5 gap-8">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white font-bold text-xl">1</span>
                                </div>
                                <h3 className="font-bold mb-2">Discover</h3>
                                <p className="text-blue-100 text-sm">Market research and opportunity assessment</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white font-bold text-xl">2</span>
                                </div>
                                <h3 className="font-bold mb-2">Design</h3>
                                <p className="text-blue-100 text-sm">Strategy development and planning</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white font-bold text-xl">3</span>
                                </div>
                                <h3 className="font-bold mb-2">Connect</h3>
                                <p className="text-blue-100 text-sm">Stakeholder engagement and partnerships</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white font-bold text-xl">4</span>
                                </div>
                                <h3 className="font-bold mb-2">Deploy</h3>
                                <p className="text-blue-100 text-sm">Implementation and launch execution</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white font-bold text-xl">5</span>
                                </div>
                                <h3 className="font-bold mb-2">Deliver</h3>
                                <p className="text-blue-100 text-sm">Ongoing support and optimization</p>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="bg-gray-50 rounded-3xl p-12 text-center" data-aos="fade-up">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Ready to expand your global footprint?
                        </h2>
                        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                            Let's explore how we can help you enter new markets with confidence and achieve sustainable growth. Schedule a consultation to discuss your expansion goals.
                        </p>
                        <a
                            href="/contact"
                            className="inline-flex items-center bg-blue-600 text-white px-10 py-5 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg"
                        >
                            Start Your Market Entry Journey
                            <ArrowRight className="ml-3 w-5 h-5" />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MarketEntryPage;