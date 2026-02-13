import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import './Auth.css';

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const toggleAuth = () => setIsLogin(!isLogin);

    return (
        <div className="auth-page">
            <div className="auth-background-glow"></div>
            <motion.div
                className="auth-container"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="auth-card">
                    <div className="auth-header">
                        <h2 className="auth-title">
                            {isLogin ? 'Welcome Back' : 'Join Datapedia.ai'}
                        </h2>
                        <p className="auth-subtitle">
                            {isLogin
                                ? 'Sign in to access your AI-powered marketing tools.'
                                : 'Start your trial and transform your GTM strategy.'}
                        </p>
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={isLogin ? 'login' : 'signup'}
                            initial={{ opacity: 0, x: isLogin ? -20 : 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: isLogin ? 20 : -20 }}
                            transition={{ duration: 0.3 }}
                            className="auth-form-wrapper"
                        >
                            <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
                                {!isLogin && (
                                    <div className="form-group">
                                        <label>Full Name</label>
                                        <input type="text" placeholder="John Doe" required />
                                    </div>
                                )}
                                <div className="form-group">
                                    <label>Email Address</label>
                                    <input type="email" placeholder="john@example.com" required />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" placeholder="••••••••" required />
                                </div>

                                <button type="submit" className="btn-auth-submit">
                                    {isLogin ? 'Sign In' : 'Create Account'}
                                </button>
                            </form>
                        </motion.div>
                    </AnimatePresence>

                    <div className="auth-footer">
                        <p>
                            {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
                            <button className="auth-toggle-btn" onClick={toggleAuth}>
                                {isLogin ? 'Sign Up' : 'Sign In'}
                            </button>
                        </p>
                    </div>
                </div>
            </motion.div>
            <Footer />
        </div>
    );
};

export default Auth;
