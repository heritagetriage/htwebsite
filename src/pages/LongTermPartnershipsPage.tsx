import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ArrowRight, Users, Heart, TrendingUp, Globe, Clock, Handshake } from 'lucide-react';

const LongTermPartnershipsPage: React.FC = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-out-cubic',
            once: true,
            offset: 100,
        });
    }, []);

    const partnershipPhases = [
        {
            icon: Users,
            title: 'Initial Expansion',
            description: 'Strategic market entry planning and execution support for your first international markets.'
        },
        {
            icon: TrendingUp,
            title: 'Growth Optimization',
            description: 'Continuous improvement and scaling strategies as your international presence grows.'
        },
        {
            icon: Globe,
            title: 'Multi-Market Expansion',
            description: 'Coordinated expansion into multiple markets with integrated strategies and operations.'
        },
        {
            icon: Clock,
            title: 'Digital Transformation',
            description: 'Ongoing digital evolution to keep pace with changing market demands and technologies.'
        },
        {
            icon: Handshake,
            title: 'Strategic Evolution',
            description: 'Long-term strategic planning and adaptation as markets and business needs evolve.'
        },
        {
            icon: Heart,
            title: 'Lasting Impact',
            description: 'Building sustainable competitive advantages that create lasting value across continents.'
        }
    ];

    const values = [
        'Trust through consistent delivery',
        'Consistency across all engagements',
        'Lasting impact and value creation',
        'Cross-continental expertise',
        'Adaptive long-term strategies',
        'Committed partnership approach'
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-indigo-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <div className="inline-block px-4 py-2 bg-indigo-100 rounded-full text-sm font-medium text-indigo-600 mb-6">
                            STRATEGIC FOCUS
                        </div>
                        <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-8 leading-tight">
                            Long-Term
                            <br />
                            <span className="font-bold">Partnerships</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            We see every client relationship as a journey. Rather than offering one-off consulting projects, Heritage Triage builds partnerships that grow over time—supporting clients through each phase of expansion, optimization, and transformation.
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
                                src="/images/strategic-focus/long-term-partnerships.png"
                                alt="Long-Term Partnerships"
                                className="w-full rounded-2xl shadow-2xl"
                            />
                        </div>

                        <div className="space-y-8" data-aos="fade-left">
                            <h2 className="text-3xl font-bold text-gray-900">
                                Growing Together Across Continents
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                This long-term commitment creates trust, consistency, and lasting impact across continents. We believe that the best results come from deep understanding, continuous collaboration, and shared commitment to your success over time.
                            </p>
                            <div className="bg-indigo-50 p-6 rounded-xl border-l-4 border-indigo-500">
                                <p className="text-indigo-800 font-medium">
                                    "Great partnerships aren't built in a day—they're cultivated through trust, consistency, and shared success over time."
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Partnership Phases Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                        {partnershipPhases.map((phase, index) => {
                            const IconComponent = phase.icon;
                            return (
                                <div
                                    key={index}
                                    className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300"
                                    data-aos="fade-up"
                                    data-aos-delay={index * 100}
                                >
                                    <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                                        <IconComponent className="w-8 h-8 text-indigo-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                                        {phase.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {phase.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>

                    {/* Partnership Journey Section */}
                    <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-3xl p-12 text-white mb-20" data-aos="fade-up">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4">
                                The Partnership Journey
                            </h2>
                            <p className="text-indigo-100 text-lg max-w-3xl mx-auto">
                                From initial expansion to global transformation, we're with you every step of the way
                            </p>
                        </div>
                        <div className="grid md:grid-cols-5 gap-8">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white font-bold text-xl">1</span>
                                </div>
                                <h3 className="font-bold mb-2">Foundation</h3>
                                <p className="text-indigo-100 text-sm">Building trust and understanding your vision</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white font-bold text-xl">2</span>
                                </div>
                                <h3 className="font-bold mb-2">Growth</h3>
                                <p className="text-indigo-100 text-sm">Expanding together into new markets</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white font-bold text-xl">3</span>
                                </div>
                                <h3 className="font-bold mb-2">Scale</h3>
                                <p className="text-indigo-100 text-sm">Optimizing operations across regions</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white font-bold text-xl">4</span>
                                </div>
                                <h3 className="font-bold mb-2">Transform</h3>
                                <p className="text-indigo-100 text-sm">Digital and strategic transformation</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white font-bold text-xl">5</span>
                                </div>
                                <h3 className="font-bold mb-2">Sustain</h3>
                                <p className="text-indigo-100 text-sm">Long-term success and innovation</p>
                            </div>
                        </div>
                    </div>

                    {/* Values Section */}
                    <div className="bg-gray-50 rounded-3xl p-12 mb-20" data-aos="fade-up">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                    Partnership Values
                                </h2>
                                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                    Our partnerships are built on fundamental values that ensure mutual success and lasting relationships across all markets and time zones.
                                </p>
                            </div>
                            <div>
                                <ul className="space-y-4">
                                    {values.map((value, index) => (
                                        <li key={index} className="flex items-center">
                                            <div className="w-3 h-3 bg-indigo-600 rounded-full mr-4"></div>
                                            <span className="text-gray-700 font-medium">{value}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="bg-gray-50 rounded-3xl p-12 text-center" data-aos="fade-up">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Ready to start a lasting partnership?
                        </h2>
                        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                            Let's begin a journey of growth, transformation, and success that spans continents and creates lasting impact for your organization.
                        </p>
                        <a
                            href="/contact"
                            className="inline-flex items-center bg-indigo-600 text-white px-10 py-5 rounded-full text-lg font-semibold hover:bg-indigo-700 transition-all duration-300 shadow-lg"
                        >
                            Begin Your Partnership Journey
                            <ArrowRight className="ml-3 w-5 h-5" />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LongTermPartnershipsPage;