import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Footer from '../components/Footer';
import './Resources.css';

gsap.registerPlugin(ScrollTrigger);

const Resources = () => {
    const containerRef = useRef();

    useGSAP(() => {
        // Hero
        const tl = gsap.timeline();
        tl.from(".res-hero-content h1", {
            y: 30,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        })
            .from(".hero-cta-wrapper", {
                scale: 0.9,
                opacity: 0,
                duration: 0.8,
                ease: "back.out(1.7)"
            }, "-=0.5");

        // Resources Grid
        gsap.from(".res-card", {
            scrollTrigger: {
                trigger: ".res-grid-container",
                start: "top 80%",
            },
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out"
        });

    }, { scope: containerRef });

    // Placeholder data for the cards
    const resources = [
        { title: "What If Your Social Media Could...", desc: "Unlock the potential of AI in your social media strategy.", partners: "100+" },
        { title: "Social Media Automation", desc: "How to automate your posts and engagement effectively.", partners: "100+" },
        { title: "With AI Agents", desc: "Integrating AI agents into your daily workflows.", partners: "100+" },
        { title: "Lead Generation 101", desc: "The basics of generating high-quality leads using AI.", partners: "100+" },
        { title: "Workflow Optimization", desc: "Streamline your business processes for maximum efficiency.", partners: "100+" },
        { title: "Conversion Tactics", desc: "Proven strategies to convert more leads into customers.", partners: "100+" },
    ];

    return (
        <div className="resources-page" ref={containerRef}>
            {/* Geometric Hero Section */}
            <section className="res-hero">
                <div className="geometric-bg"></div>
                <div className="res-hero-content">
                    <h1>
                        Insights on Lead Generation, Workflow<br />
                        <span className="text-gold">Automation, Conversion Optimization</span>
                    </h1>
                    <div className="hero-cta-wrapper">
                        <button
                            className="btn-strategy-call"
                            onClick={() => window.open('https://calendar.app.google/UWRRkZgCUAzc2i9i8', '_blank')}
                        >
                            BOOK A STRATEGY CALL <span className="arrow">→</span>
                        </button>
                    </div>
                </div>
            </section>

            {/* Resources Grid Section */}
            <section className="res-grid-section">
                <div className="res-grid-container">
                    {resources.map((item, index) => (
                        <div
                            key={index}
                            className="res-card"
                        >
                            <div className="res-card-header">
                                <div className="header-image-fragment"></div> {/* Sand dune slice */}
                                <div className="read-it">
                                    <span>Read it</span>
                                    <span className="icon-arrow-up-right">↗</span>
                                </div>
                            </div>

                            <div className="res-card-video-area">
                                <div className="video-thumbnail">
                                    <div className="play-button">▶</div>
                                    <div className="video-overlay-text">
                                        <span className="badge">AI</span>
                                        <p>What If Your Social Media Could...</p>
                                        <h3>SOCIAL MEDIA AUTOMATION<br />WITH AI AGENTS</h3>
                                    </div>
                                </div>
                            </div>

                            <div className="res-card-body">
                                <h3>{item.title}</h3>
                                <p>Add paragraph text. Click "Edit Text" to update the font, size and more. To change and reuse text themes, go to Site Styles.</p>

                                <div className="res-card-footer">
                                    <span className="partners-count">{item.partners}</span>
                                    <span className="partners-label">Partners</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Resources;
