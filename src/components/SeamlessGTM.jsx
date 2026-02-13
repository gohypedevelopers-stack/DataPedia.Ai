import React from 'react';
import { motion } from 'framer-motion';
import './SeamlessGTM.css';

const SeamlessGTM = () => {
    const features = [
        { id: 1, label: 'FEATURE 1', title: 'FLEXIBLE WORKFLOWS', active: true },
        { id: 2, label: 'FEATURE 2', title: 'FULLY SECURED', active: false },
        { id: 3, label: 'FEATURE 3', title: 'TIME SAVER', active: true },
        { id: 4, label: 'FEATURE 4', title: 'KEEP TRACK', active: false },
        { id: 5, label: 'FEATURE 5', title: 'MORE FOCUS', active: true },
        { id: 6, label: 'FEATURE 6', title: 'EASY DEPLOY', active: false },
    ];

    return (
        <section className="seamless-gtm-section">
            <div className="seamless-container">
                <h2 className="seamless-headline">A Seamless GTM Experience</h2>

                <div className="seamless-grid">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.id}
                            className={`seamless-card ${feature.active ? 'active-card' : ''}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                        >
                            <div className="seamless-card-header">
                                {feature.label}
                            </div>
                            <div className="seamless-card-body">
                                {feature.title}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SeamlessGTM;
