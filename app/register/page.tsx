// "use client";

// import { useState } from "react";
// import Link from "next/link";

// function InputField({
//   label, type = "text", placeholder, name, value, onChange, error,
// }: {
//   label: string; type?: string; placeholder: string;
//   name: string; value: string;
//   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   error?: string;
// }) {
//   const [focused, setFocused] = useState(false);
//   return (
//     <div style={{ marginBottom: 18 }}>
//       <label
//         style={{
//           display: "block", fontSize: 12, fontWeight: 600,
//           letterSpacing: "0.08em", textTransform: "uppercase",
//           color: focused ? "#FF6700" : "rgba(255,255,255,0.4)",
//           fontFamily: "'Space Grotesk', sans-serif",
//           marginBottom: 8, transition: "color 0.2s",
//         }}
//       >
//         {label}
//       </label>
//       <input
//         type={type} name={name} placeholder={placeholder} value={value}
//         onChange={onChange}
//         onFocus={() => setFocused(true)}
//         onBlur={() => setFocused(false)}
//         style={{
//           width: "100%", height: 48, borderRadius: 12,
//           background: focused ? "rgba(255,103,0,0.04)" : "rgba(255,255,255,0.03)",
//           border: `1px solid ${error ? "#ef4444" : focused ? "rgba(255,103,0,0.5)" : "rgba(255,255,255,0.08)"}`,
//           outline: "none", padding: "0 16px",
//           fontSize: 14, color: "#fff",
//           fontFamily: "'Space Grotesk', sans-serif",
//           transition: "border-color 0.2s, background 0.2s",
//           boxSizing: "border-box",
//         }}
//       // placeholder={placeholder}
//       />
//       {error && (
//         <p style={{ fontSize: 11, color: "#ef4444", fontFamily: "'Space Grotesk', sans-serif", marginTop: 5, marginBottom: 0 }}>
//           {error}
//         </p>
//       )}
//     </div>
//   );
// }

// function PasswordStrength({ password }: { password: string }) {
//   const checks = [
//     { label: "8+ characters", pass: password.length >= 8 },
//     { label: "Uppercase", pass: /[A-Z]/.test(password) },
//     { label: "Number", pass: /[0-9]/.test(password) },
//     { label: "Symbol", pass: /[^A-Za-z0-9]/.test(password) },
//   ];
//   const score = checks.filter((c) => c.pass).length;
//   const color = score <= 1 ? "#ef4444" : score === 2 ? "#f97316" : score === 3 ? "#eab308" : "#22c55e";
//   const label = ["", "Weak", "Fair", "Good", "Strong"][score];

//   if (!password) return null;
//   return (
//     <div style={{ marginBottom: 18 }}>
//       <div style={{ display: "flex", gap: 4, marginBottom: 8 }}>
//         {[1, 2, 3, 4].map((i) => (
//           <div
//             key={i}
//             style={{
//               flex: 1, height: 3, borderRadius: 99,
//               background: i <= score ? color : "rgba(255,255,255,0.08)",
//               transition: "background 0.3s",
//             }}
//           />
//         ))}
//       </div>
//       <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//         <div style={{ display: "flex", gap: 12 }}>
//           {checks.map((c) => (
//             <span
//               key={c.label}
//               style={{
//                 fontSize: 11, fontFamily: "'Space Grotesk', sans-serif",
//                 color: c.pass ? "#22c55e" : "rgba(255,255,255,0.25)",
//                 transition: "color 0.2s",
//               }}
//             >
//               {c.pass ? "✓" : "·"} {c.label}
//             </span>
//           ))}
//         </div>
//         <span style={{ fontSize: 11, fontWeight: 600, color, fontFamily: "'Space Grotesk', sans-serif" }}>
//           {label}
//         </span>
//       </div>
//     </div>
//   );
// }

// export default function RegisterPage() {
//   const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });
//   const [errors, setErrors] = useState<Record<string, string>>({});
//   const [agreed, setAgreed] = useState(false);
//   const [submitted, setSubmitted] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [showPass, setShowPass] = useState(false);
//   const [showConfirm, setShowConfirm] = useState(false);

//   const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
//     setErrors((er) => ({ ...er, [e.target.name]: "" }));
//   };

//   const validate = () => {
//     const e: Record<string, string> = {};
//     if (!form.name.trim()) e.name = "Full name is required.";
//     if (!form.email.includes("@")) e.email = "Enter a valid email address.";
//     if (form.password.length < 8) e.password = "Password must be at least 8 characters.";
//     if (form.password !== form.confirm) e.confirm = "Passwords do not match.";
//     if (!agreed) e.agreed = "You must accept the terms.";
//     return e;
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const errs = validate();
//     if (Object.keys(errs).length) { setErrors(errs); return; }
//     setLoading(true);
//     setTimeout(() => { setLoading(false); setSubmitted(true); }, 1600);
//   };

//   if (submitted) {
//     return (
//       <>
//         <style>{`@import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Space+Grotesk:wght@400;500;600&display=swap');
//         @keyframes scaleIn { from { opacity:0; transform:scale(0.85); } to { opacity:1; transform:scale(1); } }`}</style>
//         <div style={{ minHeight: "100vh", background: "#000", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
//           <div style={{ textAlign: "center", animation: "scaleIn 0.5s cubic-bezier(0.34,1.56,0.64,1)" }}>
//             <div style={{
//               width: 72, height: 72, borderRadius: "50%", background: "rgba(255,103,0,0.12)",
//               border: "1.5px solid rgba(255,103,0,0.3)",
//               display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px",
//             }}>
//               <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FF6700" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//                 <path d="M20 6L9 17l-5-5" />
//               </svg>
//             </div>
//             <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 28, fontWeight: 800, color: "#fff", marginBottom: 12 }}>
//               You're in!
//             </h2>
//             <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.4)", marginBottom: 28, maxWidth: 280, margin: "0 auto 28px" }}>
//               Your account has been created. Check your email to verify and start earning Converts.
//             </p>
//             <Link
//               href="/login"
//               style={{
//                 display: "inline-block", padding: "12px 32px", borderRadius: 12,
//                 background: "#FF6700", color: "#000",
//                 fontSize: 14, fontWeight: 700, fontFamily: "'Syne', sans-serif",
//                 textDecoration: "none",
//               }}
//             >
//               Go to Login
//             </Link>
//           </div>
//         </div>
//       </>
//     );
//   }

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Space+Grotesk:wght@400;500;600&display=swap');
//         @keyframes fadeUp { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
//         @keyframes spin { to { transform:rotate(360deg); } }
//         @keyframes floatY { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-16px)} }
//         input::placeholder { color: rgba(255,255,255,0.2); }
//       `}</style>

//       <div style={{ minHeight: "100vh", background: "#000", display: "flex", position: "relative", overflow: "hidden" }}>

//         {/* Background orbs */}
//         <div style={{ position: "absolute", width: 420, height: 420, borderRadius: "50%", background: "rgba(255,103,0,0.05)", top: -100, right: -80, animation: "floatY 9s ease-in-out infinite", pointerEvents: "none" }} />
//         <div style={{ position: "absolute", width: 260, height: 260, borderRadius: "50%", background: "rgba(255,103,0,0.04)", bottom: -60, left: -60, animation: "floatY 11s ease-in-out infinite 2s", pointerEvents: "none" }} />

//         {/* Left panel — branding */}
//         <div
//           style={{
//             width: "42%", background: "rgba(255,103,0,0.03)",
//             borderRight: "1px solid rgba(255,103,0,0.08)",
//             padding: "60px 48px", display: "flex", flexDirection: "column",
//             justifyContent: "space-between", position: "relative", overflow: "hidden",
//           }}
//           className="hidden lg:flex"
//         >
//           {/* Decorative big circle */}
//           <div style={{
//             position: "absolute", width: 340, height: 340, borderRadius: "50%",
//             border: "1px solid rgba(255,103,0,0.1)",
//             top: "50%", left: "50%", transform: "translate(-50%, -50%)",
//             pointerEvents: "none",
//           }} />
//           <div style={{
//             position: "absolute", width: 220, height: 220, borderRadius: "50%",
//             border: "1px solid rgba(255,103,0,0.08)",
//             top: "50%", left: "50%", transform: "translate(-50%, -50%)",
//             pointerEvents: "none",
//           }} />
//           <div style={{
//             position: "absolute", width: 90, height: 90, borderRadius: "50%",
//             background: "rgba(255,103,0,0.07)",
//             top: "50%", left: "50%", transform: "translate(-50%, -50%)",
//             pointerEvents: "none",
//           }} />

