import React, { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Footer from '../components/Footer';
import './Services.css';

const Services = () => {

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

    const services = [
        {
            id: '01',
            title: 'Market Entry Strategy',
            desc: 'Position your business for faster traction with actionable market entry strategies. We identify target audiences and sharpen positioning.',
            icon: 'ShowChart'
        },
        {
            id: '02',
            title: 'Sales Enablement',
            desc: 'Equip your team with the right playbooks. We build repeatable processes that enhance retention and maximize LTV.',
            icon: 'BarChart'
        },
        {
            id: '03',
            title: 'Market Research',
            desc: 'Deep insights and competitor benchmarking to guide decision making. Transform data into clear strategies.',
            icon: 'Search'
        },
        {
            id: '04',
            title: 'GTM Operations',
            desc: 'Streamline execution with process automation. Free up teams to focus on growth while systems handle the rest.',
            icon: 'Settings'
        },
        {
            id: '05',
            title: 'Custom AI Solutions',
            desc: 'Bespoke AI marketing solutions tailored to your brand. Models trained exclusively on your data.',
            icon: 'SmartToy'
        }
    ];

    return (
        <div className="services-page">
            <motion.section
                className="services-hero"
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
            >
                <div className="services-hero-content">
                    <motion.h1 variants={fadeInUp}>
                        Our Services
                    </motion.h1>
                    <motion.p variants={fadeInUp}>
                        Comprehensive GTM solutions powered by AI and human expertise.
                    </motion.p>
                </div>
                <div className="hero-background-glow"></div>
            </motion.section>

            <section className="services-list-container">
                {services.map((service, index) => (
                    <motion.div
                        key={service.id}
                        className="service-detail-card"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeInUp}
                        custom={index}
                    >
                        <div className="service-id">{service.id}</div>
                        <div className="service-info">
                            <h3>{service.title}</h3>
                            <p>{service.desc}</p>
                        </div>
                        <div className="service-action">
                            <button className="service-btn">Learn More</button>
                        </div>
                    </motion.div>
                ))}
            </section>

            <section className="services-cta">
                <motion.div
                    className="cta-box"
                    initial={{ scale: 0.95, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <h2>Ready to Scale?</h2>
                    <button
                        className="cta-btn"
                        onClick={() => window.open('https://calendar.app.google/UWRRkZgCUAzc2i9i8', '_blank')}
                    >
                        Book a Strategy Call
                    </button>
                </motion.div>
            </section>

            <Footer />
        </div>
    );
};

export default Services;
