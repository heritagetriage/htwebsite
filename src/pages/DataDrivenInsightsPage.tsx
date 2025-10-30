import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ArrowRight, BarChart3, TrendingUp, Target, Database, PieChart, LineChart } from 'lucide-react';

const DataDrivenInsightsPage: React.FC = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-out-cubic',
            once: true,
            offset: 100,
        });
    }, []);

    const dataTypes = [
        {
            icon: BarChart3,
            title: 'Trade Data Analysis',
            description: 'Comprehensive analysis of international trade flows, tariffs, and market opportunities.'
        },
        {
            icon: PieChart,
            title: 'Customer Analytics',
            description: 'Deep insights into customer behavior, preferences, and market segmentation.'
        },
        {
            icon: LineChart,
            title: 'Industry Trends',
            description: 'Real-time monitoring of industry developments and competitive landscape analysis.'
        },
        {
            icon: Target,
            title: 'Market Intelligence',
            description: 'Strategic market research and competitive positioning insights.'
        },
        {
            icon: Database,
            title: 'ROI Analytics',
            description: 'Clear measurement of return on investment and performance metrics.'
        },
        {
            icon: TrendingUp,
            title: 'Predictive Modeling',
            description: 'Forward-looking analysis to anticipate market changes and opportunities.'
        }
    ];

    const benefits = [
        'Evidence-based decision making',
        'Reduced market entry risks',
        'Optimized resource allocation',
        'Competitive advantage insights',
        'Measurable ROI tracking',
        'Strategic market positioning'
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-green-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <div className="inline-block px-4 py-2 bg-green-100 rounded-full text-sm font-medium text-green-600 mb-6">
                            STRATEGIC FOCUS
                        </div>
                        <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-8 leading-tight">
                            Data-Driven
                            <br />
                            <span className="font-bold">Insights</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            Decisions are guided by evidence, not assumptions. We leverage trade data, customer analytics, and industry trends to craft strategies that are both informed and impactful. This ensures every recommendation is backed by verifiable insight and clear ROI potential.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                        <div className="relative flex items-center justify-center" data-aos="fade-right">
                            <div className="w-80 h-80 bg-gradient-to-br from-green-100 to-green-200 rounded-3xl flex items-center justify-center shadow-2xl">
                                <BarChart3 className="w-32 h-32 text-green-600" />
                            </div>
                        </div>

                        <div className="space-y-8" data-aos="fade-left">
                            <h2 className="text-3xl font-bold text-gray-900">
                                Evidence Over Assumptions
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Every recommendation—whether for a new market, digital rollout, or partner strategy—is backed by verifiable insight and clear ROI potential. Our data-driven approach ensures that your strategic decisions are built on solid foundations, not guesswork.
                            </p>
                            <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
                                <p className="text-green-800 font-medium">
                                    "In a world of uncertainty, data provides the clarity needed to make confident strategic decisions."
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Data Types Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                        {dataTypes.map((dataType, index) => {
                            const IconComponent = dataType.icon;
                            return (
                                <div
                                    key={index}
                                    className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300"
                                    data-aos="fade-up"
                                    data-aos-delay={index * 100}
                                >
                                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                        <IconComponent className="w-8 h-8 text-green-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                                        {dataType.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {dataType.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>

                    {/* Benefits Section */}
                    <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-3xl p-12 text-white mb-20" data-aos="fade-up">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl font-bold mb-6">
                                    The Power of Data-Driven Strategy
                                </h2>
                                <p className="text-green-100 text-lg leading-relaxed mb-8">
                                    When strategy is backed by solid data, every decision becomes more confident, every investment more strategic, and every outcome more predictable.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-6">Key Benefits</h3>
                                <ul className="space-y-3">
                                    {benefits.map((benefit, index) => (
                                        <li key={index} className="flex items-center">
                                            <div className="w-2 h-2 bg-green-300 rounded-full mr-4"></div>
                                            <span className="text-green-100">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Process Section */}
                    <div className="bg-gray-50 rounded-3xl p-12 mb-20" data-aos="fade-up">
                        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
                            Our Data Analysis Process
                        </h2>
                        <div className="grid md:grid-cols-4 gap-8">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white font-bold text-xl">1</span>
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">Collect</h3>
                                <p className="text-gray-600 text-sm">Gather relevant data from multiple reliable sources</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white font-bold text-xl">2</span>
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">Analyze</h3>
                                <p className="text-gray-600 text-sm">Apply advanced analytics to extract meaningful insights</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white font-bold text-xl">3</span>
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">Interpret</h3>
                                <p className="text-gray-600 text-sm">Transform data into actionable strategic recommendations</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white font-bold text-xl">4</span>
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">Validate</h3>
                                <p className="text-gray-600 text-sm">Verify insights and measure ROI potential</p>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="bg-gray-50 rounded-3xl p-12 text-center" data-aos="fade-up">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Make decisions with confidence
                        </h2>
                        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                            Let our data-driven insights guide your strategic decisions and unlock new opportunities for growth in global markets.
                        </p>
                        <a
                            href="/contact"
                            className="inline-flex items-center bg-green-600 text-white px-10 py-5 rounded-full text-lg font-semibold hover:bg-green-700 transition-all duration-300 shadow-lg"
                        >
                            Discover Data-Driven Opportunities
                            <ArrowRight className="ml-3 w-5 h-5" />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DataDrivenInsightsPage;