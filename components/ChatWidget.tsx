'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

type Message = { role: 'user' | 'assistant'; content: string };

const OPENER = "What type of business do you run?";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: OPENER }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [showIntake, setShowIntake] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, open]);

  // Show intake CTA after 3+ exchanges
  useEffect(() => {
    const userMessages = messages.filter(m => m.role === 'user').length;
    if (userMessages >= 3) setShowIntake(true);
  }, [messages]);

  const send = async () => {
    if (!input.trim() || loading) return;
    const userMsg: Message = { role: 'user', content: input.trim() };
    const updated = [...messages, userMsg];
    setMessages(updated);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: updated }),
      });
      const data = await res.json();
      setMessages(prev => [...prev, { role: 'assistant', content: data.text }]);
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Something went wrong. Please call us at (310) 846-1658.' }]);
    }
    setLoading(false);
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); }
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close chat assistant" : "Open chat assistant"}
        aria-expanded={open}
        aria-haspopup="dialog"
        style={{
          position: 'fixed', bottom: '24px', right: '24px', zIndex: 1000,
          width: '56px', height: '56px', borderRadius: '0',
          background: '#111111', border: '1px solid #B8860B',
          color: '#B8860B', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 4px 20px rgba(0,0,0,0.25)',
          transition: 'all 0.2s',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '20px',
        }}
      >
        {open ? '×' : '↗'}
      </button>

      {/* Chat panel */}
      {open && (
        <div role="dialog" aria-label="FlashPreviews chat assistant" aria-modal="true" style={{
          position: 'fixed', bottom: '92px', right: '24px', zIndex: 999,
          width: '360px', maxWidth: 'calc(100vw - 48px)',
          background: '#ffffff', border: '1px solid #E5E5E5',
          boxShadow: '0 8px 40px rgba(0,0,0,0.15)',
          display: 'flex', flexDirection: 'column',
          maxHeight: '520px',
        }}>
          {/* Header */}
          <div style={{ background: '#111111', padding: '16px 20px', borderBottom: '2px solid #B8860B' }}>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, color: '#ffffff', fontSize: '16px' }}>
              FlashPreviews
            </div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.6rem', color: '#B8860B', letterSpacing: '0.2em', textTransform: 'uppercase', marginTop: '2px' }}>
              Consulting Group
            </div>
          </div>

          {/* Messages */}
          <div role="log" aria-live="polite" aria-label="Chat messages" style={{ flex: 1, overflowY: 'auto', padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {messages.map((m, i) => (
              <div key={i} style={{
                maxWidth: '85%',
                alignSelf: m.role === 'user' ? 'flex-end' : 'flex-start',
              }}>
                {m.role === 'assistant' && (
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.55rem', color: '#B8860B', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '4px' }}>
                    FlashPreviews
                  </div>
                )}
                <div style={{
                  padding: '10px 14px',
                  background: m.role === 'user' ? '#111111' : '#F8F7F4',
                  color: m.role === 'user' ? '#ffffff' : '#111111',
                  fontSize: '13px', lineHeight: '1.6',
                  fontFamily: "'DM Sans', sans-serif",
                  borderLeft: m.role === 'assistant' ? '2px solid #B8860B' : 'none',
                }}>
                  {m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div style={{ alignSelf: 'flex-start', maxWidth: '85%' }}>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.55rem', color: '#B8860B', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '4px' }}>FlashPreviews</div>
                <div style={{ padding: '10px 14px', background: '#F8F7F4', borderLeft: '2px solid #B8860B', fontSize: '13px', color: '#888888', fontFamily: "'DM Sans', sans-serif" }}>
                  <span style={{ animation: 'pulse 1.5s infinite' }}>···</span>
                </div>
              </div>
            )}

            {/* Intake CTA */}
            {showIntake && (
              <div style={{ background: '#F8F7F4', borderLeft: '2px solid #B8860B', padding: '12px 14px', marginTop: '4px' }}>
                <p style={{ fontSize: '12px', color: '#555555', fontFamily: "'DM Sans', sans-serif", marginBottom: '10px', lineHeight: '1.5' }}>
                  Ready to check if your market is available?
                </p>
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  style={{
                    display: 'block', textAlign: 'center',
                    background: '#111111', color: '#ffffff',
                    padding: '10px 16px', fontSize: '12px',
                    fontFamily: "'JetBrains Mono', monospace",
                    letterSpacing: '0.08em', textTransform: 'uppercase',
                    textDecoration: 'none',
                  }}
                >
                  Submit Intake Form →
                </Link>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div style={{ padding: '12px 16px', borderTop: '1px solid #E5E5E5', display: 'flex', gap: '8px' }}>
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Type a message..." aria-label="Chat message input"
              disabled={loading}
              style={{
                flex: 1, padding: '10px 12px', fontSize: '13px',
                border: '1px solid #E5E5E5', outline: 'none',
                fontFamily: "'DM Sans', sans-serif", color: '#111111',
                background: '#ffffff',
              }}
            />
            <button
              onClick={send}
              disabled={loading || !input.trim()}
              style={{
                background: loading || !input.trim() ? '#E5E5E5' : '#111111',
                color: loading || !input.trim() ? '#999' : '#B8860B',
                border: 'none', padding: '0 16px', cursor: 'pointer',
                fontFamily: "'JetBrains Mono', monospace", fontSize: '16px',
                transition: 'all 0.2s',
              }}
             aria-label="Send message">
              ↗
            </button>
          </div>

          {/* Footer */}
          <div style={{ padding: '8px 16px', borderTop: '1px solid #F0F0F0', textAlign: 'center' }}>
            <a href="tel:3108461658" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', color: '#B8860B', letterSpacing: '0.1em', textDecoration: 'none' }}>
              (310) 846-1658
            </a>
          </div>
        </div>
      )}
    </>
  );
}
