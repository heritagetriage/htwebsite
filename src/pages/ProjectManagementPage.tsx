import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ArrowRight, CheckCircle, Target, Users, Globe, Calendar } from 'lucide-react';

const ProjectManagementPage: React.FC = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-out-cubic',
            once: true,
            offset: 100,
        });
    }, []);

    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const headerHeight = 96; // Account for sticky header height
            const targetPosition = targetElement.offsetTop - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    };

    const expertise = [
        {
            icon: Target,
            title: 'Campaign launches that convert',
            description: 'From concept to rollout, we design and manage campaigns that build awareness, generate leads, and accelerate entry into new markets.'
        },
        {
            icon: Users,
            title: 'Trade missions that build bridges',
            description: 'We plan and execute trade missions that create meaningful cross-border partnerships and business opportunities.'
        },
        {
            icon: Globe,
            title: 'Trade shows that leave a mark',
            description: 'We handle everything from booth strategy to audience engagement, helping your brand stand out and make lasting connections.'
        },
        {
            icon: CheckCircle,
            title: 'On-the-ground protocol and logistics',
            description: 'In-country protocol teams accompany you end to end: travel and visas, permits, venue and vendor coordination, government meetings, security guidance, and VIP handling; so execution is smooth and stress-free.'
        },
        {
            icon: Calendar,
            title: 'Seamless program oversight',
            description: 'Multi-market, multi-partner, or multi-phase; we keep your initiatives aligned, on budget, and delivering results.'
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <div className="inline-block px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-600 mb-6">
                            PROJECT & PROGRAM MANAGEMENT
                        </div>
                        <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-8 leading-tight">
                            Project & Program
                            <br />
                            <span className="font-bold">Management</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            At Heritage Triage, we turn ideas into action and strategies into measurable success. Whether you're preparing to launch a product, enter a new market, or showcase your brand to global audiences, our team manages every detail, so you can stay focused on growth.
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
                                src="/images/services/project-management-hero.jpg"
                                alt="Project Management"
                                className="w-full rounded-2xl shadow-2xl"
                            />
                            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-lg">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-gray-900">100%</div>
                                    <div className="text-sm text-gray-600">Success Rate</div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Content */}
                        <div className="space-y-8" data-aos="fade-left">
                            <h2 className="text-3xl font-bold text-gray-900">
                                Turning Vision Into Reality
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                We've helped clients launch market campaigns, lead government and private-sector trade missions, and stand out at high-profile trade shows across regions. With every project, we bring clarity, coordination, and momentum, ensuring you don't just meet your goals but surpass them.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Your vision deserves more than good planning; it deserves flawless execution.
                            </p>
                        </div>
                    </div>

                    {/* Expertise Section */}
                    <div className="mb-20">
                        <div className="text-center mb-16" data-aos="fade-up">
                            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
                                Our <span className="font-bold">Expertise</span>
                            </h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Comprehensive project management services that deliver results
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {expertise.map((item, index) => {
                                const IconComponent = item.icon;
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
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="bg-gray-50 rounded-3xl p-12 text-center" data-aos="fade-up">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Ready to bring your next big idea to life?
                        </h2>
                        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                            Let's start with a free 30-minute strategy call to explore how Heritage Triage can help you launch with impact and confidence.
                        </p>
                        <a
                            href="/contact"
                            className="inline-flex items-center bg-blue-600 text-white px-10 py-5 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg"
                        >
                            Schedule Your Strategy Call
                            <ArrowRight className="ml-3 w-5 h-5" />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProjectManagementPage;