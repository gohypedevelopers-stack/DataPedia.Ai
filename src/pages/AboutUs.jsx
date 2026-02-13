import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import './AboutUs.css';

// Importing a placeholder image or using the user's uploaded asset if available in public
// Since I cannot verify the exact path of the uploaded image in the project structure yet, 
// I will use a placeholder or assume a standard path. 
// For now, I'll use a placeholder URL or a local asset pattern.
// Ideally, the user's design shows a specific image. I will try to use a generic one if I can't find it.

const AboutUs = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Animation Variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
        }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    return (
        <div className="about-us-wrapper">
            <div className="about-us-container">

                {/* Hero Section */}
                <motion.section
                    className="about-hero"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                >
                    <h1>
                        Results-Driven Solutions,<br />
                        Tailored <span className="highlight-gold">for You</span>
                    </h1>
                    <button className="btn-learn-more">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="btn-icon">
                            <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="1.5" />
                            <path d="M10 12H16M16 12L13.5 9.5M16 12L13.5 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Learn more
                    </button>
                </motion.section>

                {/* Main Content Section */}
                <section className="about-content-section">
                    <motion.div
                        className="about-image-col"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="about-image-frame">
                            {/* Using a placeholder that resembles the office setting in the design */}
                            <img
                                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                alt="Team working together"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        className="about-text-col"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        <motion.h2 variants={fadeInUp}>AI-Powered Marketing That Works for You</motion.h2>
                        <motion.p className="about-intro-text" variants={fadeInUp}>
                            At Datapedia.ai, we use automation and AI to help you attract, retain, and grow the right leads — so you can focus on your business.
                        </motion.p>

                        <motion.div className="about-block" variants={fadeInUp}>
                            <h3>Who We Are</h3>
                            <p>
                                We're a team that helps businesses grow by making their marketing smarter and more efficient. Our goal is to help you save time, reach the right people, and build lasting customer relationships using automation and AI.
                            </p>
                        </motion.div>

                        <motion.div className="about-block" variants={fadeInUp}>
                            <h3>What We Do</h3>
                            <p>
                                We take care of the whole process — finding the right leads, helping you keep them engaged, building strong communities around your brand, and setting up smart workflows so things run smoothly behind the scenes. We also create custom AI marketing solutions that fit your specific goals.
                            </p>
                        </motion.div>

                        <motion.div className="about-block" variants={fadeInUp}>
                            <h3>Our Values</h3>
                            <p>
                                We keep things honest, simple, and focused on what really works. We listen to what you need, build strategies that make sense for your business, and always aim for long-term success — not just quick wins.
                            </p>
                        </motion.div>
                    </motion.div>
                </section>

                {/* YouTube Section */}
                <motion.section
                    className="youtube-section"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                >
                    <h2>Follow Us on YouTube</h2>
                    <motion.div className="youtube-grid" variants={staggerContainer}>
                        {/* Mocking the video thumbnails structure */}
                        {[1, 2, 3, 4, 5, 6].map((item) => (
                            <motion.div key={item} className="video-card" variants={fadeInUp}>
                                <div className="video-thumbnail">
                                    {/* Placeholder for video thumb */}
                                    <img
                                        src={`https://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg`} /* Just a placeholder pattern */
                                        alt="Video Thumbnail"
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }}
                                    />
                                    <div className="play-icon"></div>
                                    <div style={{ position: 'absolute', bottom: 10, left: 10, color: 'white', fontWeight: 'bold', textShadow: '0 1px 2px black' }}>
                                        What If Your Social Media Could...
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.section>

                {/* CTA Section */}
                <motion.section
                    className="cta-section"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2>Ready to build a winning Go-To-Market<br />strategy and accelerate growth?</h2>
                    <p>
                        Design and execute GTM strategies powered by AI, automation, and proven playbooks. From market entry to scale-up, we help you achieve faster traction and sustainable growth.
                    </p>
                    <button className="btn-book-strategy">
                        BOOK A STRATEGY CALL &rarr;
                    </button>
                </motion.section>

            </div>

            <Footer />
        </div>
    );
};

export default AboutUs;
