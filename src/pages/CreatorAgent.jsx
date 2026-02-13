import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Footer from '../components/Footer';
import './CreatorAgent.css';

gsap.registerPlugin(ScrollTrigger);

const CreatorAgent = () => {
    const containerRef = useRef();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useGSAP(() => {
        // Hero
        const tl = gsap.timeline();
        tl.from(".creator-hero-image", {
            x: -50,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        })
            .from(".creator-hero-content", {
                x: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            }, "-=0.8");

        // Features
        gsap.from(".creator-features h2", {
            scrollTrigger: {
                trigger: ".creator-features",
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
        gsap.from(".creator-stats h2", {
            scrollTrigger: {
                trigger: ".creator-stats",
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

        // Case Studies
        gsap.from(".creator-case-studies h2", {
            scrollTrigger: {
                trigger: ".creator-case-studies",
                start: "top 85%",
            },
            scale: 0.9,
            opacity: 0,
            duration: 0.5
        });

        // CTA
        gsap.from(".creator-cta", {
            scrollTrigger: {
                trigger: ".creator-cta",
                start: "top 85%",
            },
            y: 30,
            opacity: 0,
            duration: 0.8
        });

    }, { scope: containerRef });

    return (
        <div className="creator-agent-page" ref={containerRef}>
            {/* Hero Section */}
            <section className="creator-hero">
                <div className="creator-hero-container">
                    <div className="creator-hero-image">
                        {/* Placeholder for the collage image from the screenshot */}
                        <div className="image-placeholder-collage"></div>
                    </div>
                    <div className="creator-hero-content">
                        <h1>Creator AI Agent</h1>
                        <p>
                            This agent helps you build a complete brand identity by generating your unique voice,
                            visuals, and videos using advanced AI tools. It brings consistency and creativity together,
                            ensuring your brand stands out across every platform. By understanding your business goals
                            and audience, it tailors every element to match your brand's tone and style.
                        </p>
                        <button className="btn-start-trial">START YOUR TRIAL <span className="arrow">→</span></button>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="creator-features">
                <h2>How it works?</h2>
                <div className="features-grid">
                    <div className="feature-item">
                        <h3>Set Up Your Business Profile</h3>
                        <p>Share key details about your brand, goals, and audience. This forms the foundation for creating a personalized and authentic brand identity. The Analyst Agent uses this information to tailor every insight to your business needs.</p>
                    </div>
                    <div className="feature-item">
                        <h3>Connect with The Analyst Agent</h3>
                        <p>Link your profile to The Analyst Agent to activate AI-driven insights. Our system begins analyzing your data to understand your brand voice and objectives. This seamless connection ensures your strategies are guided by real-time intelligence.</p>
                    </div>
                    <div className="feature-item">
                        <h3>Generate Video and Image Scripts</h3>
                        <p>Leverage AI to create compelling, brand-aligned scripts in seconds. From promotional videos to social posts, get content ideas ready for production. Each script is designed to reflect your tone, audience preferences, and campaign goals.</p>
                    </div>
                    <div className="feature-item">
                        <h3>Create Engaging Visuals</h3>
                        <p>Transform your ideas into stunning visuals that match your brand identity. The Creator Agent designs AI-generated images that are consistent, creative, and captivating. Bring your concepts to life with visuals that drive attention and build recognition.</p>
                    </div>
                    <div className="feature-item">
                        <h3>Review and Approve Content</h3>
                        <p>Easily review all generated scripts and visuals before publishing. Make quick edits, give approvals, and maintain full creative control. Collaborate effortlessly with your team to ensure every asset meets your brand standards.</p>
                    </div>
                    <div className="feature-item">
                        <h3>Receive Real-Time Updates</h3>
                        <p>Stay informed with instant notifications and performance insights. Track every update and improvement as your brand content evolves in real time. React swiftly to trends, performance shifts, and new opportunities as they emerge.</p>
                    </div>
                </div>
            </section>

            {/* Cost Benefit Analysis Section */}
            <section className="creator-stats">
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
            <section className="creator-case-studies">
                <h2>Our Case Studies</h2>
                {/* Add case study components here if available, or placeholders */}
            </section>

            {/* Footer CTA Section */}
            <section className="creator-cta">
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

export default CreatorAgent;
