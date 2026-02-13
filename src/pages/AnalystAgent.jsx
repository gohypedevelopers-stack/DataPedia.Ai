import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Footer from '../components/Footer';
import './AnalystAgent.css';

gsap.registerPlugin(ScrollTrigger);

const AnalystAgent = () => {
    const containerRef = useRef();
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useGSAP(() => {
        // Hero
        const tl = gsap.timeline();
        tl.from(".analyst-hero-container", {
            y: 30,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        });

        // Features
        gsap.from(".analyst-features h2", {
            scrollTrigger: {
                trigger: ".analyst-features",
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
        gsap.from(".analyst-stats h2", {
            scrollTrigger: {
                trigger: ".analyst-stats",
                start: "top 85%",
            },
            opacity: 0,
            duration: 1
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
        <div className="analyst-agent-page" ref={containerRef}>
            {/* Hero Section */}
            <section className="analyst-hero">
                <div className="analyst-hero-container">
                    <div className="analyst-hero-image">
                        {/* Placeholder for the image from the screenshot (team/analytics) */}
                        <div className="image-placeholder"></div>
                    </div>
                    <div className="analyst-hero-content">
                        <h1>Analyst AI Agent</h1>
                        <p>
                            This agent intelligently analyzes trends within your niche and tracks what's
                            going viral on social media to uncover emerging opportunities and shifts in
                            market behavior. By leveraging real-time data and engagement insights, it
                            helps you stay ahead of competitors and make smart, timely business decisions.
                        </p>
                        <button className="btn-start-trial" onClick={() => navigate('/auth')}>START YOUR TRIAL <span className="arrow">→</span></button>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="analyst-features">
                <h2>How it works?</h2>
                <div className="features-grid">
                    {[
                        { title: "Build Your Brand Profile", desc: "We gather my information about your business to understand its unique identity. The Analyst Agent analyzes your brand voice to craft a profile that truly represents who you are. This ensures your messaging stays consistent and authentic across every platform." },
                        { title: "Track Social Media Buzz", desc: "Monitor conversations, mentions, and trends around your brand in real time. Gain insights into audience sentiment and emerging opportunities. Stay ahead of the curve with data that helps you react instantly and strategically." },
                        { title: "Curate Winning Captions", desc: "We collect insights from your existing content and audience interactions. The Analyst Agent studies your brand tone to craft captions that align perfectly with your voice. Boost engagement effortlessly with AI-generated content that connects and converts." },
                        { title: "Generate High-Impact Ideas", desc: "Get creative inspiration backed by data and industry insights. From campaign themes to content hooks - The Analyst Agent keeps your ideas fresh and relevant. Turn these insights into actionable strategies that drive measurable results." },
                        { title: "Seamless Integration", desc: "Integrate effortlessly with your existing tools, platforms, and workflows. The Analyst Agent connects seamlessly so you can start gathering insights and automating processes from day one. Enjoy a unified experience that keeps your data, teams, and strategies perfectly aligned." },
                        { title: "Real Time Updates", desc: "Stay ahead with live data, instant alerts, and continuous performance tracking. React quickly to market shifts, trends, and customer sentiment as they happen. The Analyst Agent keeps you informed so you can make smarter, faster decisions." }
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="feature-item"
                        >
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Cost Benefit Analysis Section */}
            <section className="analyst-stats">
                <h2>Cost Benefit Analysis</h2>
                <div className="stats-grid">
                    {[
                        { value: "25%", label: "More Revenue", desc: "with higher conversion rates" },
                        { value: "15%", label: "Man-Hours", desc: "saved per week with automated tasks" },
                        { value: "3X", label: "Scalability", desc: "achieved at no extra costs" },
                        { value: "3X", label: "Faster", desc: "response to market changes with real-time data insights" },
                        { value: "35%", label: "Productivity", desc: "enhanced overall" }
                    ].map((stat, i) => (
                        <div
                            key={i}
                            className="stat-item"
                        >
                            <div className="stat-value">{stat.value}</div>
                            <div className="stat-label">{stat.label}</div>
                            <div className="stat-desc">{stat.desc}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Case Studies Section - Placeholder */}
            <section className="analyst-case-studies">
                <h2>Our Case Studies</h2>
                {/* Add case study components here if available, or placeholders */}
            </section>

            {/* Footer CTA Section */}
            <section className="analyst-cta">
                <h2>Elevate your business growth with<br />the power of Datapedia.ai.</h2>
                <p>Unlock new opportunities with datapedia.ai solutions - contact us today!</p>
                <button className="btn-get-started">Get Started</button>
            </section>

            <Footer />
        </div>
    );
};

export default AnalystAgent;
