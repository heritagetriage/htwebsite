import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ArrowRight, PenTool, BookOpen, Video, Mic, Image, TrendingUp } from 'lucide-react';

const ContentStrategyPage: React.FC = () => {
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
            icon: PenTool,
            title: 'Strategic content planning',
            description: 'Comprehensive content strategies that align with your business goals and speak directly to your target audience across all channels.'
        },
        {
            icon: BookOpen,
            title: 'Editorial calendar management',
            description: 'Organized content scheduling and workflow management that ensures consistent, timely delivery across all platforms and markets.'
        },
        {
            icon: Video,
            title: 'Multi-format content creation',
            description: 'From written articles to video content, infographics to podcasts—we create content that engages in every format your audience prefers.'
        },
        {
            icon: Mic,
            title: 'Thought leadership development',
            description: 'Position your executives and brand as industry leaders with strategic content that demonstrates expertise and builds authority.'
        },
        {
            icon: Image,
            title: 'Visual storytelling',
            description: 'Compelling visual content strategies that communicate complex ideas simply and memorably across cultures and languages.'
        },
        {
            icon: TrendingUp,
            title: 'Performance optimization',
            description: 'Data-driven content optimization that improves engagement, reach, and conversion rates through continuous testing and refinement.'
        }
    ];

    const contentTypes = [
        { type: 'Blog Articles', description: 'SEO-optimized long-form content' },
        { type: 'Social Media', description: 'Platform-specific engaging posts' },
        { type: 'Video Content', description: 'Educational and promotional videos' },
        { type: 'Infographics', description: 'Data visualization and complex concepts' },
        { type: 'Whitepapers', description: 'In-depth industry analysis' },
        { type: 'Case Studies', description: 'Success story documentation' },
        { type: 'Email Campaigns', description: 'Nurturing and conversion sequences' },
        { type: 'Podcasts', description: 'Audio content and interview series' }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-green-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <div className="inline-block px-4 py-2 bg-green-100 rounded-full text-sm font-medium text-green-600 mb-6">
                            CONTENT STRATEGY
                        </div>
                        <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-8 leading-tight">
                            Content
                            <br />
                            <span className="font-bold">Strategy</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            Great content doesn't just inform—it inspires, educates, and moves people to action. Our content strategists create compelling narratives that resonate across cultures, build trust with diverse audiences, and drive meaningful engagement at every touchpoint.
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
                                src="/images/services/content-strategy.png"
                                alt="Content Strategy"
                                className="w-full rounded-2xl shadow-2xl"
                            />
                        </div>

                        <div className="space-y-8" data-aos="fade-left">
                            <h2 className="text-3xl font-bold text-gray-900">
                                Stories That Connect and Convert
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                In a world saturated with content, standing out requires more than just good writing—it requires strategic thinking, cultural intelligence, and deep understanding of your audience's needs and motivations.
                            </p>
                            <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
                                <p className="text-green-800 font-medium">
                                    "Content is the bridge between your expertise and your audience's needs. We build bridges that last."
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
                                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                        <IconComponent className="w-8 h-8 text-green-600" />
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

                    {/* Content Types Section */}
                    <div className="bg-gray-50 rounded-3xl p-12 mb-20" data-aos="fade-up">
                        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
                            Content Formats We Master
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {contentTypes.map((content, index) => (
                                <div
                                    key={index}
                                    className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
                                    data-aos="fade-up"
                                    data-aos-delay={index * 50}
                                >
                                    <h3 className="font-bold text-gray-900 mb-2">{content.type}</h3>
                                    <p className="text-gray-600 text-sm">{content.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Process Section */}
                    <div className="mb-20" data-aos="fade-up">
                        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
                            Our Content Development Process
                        </h2>
                        <div className="grid md:grid-cols-5 gap-8">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white font-bold text-xl">1</span>
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">Research</h3>
                                <p className="text-gray-600 text-sm">Audience analysis and competitive landscape review</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white font-bold text-xl">2</span>
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">Strategy</h3>
                                <p className="text-gray-600 text-sm">Content pillars and messaging framework development</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white font-bold text-xl">3</span>
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">Create</h3>
                                <p className="text-gray-600 text-sm">High-quality content production across formats</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white font-bold text-xl">4</span>
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">Distribute</h3>
                                <p className="text-gray-600 text-sm">Strategic publishing and promotion across channels</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white font-bold text-xl">5</span>
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">Optimize</h3>
                                <p className="text-gray-600 text-sm">Performance analysis and continuous improvement</p>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-3xl p-12 text-center text-white" data-aos="fade-up">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Ready to tell your story?
                        </h2>
                        <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
                            Let's create content that doesn't just capture attention—it captures hearts and minds. Schedule a consultation to explore how strategic content can transform your brand narrative.
                        </p>
                        <a
                            href="/contact"
                            className="inline-flex items-center bg-white text-green-600 px-10 py-5 rounded-full text-lg font-semibold hover:bg-green-50 transition-all duration-300 shadow-lg"
                        >
                            Start Your Content Journey
                            <ArrowRight className="ml-3 w-5 h-5" />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContentStrategyPage;