import React from 'react';
import { motion } from 'framer-motion';
import './WhyDatapedia.css';

const WhyDatapedia = () => {
    return (
        <section className="why-datapedia-section">
            <div className="why-container">
                <h2 className="why-headline">Why Datapedia.ai</h2>
                <p className="why-subtext">
                    Did you know that the average employee spends 1.8 hours every day searching for
                    information — that’s 9 full weeks per year — because their workflows aren’t automated?
                </p>

                <div className="why-grid">
                    {/* Feature 1 */}
                    <div className="why-card">
                        <motion.div
                            className="why-icon-wrapper"
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                            {/* Calendar/Grid Icon - Bigger (100px) */}
                            <svg width="100" height="100" viewBox="0 0 60 60" fill="none" stroke="#d8ae5e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="5" y="10" width="50" height="45" rx="4" />
                                <line x1="5" y1="22" x2="55" y2="22" />
                                <line x1="20" y1="5" x2="20" y2="15" />
                                <line x1="40" y1="5" x2="40" y2="15" />
                                {/* Inner grid lines */}
                                <line x1="18" y1="22" x2="18" y2="55" strokeWidth="1" opacity="0.5" />
                                <line x1="30" y1="22" x2="30" y2="55" strokeWidth="1" opacity="0.5" />
                                <line x1="42" y1="22" x2="42" y2="55" strokeWidth="1" opacity="0.5" />
                                <line x1="5" y1="33" x2="55" y2="33" strokeWidth="1" opacity="0.5" />
                                <line x1="5" y1="44" x2="55" y2="44" strokeWidth="1" opacity="0.5" />
                                {/* Highlighted cells with pulse */}
                                <motion.rect
                                    x="20" y="34" width="8" height="8" fill="#ef4444" stroke="none" opacity="0.8"
                                    animate={{ opacity: [0.4, 0.9, 0.4] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                />
                                <motion.rect
                                    x="32" y="24" width="8" height="8" fill="#d8ae5e" stroke="none" opacity="0.8"
                                    animate={{ opacity: [0.9, 0.4, 0.9] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                />
                            </svg>
                        </motion.div>
                        <h3 className="why-card-title">Book More Meetings, Not Headaches</h3>
                        <p className="why-card-desc">
                            Our appointment-setting systems are built to deliver real
                            conversations with real prospects — not just fill your calendar, but
                            grow your pipeline with intent-driven leads.
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="why-card">
                        <motion.div
                            className="why-icon-wrapper"
                            animate={{ y: [0, -20, 0] }} // Bounce
                            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }} // Slightly offset time
                        >
                            {/* Automate/Flow Icon - Bigger (100px) */}
                            <svg width="100" height="100" viewBox="0 0 60 60" fill="none" stroke="#d8ae5e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M10 40 L30 50 L50 40" />
                                <path d="M30 50 L30 30" />
                                <motion.path
                                    d="M10 20 L30 10 L50 20 L30 30 Z" // Top box floats
                                    animate={{ y: [-4, 4, -4] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                />
                                <path d="M10 40 L10 20" />
                                <path d="M50 40 L50 20" />
                                {/* Extra decorative elements */}
                                <motion.circle
                                    cx="45" cy="15" r="3" fill="#d8ae5e" stroke="none"
                                    animate={{ scale: [1, 1.5, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />
                                <motion.circle
                                    cx="15" cy="35" r="3" fill="#ef4444" stroke="none"
                                    animate={{ scale: [1, 1.3, 1] }}
                                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                                />
                                <path d="M30 30 L45 38" strokeDasharray="4 4" opacity="0.6" />
                            </svg>
                        </motion.div>
                        <h3 className="why-card-title">Automate the Busywork, Focus on Impact</h3>
                        <p className="why-card-desc">
                            From cleaning data to triggering actions across platforms, we
                            help teams automate repetitive workflows, so your talent can
                            focus on what actually moves the needle.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyDatapedia;
