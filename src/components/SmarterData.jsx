import React from 'react';
import { motion } from 'framer-motion';
import './SmarterData.css';

const SmarterData = () => {
    return (
        <section className="smarter-data-section">
            <div className="smarter-container">
                <div className="smarter-grid">
                    {/* Feature 1: Smarter Data */}
                    <div className="smarter-card">
                        <motion.div
                            className="smarter-icon-wrapper"
                            animate={{ y: [0, -20, 0] }} // Bounce
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                            {/* Report/Dashboard Icon - Bigger (100px) */}
                            <svg width="100" height="100" viewBox="0 0 64 64" fill="none" stroke="#d8ae5e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 4H44L56 16V60H12V4Z" />
                                <polyline points="44 4 44 16 56 16" />
                                <rect x="20" y="24" width="10" height="10" />
                                <line x1="36" y1="24" x2="48" y2="24" />
                                <line x1="36" y1="30" x2="48" y2="30" />
                                <line x1="20" y1="42" x2="48" y2="42" />
                                <line x1="20" y1="50" x2="48" y2="50" />
                                {/* Bar chart columns bottom left - Animated */}
                                <motion.line
                                    x1="8" y1="48" x2="8" y2="40" strokeWidth="3" stroke="#d4af37"
                                    animate={{ y2: [48, 40, 48] }} // Bar grows up and down
                                    transition={{ duration: 2, repeat: Infinity, ease: "circOut" }}
                                />
                                <motion.line
                                    x1="4" y1="48" x2="4" y2="44" strokeWidth="3" stroke="#d4af37"
                                    animate={{ y2: [48, 44, 48] }}
                                    transition={{ duration: 2.5, repeat: Infinity, ease: "circOut", delay: 0.2 }}
                                />
                            </svg>
                        </motion.div>
                        <h3 className="smarter-card-title">Smarter Data, Sharper Decisions</h3>
                        <p className="smarter-card-desc">
                            We turn your messy spreadsheets and scattered insights into
                            actionable dashboards and on-demand data analysis — so you can
                            make faster, more confident decisions.
                        </p>
                    </div>

                    {/* Feature 2: Designed for Scale */}
                    <div className="smarter-card">
                        <motion.div
                            className="smarter-icon-wrapper"
                            whileHover={{ scale: 1.2 }}
                            animate={{ y: [0, -20, 0] }} // Bounce
                            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                        >
                            {/* Growth/Arrow Icon - Bigger (100px) */}
                            <svg width="100" height="100" viewBox="0 0 64 64" fill="none" stroke="#d8ae5e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="12 48 28 32 40 44 60 16" />
                                <motion.polyline
                                    points="46 16 60 16 60 30"
                                    animate={{ translateX: [0, 2, 0], translateY: [0, -2, 0] }} // Arrow pointing animation
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                />
                            </svg>
                        </motion.div>
                        <h3 className="smarter-card-title">Designed for Scale</h3>
                        <p className="smarter-card-desc">
                            Once we dial in your ideal workflows and messaging, we help you
                            scale outreach and operations seamlessly — without scaling your
                            team or stress.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SmarterData;
