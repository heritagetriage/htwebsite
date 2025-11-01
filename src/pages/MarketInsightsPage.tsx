import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ArrowRight, TrendingUp, Globe, MapPin, DollarSign, Users, Briefcase, BarChart3, Target, Zap } from 'lucide-react';

const MarketInsightsPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init({
            duration: 800,
            easing: 'ease-out-cubic',
            once: true,
            offset: 100,
        });
    }, []);

    const markets = [
        {
            name: 'Africa',
            region: 'Sub-Saharan Africa',
            icon: Globe,
            flag: '🌍',
            growth: '3.8%',
            growthLabel: 'Projected Growth 2025',
            keyMetric: 'Resilient Growth',
            highlights: [
                'Sub-Saharan Africa projected at 3.8% growth in 2025 with resilience despite global headwinds',
                'Multilateral financing targeting ports, rails, and clean energy infrastructure',
                'Strong demand in energy transition, digital services, and logistics sectors'
            ],
            opportunities: [
                'Energy Transition Projects',
                'Digital Infrastructure',
                'Logistics & Supply Chain',
                'Financial Services'
            ],
            sourcing: 'Precision agriculture inputs, food-processing equipment, grid/solar components, logistics technology, hospitality systems, enterprise software',
            riskFactors: ['Policy execution gaps', 'FX volatility', 'Regulatory compliance'],
            heritageValue: 'Market selection, regulatory mapping, distributor matchmaking, protocol and launch support, plus import documentation and end-to-end logistics'
        },
        {
            name: 'Mexico',
            region: 'North America',
            icon: MapPin,
            flag: '🇲🇽',
            growth: '$145B',
            growthLabel: 'U.S. FDI Stock (2023)',
            keyMetric: 'Nearshoring Hub',
            highlights: [
                'U.S. FDI stock rose to $145B in 2023 with continued trade momentum into 2025',
                'Open FDI framework across most sectors with North American integration advantages',
                'Strategic position for supply-chain diversification and manufacturing'
            ],
            opportunities: [
                'Automotive & EV Manufacturing',
                'Electronics Assembly',
                'Logistics Nodes',
                'Industrial Services'
            ],
            sourcing: 'Automotive parts, electronics sub-assemblies, industrial packaging, building materials, food & beverage co-packing services',
            riskFactors: ['Customs complexity', 'Labor regulations', 'Permitting timelines'],
            heritageValue: 'Partner due diligence, pricing negotiations, customs guidance, rules-of-origin compliance, multimodal shipping orchestration'
        },
        {
            name: 'Canada',
            region: 'North America',
            icon: Users,
            flag: '🇨🇦',
            growth: 'AAA',
            growthLabel: 'Credit Rating',
            keyMetric: 'Stable Market',
            highlights: [
                'Mature demand with predictable procurement and strong public sector opportunities',
                'New economic security considerations in 2025 require enhanced due diligence',
                'Ideal for first international expansion and government partnerships'
            ],
            opportunities: [
                'Healthcare Technology',
                'Clean Technology',
                'Infrastructure Projects',
                'Government Contracts'
            ],
            sourcing: 'High-specification equipment, water treatment solutions, renewable energy systems, laboratory equipment, education technology',
            riskFactors: ['Economic security screening', 'Bilingual requirements', 'Environmental compliance'],
            heritageValue: 'Supplier qualification, regulatory compliance, documentation management, consolidated shipments with warranty coordination'
        },
        {
            name: 'Asia',
            region: 'Asia-Pacific',
            icon: TrendingUp,
            flag: '🌏',
            growth: '#1',
            growthLabel: 'Global Growth Engine',
            keyMetric: 'Tech Innovation',
            highlights: [
                'Remains world\'s growth engine while navigating tariffs with domestic demand focus',
                'Deep industrial and technology capabilities from EV supply chains to cloud/AI',
                'Diverse opportunity sets requiring country-specific regulatory strategies'
            ],
            opportunities: [
                'EV Supply Chains',
                'Cloud & AI Services',
                'Consumer Technology',
                'Manufacturing Pivot'
            ],
            sourcing: 'Electronics components, solar technology, industrial machinery, packaging equipment, smart logistics solutions',
            riskFactors: ['Regulatory complexity', 'Partner selection', 'Trade policy shifts'],
            heritageValue: 'Manufacturer vetting, localized market entry, regulatory mapping, partner integration, digital stack optimization'
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/world-map.svg')] opacity-10"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center" data-aos="fade-up">
                        <div className="inline-flex items-center px-6 py-3 bg-blue-500/20 backdrop-blur-sm rounded-full text-sm font-medium text-blue-200 mb-8 border border-blue-400/30">
                            <BarChart3 className="w-4 h-4 mr-2" />
                            MARKET INTELLIGENCE REPORT
                        </div>
                        <h1 className="text-6xl md:text-7xl font-light text-white mb-8 leading-tight">
                            Global Market
                            <br />
                            <span className="font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Intelligence</span>
                        </h1>
                        <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12">
                            Strategic insights and market intelligence for U.S. businesses expanding internationally and African enterprises seeking global sourcing partnerships.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-4 border border-white/20">
                                <div className="text-3xl font-bold text-white">4</div>
                                <div className="text-sm text-slate-300">Key Markets</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-4 border border-white/20">
                                <div className="text-3xl font-bold text-white">2025</div>
                                <div className="text-sm text-slate-300">Market Outlook</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-4 border border-white/20">
                                <div className="text-3xl font-bold text-white">$145B+</div>
                                <div className="text-sm text-slate-300">Investment Flow</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Executive Summary */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-12 items-start">
                        <div className="lg:col-span-2" data-aos="fade-right">
                            <h2 className="text-4xl font-bold text-slate-900 mb-6">Executive Summary</h2>
                            <div className="prose prose-lg text-slate-600 space-y-6">
                                <p className="text-xl leading-relaxed">
                                    Global markets present unprecedented opportunities for strategic expansion and sourcing partnerships. Our analysis covers four key regions offering distinct advantages for U.S. market entrants and African sourcing initiatives.
                                </p>
                                <p>
                                    From Africa's emerging growth momentum to Mexico's nearshoring advantages, Canada's stable regulatory environment, and Asia's innovation leadership, each market requires tailored strategies for successful entry and sustainable growth.
                                </p>
                            </div>
                        </div>
                        <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200" data-aos="fade-left">
                            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                                <Target className="w-6 h-6 mr-3 text-blue-600" />
                                Key Insights
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                                    <span className="text-slate-600">Regulatory frameworks evolving across all markets</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                                    <span className="text-slate-600">Infrastructure investments creating new opportunities</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                                    <span className="text-slate-600">Digital transformation accelerating market access</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                                    <span className="text-slate-600">Compliance and partnerships critical for success</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Market Analysis */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                            Market Analysis by Region
                        </h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            Comprehensive intelligence on growth drivers, opportunities, and strategic considerations for each key market.
                        </p>
                    </div>

                    <div className="space-y-24">
                        {markets.map((market, index) => {
                            const IconComponent = market.icon;
                            const isEven = index % 2 === 0;

                            return (
                                <div
                                    key={index}
                                    className={`grid lg:grid-cols-12 gap-12 items-start ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}
                                    data-aos="fade-up"
                                    data-aos-delay={index * 200}
                                >
                                    {/* Market Header Card */}
                                    <div className={`lg:col-span-5 ${!isEven ? 'lg:col-start-8' : ''}`}>
                                        <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-3xl text-white shadow-2xl">
                                            <div className="flex items-center mb-6">
                                                <div className="text-4xl mr-4">{market.flag}</div>
                                                <div>
                                                    <h3 className="text-3xl font-bold">{market.name}</h3>
                                                    <p className="text-slate-300">{market.region}</p>
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-2 gap-4 mb-8">
                                                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                                                    <div className="text-2xl font-bold">{market.growth}</div>
                                                    <div className="text-sm text-slate-300">{market.growthLabel}</div>
                                                </div>
                                                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                                                    <div className="text-lg font-bold">{market.keyMetric}</div>
                                                    <div className="text-sm text-slate-300">Market Position</div>
                                                </div>
                                            </div>

                                            <div className="space-y-4">
                                                <h4 className="font-bold text-lg flex items-center">
                                                    <Zap className="w-5 h-5 mr-2" />
                                                    Key Opportunities
                                                </h4>
                                                <div className="grid grid-cols-2 gap-2">
                                                    {market.opportunities.map((opp, idx) => (
                                                        <div key={idx} className="bg-white/5 rounded-lg px-3 py-2 text-sm border border-white/10">
                                                            {opp}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Market Details */}
                                    <div className={`lg:col-span-7 space-y-6 ${!isEven ? 'lg:col-start-1' : ''}`}>
                                        {/* Market Highlights */}
                                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
                                            <h4 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                                                <BarChart3 className="w-6 h-6 mr-3 text-blue-600" />
                                                Market Intelligence
                                            </h4>
                                            <div className="space-y-4">
                                                {market.highlights.map((highlight, idx) => (
                                                    <div key={idx} className="flex items-start">
                                                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                                        <p className="text-slate-700 leading-relaxed">{highlight}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Sourcing Opportunities */}
                                        <div className="bg-blue-50 p-8 rounded-2xl border border-blue-200">
                                            <h4 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                                                <Briefcase className="w-6 h-6 mr-3 text-blue-600" />
                                                Sourcing Opportunities (African Buyers)
                                            </h4>
                                            <p className="text-slate-700 leading-relaxed">{market.sourcing}</p>
                                        </div>

                                        {/* Heritage Triage Value */}
                                        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-8 rounded-2xl text-white">
                                            <h4 className="text-xl font-bold mb-4 flex items-center">
                                                <DollarSign className="w-6 h-6 mr-3" />
                                                How Heritage Triage Adds Value
                                            </h4>
                                            <p className="text-blue-100 leading-relaxed">{market.heritageValue}</p>
                                        </div>

                                        {/* Risk Factors */}
                                        <div className="bg-amber-50 p-6 rounded-2xl border border-amber-200">
                                            <h5 className="font-bold text-slate-900 mb-3">Key Risk Factors</h5>
                                            <div className="flex flex-wrap gap-2">
                                                {market.riskFactors.map((risk, idx) => (
                                                    <span key={idx} className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                                                        {risk}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center" data-aos="fade-up">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                            Ready to Enter These Markets?
                        </h2>
                        <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                            Get personalized market intelligence, regulatory guidance, and strategic support for your international expansion or sourcing initiatives.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <a
                                href="/contact"
                                className="inline-flex items-center bg-blue-600 text-white px-10 py-5 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
                            >
                                Request Market Analysis
                                <ArrowRight className="ml-3 w-5 h-5" />
                            </a>
                            <a
                                href="/services/market-entry"
                                className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white px-10 py-5 rounded-full text-lg font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20"
                            >
                                Explore Market Entry Services
                                <ArrowRight className="ml-3 w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MarketInsightsPage;