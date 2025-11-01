import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ArrowRight, Sprout, Cpu, Zap, Truck, MapPin } from 'lucide-react';

const IndustriesPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init({
            duration: 800,
            easing: 'ease-out-cubic',
            once: true,
            offset: 100,
        });
    }, []);

    const industries = [
        {
            icon: Sprout,
            title: 'Agriculture',
            subtitle: 'Cultivating Growth and Sustainability',
            image: '/images/industries/agriculture.jpg',
            description: 'Agriculture remains the cornerstone of emerging economies. From precision farming and agri-tech to sustainable food systems, the sector is transforming rapidly. For U.S. agribusinesses, the opportunities extend across inputs, technology, processing, logistics, and renewable energy integration.',
            value: 'We connect agribusinesses with credible partners, design compliant entry strategies, and integrate ERP and digital supply-chain systems that enhance efficiency and transparency, helping clients grow sustainably and profitably.',
            color: 'green'
        },
        {
            icon: Cpu,
            title: 'Information & Communications Technology (ICT)',
            subtitle: 'Building the Digital Backbone',
            image: '/images/industries/ict.jpg',
            description: 'Digital transformation is redefining economic growth. Emerging markets are adopting new technologies at record speed, from cloud systems and fintech to AI-driven services and e-commerce. For U.S. technology firms, this means new opportunities in infrastructure, software, cybersecurity, and digital ecosystems.',
            value: 'We guide technology companies through market analysis, product localization, and regulatory compliance. Our AI optimization and ERP expertise help clients operationalize digital strategies that deliver measurable impact and sustainable ROI.',
            color: 'blue'
        },
        {
            icon: Zap,
            title: 'Energy',
            subtitle: 'Powering the Transition',
            image: '/images/industries/energy.jpeg',
            description: 'Energy is central to sustainable development. Emerging markets are diversifying their energy portfolios, blending renewables, natural gas, and smart-grid technologies to meet industrial and urban demand. These transitions create vast opportunities for U.S. companies in power generation, infrastructure, and clean energy solutions.',
            value: 'We help energy clients navigate policy frameworks, engage with stakeholders, and meet local-content requirements. Our support spans from feasibility assessments to full implementation, ensuring every project delivers both economic and social value.',
            color: 'yellow'
        },
        {
            icon: Truck,
            title: 'Logistics & Infrastructure',
            subtitle: 'Building the Foundations of Trade',
            image: '/images/industries/logistics.jpg',
            description: 'Infrastructure and logistics form the backbone of global trade. Emerging markets are investing heavily in ports, roads, storage facilities, and digital systems to improve trade efficiency. For U.S. companies, this presents strategic opportunities in engineering, operations, design, and technology integration.',
            value: 'We identify viable logistics and infrastructure opportunities, structure compliant partnerships, and use data-driven systems to improve efficiency and reduce operational risks. Our approach strengthens connectivity, transparency, and long-term resilience.',
            color: 'purple'
        },
        {
            icon: MapPin,
            title: 'Tourism & Hospitality',
            subtitle: 'Reimagining Experience Economies',
            image: '/images/industries/tourism.jpg',
            description: 'Tourism continues to evolve into a diversified, technology-driven industry. Emerging markets are redefining their tourism landscapes, blending sustainability, culture, and innovation to attract new waves of global travelers. For U.S. investors, opportunities lie in eco-tourism, cultural destinations, and hospitality technology.',
            value: 'We assist investors and developers with feasibility studies, regulatory navigation, and partnership formation. Our insights help brands build culturally relevant, financially viable, and environmentally responsible hospitality ventures that create lasting value.',
            color: 'indigo'
        }
    ];

    const getColorClasses = (color: string) => {
        const colorMap = {
            green: {
                bg: 'bg-green-50',
                iconBg: 'bg-green-100',
                iconColor: 'text-green-600',
                accent: 'border-green-500'
            },
            blue: {
                bg: 'bg-blue-50',
                iconBg: 'bg-blue-100',
                iconColor: 'text-blue-600',
                accent: 'border-blue-500'
            },
            yellow: {
                bg: 'bg-yellow-50',
                iconBg: 'bg-yellow-100',
                iconColor: 'text-yellow-600',
                accent: 'border-yellow-500'
            },
            purple: {
                bg: 'bg-purple-50',
                iconBg: 'bg-purple-100',
                iconColor: 'text-purple-600',
                accent: 'border-purple-500'
            },
            indigo: {
                bg: 'bg-indigo-50',
                iconBg: 'bg-indigo-100',
                iconColor: 'text-indigo-600',
                accent: 'border-indigo-500'
            }
        };
        return colorMap[color as keyof typeof colorMap] || colorMap.blue;
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <div className="inline-block px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-600 mb-6">
                            INDUSTRIES WE SERVE
                        </div>
                        <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-8 leading-tight">
                            Transforming
                            <br />
                            <span className="font-bold">Industries</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            We partner with organizations across key industries to unlock growth opportunities in emerging markets. Each sector presents unique challenges and possibilities—our expertise helps you navigate them successfully.
                        </p>
                    </div>
                </div>
            </section>

            {/* Industries Section */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-20">
                        {industries.map((industry, index) => {
                            const IconComponent = industry.icon;
                            const colors = getColorClasses(industry.color);
                            const isEven = index % 2 === 0;

                            return (
                                <div
                                    key={index}
                                    className={`grid lg:grid-cols-2 gap-16 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}
                                    data-aos="fade-up"
                                    data-aos-delay={index * 100}
                                >
                                    {/* Image */}
                                    <div className={`relative ${!isEven ? 'lg:col-start-2' : ''}`} data-aos={isEven ? "fade-right" : "fade-left"}>
                                        <img
                                            src={industry.image}
                                            alt={industry.title}
                                            className="w-full rounded-2xl shadow-2xl"
                                        />
                                        <div className={`absolute -bottom-6 -right-6 ${colors.bg} p-6 rounded-2xl shadow-lg border-2 ${colors.accent}`}>
                                            <div className={`w-12 h-12 ${colors.iconBg} rounded-full flex items-center justify-center`}>
                                                <IconComponent className={`w-6 h-6 ${colors.iconColor}`} />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className={`space-y-8 ${!isEven ? 'lg:col-start-1' : ''}`} data-aos={isEven ? "fade-left" : "fade-right"}>
                                        <div>
                                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                                {industry.title}
                                            </h2>
                                            <h3 className="text-xl text-gray-600 mb-6 font-medium">
                                                {industry.subtitle}
                                            </h3>
                                            <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                                {industry.description}
                                            </p>
                                        </div>

                                        <div className={`${colors.bg} p-6 rounded-xl border-l-4 ${colors.accent}`}>
                                            <h4 className="font-bold text-gray-900 mb-3">How Heritage Triage adds value:</h4>
                                            <p className="text-gray-700 leading-relaxed">
                                                {industry.value}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Cross-Industry Expertise Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
                            Cross-Industry <span className="font-bold">Expertise</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Our deep understanding across multiple industries allows us to identify synergies, best practices, and innovative solutions that drive success in emerging markets.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100" data-aos="fade-up" data-aos-delay="100">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Market Intelligence</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Deep market research and competitive analysis across all sectors to identify the best opportunities for growth.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100" data-aos="fade-up" data-aos-delay="200">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Regulatory Navigation</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Expert guidance through complex regulatory environments specific to each industry and market.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100" data-aos="fade-up" data-aos-delay="300">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Partnership Development</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Strategic partner identification and relationship building to accelerate market entry and growth.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100" data-aos="fade-up" data-aos-delay="400">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Digital Integration</h3>
                            <p className="text-gray-600 leading-relaxed">
                                ERP systems, AI optimization, and digital transformation strategies tailored to industry needs.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100" data-aos="fade-up" data-aos-delay="500">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Risk Management</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Comprehensive risk assessment and mitigation strategies for sustainable international expansion.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100" data-aos="fade-up" data-aos-delay="600">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Sustainable Growth</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Long-term strategies that balance profitability with environmental and social responsibility.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 text-center text-white" data-aos="fade-up">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Ready to transform your industry presence?
                        </h2>
                        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                            Whether you're in agriculture, technology, energy, logistics, or hospitality, we have the expertise to help you succeed in emerging markets.
                        </p>
                        <a
                            href="/contact"
                            className="inline-flex items-center bg-white text-gray-900 px-10 py-5 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg"
                        >
                            Explore Industry Opportunities
                            <ArrowRight className="ml-3 w-5 h-5" />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default IndustriesPage;