//           {/* Logo */}
//           <div style={{ display: "flex", alignItems: "center", gap: 10, position: "relative" }}>
//             <div style={{
//               width: 36, height: 36, borderRadius: 10, background: "#FF6700",
//               display: "flex", alignItems: "center", justifyContent: "center",
//             }}>
//               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//                 <path d="M13 2L4.09 12.97H11L10 22l8.91-10.97H13z" />
//               </svg>
//             </div>
//             <span style={{ fontFamily: "'Syne', sans-serif", fontSize: 18, fontWeight: 800, color: "#fff" }}>
//               Convert<span style={{ color: "#FF6700" }}> Now</span>
//             </span>
//           </div>

//           {/* Center — big headline + stat cards */}
//           <div style={{ position: "relative" }}>
//             <h2 style={{
//               fontFamily: "'Syne', sans-serif", fontSize: 48, fontWeight: 800,
//               color: "#fff", lineHeight: 1.0, letterSpacing: "-0.02em", marginBottom: 40,
//             }}>
//               Start<br />
//               <span style={{ color: "#FF6700" }}>earning.</span>
//             </h2>

//             {/* Stat cards row */}

//           </div>

//           <p style={{ fontSize: 12, color: "rgba(255,255,255,0.15)", fontFamily: "'Space Grotesk', sans-serif", position: "relative" }}>
//             © {new Date().getFullYear()} Convert Now. All rights reserved.
//           </p>
//         </div>

//         {/* Right panel — form */}
//         <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "40px 24px" }}>
//           <div style={{ width: "100%", maxWidth: 440, animation: "fadeUp 0.5s ease" }}>

//             {/* Mobile logo */}
            

//             <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: 30, fontWeight: 800, color: "#fff", marginBottom: 6 }}>
//               Create account
//             </h1>
//             <p style={{ fontSize: 13, color: "rgba(255,255,255,0.35)", fontFamily: "'Space Grotesk', sans-serif", marginBottom: 32 }}>
//               Already have one?{" "}
//               <Link href="/login" style={{ color: "#FF6700", textDecoration: "none", fontWeight: 600 }}>
//                 Sign in
//               </Link>
//             </p>

//             <form onSubmit={handleSubmit} noValidate>
//               <InputField label="Full name" name="name" placeholder="John Doe" value={form.name} onChange={onChange} error={errors.name} />
//               <InputField label="Email address" type="email" name="email" placeholder="you@example.com" value={form.email} onChange={onChange} error={errors.email} />

//               {/* Password with toggle */}
//               <div style={{ position: "relative" }}>
//                 <InputField label="Password" type={showPass ? "text" : "password"} name="password" placeholder="Min. 8 characters" value={form.password} onChange={onChange} error={errors.password} />
//                 <button
//                   type="button"
//                   onClick={() => setShowPass((s) => !s)}
//                   style={{
//                     position: "absolute", right: 14, top: 36, background: "none", border: "none",
//                     cursor: "pointer", color: "rgba(255,255,255,0.3)", padding: 4,
//                   }}
//                   aria-label={showPass ? "Hide password" : "Show password"}
//                 >
//                   {showPass ? (
//                     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" /><line x1="1" y1="1" x2="23" y2="23" /></svg>
//                   ) : (
//                     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
//                   )}
//                 </button>
//               </div>

//               <PasswordStrength password={form.password} />

