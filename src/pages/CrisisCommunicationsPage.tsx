import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ArrowRight, Shield, Clock, MessageSquare, Users, AlertTriangle, CheckCircle } from 'lucide-react';

const CrisisCommunicationsPage: React.FC = () => {
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
            icon: Shield,
            title: 'Crisis preparedness planning',
            description: 'Develop comprehensive crisis communication plans before you need them, including stakeholder mapping, message frameworks, and response protocols.'
        },
        {
            icon: Clock,
            title: 'Rapid response activation',
            description: 'When crisis strikes, our team mobilizes within hours to manage communications, coordinate responses, and protect your reputation.'
        },
        {
            icon: MessageSquare,
            title: 'Strategic messaging',
            description: 'Craft clear, consistent messages that acknowledge concerns while protecting your brand and maintaining stakeholder trust.'
        },
        {
            icon: Users,
            title: 'Stakeholder management',
            description: 'Coordinate communications across all stakeholders - media, employees, customers, investors, and regulatory bodies.'
        },
        {
            icon: AlertTriangle,
            title: 'Media relations',
            description: 'Manage media inquiries, prepare spokespeople, and control the narrative during challenging situations.'
        },
        {
            icon: CheckCircle,
            title: 'Recovery and rebuilding',
            description: 'Guide your organization through the recovery phase, rebuilding trust and reputation with targeted communication strategies.'
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-red-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <div className="inline-block px-4 py-2 bg-red-100 rounded-full text-sm font-medium text-red-600 mb-6">
                            CRISIS COMMUNICATIONS
                        </div>
                        <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-8 leading-tight">
                            Crisis
                            <br />
                            <span className="font-bold">Communications</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            When reputation is on the line, every word matters. Our crisis communications team helps organizations navigate challenging situations with strategic messaging, rapid response, and stakeholder management that protects and preserves trust.
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
                                src="/images/services/crisis-communications.png"
                                alt="Crisis Communications"
                                className="w-full rounded-2xl shadow-2xl"
                            />
                        </div>

                        <div className="space-y-8" data-aos="fade-left">
                            <h2 className="text-3xl font-bold text-gray-900">
                                When Every Second Counts
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Crisis situations demand immediate, strategic action. Our experienced team has managed communications for organizations facing regulatory challenges, operational disruptions, and reputation threats across multiple industries and markets.
                            </p>
                            <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500">
                                <p className="text-red-800 font-medium">
                                    "In crisis, silence is not golden—it's dangerous. The first 24 hours determine whether you control the narrative or it controls you."
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
                                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                                        <IconComponent className="w-8 h-8 text-red-600" />
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
                    <div className="bg-gray-50 rounded-3xl p-12 mb-20" data-aos="fade-up">
                        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
                            Our Crisis Response Process
                        </h2>
                        <div className="grid md:grid-cols-4 gap-8">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white font-bold text-xl">1</span>
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">Assess</h3>
                                <p className="text-gray-600 text-sm">Rapid situation analysis and impact assessment</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white font-bold text-xl">2</span>
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">Strategize</h3>
                                <p className="text-gray-600 text-sm">Develop messaging and response strategy</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white font-bold text-xl">3</span>
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">Execute</h3>
                                <p className="text-gray-600 text-sm">Implement coordinated response across all channels</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white font-bold text-xl">4</span>
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">Monitor</h3>
                                <p className="text-gray-600 text-sm">Track response and adjust strategy as needed</p>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-12 text-center text-white" data-aos="fade-up">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Don't wait for crisis to strike
                        </h2>
                        <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
                            Preparation is your best defense. Let's develop a crisis communication plan that protects your reputation and maintains stakeholder trust when it matters most.
                        </p>
                        <a
                            href="/contact"
                            className="inline-flex items-center bg-white text-red-600 px-10 py-5 rounded-full text-lg font-semibold hover:bg-red-50 transition-all duration-300 shadow-lg"
                        >
                            Get Crisis-Ready Today
                            <ArrowRight className="ml-3 w-5 h-5" />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CrisisCommunicationsPage;