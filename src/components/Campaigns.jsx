import React from 'react';
import './Campaigns.css';

const Campaigns = () => {
    return (
        <section className="campaigns-section">
            <div className="workflow-container">
                <div className="campaigns-header-container">
                    <h2 className="campaigns-headline">Our Battle - Tested Campaigns and Workflows</h2>
                    <p className="campaigns-subtext">
                        Over the years we’ve launched campaigns for companies on
                        the hunt for the best-fit customer results
                    </p>
                </div>

                {/* Stats Cards Row - Updated to 2 Large Compound Cards */}
                <div className="campaigns-content-wrapper">
                    <div className="stats-cards-row">

                        {/* Compound Card 1 */}
                        <div className="stats-compound-card">
                            {/* Top Section: Invitation */}
                            <div className="stats-compound-row">
                                <div className="stats-icon-circle blue-bg">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                                    </svg>
                                </div>
                                <div className="stats-text-block">
                                    <div className="stats-number">206</div>
                                    <div className="stats-label">Accepted invitations</div>
                                </div>
                                <div className="stats-gauge-mini">
                                    <svg viewBox="0 0 36 36" className="circular-chart blue">
                                        <path className="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                        <path className="circle" strokeDasharray="43.3, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                        <text x="18" y="20.35" className="percentage">43.3%</text>
                                    </svg>
                                    <span className="gauge-label-mini">Acceptance rate</span>
                                </div>
                            </div>

                            <div className="divider-line"></div>

                            {/* Bottom Section: Messages */}
                            <div className="stats-compound-row">
                                <div className="stats-icon-circle green-bg">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="22" y1="2" x2="11" y2="13"></line>
                                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                                    </svg>
                                </div>
                                <div className="stats-text-block">
                                    <div className="stats-number">112</div>
                                    <div className="stats-label">Answered messages</div>
                                </div>
                                <div className="stats-gauge-mini">
                                    <svg viewBox="0 0 36 36" className="circular-chart green">
                                        <path className="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                        <path className="circle" strokeDasharray="54.4, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                        <text x="18" y="20.35" className="percentage">54.4%</text>
                                    </svg>
                                    <span className="gauge-label-mini">Response rate</span>
                                </div>
                            </div>
                        </div>

                        {/* Compound Card 2 */}
                        <div className="stats-compound-card">
                            {/* Top Section: Invitation */}
                            <div className="stats-compound-row">
                                <div className="stats-icon-circle blue-bg">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                                    </svg>
                                </div>
                                <div className="stats-text-block">
                                    <div className="stats-number">294</div>
                                    <div className="stats-label">Accepted invitations</div>
                                </div>
                                <div className="stats-gauge-mini">
                                    <svg viewBox="0 0 36 36" className="circular-chart blue">
                                        <path className="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                        <path className="circle" strokeDasharray="49.2, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                        <text x="18" y="20.35" className="percentage">49.2%</text>
                                    </svg>
                                    <span className="gauge-label-mini">Acceptance rate</span>
                                </div>
                            </div>

                            <div className="divider-line"></div>

                            {/* Bottom Section: Messages */}
                            <div className="stats-compound-row">
                                <div className="stats-icon-circle green-bg">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="22" y1="2" x2="11" y2="13"></line>
                                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                                    </svg>
                                </div>
                                <div className="stats-text-block">
                                    <div className="stats-number">128</div>
                                    <div className="stats-label">Answered messages</div>
                                </div>
                                <div className="stats-gauge-mini">
                                    <svg viewBox="0 0 36 36" className="circular-chart green">
                                        <path className="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                        <path className="circle" strokeDasharray="43.5, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                        <text x="18" y="20.35" className="percentage">43.5%</text>
                                    </svg>
                                    <span className="gauge-label-mini">Response rate</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Workflow Diagram Images (Preserved below cards if needed per layout, but simplified for now) */}
                <div className="workflow-diagram-container">
                    <img src="/workflow_diagram.png" alt="Automation Workflow 1" className="workflow-diagram-img" />
                </div>

                <div className="workflow-diagram-container">
                    <img src="/workflow_diagram_2.png" alt="Automation Workflow 2" className="workflow-diagram-img" />
                </div>
            </div>
        </section>
    );
};

export default Campaigns;
