import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Footer from '../components/Footer';
import './ProspectorAgent.css';

gsap.registerPlugin(ScrollTrigger);

const ProspectorAgent = () => {
    const containerRef = useRef();
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useGSAP(() => {
        // Hero
        const tl = gsap.timeline();
        tl.from(".prospector-hero-image", {
            x: -50,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        })
            .from(".prospector-hero-content", {
                x: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            }, "-=0.8");

        // Features
        gsap.from(".prospector-features h2", {
            scrollTrigger: {
                trigger: ".prospector-features",
                start: "top 80%",
            },
            y: 20,
            opacity: 0,
            duration: 0.8
        });

        gsap.from(".feature-item", {
            scrollTrigger: {
                trigger: ".features-grid",
                start: "top 85%",
            },
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out"
        });

        // Stats
        gsap.from(".prospector-stats h2", {
            scrollTrigger: {
                trigger: ".prospector-stats",
                start: "top 85%",
            },
            y: 20,
            opacity: 0,
            duration: 0.8
        });

        gsap.from(".stat-item", {
            scrollTrigger: {
                trigger: ".stats-grid",
                start: "top 85%",
            },
            scale: 0.8,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "back.out(1.5)"
        });

    }, { scope: containerRef });

    return (
        <div className="prospector-agent-page" ref={containerRef}>
            {/* Hero Section */}
            <section className="prospector-hero">
                <div className="prospector-hero-container">
                    <div className="prospector-hero-image">
                        {/* CSS-based placeholder simulating a search/filter interface */}
                        <div className="image-placeholder-prospector">
                            <div className="search-bar"></div>
                            <div className="filter-row">
                                <div className="filter-tag"></div>
                                <div className="filter-tag"></div>
                                <div className="filter-tag"></div>
                            </div>
                            <div className="results-list">
                                <div className="result-card">
                                    <div className="avatar"></div>
                                    <div className="lines">
                                        <div className="line full"></div>
                                        <div className="line half"></div>
                                    </div>
                                    <div className="status-dot"></div>
                                </div>
                                <div className="result-card">
                                    <div className="avatar"></div>
                                    <div className="lines">
                                        <div className="line full"></div>
                                        <div className="line half"></div>
                                    </div>
                                    <div className="status-dot"></div>
                                </div>
                                <div className="result-card highlight">
                                    <div className="avatar"></div>
                                    <div className="lines">
                                        <div className="line full"></div>
                                        <div className="line half"></div>
                                    </div>
                                    <div className="status-check">✓</div>
                                </div>
                            </div>
                            {/* Scanning effect overlay */}
                            <div className="scan-line"></div>
                        </div>
                    </div>
                    <div className="prospector-hero-content">
                        <h1>Prospector AI Agent</h1>
                        <p>
                            This agent intelligently identifies and qualifies intent-based leads from LinkedIn by analyzing
                            engagement signals and behavioral data. Using your company's profile, it automatically builds
                            smart filters to target the most relevant prospects—ensuring you reach decision-makers who are
                            actively interested in your product or service.
                        </p>
                        <button className="btn-start-trial" onClick={() => navigate('/auth')}>START YOUR TRIAL <span className="arrow">→</span></button>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="prospector-features">
                <h2>How it works?</h2>
                <div className="features-grid">
                    <div className="feature-item">
                        <h3>Profile Creation</h3>
                        <p>The agent analyzes your company's offerings, target audience, and positioning to build a precise business profile. This ensures every lead sourced aligns perfectly with your brand's goals and value proposition.</p>
                    </div>
                    <div className="feature-item">
                        <h3>Product & Market Mastery</h3>
                        <p>It studies your industry landscape, competitors, and customer intent signals to understand where real opportunities lie. By mapping market behavior, it identifies untapped segments ready for engagement.</p>
                    </div>
                    <div className="feature-item">
                        <h3>Profiles Filteration</h3>
                        <p>Advanced filters are applied to LinkedIn data to identify high-intent prospects that match your ideal customer profile. This precision saves time by focusing only on leads most likely to convert.</p>
                    </div>
                    <div className="feature-item">
                        <h3>Multichannel Outreach</h3>
                        <p>Personalized messages and engagement strategies are crafted to connect with and nurture qualified leads. Each interaction is data-driven, ensuring authenticity and higher response rates.</p>
                    </div>
                    <div className="feature-item">
                        <h3>Seamless Leads Integration</h3>
                        <p>Verified leads are seamlessly integrated into your CRM or sales workflow for immediate follow-up. You get real-time access to fresh, sales-ready contacts without manual effort.</p>
                    </div>
                    <div className="feature-item">
                        <h3>Real Time Strategy Updates</h3>
                        <p>The system continuously learns from engagement outcomes, refining filters and outreach tactics to maximize conversions. Your lead generation process evolves dynamically, staying ahead of market trends and competition.</p>
                    </div>
                </div>
            </section>

            {/* Cost Benefit Analysis Section */}
            <section className="prospector-stats">
                <h2>Cost Benefit Analysis</h2>
                <div className="stats-grid">
                    <div className="stat-item">
                        <div className="stat-value">25%</div>
                        <div className="stat-label">More Revenue</div>
                        <div className="stat-desc">with higher conversion rates</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-value">15%</div>
                        <div className="stat-label">Man-Hours</div>
                        <div className="stat-desc">saved per week with automated tasks</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-value">3X</div>
                        <div className="stat-label">Scalability</div>
                        <div className="stat-desc">achieved at no extra costs</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-value">3X</div>
                        <div className="stat-label">Faster</div>
                        <div className="stat-desc">response to market changes with real-time data insights</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-value">35%</div>
                        <div className="stat-label">Productivity</div>
                        <div className="stat-desc">enhanced overall</div>
                    </div>
                </div>
            </section>

            {/* Case Studies Section - Placeholder */}
            <section className="prospector-case-studies">
                <h2>Our Case Studies</h2>
                {/* Add case study components here if available, or placeholders */}
            </section>

            {/* Footer CTA Section */}
            <section className="prospector-cta">
                <div>
                    <h2>Elevate your business growth with<br />the power of Datapedia.ai.</h2>
                    <p>Unlock new opportunities with datapedia.ai solutions - contact us today!</p>
                    <button className="btn-get-started">Get Started</button>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ProspectorAgent;
