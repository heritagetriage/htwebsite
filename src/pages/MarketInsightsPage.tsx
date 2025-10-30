import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ArrowRight, TrendingUp, Globe, BarChart, Users, Calendar, Eye } from 'lucide-react';

const MarketInsightsPage: React.FC = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-out-cubic',
            once: true,
            offset: 100,
        });
    }, []);

    const insights = [
        {
            icon: TrendingUp,
            title: 'African Market Trends 2024',
            category: 'Market Analysis',
            date: 'December 15, 2024',
            excerpt: 'Exploring the fastest-growing sectors across West Africa and emerging opportunities for international businesses.',
            readTime: '5 min read'
        },
        {
            icon: Globe,
            title: 'Cross-Border Trade Regulations',
            category: 'Regulatory Updates',
            date: 'December 10, 2024',
            excerpt: 'Latest updates on trade agreements between Africa, North America, and key regulatory changes affecting FDI.',
            readTime: '7 min read'
        },
        {
            icon: BarChart,
            title: 'Digital Transformation in Ghana',
            category: 'Technology',
            date: 'December 5, 2024',
            excerpt: 'How Ghanaian businesses are leveraging technology to compete globally and attract foreign investment.',
            readTime: '6 min read'
        },
        {
            icon: Users,
            title: 'Building Strategic Partnerships',
            category: 'Business Strategy',
            date: 'November 28, 2024',
            excerpt: 'Best practices for establishing lasting business relationships in emerging African markets.',
            readTime: '4 min read'
        }
    ];

    const categories = [
        'All Insights',
        'Market Analysis',
        'Regulatory Updates',
        'Technology',
        'Business Strategy'
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <div className="inline-block px-4 py-2 bg-blue-100 rounded-full text-sm font-medium text-blue-600 mb-6">
                            📊 MARKET INSIGHTS
                        </div>
                        <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-8 leading-tight">
                            Market Insights &
                            <br />
                            <span className="font-bold">Industry Intelligence</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            Stay ahead of market trends with our expert analysis, regulatory updates, and strategic insights for international business expansion.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Categories Filter */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12" data-aos="fade-up">
                        {categories.map((category, index) => (
                            <button
                                key={index}
                                className={`px-6 py-3 rounded-full text-sm font-medium transition-colors duration-200 ${index === 0
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Featured Insight */}
                    <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-12 text-white mb-16" data-aos="fade-up">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="inline-block px-3 py-1 bg-blue-500 rounded-full text-sm font-medium mb-4">
                                    Featured Insight
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                    The Future of African Markets: 2025 Outlook
                                </h2>
                                <p className="text-xl text-blue-100 mb-8">
                                    Our comprehensive analysis of emerging opportunities, regulatory changes, and investment trends shaping African markets in the coming year.
                                </p>
                                <div className="flex items-center text-blue-200 mb-6">
                                    <Calendar className="w-5 h-5 mr-2" />
                                    <span className="mr-6">December 20, 2024</span>
                                    <Eye className="w-5 h-5 mr-2" />
                                    <span>10 min read</span>
                                </div>
                                <a
                                    href="#"
                                    className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg"
                                >
                                    Read Full Report
                                    <ArrowRight className="ml-3 w-5 h-5" />
                                </a>
                            </div>
                            <div className="relative">
                                <img
                                    src="/images/services/globalmarket.jpg"
                                    alt="Market Insights"
                                    className="w-full rounded-2xl shadow-2xl"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Insights Grid */}
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center" data-aos="fade-up">
                            Latest Insights
                        </h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                            {insights.map((insight, index) => {
                                const IconComponent = insight.icon;
                                return (
                                    <article
                                        key={index}
                                        className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300 overflow-hidden group cursor-pointer"
                                        data-aos="fade-up"
                                        data-aos-delay={index * 100}
                                    >
                                        <div className="p-8">
                                            <div className="flex items-center justify-between mb-4">
                                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                                    <IconComponent className="w-6 h-6 text-blue-600" />
                                                </div>
                                                <span className="text-sm text-blue-600 font-medium bg-blue-50 px-3 py-1 rounded-full">
                                                    {insight.category}
                                                </span>
                                            </div>

                                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                                                {insight.title}
                                            </h3>

                                            <p className="text-gray-600 leading-relaxed mb-6">
                                                {insight.excerpt}
                                            </p>

                                            <div className="flex items-center justify-between text-sm text-gray-500">
                                                <div className="flex items-center">
                                                    <Calendar className="w-4 h-4 mr-2" />
                                                    <span>{insight.date}</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <Eye className="w-4 h-4 mr-2" />
                                                    <span>{insight.readTime}</span>
                                                </div>
                                            </div>

                                            <div className="mt-6 pt-6 border-t border-gray-100">
                                                <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
                                                    <span className="mr-2">Read More</span>
                                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                );
                            })}
                        </div>
                    </div>

                    {/* Newsletter Signup */}
                    <div className="bg-gray-50 rounded-3xl p-12 text-center" data-aos="fade-up">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Stay Informed
                        </h2>
                        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                            Get the latest market insights and industry intelligence delivered to your inbox weekly.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-6 py-4 rounded-full border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
                            />
                            <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-lg">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MarketInsightsPage;