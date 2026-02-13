import React from 'react';
import { useNavigate } from 'react-router-dom';
import './StrategySection.css';

const StrategySection = () => {
    const navigate = useNavigate();

    return (
        <section className="strategy-section">
            <div className="strategy-container">
                <h2 className="strategy-headline">
                    Building Go-To-Market strategies that drive<br />
                    faster growth with proven AI frameworks
                </h2>
                <p className="strategy-subtext">
                    Let Your Systems Work While You Accelerate Growth
                </p>
                <div className="strategy-actions">
                    <button className="btn-strategy-book">
                        BOOK A STRATEGY CALL <span className="arrow">→</span>
                    </button>
                    <button className="btn-strategy-learn" onClick={() => navigate('/case-studies')}>
                        LEARN MORE <span className="arrow">→</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default StrategySection;
