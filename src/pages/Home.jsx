import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AntiGravityBackground from '../components/AntiGravityBackground';
import VideoSections from '../components/VideoSections';

import StrategySection from '../components/StrategySection';
import WhyDatapedia from '../components/WhyDatapedia';
import SmarterData from '../components/SmarterData';
import HowItWorks from '../components/HowItWorks';
import Industries from '../components/Industries';
import Campaigns from '../components/Campaigns';
import ServicesCards from '../components/ServicesCards';
import SeamlessGTM from '../components/SeamlessGTM';

import AutomationWorkflow from '../components/AutomationWorkflow';
import './Home.css';

gsap.registerPlugin(ScrollTrigger);

// C2: Inline SVG Crystal Component
const CrystalSVG = () => (
    <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="crystal-svg">
        <defs>
            {/* Premium Luxurious Gold Gradient */}
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#ebd094', stopOpacity: 1 }} /> {/* Light Gold */}
                <stop offset="50%" style={{ stopColor: '#d8ae5e', stopOpacity: 1 }} /> {/* Main Gold */}
                <stop offset="100%" style={{ stopColor: '#a6833d', stopOpacity: 1 }} /> {/* Deep Bronze */}
            </linearGradient>
            {/* Deep Onyx / Gunmetal Gradient */}
            <linearGradient id="grad2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#4B5563', stopOpacity: 0.9 }} />
                <stop offset="100%" style={{ stopColor: '#0F172A', stopOpacity: 1 }} />
            </linearGradient>
            {/* Inner Glow Polish */}
            <radialGradient id="grad3" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="0%" style={{ stopColor: '#FFFBEB', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#FEF3C7', stopOpacity: 0.8 }} />
            </radialGradient>
            <filter id="glow" x="-40%" y="-40%" width="180%" height="180%">
                <feGaussianBlur stdDeviation="12" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
        </defs>

        {/* Abstract Spiky Shapes - Layered for 3D feel */}
        <g filter="url(#glow)">
            {/* Back Spikes - Deep Onyx Halo */}
            <path d="M250 50 L300 200 L450 250 L300 300 L250 450 L200 300 L50 250 L200 200 Z" fill="url(#grad2)" opacity="0.9" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />

            {/* Mid Spikes - Dark Metallic with Gold Edge */}
            <path d="M250 80 L320 180 L420 250 L320 320 L250 420 L180 320 L80 250 L180 180 Z" fill="#171717" stroke="url(#grad1)" strokeWidth="1.5" />

            {/* Front Spikes (Sharpest) - The Main Gold Star */}
            <path d="M250 120 L290 210 L380 250 L290 290 L250 380 L210 290 L120 250 L210 210 Z" fill="url(#grad1)" stroke="#FFF" strokeWidth="0.5" />

            {/* Central Core Highlights - Diamond/Gem look */}
            <path d="M250 200 L280 250 L250 300 L220 250 Z" fill="url(#grad3)" />
            <path d="M250 200 L220 250 L250 300 L280 250 Z" fill="none" stroke="#FFF" strokeWidth="2" opacity="0.8" />
        </g>
    </svg>
);

// Inline Shard Component
const ShardSVG = ({ className }) => (
    <svg
        viewBox="0 0 100 100"
        className={`shard-svg ${className}`}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M50 0 L100 80 L0 100 Z" fill="rgba(80,80,80,0.3)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
    </svg>
);

const Home = () => {
    const containerRef = useRef(null);
    const heroRef = useRef(null);
    const crystalRef = useRef(null);

    useGSAP(() => {
        // 1. Hero Content Entrance
        const tl = gsap.timeline();
        tl.from(".hero-headline", {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        })
            .from(".hero-subtext-container", {
                y: 30,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out"
            }, "-=0.6")
            .from(".btn-start-trial", {
                y: 20,
                opacity: 0,
                duration: 0.6,
                ease: "back.out(1.7)"
            }, "-=0.4");

        // 2. Crystal Animations
        // Continuous Rotation
        gsap.to(crystalRef.current, {
            rotation: 360,
            duration: 20,
            repeat: -1,
            ease: "linear"
        });

        // Floating (Y-axis)
        gsap.to(crystalRef.current, {
            y: -15,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

        // 3. Mouse Parallax for Crystal
        // We'll use quickTo for performance
        const xTo = gsap.quickTo(crystalRef.current, "rotationY", { duration: 0.5, ease: "power3" });
        const yTo = gsap.quickTo(crystalRef.current, "rotationX", { duration: 0.5, ease: "power3" });

        const handleMouseMove = (e) => {
            const { innerWidth, innerHeight } = window;
            const x = (e.clientX / innerWidth - 0.5) * 20; // -10 to 10 degrees
            const y = (e.clientY / innerHeight - 0.5) * -20; // Invert Y
            xTo(x);
            yTo(y);
        };

        window.addEventListener("mousemove", handleMouseMove);

        // 4. Shards Floating Animation
        gsap.to(".shard-top", {
            y: -20,
            rotation: 10,
            duration: 5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

        gsap.to(".shard-bottom", {
            y: 20,
            rotation: -10,
            duration: 6,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: 1
        });

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };

    }, { scope: containerRef });

    return (
        <div className="home-page" ref={containerRef}>

            {/* HERO SECTION WITH ANTI-GRAVITY BACKGROUND */}
            <AntiGravityBackground intensity={1}>
                <section className="home-hero" ref={heroRef}>

                    {/* Floating Shards */}
                    <ShardSVG className="shard-top" />
                    <ShardSVG className="shard-bottom" />

                    <div className="home-hero-container">

                        {/* LEFT COLUMN: Hero Visual */}
                        <div className="hero-visual-col">
                            <div className="audio-indicator">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M9 18V5l12-2v13"></path>
                                    <circle cx="6" cy="18" r="3"></circle>
                                    <circle cx="18" cy="16" r="3"></circle>
                                </svg>
                            </div>

                            <div className="hero-3d-wrapper" ref={crystalRef}>
                                <CrystalSVG />
                            </div>
                        </div>

                        {/* RIGHT COLUMN: Text Content */}
                        <div className="hero-content-col">
                            <h1 className="hero-headline">
                                Get more marketing done,<br />
                                without doing more
                            </h1>

                            <div className="hero-subtext-container">
                                <p className="hero-subtext">
                                    Our AI agents work Smarter, Faster, and Stronger, using built-in marketing flows to make your repetitive work easy. They take care of the busywork - like targeted lead research, social media post scheduler, reporting and trend analysis - so you can focus on strategy.
                                </p>
                            </div>

                            <div>
                                <button className="btn-start-trial">
                                    START YOUR TRIAL <span className="arrow">→</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </AntiGravityBackground>

            {/* Other Sections */}
            <StrategySection />
            <WhyDatapedia />
            <SmarterData />
            <Campaigns />
            <ServicesCards />
            <HowItWorks />
            <SeamlessGTM />
            <Industries />
            <AutomationWorkflow />
            <VideoSections />
        </div>
    );
};

export default Home;
