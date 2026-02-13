import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Footer from '../components/Footer';
import './WhatsappAgent.css';

gsap.registerPlugin(ScrollTrigger);

const WhatsappAgent = () => {
    const containerRef = useRef();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useGSAP(() => {
        // Hero
        const tl = gsap.timeline();
        tl.from(".whatsapp-hero-image", {
            x: -50,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        })
            .from(".whatsapp-hero-content", {
                x: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            }, "-=0.8");

        // Featured Agents
        gsap.from(".whatsapp-grid-section h2", {
            scrollTrigger: {
                trigger: ".whatsapp-grid-section",
                start: "top 80%",
            },
            y: 20,
            opacity: 0,
            duration: 0.8
        });

        gsap.from(".agent-card", {
            scrollTrigger: {
                trigger: ".agents-grid",
                start: "top 85%",
            },
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out"
        });

        // Benefits
        gsap.from(".whatsapp-benefits h2", {
            scrollTrigger: {
                trigger: ".whatsapp-benefits",
                start: "top 80%",
            },
            y: 20,
            opacity: 0,
            duration: 0.8
        });

        gsap.from(".benefit-box", {
            scrollTrigger: {
                trigger: ".benefits-grid",
                start: "top 85%",
            },
            scale: 0.9,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "back.out(1.5)"
        });

    }, { scope: containerRef });

    return (
        <div className="whatsapp-agent-page" ref={containerRef}>
            {/* Hero Section */}
            <section className="whatsapp-hero">
                <div className="whatsapp-hero-container">
                    <div className="whatsapp-hero-image">
                        {/* Placeholder for the phone screens in the screenshot */}
                        <div className="image-placeholder-whatsapp">
                            <div className="phone-mockup">
                                <div className="chat-bubble left"></div>
                                <div className="chat-bubble right"></div>
                                <div className="chat-bubble left"></div>
                            </div>
                            <div className="phone-mockup center">
                                <div className="chat-bubble left"></div>
                                <div className="chat-bubble right"></div>
                                <div className="chat-bubble right"></div>
                                <div className="chat-bubble left"></div>
                            </div>
                            <div className="phone-mockup">
                                <div className="chat-bubble right"></div>
                                <div className="chat-bubble left"></div>
                                <div className="chat-bubble right"></div>
                            </div>
                        </div>
                    </div>
                    <div className="whatsapp-hero-content">
                        <h1>Whatsapp Agent</h1>
                        <p>
                            Let WhatsApp AI Agents handle your customers 24/7 with instant, intelligent responses.
                            They manage inquiries, share product details, and drive conversions effortlessly.
                            Upgrade your interactions with always-on, personalized support that boosts engagement
                            and keeps your business connected at all times.
                        </p>
                        <button className="btn-start-trial">START YOUR TRIAL <span className="arrow">→</span></button>
                    </div>
                </div>
            </section>

            {/* AI-Powered WhatsApp Agents Section */}
            <section className="whatsapp-grid-section">
                <h2>
                    AI-Powered WhatsApp Agents for<br />Effortless Customer Interaction
                </h2>
                <div className="agents-grid">
                    {/* Row 1 */}
                    <div className="agent-card">
                        <h3>Buying Assistant</h3>
                        <span className="agent-category">Ecommerce | Retail | Luxury Brands</span>
                        <p>Unlock customer intent instantly by answering product-related queries and offering personalized recommendations to guide purchase decisions right within the chat. Simplify shopping and boost sales with smart assistance.</p>
                    </div>
                    <div className="agent-card">
                        <h3>Sales Conversion Agent</h3>
                        <span className="agent-category">Ecommerce | Retail | Luxury Brands</span>
                        <p>Turn conversations into sales with timely, persuasive nudges. Rescue lost revenue by following up on abandoned carts, sending reminders, and offering incentives that convert interest into action.</p>
                    </div>
                    <div className="agent-card">
                        <h3>Cart Recovery Agent</h3>
                        <span className="agent-category">Ecommerce | Retail | Luxury Brands</span>
                        <p>Automatically re-engage shoppers who left items behind. Send friendly personalized alerts, discounts, or reminders to encourage them to complete their purchase. Recover lost sales effortlessly and increase revenue with zero manual work.</p>
                    </div>

                    {/* Row 2 */}
                    <div className="agent-card">
                        <h3>AI-Powered Upsell Agent</h3>
                        <span className="agent-category">Ecommerce | Retail | Luxury Brands</span>
                        <p>Analyze customer preferences and past purchases to recommend complementary or higher-value products at just the right moment. Maximize average order value (AOV) with targeted offers that feel personal offering utility, not just a sales pitch.</p>
                    </div>
                    <div className="agent-card">
                        <h3>Loyalty Marketing Agent</h3>
                        <span className="agent-category">Retail | Travel | Dining</span>
                        <p>Enhance customer retention by promoting loyalty rewards, VIP perks, and early-access offers through WhatsApp. Send exclusive personalized campaigns that keep customers valued and deepen brand affinity.</p>
                    </div>
                    <div className="agent-card">
                        <h3>Booking & Reminder Agent</h3>
                        <span className="agent-category">Hospitality | Travel | Healthcare</span>
                        <p>Handle bookings, appointments, and reservations seamlessly. Send automated confirmations, reminders, and updates to reduce no-shows and keep your schedule optimized.</p>
                    </div>

                    {/* Row 3 */}
                    <div className="agent-card">
                        <h3>AI Customer Service Agent</h3>
                        <span className="agent-category">Ecommerce | Finance | Services | Consumer Services</span>
                        <p>Provide round-the-clock customer support. Answer FAQs, resolve issues, and handle complaints instantly. Offer fast, accurate solutions anytime, anywhere reducing wait times and improving satisfaction without adding to your support team.</p>
                    </div>
                    <div className="agent-card">
                        <h3>Order Tracking Agent</h3>
                        <span className="agent-category">Ecommerce | Logistics | Food Delivery</span>
                        <p>Keep customers informed with proactive shipping updates and real-time tracking notifications. Handle queries regarding order status, delivery times, and returns automatically. Improve transparency and build trust by keeping customers in control of every step of their purchase.</p>
                    </div>
                    <div className="agent-card">
                        <h3>Feedback & Survey Agent</h3>
                        <span className="agent-category">Ecommerce | Travel | Food | Consumer Services</span>
                        <p>Collect valuable feedback after every purchase or service interaction. Send simple, engaging surveys directly on WhatsApp to understand customer sentiment. Improve your products and services based on real insights gathered effortlessly.</p>
                    </div>
                </div>
            </section>

            {/* Why your business needs... Section */}
            <section className="whatsapp-benefits">
                <h2>
                    Why your business needs a<br />WhatsApp AI Chatbot?
                </h2>
                <div className="benefits-grid">
                    <div className="benefit-box">
                        <div className="benefit-icon icon-chat">💬</div>
                        <div className="benefit-content">
                            <p className="benefit-highlight">Offer 24/7 automated replies to every query ensuring immediate response at any time of day.</p>
                        </div>
                    </div>
                    <div className="benefit-box">
                        <div className="benefit-icon icon-global">🌐</div>
                        <div className="benefit-content">
                            <p className="benefit-highlight">Respond to users in their own language with smart, accurate translations – no more lost leads due to language barriers.</p>
                        </div>
                    </div>
                    <div className="benefit-box">
                        <div className="benefit-icon icon-smile">😊</div>
                        <div className="benefit-content">
                            <h4>Higher customer satisfaction and loyalty</h4>
                            <p>Boost satisfaction and loyalty with fast, always-available customer support.</p>
                        </div>
                    </div>
                    <div className="benefit-box">
                        <div className="benefit-icon icon-data">📊</div>
                        <div className="benefit-content">
                            <p className="benefit-highlight">Gain insights to enhance your support - track common queries, find missed messages, and improve your chatbot with better content.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Case Studies Section - Placeholder */}
            <section className="whatsapp-case-studies">
                <h2>Our Case Studies</h2>
                {/* Add case study components here if available */}
            </section>

            {/* Footer CTA Section */}
            <section className="whatsapp-cta">
                <div>
                    <h2>Boost your business growth by<br />launching your WhatsApp agent with<br />Datapedia.ai today.</h2>
                    <p>Unlock new opportunities with datapedia.ai solutions - contact us today!</p>
                    <button className="btn-get-started">Get Started</button>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default WhatsappAgent;
