import React from 'react';
import './ProcessAutomation.css';

const ProcessAutomation = () => {
    return (
        <section className="process-automation-section">
            <div className="process-header">
                <h2 className="process-headline">
                    Simple Process to Automate<br />
                    GTM workflows
                </h2>
            </div>
            <div className="process-body">
                <div className="process-steps-wrapper">

                    {/* Step 01 */}
                    <div className="process-step-container">
                        {/* Star and Path Section */}
                        <div className="star-path-wrapper">
                            <div className="revolving-star">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="#d4af37" stroke="#000" />
                                </svg>
                            </div>
                            {/* Dotted curved line approximating the image */}
                            <svg className="curved-dotted-line" width="200" height="300" viewBox="0 0 100 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 10 Q 30 100 80 180" stroke="#555" strokeWidth="1" strokeDasharray="4 4" fill="none" />
                            </svg>
                        </div>

                        {/* Text Section */}
                        <div className="step-content">
                            <div className="step-number-title">
                                01. FILL OUT THE <br />
                                ONBOARDING FORM
                            </div>
                            <p className="step-description">
                                Tell us a bit about your business, tools you use, and where you face bottlenecks.
                                This helps us understand what parts of your workflow can be automated for
                                better results.
                            </p>
                        </div>
                    </div>

                    {/* Step 02 */}
                    <div className="process-step-container step-reverse">
                        <div className="step-content">
                            <div className="step-number-title">
                                02. DISCOVERY CALL
                            </div>
                            <p className="step-description">
                                We'll hop on a call to dig deeper into your current processes, challenges, and goals.
                                This helps us map out automation opportunities tailored to your needs.
                            </p>
                        </div>
                        <div className="star-path-wrapper">
                            <div className="revolving-star">
                                {/* Black star for step 2 */}
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="#000" stroke="#000" />
                                </svg>
                            </div>
                            {/* Curved line flipping the other way */}
                            <svg className="curved-dotted-line" width="200" height="300" viewBox="0 0 100 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'scaleX(-1)' }}>
                                <path d="M10 10 Q 30 100 80 180" stroke="#555" strokeWidth="1" strokeDasharray="4 4" fill="none" />
                            </svg>
                        </div>
                    </div>

                    {/* Step 03 */}
                    <div className="process-step-container">
                        {/* Star and Path Section */}
                        <div className="star-path-wrapper">
                            <div className="revolving-star">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="#000" stroke="#000" />
                                </svg>
                            </div>
                            <svg className="curved-dotted-line" width="200" height="300" viewBox="0 0 100 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 10 Q 30 100 80 180" stroke="#555" strokeWidth="1" strokeDasharray="4 4" fill="none" />
                            </svg>
                        </div>

                        {/* Text Section */}
                        <div className="step-content">
                            <div className="step-number-title">
                                03. AUTOMATION SETUP
                            </div>
                            <p className="step-description">
                                We set up the right tools, integrations, and systems to automate your daily tasks — from lead routing and follow-ups to internal notifications and task tracking.
                            </p>
                        </div>
                    </div>

                    {/* Step 04 */}
                    <div className="process-step-container step-reverse">
                        <div className="step-content">
                            <div className="step-number-title">
                                04. WORKFLOW DESIGN<br />
                                & REVIEW
                            </div>
                            <p className="step-description">
                                Our team builds smart, easy-to-manage workflows for your key processes. Once ready, we walk you through everything to make sure it's exactly what you need before going live.
                            </p>
                        </div>
                        <div className="star-path-wrapper">
                            <div className="revolving-star">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="#000" stroke="#000" />
                                </svg>
                            </div>
                            <svg className="curved-dotted-line" width="200" height="300" viewBox="0 0 100 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'scaleX(-1)' }}>
                                <path d="M10 10 Q 30 100 80 180" stroke="#555" strokeWidth="1" strokeDasharray="4 4" fill="none" />
                            </svg>
                        </div>
                    </div>

                    {/* Step 05 */}
                    <div className="process-step-container">
                        {/* Star and Path Section */}
                        <div className="star-path-wrapper">
                            <div className="revolving-star">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="#000" stroke="#000" />
                                </svg>
                            </div>
                            <svg className="curved-dotted-line" width="200" height="300" viewBox="0 0 100 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 10 Q 30 100 80 180" stroke="#555" strokeWidth="1" strokeDasharray="4 4" fill="none" />
                            </svg>
                        </div>

                        {/* Text Section */}
                        <div className="step-content">
                            <div className="step-number-title">
                                05. GO TIME & FEED,<br />
                                WORKFLOWS WORKING
                            </div>
                            <p className="step-description">
                                We set up the right tools, integrations, and systems to automate your daily tasks — from lead routing and follow-ups to internal notifications and task tracking.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ProcessAutomation;
