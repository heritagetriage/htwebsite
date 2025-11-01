import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ArrowRight, Settings, Calculator, Users, Globe, Database, CheckCircle } from 'lucide-react';

const DigitalTransformationPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init({
            duration: 800,
            easing: 'ease-out-cubic',
            once: true,
            offset: 100,
        });
    }, []);

    const solutions = [
        {
            icon: Settings,
            title: 'Customized Business Operation Systems',
            description: 'Eliminate manual inefficiencies with our bespoke operation systems built to automate day-to-day workflows. From inventory management to customer relations and reporting, we create tools that integrate every function into one seamless experience — helping you make data-driven decisions with confidence.'
        },
        {
            icon: Calculator,
            title: 'Accounting and Financial Management Systems',
            description: 'Take control of your numbers with our integrated accounting systems designed for accuracy and transparency. We build dashboards that give real-time visibility into your revenue, expenses, and performance metrics — ensuring compliance, clarity, and control across all departments.'
        },
        {
            icon: Users,
            title: 'Human Resource and Payroll Systems',
            description: 'Our HR solutions make people management simple. From onboarding and attendance tracking to payroll automation and performance reviews, we help organizations manage their workforce efficiently and maintain compliance — all within a secure, cloud-based environment.'
        },
        {
            icon: Globe,
            title: 'Web and E-Commerce Platforms',
            description: 'Establish a powerful digital presence with custom-built websites and e-commerce systems optimized for performance, design, and growth. Whether you\'re launching a corporate site or an online store, we ensure your platform reflects your brand and drives measurable results.'
        },
        {
            icon: Database,
            title: 'Enterprise Resource Planning (ERP) Systems',
            description: 'Our ERP solutions bring your entire organization under one digital roof. We integrate modules for finance, HR, operations, inventory, and customer management — giving your team unified access to insights, collaboration, and control.'
        }
    ];

    const benefits = [
        'Tailor-made systems built around your goals',
        'Scalable solutions that grow with your business',
        'Seamless integration with existing workflows',
        'Dedicated post-launch support and maintenance'
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <div className="inline-block px-4 py-2 bg-blue-100 rounded-full text-sm font-medium text-blue-600 mb-6">
                            🌐 DIGITAL SOLUTIONS FOR MODERN BUSINESSES
                        </div>
                        <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-8 leading-tight">
                            Transforming Ideas into
                            <br />
                            <span className="font-bold">Intelligent Systems</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            At Heritage Triage, we design and develop customized digital solutions that empower businesses to operate smarter, faster, and more efficiently. Whether you're looking to streamline internal processes, strengthen financial control, or enhance workforce management, our expert team delivers tailor-made systems that fit your unique needs — not the other way around.
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
                                src="/images/services/erp-creation.png"
                                alt="Digital Transformation Services"
                                className="w-full rounded-2xl shadow-2xl"
                            />
                            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-lg">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-gray-900">100%</div>
                                    <div className="text-sm text-gray-600">Custom Built</div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Benefits */}
                        <div className="space-y-8" data-aos="fade-left">
                            <h2 className="text-3xl font-bold text-gray-900">
                                💡 Why Choose Us
                            </h2>
                            <div className="space-y-4">
                                {benefits.map((benefit, index) => (
                                    <div key={index} className="flex items-start">
                                        <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                                        <span className="text-lg text-gray-600">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Solutions Section */}
                    <div className="mb-20">
                        <div className="text-center mb-16" data-aos="fade-up">
                            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
                                ⚙️ Our Core <span className="font-bold">Solutions</span>
                            </h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Comprehensive digital transformation services tailored to your business needs
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {solutions.map((solution, index) => {
                                const IconComponent = solution.icon;
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
                                            {solution.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {solution.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-12 text-center text-white" data-aos="fade-up">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            🚀 Let's Build the System Your Business Deserves
                        </h2>
                        <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                            Ready to streamline your operations and unlock new efficiency?
                        </p>
                        <a
                            href="/contact"
                            className="inline-flex items-center bg-white text-blue-600 px-10 py-5 rounded-full text-lg font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg"
                        >
                            Contact Us Today
                            <ArrowRight className="ml-3 w-5 h-5" />
                        </a>
                        <p className="text-blue-200 mt-4 text-sm">
                            Schedule a consultation and discover how our digital solutions can transform your business.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DigitalTransformationPage;