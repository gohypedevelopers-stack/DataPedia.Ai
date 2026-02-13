import React from 'react';
import './Industries.css';

const Industries = () => {
    return (
        <section className="industries-section">
            <div className="industries-container">
                <div className="industries-header">
                    <h2 className="industries-headline">
                        <span className="text-white">We're helping companies</span> <br />
                        <span className="text-gold">scale and automate faster.</span>
                    </h2>
                    <p className="industries-subtitle">Industries We have worked with</p>
                </div>

                <div className="industries-grid">
                    {/* SaaS - Monitor with Graph */}
                    <div className="industry-item">
                        <div className="industry-icon-box">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#d8ae5e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                                <line x1="8" y1="21" x2="16" y2="21" />
                                <line x1="12" y1="17" x2="12" y2="21" />
                                <path d="M6 12l4-4 3 3 5-5" />
                                <path d="M18 6h-4" />
                                <path d="M18 6v4" />
                            </svg>
                        </div>
                        <span className="industry-name">SaaS</span>
                    </div>

                    {/* Pr Firm - Flag */}
                    <div className="industry-item">
                        <div className="industry-icon-box">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#d8ae5e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
                                <line x1="4" y1="22" x2="4" y2="15" />
                            </svg>
                        </div>
                        <span className="industry-name">Pr Firm</span>
                    </div>

                    {/* Marketing Agency - Megaphone */}
                    <div className="industry-item">
                        <div className="industry-icon-box">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#d8ae5e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                                <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                                <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                            </svg>
                        </div>
                        <span className="industry-name">Marketing Agency</span>
                    </div>

                    {/* IT - Chip */}
                    <div className="industry-item">
                        <div className="industry-icon-box">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#d8ae5e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
                                <rect x="9" y="9" width="6" height="6" />
                                <line x1="9" y1="1" x2="9" y2="4" />
                                <line x1="15" y1="1" x2="15" y2="4" />
                                <line x1="9" y1="20" x2="9" y2="23" />
                                <line x1="15" y1="20" x2="15" y2="23" />
                                <line x1="20" y1="9" x2="23" y2="9" />
                                <line x1="20" y1="14" x2="23" y2="14" />
                                <line x1="1" y1="9" x2="4" y2="9" />
                                <line x1="1" y1="14" x2="4" y2="14" />
                            </svg>
                        </div>
                        <span className="industry-name">IT</span>
                    </div>

                    {/* Design Agency - Monitor (Simple) */}
                    <div className="industry-item">
                        <div className="industry-icon-box">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#d8ae5e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                                <line x1="8" y1="21" x2="16" y2="21" />
                                <line x1="12" y1="17" x2="12" y2="21" />
                            </svg>
                        </div>
                        <span className="industry-name">Design Agency</span>
                    </div>

                    {/* SEO Agency - Magnifying Glass */}
                    <div className="industry-item">
                        <div className="industry-icon-box">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#d8ae5e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="11" cy="11" r="8" />
                                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                                <line x1="11" y1="8" x2="11" y2="14" />
                                <line x1="8" y1="11" x2="14" y2="11" />
                            </svg>
                        </div>
                        <span className="industry-name">SEO Agency</span>
                    </div>

                    {/* Learning and Development - Book */}
                    <div className="industry-item">
                        <div className="industry-icon-box">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#d8ae5e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                            </svg>
                        </div>
                        <span className="industry-name">Learning and Development</span>
                    </div>

                    {/* Edtech - Grad Cap */}
                    <div className="industry-item">
                        <div className="industry-icon-box">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#d8ae5e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                                <path d="M6 12v5c3 3 9 3 12 0v-5" />
                            </svg>
                        </div>
                        <span className="industry-name">Edtech</span>
                    </div>

                    {/* Health Care - Heart */}
                    <div className="industry-item">
                        <div className="industry-icon-box">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#d8ae5e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                            </svg>
                        </div>
                        <span className="industry-name">Health Care</span>
                    </div>

                    {/* Accounting - Document + */}
                    <div className="industry-item">
                        <div className="industry-icon-box">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#d8ae5e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                <polyline points="14 2 14 8 20 8" />
                                <line x1="12" y1="18" x2="12" y2="12" />
                                <line x1="9" y1="15" x2="15" y2="15" />
                            </svg>
                        </div>
                        <span className="industry-name">Accounting</span>
                    </div>

                    {/* Salesforce consulting - Tag */}
                    <div className="industry-item">
                        <div className="industry-icon-box">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#d8ae5e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                                <circle cx="7" cy="7" r="2" />
                            </svg>
                        </div>
                        <span className="industry-name">Salesforce consulting</span>
                    </div>

                    {/* Learning and Development (Duplicate as per reference) */}
                    <div className="industry-item">
                        <div className="industry-icon-box">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#d8ae5e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                            </svg>
                        </div>
                        <span className="industry-name">Learning and Development</span>
                    </div>

                    {/* Financial services - Dollar Coin */}
                    <div className="industry-item">
                        <div className="industry-icon-box">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#d8ae5e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M12 6v12" />
                                <path d="M17.16 11.5a3 3 0 1 0-3-3H9" />
                                <path d="M17.16 11.5h-5.46" />
                                <path d="M6.84 12.5a3 3 0 1 0 3 3H15" />
                            </svg>
                        </div>
                        <span className="industry-name">Financial services</span>
                    </div>

                    {/* AI - Chip/CPU (Rounded Square with inner bits) */}
                    <div className="industry-item">
                        <div className="industry-icon-box">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#d8ae5e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                                <path d="M12 18h.01" />
                            </svg>
                        </div>
                        <span className="industry-name">AI</span>
                    </div>

                    {/* Consulting - Chat Bubble + */}
                    <div className="industry-item">
                        <div className="industry-icon-box">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#d8ae5e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                                <line x1="12" y1="7" x2="12" y2="13" />
                                <line x1="9" y1="10" x2="15" y2="10" />
                            </svg>
                        </div>
                        <span className="industry-name">Consulting</span>
                    </div>

                    {/* VA Placement - User */}
                    <div className="industry-item">
                        <div className="industry-icon-box">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#d8ae5e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                <circle cx="12" cy="7" r="4" />
                            </svg>
                        </div>
                        <span className="industry-name">VA Placement</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Industries;
