import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ArrowRight, Shield, FileCheck, Globe, AlertTriangle, CheckCircle, Scale } from 'lucide-react';

const ComplianceRiskPage: React.FC = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-out-cubic',
            once: true,
            offset: 100,
        });
    }, []);

    const complianceAreas = [
        {
            icon: Globe,
            title: 'International Regulations',
            description: 'Navigate complex international trade laws, regulations, and compliance requirements.'
        },
        {
            icon: Scale,
            title: 'Local Public Policy',
            description: 'Ensure alignment with local government policies and regulatory frameworks.'
        },
        {
            icon: FileCheck,
            title: 'Content Laws',
            description: 'Compliance with host-country content laws and local partnership requirements.'
        },
        {
            icon: Shield,
            title: 'Risk Mitigation',
            description: 'Proactive identification and mitigation of regulatory and operational risks.'
        },
        {
            icon: CheckCircle,
            title: 'Reputation Protection',
            description: 'Safeguard your brand reputation through disciplined compliance practices.'
        },
        {
            icon: AlertTriangle,
            title: 'Regulated Sectors',
            description: 'Specialized expertise in highly regulated industries and sectors.'
        }
    ];

    const benefits = [
        'Reduced regulatory risk exposure',
        'Smoother market entry processes',
        'Protected brand reputation',
        'Avoided costly compliance violations',
        'Streamlined government approvals',
        'Enhanced stakeholder confidence'
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-red-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <div className="inline-block px-4 py-2 bg-red-100 rounded-full text-sm font-medium text-red-600 mb-6">
                            STRATEGIC FOCUS
                        </div>
                        <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-8 leading-tight">
                            Compliance &
                            <br />
                            <span className="font-bold">Risk Mitigation</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            Operating across borders requires discipline and diligence. We ensure all market-entry and business strategies are aligned with both international regulations and local public policy, including host-country content laws.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                        <div className="relative flex items-center justify-center" data-aos="fade-right">
                            <div className="w-80 h-80 bg-gradient-to-br from-red-100 to-red-200 rounded-3xl flex items-center justify-center shadow-2xl">
                                <Shield className="w-32 h-32 text-red-600" />
                            </div>
                        </div>

                        <div className="space-y-8" data-aos="fade-left">
                            <h2 className="text-3xl font-bold text-gray-900">
                                Discipline and Diligence in Every Market
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Our structured compliance approach reduces risk, protects our clients' reputation, and facilitates smoother expansion into regulated sectors. We understand that compliance isn't just about following rules—it's about building sustainable, trustworthy business operations.
                            </p>
                            <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500">
                                <p className="text-red-800 font-medium">
                                    "Compliance is not a constraint—it's the foundation of sustainable international growth."
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Compliance Areas Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                        {complianceAreas.map((area, index) => {
                            const IconComponent = area.icon;
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
                                        {area.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {area.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>

                    {/* Benefits Section */}
                    <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-12 text-white mb-20" data-aos="fade-up">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl font-bold mb-6">
                                    The Value of Proactive Compliance
                                </h2>
                                <p className="text-red-100 text-lg leading-relaxed mb-8">
                                    When compliance is built into your strategy from the beginning, it becomes a competitive advantage rather than a burden.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-6">Key Benefits</h3>
                                <ul className="space-y-3">
                                    {benefits.map((benefit, index) => (
                                        <li key={index} className="flex items-center">
                                            <div className="w-2 h-2 bg-red-300 rounded-full mr-4"></div>
                                            <span className="text-red-100">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Framework Section */}
                    <div className="bg-gray-50 rounded-3xl p-12 mb-20" data-aos="fade-up">
                        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
                            Our Compliance Framework
                        </h2>
                        <div className="grid md:grid-cols-4 gap-8">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white font-bold text-xl">1</span>
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">Assess</h3>
                                <p className="text-gray-600 text-sm">Comprehensive regulatory landscape analysis</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white font-bold text-xl">2</span>
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">Plan</h3>
                                <p className="text-gray-600 text-sm">Develop structured compliance strategies</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white font-bold text-xl">3</span>
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">Implement</h3>
                                <p className="text-gray-600 text-sm">Execute compliance measures and controls</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white font-bold text-xl">4</span>
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">Monitor</h3>
                                <p className="text-gray-600 text-sm">Ongoing compliance monitoring and updates</p>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="bg-gray-50 rounded-3xl p-12 text-center" data-aos="fade-up">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Expand with confidence and compliance
                        </h2>
                        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                            Let our compliance expertise protect your expansion and ensure smooth entry into regulated markets worldwide.
                        </p>
                        <a
                            href="/contact"
                            className="inline-flex items-center bg-red-600 text-white px-10 py-5 rounded-full text-lg font-semibold hover:bg-red-700 transition-all duration-300 shadow-lg"
                        >
                            Secure Your Compliance Strategy
                            <ArrowRight className="ml-3 w-5 h-5" />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ComplianceRiskPage;