//               <div style={{ position: "relative" }}>
//                 <InputField label="Confirm password" type={showConfirm ? "text" : "password"} name="confirm" placeholder="Re-enter password" value={form.confirm} onChange={onChange} error={errors.confirm} />
//                 <button
//                   type="button"
//                   onClick={() => setShowConfirm((s) => !s)}
//                   style={{
//                     position: "absolute", right: 14, top: 36, background: "none", border: "none",
//                     cursor: "pointer", color: "rgba(255,255,255,0.3)", padding: 4,
//                   }}
//                   aria-label={showConfirm ? "Hide" : "Show"}
//                 >
//                   {showConfirm ? (
//                     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" /><line x1="1" y1="1" x2="23" y2="23" /></svg>
//                   ) : (
//                     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
//                   )}
//                 </button>
//               </div>

//               {/* Terms */}
//               <div style={{ marginBottom: errors.agreed ? 6 : 24, display: "flex", alignItems: "flex-start", gap: 10 }}>
//                 <button
//                   type="button"
//                   onClick={() => { setAgreed((a) => !a); setErrors((e) => ({ ...e, agreed: "" })); }}
//                   style={{
//                     width: 18, height: 18, borderRadius: 5, flexShrink: 0, marginTop: 1,
//                     background: agreed ? "#FF6700" : "transparent",
//                     border: `1.5px solid ${agreed ? "#FF6700" : "rgba(255,255,255,0.2)"}`,
//                     cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
//                     transition: "background 0.2s, border-color 0.2s",
//                   }}
//                   aria-checked={agreed}
//                   role="checkbox"
//                 >
//                   {agreed && (
//                     <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
//                       <path d="M20 6L9 17l-5-5" />
//                     </svg>
//                   )}
//                 </button>
//                 <p style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", fontFamily: "'Space Grotesk', sans-serif", lineHeight: 1.6, margin: 0 }}>
//                   I agree to the{" "}
//                   <Link href="/terms" style={{ color: "#FF6700", textDecoration: "none" }}>Terms of Service</Link>
//                   {" "}and{" "}
//                   <Link href="/privacy" style={{ color: "#FF6700", textDecoration: "none" }}>Privacy Policy</Link>
//                 </p>
//               </div>
//               {errors.agreed && (
//                 <p style={{ fontSize: 11, color: "#ef4444", fontFamily: "'Space Grotesk', sans-serif", marginBottom: 16, marginTop: -4 }}>{errors.agreed}</p>
//               )}

//               {/* Submit */}
//               <button
//                 type="submit"
//                 disabled={loading}
//                 style={{
//                   width: "100%", height: 50, borderRadius: 13,
//                   background: loading ? "rgba(255,103,0,0.6)" : "#FF6700",
//                   border: "none", cursor: loading ? "not-allowed" : "pointer",
//                   fontSize: 15, fontWeight: 700, color: "#000",
//                   fontFamily: "'Syne', sans-serif", letterSpacing: "0.02em",
//                   display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
//                   transition: "background 0.2s, transform 0.15s",
//                 }}
//                 onMouseEnter={(e) => { if (!loading) e.currentTarget.style.background = "#e55e00"; }}
//                 onMouseLeave={(e) => { if (!loading) e.currentTarget.style.background = "#FF6700"; }}
//                 onMouseDown={(e) => { if (!loading) e.currentTarget.style.transform = "scale(0.98)"; }}
//                 onMouseUp={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
//               >
//                 {loading ? (
//                   <>
//                     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.5" strokeLinecap="round" style={{ animation: "spin 0.8s linear infinite" }}>
//                       <path d="M21 12a9 9 0 1 1-6.219-8.56" />
//                     </svg>
//                     Creating account…
//                   </>
//                 ) : (
//                   "Create Account"
//                 )}
//               </button>

//               {/* Divider */}
              


//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }


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
          color: focused ? "#FF6700" : "#fff",
          fontFamily: "'Space Grotesk', sans-serif",
          marginBottom: 8, transition: "color 0.2s",
          border: focused? "#FF6700":"#fff",
        }}
      >
        {label}
      </label>
      <input
        type={type} name={name} placeholder={placeholder} value={value} className="custom-input"
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          width: "100%", height: 48, borderRadius: 8,
          background: focused ? "rgba(255,103,0,0.04)" : "rgba(255,255,255,0.03)",
          border: `1px solid ${error ? "#ef4444" : focused ? "rgba(255,103,0,0.5)" : "rgba(205,275,255,0.5)"}`,
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

