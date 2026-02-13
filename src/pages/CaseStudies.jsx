import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Footer from '../components/Footer';
import './CaseStudies.css';

// Data for the Cards
const CASE_STUDIES = [
    {
        id: 1,
        title: "Add a Title",
        statNumber: "100+",
        statLabel: "Partners",
        hasStat: true,
        image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 2,
        title: "Add a Title",
        statNumber: "100+",
        statLabel: "Add a Title",
        hasStat: true,
        image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 3,
        title: "Add a Title",
        hasStat: false,
        image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 4,
        title: "Add a Title",
        hasStat: false,
        image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
];

// Duplicate data to ensure seamless loop
const DATA_COL_1 = [CASE_STUDIES[0], CASE_STUDIES[2], CASE_STUDIES[0], CASE_STUDIES[2]];
const DATA_COL_2 = [CASE_STUDIES[1], CASE_STUDIES[3], CASE_STUDIES[1], CASE_STUDIES[3]];

const CaseStudies = () => {
    return (
        <div className="cs-page">
            <div className="cs-bg-grid"></div>

            <section className="cs-hero-section">
                <div className="cs-container">

                    <div className="cs-hero-left">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            Explore real<br />
                            <span className="gold-text">success stories.</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            We boost conversions, grow traffic, and drive effective lead generation. Scoutreach turns your outreach into a results-driven machine.
                        </motion.p>

                        <motion.a
                            href="https://calendar.app.google/UWRRkZgCUAzc2i9i8"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-book"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            BOOK A STRATEGY CALL <span className="arrow">→</span>
                        </motion.a>
                    </div>

                    <div className="cs-hero-right">
                        <div className="collage-grid-overlay"></div> {/* Gradient masks for smooth fade in/out */}

                        <div className="collage-grid-animated">

                            {/* Column 1: Moves Bottom to Top */}
                            <div className="collage-col-scroll col-up">
                                <motion.div
                                    className="scrolling-track speed-normal"
                                    animate={{ y: [0, -1000] }}
                                    transition={{
                                        repeat: Infinity,
                                        duration: 20,
                                        ease: "linear"
                                    }}
                                >
                                    {DATA_COL_1.map((item, i) => (
                                        <CaseCard key={`col1-${i}`} item={item} />
                                    ))}
                                    {DATA_COL_1.map((item, i) => (
                                        <CaseCard key={`col1-dup-${i}`} item={item} />
                                    ))}
                                </motion.div>
                            </div>

                            {/* Column 2: Moves Top to Bottom */}
                            <div className="collage-col-scroll col-down">
                                <motion.div
                                    className="scrolling-track speed-slow"
                                    animate={{ y: [-1000, 0] }}
                                    transition={{
                                        repeat: Infinity,
                                        duration: 25,
                                        ease: "linear"
                                    }}
                                >
                                    {DATA_COL_2.map((item, i) => (
                                        <CaseCard key={`col2-${i}`} item={item} />
                                    ))}
                                    {DATA_COL_2.map((item, i) => (
                                        <CaseCard key={`col2-dup-${i}`} item={item} />
                                    ))}
                                </motion.div>
                            </div>

                        </div>
                    </div>

                </div>
            </section>

            {/* Details Cards Section */}
            <section className="cs-details-section">
                <div className="cs-details-container">
                    {[1, 2, 3].map((item, index) => (
                        <motion.div
                            key={index}
                            className="detail-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div
                                className="detail-card-image"
                                style={{
                                    backgroundImage: index === 0
                                        ? "url(https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80)"
                                        : "url(https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80)"
                                }}
                            ></div>

                            <div className="detail-card-content">
                                <h3>Partners</h3>

                                <p>Add paragraph text. Click "Edit Text" to update the font, size and more. To change and reuse text themes, go to Site Styles.</p>
                                <p>Add paragraph text. Click "Edit Text" to update the font, size and more. To change and reuse text themes, go to Site Styles.</p>
                                <p>Add paragraph text. Click "Edit Text" to update the font, size and more. To change and reuse text themes, go to Site Styles.</p>
                                <p>Add paragraph text. Click "Edit Text" to update the font, size and more. To change and reuse text themes, go to Site Styles.</p>

                                <button className="detail-btn">Details and case studies</button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Empty Plans Section */}
            <section className="cs-empty-plans">
                <div className="empty-plans-content">
                    <h2>No plans available</h2>
                    <p>Once there are plans available for purchase, you’ll see them here.</p>
                    <a href="/" className="btn-back-home">Back to Home Page</a>
                </div>
            </section>

            <Footer />
        </div>
    );
};

// Reusable "Complete" Card Component
const CaseCard = ({ item }) => {
    return (
        <div className="cs-complete-card small-card">
            <div className="card-top-gold small-header">
                <span className="card-title">{item.title}</span>
                <span className="card-action">Read ↗</span>
            </div>

            <div className="card-image-section small-image" style={{ backgroundImage: `url(${item.image})` }}></div>

            {item.hasStat && (
                <div className="card-stat-footer small-stat">
                    <h2>{item.statNumber}</h2>
                    <span>{item.statLabel}</span>
                </div>
            )}
        </div>
    );
};

export default CaseStudies;
