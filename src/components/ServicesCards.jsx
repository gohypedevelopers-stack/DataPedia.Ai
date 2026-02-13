import React from 'react';
import { motion } from 'framer-motion';
import './ServicesCards.css';

const ServicesCards = () => {
    return (
        <section className="services-cards-section" id="services">
            <div className="services-container">
                <h2 className="services-headline">How can we help you?</h2>

                {/* Group 1: A, B, C */}
                <div className="services-group-abc">
                    {/* Card A */}
                    <motion.div
                        className="service-card"
                        whileHover={{ y: -10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <div className="card-letter">A</div>
                        <div className="card-content">
                            <h3 className="card-title">MARKET ENTRY STRATEGY</h3>
                            <p className="card-desc">
                                Craft actionable market entry strategies that position your business
                                for faster traction.
                            </p>
                            <p className="card-desc">
                                Identify the right target audience, sharpen positioning, and align
                                messaging to ensure early wins.
                            </p>
                        </div>
                        <div className="card-icon-box">
                            {/* Wave Graph Icon */}
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M2 12s3-7 7-7 7 7 7 7 7-7 7-7" />
                                <circle cx="5" cy="15" r="2" fill="#fff" stroke="none" />
                                <circle cx="12" cy="9" r="2" fill="#fff" stroke="none" />
                                <circle cx="19" cy="15" r="2" fill="#fff" stroke="none" />
                            </svg>
                        </div>
                    </motion.div>

                    {/* Card B */}
                    <motion.div
                        className="service-card"
                        whileHover={{ y: -10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <div className="card-letter">B</div>
                        <div className="card-content">
                            <h3 className="card-title">SALES ENABLEMENT & CUSTOMER JOURNEY</h3>
                            <p className="card-desc">
                                Equipping sales teams with the right playbooks, messaging, and tools to
                                convert leads into loyal customers.
                            </p>
                            <p className="card-desc">
                                Build repeatable processes that enhance retention and maximize
                                customer lifetime value.
                            </p>
                        </div>
                        <div className="card-icon-box">
                            {/* Sound/Bar Icon */}
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="4" y="10" width="4" height="10" rx="1" />
                                <rect x="10" y="6" width="4" height="14" rx="1" />
                                <rect x="16" y="14" width="4" height="6" rx="1" />
                            </svg>
                        </div>
                    </motion.div>

                    {/* Card C */}
                    <motion.div
                        className="service-card"
                        whileHover={{ y: -10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <div className="card-letter">C</div>
                        <div className="card-content">
                            <h3 className="card-title">MARKET RESEARCH & INSIGHTS</h3>
                            <p className="card-desc">
                                Deliver deep market research, competitor benchmarking, and
                                customer insights to guide decision-making.
                            </p>
                            <p className="card-desc">
                                Transform data into clear strategies that adapt as your business and market
                                evolve.
                            </p>
                        </div>
                        <div className="card-icon-box">
                            {/* Arrow Down Right Icon */}
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="7" y1="7" x2="17" y2="17" />
                                <polyline points="17 7 17 17 7 17" />
                            </svg>
                        </div>
                    </motion.div>
                </div>

                {/* Group 2: D, E - Slides Over ABC */}
                <div className="services-group-de">
                    {/* Card D */}
                    <motion.div
                        className="service-card"
                        whileHover={{ y: -10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <div className="card-letter">D</div>
                        <div className="card-content">
                            <h3 className="card-title">GTM OPERATIONS & AUTOMATION</h3>
                            <p className="card-desc">
                                Streamline your GTM execution with process automation, CRM
                                optimization, and workflow design.
                            </p>
                            <p className="card-desc">
                                Free up teams to focus on growth while systems handle repetitive tasks.
                            </p>
                        </div>
                        <div className="card-icon-box">
                            {/* Sliders/Configurations Icon */}
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="4" y1="21" x2="4" y2="14" />
                                <line x1="4" y1="10" x2="4" y2="3" />
                                <line x1="12" y1="21" x2="12" y2="12" />
                                <line x1="12" y1="8" x2="12" y2="3" />
                                <line x1="20" y1="21" x2="20" y2="16" />
                                <line x1="20" y1="12" x2="20" y2="3" />
                                <line x1="1" y1="14" x2="7" y2="14" />
                                <line x1="9" y1="8" x2="15" y2="8" />
                                <line x1="17" y1="16" x2="23" y2="16" />
                            </svg>
                        </div>
                    </motion.div>

                    {/* Card E */}
                    <motion.div
                        className="service-card"
                        whileHover={{ y: -10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <div className="card-letter">E</div>
                        <div className="card-content">
                            <h3 className="card-title">CUSTOM AI MARKETING SOLUTION</h3>
                            <p className="card-desc">
                                Stop using one-size-fits-all marketing. We build bespoke AI solutions tailored precisely to
                                your brand, data, and business goals.
                            </p>
                            <p className="card-desc">
                                Our team of engineers and marketers collaborates to design, train, and deploy models
                                that are exclusively yours.
                            </p>
                        </div>
                        <div className="card-icon-box">
                            {/* Brain/AI Icon */}
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 2a10 10 0 0 1 10 10c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2z" />
                                <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                <path d="M16.5 7.5l-1.5 1.5" />
                                <path d="M7.5 7.5l1.5 1.5" />
                            </svg>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ServicesCards;