function PhoneInput({
  label, name, value, onChange, error, countryCode, onCountryChange,
}: {
  label: string; name: string; value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string; countryCode: string;
  onCountryChange: (code: string) => void;
}) {
  const [focused, setFocused] = useState(false);
  const countries = [
    { code: "+91", flag: "🇮🇳", country: "India" },
    { code: "+1", flag: "🇺🇸", country: "USA" },
    { code: "+44", flag: "🇬🇧", country: "UK" },
    { code: "+61", flag: "🇦🇺", country: "Australia" },
    { code: "+971", flag: "🇦🇪", country: "UAE" },
  ];

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
      <div style={{ display: "flex", gap: 8 }}>
        <select
          value={countryCode}
          onChange={(e) => onCountryChange(e.target.value)}
          className="custom-input"
          style={{
            height: 48, borderRadius: 12, width: 100,
            background: focused ? "rgba(255,103,0,0.04)" : "rgba(255,255,255,0.03)",
            border: `1px solid ${error ? "#ef4444" : focused ? "rgba(255,103,0,0.5)" : "rgba(255,255,255,0.5)"}`,
            outline: "none", padding: "0 12px",
            fontSize: 14, color: "#fff",
            fontFamily: "'Space Grotesk', sans-serif",
            cursor: "pointer",
            boxSizing: "border-box",
          }}
        >
          {countries.map((c) => (
            <option key={c.code} value={c.code} style={{ background: "#1a1a1a" }}>
              {c.flag} {c.code}
            </option>
          ))}
        </select>
        <input
          type="tel"
          name={name}
          placeholder="Phone number"
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="custom-input"
          style={{
            flex: 1, height: 48, borderRadius: 12,
            background: focused ? "rgba(255,103,0,0.04)" : "rgba(255,255,255,0.03)",
            border: `1px solid ${error ? "#ef4444" : focused ? "rgba(255,103,0,0.5)" : "rgba(255,255,255,0.5)"}`,
            outline: "none", padding: "0 16px",
            fontSize: 14, color: "#fff",
            fontFamily: "'Space Grotesk', sans-serif",
            transition: "border-color 0.2s, background 0.2s",
            boxSizing: "border-box",
          }}
        />
      </div>
      {error && (
        <p style={{ fontSize: 11, color: "#ef4444", fontFamily: "'Space Grotesk', sans-serif", marginTop: 5, marginBottom: 0 }}>
          {error}
        </p>
      )}
    </div>
  );
}

function PasswordStrength({ password }: { password: string }) {
  const checks = [
    { label: "8+ characters", pass: password.length >= 8 },
    { label: "Uppercase", pass: /[A-Z]/.test(password) },
    { label: "Number", pass: /[0-9]/.test(password) },
    { label: "Symbol", pass: /[^A-Za-z0-9]/.test(password) },
  ];
  const score = checks.filter((c) => c.pass).length;
  const color = score <= 1 ? "#ef4444" : score === 2 ? "#f97316" : score === 3 ? "#eab308" : "#22c55e";
  const label = ["", "Weak", "Fair", "Good", "Strong"][score];

  if (!password) return null;
  return (
    <div style={{ marginBottom: 18 }}>
      <div style={{ display: "flex", gap: 4, marginBottom: 8 }}>
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            style={{
              flex: 1, height: 3, borderRadius: 99,
              background: i <= score ? color : "rgba(255,255,255,0.08)",
              transition: "background 0.3s",
            }}
          />
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          {checks.map((c) => (
            <span
              key={c.label}
              style={{
                fontSize: 11, fontFamily: "'Space Grotesk', sans-serif",
                color: c.pass ? "#22c55e" : "rgba(255,255,255,0.25)",
                transition: "color 0.2s",
              }}
            >
              {c.pass ? "✓" : "·"} {c.label}
            </span>
          ))}
        </div>
        <span style={{ fontSize: 11, fontWeight: 600, color, fontFamily: "'Space Grotesk', sans-serif" }}>
          {label}
        </span>
      </div>
    </div>
  );
}

export default function RegisterPage() {
  const [form, setForm] = useState({ 
    name: "", 
    email: "", 
    phone: "", 
    password: "", 
    confirm: "", 
    country_code: "+91" 
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    setErrors((er) => ({ ...er, [e.target.name]: "" }));
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Full name is required.";
    if (!form.email.includes("@")) e.email = "Enter a valid email address.";
    if (!form.phone || form.phone.length < 10) e.phone = "Enter a valid phone number.";
    if (form.password.length < 6) e.password = "Password must be at least 6 characters.";
    if (form.password !== form.confirm) e.confirm = "Passwords do not match.";
    if (!agreed) e.agreed = "You must accept the terms.";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setLoading(true);
    
    // Prepare payload
    const payload = {
      name: form.name,
      email: form.email,
      phone: form.phone,
      password: form.password,
      country_code: form.country_code,
    };
    
    console.log("Registration payload:", payload);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1600);
  };

  if (submitted) {
    return (
      <>
        <style>{`@import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Space+Grotesk:wght@400;500;600&display=swap');
        @keyframes scaleIn { from { opacity:0; transform:scale(0.85); } to { opacity:1; transform:scale(1); } }`}</style>
        <div style={{ minHeight: "100vh", background: "#000", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
          <div style={{ textAlign: "center", animation: "scaleIn 0.5s cubic-bezier(0.34,1.56,0.64,1)" }}>
            <div style={{
              width: 72, height: 72, borderRadius: "50%", background: "rgba(255,103,0,0.12)",
              border: "1.5px solid rgba(255,103,0,0.3)",
              display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px",
            }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FF6700" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 28, fontWeight: 800, color: "#fff", marginBottom: 12 }}>
              You're in!
            </h2>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.4)", marginBottom: 28, maxWidth: 280, margin: "0 auto 28px" }}>
              Your account has been created. Check your email to verify and start earning Converts.
            </p>
            <Link
              href="/login"
              style={{
                display: "inline-block", padding: "12px 32px", borderRadius: 12,
                background: "#FF6700", color: "#000",
                fontSize: 14, fontWeight: 700, fontFamily: "'Syne', sans-serif",
                textDecoration: "none",
              }}
            >
              Go to Login
            </Link>
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
                  Convert<span style={{ color: "#FF6700" }}> Now</span>
                </div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, color: "rgba(255,255,255,0.3)", marginTop: 4 }}>
                  Earn Converts, grow faster
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
              Join the<br />
              <span style={{ 
                background: "linear-gradient(135deg, #FF6700, #ff8534)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>revolution</span>
            </h2>

            <p style={{
              fontFamily: "'Space Grotesk', sans-serif", fontSize: 15, 
              color: "rgba(255,255,255,0.5)", lineHeight: 1.7, marginBottom: 40,
              maxWidth: 420, animation: "slideRight 0.6s ease 0.3s backwards",
            }}>
              Experience a new way to earn and grow. Join thousands of members already maximizing their Converts.
            </p>




          </div>

          {/* Footer */}
          <div style={{ position: "relative", zIndex: 1 }}>
         

            <p style={{ fontSize: 11, color: "rgba(255,255,255,0.2)", fontFamily: "'Space Grotesk', sans-serif", margin: 0 }}>
              © {new Date().getFullYear()} Convert Now. All rights reserved.
            </p>
          </div>
        </div>

        {/* Right panel — form */}
        <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "40px 24px" }}>
          <div style={{ width: "100%", maxWidth: 440, animation: "fadeUp 0.5s ease" }}>

            {/* Mobile logo */}
            <div className="mobile-logo" style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 36, justifyContent: "center" }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: "linear-gradient(135deg, #FF6700, #ff8534)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 16px rgba(255,103,0,0.3)" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 2L4.09 12.97H11L10 22l8.91-10.97H13z" />
                </svg>
              </div>
              <span style={{ fontFamily: "'Syne', sans-serif", fontSize: 19, fontWeight: 800, color: "#fff" }}>
                Convert<span style={{ color: "#FF6700" }}> Now</span>
              </span>
            </div>

            <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: 32, fontWeight: 800, color: "#fff", marginBottom: 6 }}>
              Create account
            </h1>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.4)", fontFamily: "'Space Grotesk', sans-serif", marginBottom: 32 }}>
              Already have one?{" "}
              <Link href="/login" style={{ color: "#FF6700", textDecoration: "none", fontWeight: 600 }}>
                Sign in
              </Link>
            </p>

            <form onSubmit={handleSubmit} noValidate>
              <InputField label="Full name" name="name" placeholder="Abhiram" value={form.name} onChange={onChange} error={errors.name} />
              <InputField label="Email address" type="email" name="email" placeholder="you@example.com" value={form.email} onChange={onChange} error={errors.email} />
              
              <PhoneInput 
                label="Phone number" 
                name="phone" 
                value={form.phone} 
                onChange={onChange} 
                error={errors.phone}
                countryCode={form.country_code}
                onCountryChange={(code) => setForm(f => ({ ...f, country_code: code }))}
              />

              {/* Password with toggle */}
              <div style={{ position: "relative" }}>
                <InputField label="Password" type={showPass ? "text" : "password"} name="password" placeholder="Min. 6 characters" value={form.password} onChange={onChange} error={errors.password} />
                <button
                  type="button"
                  onClick={() => setShowPass((s) => !s)}
                  style={{
                    position: "absolute", right: 14, top: 36, background: "none", border: "none",
                    cursor: "pointer", color: "rgba(255,255,255,0.3)", padding: 4,
                  }}
                  aria-label={showPass ? "Hide password" : "Show password"}
                >
                  {showPass ? (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
                  ) : (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                  )}
                </button>
              </div>

              <PasswordStrength password={form.password} />

              <div style={{ position: "relative" }}>
                <InputField label="Confirm password" type={showConfirm ? "text" : "password"} name="confirm" placeholder="Re-enter password" value={form.confirm} onChange={onChange} error={errors.confirm} />
                <button
                  type="button"
                  onClick={() => setShowConfirm((s) => !s)}
                  style={{
                    position: "absolute", right: 14, top: 36, background: "none", border: "none",
                    cursor: "pointer", color: "rgba(255,255,255,0.3)", padding: 4,
                  }}
                  aria-label={showConfirm ? "Hide" : "Show"}
                >
                  {showConfirm ? (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
                  ) : (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                  )}
                </button>
              </div>

              {/* Terms */}
              <div style={{ marginBottom: errors.agreed ? 6 : 24, display: "flex", alignItems: "flex-start", gap: 10 }}>
                <button
                  type="button"
                  onClick={() => { setAgreed((a) => !a); setErrors((e) => ({ ...e, agreed: "" })); }}
                  style={{
                    width: 18, height: 18, borderRadius: 5, flexShrink: 0, marginTop: 1,
                    background: agreed ? "#FF6700" : "transparent",
                    border: `1.5px solid ${agreed ? "#FF6700" : "rgba(255,255,255,0.2)"}`,
                    cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
                    transition: "background 0.2s, border-color 0.2s",
                  }}
                  aria-checked={agreed}
                  role="checkbox"
                >
                  {agreed && (
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  )}
                </button>
                <p style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", fontFamily: "'Space Grotesk', sans-serif", lineHeight: 1.6, margin: 0 }}>
                  I agree to the{" "}
                  <Link href="/terms" style={{ color: "#FF6700", textDecoration: "none" }}>Terms of Service</Link>
                  {" "}and{" "}
                  <Link href="/privacy" style={{ color: "#FF6700", textDecoration: "none" }}>Privacy Policy</Link>
                </p>
              </div>
              {errors.agreed && (
                <p style={{ fontSize: 11, color: "#ef4444", fontFamily: "'Space Grotesk', sans-serif", marginBottom: 16, marginTop: -4 }}>{errors.agreed}</p>
              )}

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
                    Creating account…
                  </>
                ) : (
                  "Create Account"
                )}
              </button>

              {/* Divider */}


              {/* OAuth buttons */}

            </form>
          </div>
        </div>
      </div>
    </>
  );
}