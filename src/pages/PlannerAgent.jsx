import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Footer from '../components/Footer';
import './PlannerAgent.css';

gsap.registerPlugin(ScrollTrigger);

const PlannerAgent = () => {
    const containerRef = useRef();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useGSAP(() => {
        // Hero
        const tl = gsap.timeline();
        tl.from(".planner-hero-image", {
            x: -50,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        })
            .from(".planner-hero-content", {
                x: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            }, "-=0.8");

        // Features
        gsap.from(".planner-features h2", {
            scrollTrigger: {
                trigger: ".planner-features",
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
        gsap.from(".planner-stats h2", {
            scrollTrigger: {
                trigger: ".planner-stats",
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
        <div className="planner-agent-page" ref={containerRef}>
            {/* Hero Section */}
            <section className="planner-hero">
                <div className="planner-hero-container">
                    <div className="planner-hero-image">
                        {/* CSS-based placeholder simulating a calendar/planning interface */}
                        <div className="image-placeholder-planner">
                            <div className="cal-header"></div>
                            <div className="cal-grid">
                                <div className="cal-cell"></div><div className="cal-cell"></div><div className="cal-cell"></div>
                                <div className="cal-cell"></div><div className="cal-cell active"></div><div className="cal-cell"></div>
                                <div className="cal-cell"></div><div className="cal-cell"></div><div className="cal-cell"></div>
                            </div>
                        </div>
                    </div>
                    <div className="planner-hero-content">
                        <h1>Planner AI Agent</h1>
                        <p>
                            The Planner Agent schedules your posts seamlessly across multiple social media channels.
                            Each caption is intelligently customized to match the tone, format, and audience of every platform -
                            ensuring your content performs its best everywhere it's shared. Save time and maintain consistency
                            while your brand stays active and engaging across all channels.
                        </p>
                        <button className="btn-start-trial">START YOUR TRIAL <span className="arrow">→</span></button>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="planner-features">
                <h2>How it works?</h2>
                <div className="features-grid">
                    <div className="feature-item">
                        <h3>Collect Content Inputs</h3>
                        <p>The Planner Agent gathers your post ideas, captions, media files, and campaign details. It also analyzes your past performance and audience behavior to guide scheduling decisions. By understanding your content goals, it builds a foundation for an effective publishing strategy.</p>
                    </div>
                    <div className="feature-item">
                        <h3>Identify Platforms and Tone</h3>
                        <p>It detects which social media platforms you're targeting — such as LinkedIn, Instagram, X (Twitter), or Facebook. The agent then adapts your messaging style to match each platform's tone and audience expectations. This ensures your brand voice looks natural and consistent across every channel.</p>
                    </div>
                    <div className="feature-item">
                        <h3>Generate Captions</h3>
                        <p>Using AI, it crafts unique captions optimized for engagement. Each caption aligns with your brand voice while respecting platform nuances like hashtags, emojis, or length limits. This personalized approach boosts authenticity and drives stronger audience interaction.</p>
                    </div>
                    <div className="feature-item">
                        <h3>Schedule Posts Intelligently</h3>
                        <p>The Planner Agent determines the best posting times for maximum visibility. It automates scheduling across channels and ensures consistent timing based on audience activity patterns. You can plan weeks of content in minutes, freeing up time for strategy and creativity.</p>
                    </div>
                    <div className="feature-item">
                        <h3>Review and Approve</h3>
                        <p>Before publishing, you can review, edit, and approve all scheduled content. This gives you full control and transparency over what goes live. Collaborate easily with your team to ensure everything is perfect before scheduling.</p>
                    </div>
                    <div className="feature-item">
                        <h3>Optimize Future Posts</h3>
                        <p>It continuously learns from engagement metrics and audience feedback. Each new campaign benefits from data-driven insights for even better performance. The more you use it, the smarter and more personalized your content strategy becomes.</p>
                    </div>
                </div>
            </section>

            {/* Cost Benefit Analysis Section */}
            <section className="planner-stats">
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
            <section className="planner-case-studies">
                <h2>Our Case Studies</h2>
                {/* Add case study components here if available, or placeholders */}
            </section>

            {/* Footer CTA Section */}
            <section className="planner-cta">
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

export default PlannerAgent;
