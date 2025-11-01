import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ArrowRight, Target, Users, CheckCircle, TrendingUp } from 'lucide-react';

const ClientCentricSolutionsPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init({
            duration: 800,
            easing: 'ease-out-cubic',
            once: true,
            offset: 100,
        });
    }, []);

    const benefits = [
        {
            icon: Target,
            title: 'Tailored Strategies',
            description: 'Every engagement is designed around your specific business objectives and market context.'
        },
        {
            icon: TrendingUp,
            title: 'Measurable Outcomes',
            description: 'Focus on tangible commercial and operational value that drives real business results.'
        },
        {
            icon: Users,
            title: 'Deep Understanding',
            description: 'We take time to understand your business, culture, and long-term vision.'
        },
        {
            icon: CheckCircle,
            title: 'Long-term Success',
            description: 'Positioning clients for sustainable growth and competitive advantage.'
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <div className="inline-block px-4 py-2 bg-blue-100 rounded-full text-sm font-medium text-blue-600 mb-6">
                            STRATEGIC FOCUS
                        </div>
                        <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-8 leading-tight">
                            Client-Centric
                            <br />
                            <span className="font-bold">Solutions</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            We design every engagement around the client's business objectives, not just deliverables. By tailoring market-entry and digital transformation strategies to measurable client outcomes, we ensure each project drives tangible commercial or operational value.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                        <div className="relative flex items-center justify-center" data-aos="fade-right">
                            <div className="w-80 h-80 bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl flex items-center justify-center shadow-2xl">
                                <Target className="w-32 h-32 text-blue-600" />
                            </div>
                        </div>

                        <div className="space-y-8" data-aos="fade-left">
                            <h2 className="text-3xl font-bold text-gray-900">
                                Your Success is Our Priority
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Our goal is to make clients feel understood, supported, and positioned for long-term success. We believe that true partnership means aligning our expertise with your vision to create solutions that work specifically for your business context.
                            </p>
                            <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
                                <p className="text-blue-800 font-medium">
                                    "Success isn't measured by what we deliver—it's measured by what you achieve."
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Benefits Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                        {benefits.map((benefit, index) => {
                            const IconComponent = benefit.icon;
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
                                        {benefit.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {benefit.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>

                    {/* Approach Section */}
                    <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-12 text-white mb-20" data-aos="fade-up">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4">
                                Our Client-Centric Approach
                            </h2>
                            <p className="text-blue-100 text-lg max-w-3xl mx-auto">
                                Every engagement follows a structured approach designed to understand, align, and deliver value
                            </p>
                        </div>
                        <div className="grid md:grid-cols-4 gap-8">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white font-bold text-xl">1</span>
                                </div>
                                <h3 className="font-bold mb-2">Listen</h3>
                                <p className="text-blue-100 text-sm">Deep dive into your business objectives and challenges</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white font-bold text-xl">2</span>
                                </div>
                                <h3 className="font-bold mb-2">Align</h3>
                                <p className="text-blue-100 text-sm">Ensure our strategy matches your vision and goals</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white font-bold text-xl">3</span>
                                </div>
                                <h3 className="font-bold mb-2">Customize</h3>
                                <p className="text-blue-100 text-sm">Tailor solutions to your specific market and context</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white font-bold text-xl">4</span>
                                </div>
                                <h3 className="font-bold mb-2">Deliver</h3>
                                <p className="text-blue-100 text-sm">Execute with measurable outcomes and ongoing support</p>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="bg-gray-50 rounded-3xl p-12 text-center" data-aos="fade-up">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Experience the difference of client-centric consulting
                        </h2>
                        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                            Let's discuss how we can tailor our expertise to your specific business objectives and create solutions that drive real value for your organization.
                        </p>
                        <a
                            href="/contact"
                            className="inline-flex items-center bg-blue-600 text-white px-10 py-5 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg"
                        >
                            Start Your Client-Centric Journey
                            <ArrowRight className="ml-3 w-5 h-5" />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ClientCentricSolutionsPage;