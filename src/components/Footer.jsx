import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="app-footer">
            <div className="app-footer-container app-footer-grid">
                <div className="app-footer-brand">
                    <div className="app-footer-logo">DATAPEDIA.AI</div>
                    <div className="app-footer-socials">
                        <span className="app-footer-social app-footer-linkedin">in</span>
                        <span className="app-footer-social app-footer-youtube">▶</span>
                        <span className="app-footer-social app-footer-instagram">◎</span>
                    </div>
                </div>
                <div className="app-footer-col">
                    <div className="app-footer-title">Contact us</div>
                    <p>Mobile no 8168919282</p>
                    <p>Email letsconnect@datapedia.com</p>
                </div>
                <div className="app-footer-col">
                    <div className="app-footer-title">Join our newsletter</div>
                    <label className="app-footer-label">Email *</label>
                    <div className="app-footer-input">
                        <input type="email" placeholder="Your email" />
                    </div>
                    <button className="app-footer-btn">SUBSCRIBE</button>
                    <p className="app-footer-help">
                        By subscribing, you agree to receive emails. No spam ever.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
