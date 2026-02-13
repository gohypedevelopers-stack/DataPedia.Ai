import React from 'react';
import './AgentsFlow.css';
import agentsImg from '../assets/agents_workflow.png';

const AgentsFlow = () => {
    return (
        <section className="agents-flow-section">
            <div className="agents-container">
                {/* Image Container with Yellow Border */}
                <div className="agents-image-wrapper">
                    <img src={agentsImg} alt="AI Agents Workflow" className="agents-img" />
                </div>
            </div>
        </section>
    );
};

export default AgentsFlow;
