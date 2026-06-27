"use client";
import { useState, useRef, useEffect } from 'react';
import { useDemoTheme } from './DemoThemeProvider';

export default function Chatbot() {
  const { clinicName, clinicPhone, showChatbot } = useDemoTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([]);
  const [hasUserMessaged, setHasUserMessaged] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (!hasUserMessaged) {
      setMessages([
        { text: `Hi! 👋 I'm the ${clinicName} AI Assistant. How can I help you book an appointment today?`, isBot: true }
      ]);
    }
  }, [clinicName, hasUserMessaged]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  if (!showChatbot) return null;

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    setMessages(prev => [...prev, { text: inputValue, isBot: false }]);
    setInputValue('');
    setIsTyping(true);
    setHasUserMessaged(true);
    setTimeout(() => {
      setMessages(prev => [...prev, {
        text: `Thanks for reaching out! Please call us directly at ${clinicPhone} and our friendly team will be happy to help you book an appointment!`,
        isBot: true
      }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <>
      <div className={`chatbot-container ${isOpen ? 'open' : ''}`}>
        <div className="chatbot-header">
          <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
            <div className="chatbot-avatar">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                <circle cx="12" cy="12" r="4"></circle>
              </svg>
            </div>
            <div>
              <h4 style={{margin:0, fontSize:'0.95rem', color:'white', fontWeight: 600}}>{clinicName} AI</h4>
              <p style={{margin:0, fontSize:'0.75rem', color:'rgba(255,255,255,0.8)'}}>Usually replies instantly</p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} style={{background:'none', border:'none', color:'white', cursor:'pointer', padding: '4px'}}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>

        <div className="chatbot-messages">
          {messages.map((m, i) => (
            <div key={i} className={`message ${m.isBot ? 'bot-message' : 'user-message'}`}>
              {m.text}
            </div>
          ))}
          {isTyping && (
            <div className="message bot-message typing-indicator">
              <span>.</span><span>.</span><span>.</span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <form className="chatbot-input" onSubmit={handleSend}>
          <input
            type="text"
            placeholder="Type your message..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type="submit">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
          </button>
        </form>
      </div>

      {!isOpen && (
        <button className="chatbot-toggle" onClick={() => setIsOpen(true)}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        </button>
      )}
    </>
  );
}
