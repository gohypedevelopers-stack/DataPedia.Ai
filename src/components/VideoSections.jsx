import React, { useRef, useState } from "react";
import "./VideoSections.css";
import { ApolloLogo, DripifyLogo, N8nLogo, MakeLogo, GumloopLogo, HighLevelLogo } from "./ToolLogos";






const tools = [
  { id: "apollo", component: <ApolloLogo /> },
  { id: "dripify", component: <DripifyLogo /> },
  { id: "n8n", component: <N8nLogo /> },
  { id: "make", component: <MakeLogo /> },
  { id: "gumloop", component: <GumloopLogo /> },
  { id: "highlevel", component: <HighLevelLogo /> },
];

const videoCards = [
  { title: "What If Your Social Media Could Run Itself?", image: "https://via.placeholder.com/640x360.png?text=Video+1" },
  { title: "Automate Outreach in Under 30 Minutes", image: "https://via.placeholder.com/640x360.png?text=Video+2" },
  { title: "Scale Pipeline Without Hiring", image: "https://via.placeholder.com/640x360.png?text=Video+3" },
  { title: "Social Media Automation With AI Agents", image: "https://via.placeholder.com/640x360.png?text=Video+4" },
  { title: "The Future of GTM Strategies", image: "https://via.placeholder.com/640x360.png?text=Video+5" },
  { title: "How to Build AI Workflows", image: "https://via.placeholder.com/640x360.png?text=Video+6" },
];

const faqItems = [
  {
    title: "About",
    content:
      "We help teams automate GTM execution with reliable systems that scale.",
  },
  { title: "Services", content: "GTM ops, automation, and AI workflow design." },
  { title: "Contact us", content: "Email letsconnect@datapedia.com." },
  { title: "Item 1", content: "Answer for item 1." },
  { title: "Item 2", content: "Answer for item 2." },
  { title: "Item 3", content: "Answer for item 3." },
];



const VideoSections = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const contentRefs = useRef([]);

  return (
    <div className="vs-wrapper">




      <section className="vs-section vs-section-tight">
        <div className="vs-container vs-center">
          <div className="vs-pill">Tools We Used</div>
          <div className="vs-marquee">
            <div className="vs-marquee-track vs-marquee-left">
              {[...tools, ...tools].map((tool, index) => (
                <div key={`top-${tool.id}-${index}`} className="vs-marquee-item vs-tool-logo">
                  {tool.component}
                </div>
              ))}
            </div>
          </div>
          <div className="vs-marquee vs-marquee-second">
            <div className="vs-marquee-track vs-marquee-right">
              {[...tools, ...tools].map((tool, index) => (
                <div key={`bottom-${tool.id}-${index}`} className="vs-marquee-item vs-tool-logo">
                  {tool.component}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="vs-section">
        <div className="vs-container">
          <h3 className="vs-gradient-title">Follow Us on YouTube</h3>
          <div className="vs-video-row">
            {videoCards.map((card) => (
              <div key={card.title} className="vs-video-card">
                <div
                  className="vs-video-thumb"
                  style={{ backgroundImage: `url(${card.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                />
                <div className="vs-video-meta">
                  <div className="vs-video-title">{card.title}</div>
                  <div className="vs-video-channel">
                    <span className="vs-avatar" />
                    <span>DataPedia.ai</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="vs-section">
        <div className="vs-container">
          <h3 className="vs-faq-title">FAQs</h3>
          <div className="vs-faq-list">
            {faqItems.map((item, index) => {
              const isOpen = openIndex === index;
              const height = contentRefs.current[index]?.scrollHeight || 0;
              return (
                <div key={item.title} className="vs-faq-item">
                  <button
                    type="button"
                    className="vs-faq-trigger"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  >
                    <span>{item.title}</span>
                    <span className="vs-faq-icon">{isOpen ? "–" : "+"}</span>
                  </button>
                  <div
                    className="vs-faq-panel"
                    style={{ maxHeight: isOpen ? `${height}px` : "0px" }}
                  >
                    <div
                      ref={(el) => (contentRefs.current[index] = el)}
                      className="vs-faq-content"
                    >
                      {item.content}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <footer className="vs-footer">
        <div className="vs-container vs-footer-grid">
          <div className="vs-footer-brand">
            <div className="vs-logo">DATAPEDIA.AI</div>
            <div className="vs-socials">
              <span className="vs-social vs-linkedin">in</span>
              <span className="vs-social vs-youtube">▶</span>
              <span className="vs-social vs-instagram">◎</span>
            </div>
          </div>
          <div className="vs-footer-col">
            <div className="vs-footer-title">Contact us</div>
            <p>Mobile no 8168919282</p>
            <p>Email letsconnect@datapedia.com</p>
          </div>
          <div className="vs-footer-col">
            <div className="vs-footer-title">Join our newsletter</div>
            <label className="vs-footer-label">Email *</label>
            <div className="vs-footer-input">
              <input type="email" placeholder="Your email" />
            </div>
            <button className="vs-footer-btn">SUBSCRIBE</button>
            <p className="vs-footer-help">
              By subscribing, you agree to receive emails. No spam ever.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default VideoSections;
