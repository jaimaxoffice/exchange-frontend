"use client";

import { useState } from "react";
import Link from "next/link";

function InputField({
  label, type = "text", placeholder, name, value, onChange, error,
}: {
  label: string; type?: string; placeholder: string;
  name: string; value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}) {
  const [focused, setFocused] = useState(false);
  return (
    <div style={{ marginBottom: 18 }}>
      <label
        style={{
          display: "block", fontSize: 12, fontWeight: 600,
          letterSpacing: "0.08em", textTransform: "uppercase",
          color: focused ? "#FF6700" : "rgba(255,255,255,0.4)",
          fontFamily: "'Space Grotesk', sans-serif",
          marginBottom: 8, transition: "color 0.2s",
        }}
      >
        {label}
      </label>
      <input
        type={type} name={name} placeholder={placeholder} value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          width: "100%", height: 48, borderRadius: 12,
          background: focused ? "rgba(255,103,0,0.04)" : "rgba(255,255,255,0.03)",
          border: `1px solid ${error ? "#ef4444" : focused ? "rgba(255,103,0,0.5)" : "rgba(255,255,255,0.08)"}`,
          outline: "none", padding: "0 16px",
          fontSize: 14, color: "#fff",
          fontFamily: "'Space Grotesk', sans-serif",
          transition: "border-color 0.2s, background 0.2s",
          boxSizing: "border-box",
        }}
      />
      {error && (
        <p style={{ fontSize: 11, color: "#ef4444", fontFamily: "'Space Grotesk', sans-serif", marginTop: 5, marginBottom: 0 }}>
          {error}
        </p>
      )}
    </div>
  );
}

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setError("");
  };

  const validate = () => {
    if (!email.trim()) return "Email address is required.";
    if (!email.includes("@")) return "Enter a valid email address.";
    return "";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const err = validate();
    if (err) { setError(err); return; }
    setLoading(true);

    // Prepare payload
    const payload = { email };
    console.log("Forgot password payload:", payload);

    setTimeout(() => { 
      setLoading(false); 
      setSubmitted(true); 
    }, 1600);
  };

  if (submitted) {
    return (
      <>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Space+Grotesk:wght@400;500;600&display=swap');
          @keyframes scaleIn { from { opacity:0; transform:scale(0.85); } to { opacity:1; transform:scale(1); } }
          @keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        `}</style>
        <div style={{ minHeight: "100vh", background: "#000", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
          <div style={{ textAlign: "center", maxWidth: 480, animation: "scaleIn 0.5s cubic-bezier(0.34,1.56,0.64,1)" }}>
            <div style={{
              width: 80, height: 80, borderRadius: "50%", background: "rgba(255,103,0,0.12)",
              border: "1.5px solid rgba(255,103,0,0.3)",
              display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px",
              animation: "bounce 2s ease-in-out infinite",
            }}>
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#FF6700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </div>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 32, fontWeight: 800, color: "#fff", marginBottom: 12 }}>
              Check your email
            </h2>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 15, color: "rgba(255,255,255,0.5)", marginBottom: 8, lineHeight: 1.7 }}>
              We've sent a password reset link to
            </p>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 15, color: "#FF6700", marginBottom: 28, fontWeight: 600 }}>
              {email}
            </p>

            <div style={{
              padding: "20px 24px",
              borderRadius: 14,
              background: "rgba(255,103,0,0.05)",
              border: "1px solid rgba(255,103,0,0.15)",
              marginBottom: 28,
              textAlign: "left",
            }}>
              <div style={{ display: "flex", gap: 12 }}>
                <div style={{ flexShrink: 0, marginTop: 2 }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF6700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="12" y1="16" x2="12" y2="12"/>
                    <line x1="12" y1="8" x2="12.01" y2="8"/>
                  </svg>
                </div>
                <div>
                  <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.7)", margin: "0 0 8px", lineHeight: 1.6 }}>
                    <strong style={{ color: "#fff" }}>Didn't receive the email?</strong>
                  </p>
                  <ul style={{ margin: 0, paddingLeft: 18, fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.5)", lineHeight: 1.8 }}>
                    <li>Check your spam folder</li>
                    <li>Make sure {email} is correct</li>
                    <li>Wait a few minutes and check again</li>
                  </ul>
                </div>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <Link
                href="/login"
                style={{
                  display: "inline-block", padding: "14px 32px", borderRadius: 12,
                  background: "linear-gradient(135deg, #FF6700, #ff8534)", color: "#000",
                  fontSize: 14, fontWeight: 700, fontFamily: "'Syne', sans-serif",
                  textDecoration: "none", boxShadow: "0 4px 16px rgba(255,103,0,0.3)",
                  transition: "transform 0.2s",
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-2px)"}
                onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
              >
                Back to Login
              </Link>
              <button
                onClick={() => setSubmitted(false)}
                style={{
                  padding: "14px 32px", borderRadius: 12,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "rgba(255,255,255,0.6)",
                  fontSize: 14, fontWeight: 600, fontFamily: "'Space Grotesk', sans-serif",
                  cursor: "pointer", transition: "all 0.2s",
                }}
                onMouseEnter={(e) => { 
                  e.currentTarget.style.borderColor = "rgba(255,103,0,0.3)"; 
                  e.currentTarget.style.background = "rgba(255,103,0,0.04)"; 
                }}
                onMouseLeave={(e) => { 
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; 
                  e.currentTarget.style.background = "rgba(255,255,255,0.04)"; 
                }}
              >
                Try different email
              </button>
            </div>

            <p style={{ 
              fontSize: 11, 
              color: "rgba(255,255,255,0.25)", 
              fontFamily: "'Space Grotesk', sans-serif", 
              marginTop: 32,
              margin: "32px 0 0",
            }}>
              The reset link will expire in 1 hour
            </p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Space+Grotesk:wght@400;500;600&display=swap');
        @keyframes fadeUp { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
        @keyframes spin { to { transform:rotate(360deg); } }
        @keyframes floatY { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-16px)} }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.5} }
        @keyframes slideRight { from { opacity:0; transform:translateX(-30px); } to { opacity:1; transform:translateX(0); } }
        input::placeholder { color: rgba(255,255,255,0.2); }
        
        .left-panel { display: none; }
        @media (min-width: 1024px) {
          .left-panel { display: flex !important; }
          .mobile-logo { display: none !important; }
        }
      `}</style>

      <div style={{ minHeight: "100vh", background: "#000", display: "flex", position: "relative", overflow: "hidden" }}>

        {/* Background orbs */}
        <div style={{ position: "absolute", width: 420, height: 420, borderRadius: "50%", background: "rgba(255,103,0,0.05)", top: -100, right: -80, animation: "floatY 9s ease-in-out infinite", pointerEvents: "none" }} />
        <div style={{ position: "absolute", width: 260, height: 260, borderRadius: "50%", background: "rgba(255,103,0,0.04)", bottom: -60, left: -60, animation: "floatY 11s ease-in-out infinite 2s", pointerEvents: "none" }} />

        {/* Left panel — branding */}
        <div
          className="left-panel"
          style={{
            width: "45%", background: "linear-gradient(135deg, rgba(255,103,0,0.05) 0%, rgba(0,0,0,0.8) 100%)",
            borderRight: "1px solid rgba(255,103,0,0.12)",
            padding: "48px", display: "flex", flexDirection: "column",
            justifyContent: "space-between", position: "relative", overflow: "hidden",
          }}
        >
          {/* Animated grid background */}
          <div style={{
            position: "absolute", inset: 0,
            backgroundImage: "linear-gradient(rgba(255,103,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,103,0,0.03) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
            opacity: 0.3,
            pointerEvents: "none",
          }} />

          {/* Decorative circles */}
          <div style={{
            position: "absolute", width: 400, height: 400, borderRadius: "50%",
            border: "1px solid rgba(255,103,0,0.08)",
            top: "50%", left: "50%", transform: "translate(-50%, -50%)",
            pointerEvents: "none",
          }} />
          <div style={{
            position: "absolute", width: 260, height: 260, borderRadius: "50%",
            border: "1px solid rgba(255,103,0,0.12)",
            top: "50%", left: "50%", transform: "translate(-50%, -50%)",
            pointerEvents: "none",
          }} />
          <div style={{
            position: "absolute", width: 120, height: 120, borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,103,0,0.15), transparent)",
            top: "50%", left: "50%", transform: "translate(-50%, -50%)",
            pointerEvents: "none", animation: "pulse 4s ease-in-out infinite",
          }} />

          {/* Logo */}
          <div style={{ position: "relative", zIndex: 1, animation: "slideRight 0.6s ease" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
              <div style={{
                width: 42, height: 42, borderRadius: 11, background: "linear-gradient(135deg, #FF6700, #ff8534)",
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 8px 24px rgba(255,103,0,0.3)",
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 2L4.09 12.97H11L10 22l8.91-10.97H13z" />
                </svg>
              </div>
              <div>
                <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 22, fontWeight: 800, color: "#fff", lineHeight: 1 }}>
                  Reward<span style={{ color: "#FF6700" }}>System</span>
                </div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, color: "rgba(255,255,255,0.3)", marginTop: 4 }}>
                  Earn rewards, grow faster
                </div>
              </div>
            </div>
          </div>

          {/* Center content */}
          <div style={{ position: "relative", zIndex: 1 }}>
            <h2 style={{
              fontFamily: "'Syne', sans-serif", fontSize: 56, fontWeight: 800,
              color: "#fff", lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: 20,
              animation: "slideRight 0.6s ease 0.2s backwards",
            }}>
              Reset your<br />
              <span style={{ 
                background: "linear-gradient(135deg, #FF6700, #ff8534)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>password</span>
            </h2>

            <p style={{
              fontFamily: "'Space Grotesk', sans-serif", fontSize: 15, 
              color: "rgba(255,255,255,0.5)", lineHeight: 1.7, marginBottom: 40,
              maxWidth: 420, animation: "slideRight 0.6s ease 0.3s backwards",
            }}>
              No worries! Enter your email and we'll send you a link to reset your password and get you back on track.
            </p>


            {/* Steps */}

          </div>

          {/* Footer */}
          <div style={{ position: "relative", zIndex: 1 }}>
            
          </div>
        </div>

        {/* Right panel — form */}
        <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "40px 24px" }}>
          <div style={{ width: "100%", maxWidth: 420, animation: "fadeUp 0.5s ease" }}>

            {/* Mobile logo */}
            <div className="mobile-logo" style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 36, justifyContent: "center" }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: "linear-gradient(135deg, #FF6700, #ff8534)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 16px rgba(255,103,0,0.3)" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 2L4.09 12.97H11L10 22l8.91-10.97H13z" />
                </svg>
              </div>
              <span style={{ fontFamily: "'Syne', sans-serif", fontSize: 19, fontWeight: 800, color: "#fff" }}>
                Reward<span style={{ color: "#FF6700" }}>System</span>
              </span>
            </div>

            {/* Back button */}
            <Link 
              href="/login"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                fontSize: 13,
                color: "rgba(255,255,255,0.5)",
                fontFamily: "'Space Grotesk', sans-serif",
                textDecoration: "none",
                marginBottom: 24,
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = "#FF6700"}
              onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.5)"}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              Back to login
            </Link>

            <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: 32, fontWeight: 800, color: "#fff", marginBottom: 6 }}>
              Forgot password?
            </h1>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.4)", fontFamily: "'Space Grotesk', sans-serif", marginBottom: 32 }}>
              No problem. We'll email you instructions to reset it.
            </p>

            <form onSubmit={handleSubmit} noValidate>
              <InputField 
                label="Email address" 
                type="email" 
                name="email" 
                placeholder="you@example.com" 
                value={email} 
                onChange={onChange} 
                error={error} 
              />

              {/* Info box */}
              <div style={{
                padding: "16px",
                borderRadius: 12,
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.08)",
                marginBottom: 24,
                display: "flex",
                gap: 12,
              }}>
                <div style={{ flexShrink: 0 }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="12" y1="16" x2="12" y2="12"/>
                    <line x1="12" y1="8" x2="12.01" y2="8"/>
                  </svg>
                </div>
                <p style={{
                  fontSize: 12,
                  color: "rgba(255,255,255,0.5)",
                  fontFamily: "'Space Grotesk', sans-serif",
                  margin: 0,
                  lineHeight: 1.6,
                }}>
                  We'll send a password reset link to this email if it's associated with an account.
                </p>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                style={{
                  width: "100%", height: 52, borderRadius: 13,
                  background: loading ? "rgba(255,103,0,0.6)" : "linear-gradient(135deg, #FF6700, #ff8534)",
                  border: "none", cursor: loading ? "not-allowed" : "pointer",
                  fontSize: 15, fontWeight: 700, color: "#000",
                  fontFamily: "'Syne', sans-serif", letterSpacing: "0.02em",
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
                  transition: "all 0.2s",
                  boxShadow: loading ? "none" : "0 4px 16px rgba(255,103,0,0.3)",
                  marginBottom: 20,
                }}
                onMouseEnter={(e) => { if (!loading) e.currentTarget.style.transform = "translateY(-1px)"; }}
                onMouseLeave={(e) => { if (!loading) e.currentTarget.style.transform = "translateY(0)"; }}
                onMouseDown={(e) => { if (!loading) e.currentTarget.style.transform = "scale(0.98)"; }}
                onMouseUp={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
              >
                {loading ? (
                  <>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.5" strokeLinecap="round" style={{ animation: "spin 0.8s linear infinite" }}>
                      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                    </svg>
                    Sending reset link…
                  </>
                ) : (
                  <>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                    Send Reset Link
                  </>
                )}
              </button>

              {/* Divider */}
              <div style={{ display: "flex", alignItems: "center", gap: 12, margin: "24px 0" }}>
                <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.07)" }} />
                <span style={{ fontSize: 11, color: "rgba(255,255,255,0.25)", fontFamily: "'Space Grotesk', sans-serif" }}>or</span>
                <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.07)" }} />
              </div>



              {/* Security badge */}
              
            </form>
          </div>
        </div>
      </div>
    </>
  );
}