

// "use client";

// import { useEffect, useRef, useState } from "react";
// import Link from "next/link";

// // ─── Types ────────────────────────────────────────────────────────────────────
// interface Particle {
//   x: number; y: number;
//   vx: number; vy: number;
//   radius: number;
//   hue: number;
//   life: number;
//   maxLife: number;
// }

// // ─── Constants ────────────────────────────────────────────────────────────────
// const COINS_DATA = [
//   { symbol: "₿", label: "BTC", color: "#f7931a", glow: "rgba(247,147,26,0.35)", orbit: 260, angle: 0, angularVel: 0.0007, size: 52 },
//   { symbol: "Ξ", label: "ETH", color: "#627eea", glow: "rgba(98,126,234,0.35)", orbit: 200, angle: Math.PI * 0.66, angularVel: 0.001, size: 44 },
//   { symbol: "◎", label: "SOL", color: "#9945ff", glow: "rgba(153,69,255,0.35)", orbit: 170, angle: Math.PI * 1.33, angularVel: 0.0013, size: 40 },
//   { symbol: "✦", label: "XRP", color: "#00aae4", glow: "rgba(0,170,228,0.35)", orbit: 300, angle: Math.PI * 0.33, angularVel: 0.0006, size: 36 },
//   { symbol: "⬡", label: "MATIC", color: "#8247e5", glow: "rgba(130,71,229,0.35)", orbit: 320, angle: Math.PI, angularVel: 0.0005, size: 34 },
//   { symbol: "Ð", label: "DOGE", color: "#c2a633", glow: "rgba(194,166,51,0.35)", orbit: 230, angle: Math.PI * 1.6, angularVel: 0.0009, size: 38 },
// ];

// const RATES_DATA = [
//   { from: "BTC", to: "USDT", rate: "67,420.00", change: "+2.4%", positive: true },
//   { from: "ETH", to: "USDT", rate: "3,891.50", change: "+1.8%", positive: true },
//   { from: "SOL", to: "USDT", rate: "184.20", change: "-0.6%", positive: false },
//   { from: "XRP", to: "USDT", rate: "0.6120", change: "+3.1%", positive: true },
//   { from: "MATIC", to: "USDT", rate: "0.8840", change: "+5.2%", positive: true },
//   { from: "DOGE", to: "USDT", rate: "0.1640", change: "-1.3%", positive: false },
// ];

// // ─── Anti-Gravity Particle Canvas ────────────────────────────────────────────
// function ParticleCanvas() {
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const mouse = useRef({ x: -999, y: -999 });
//   const particles = useRef<Particle[]>([]);
//   const raf = useRef<number>(0);

//   useEffect(() => {
//     const canvas = canvasRef.current!;
//     const ctx = canvas.getContext("2d")!;

//     const resize = () => {
//       canvas.width = canvas.offsetWidth;
//       canvas.height = canvas.offsetHeight;
//     };
//     resize();

//     const onMove = (e: MouseEvent) => {
//       const r = canvas.getBoundingClientRect();
//       mouse.current = { x: e.clientX - r.left, y: e.clientY - r.top };
//     };
//     window.addEventListener("resize", resize);
//     window.addEventListener("mousemove", onMove);

//     const spawn = (x: number, y: number, hue: number) => {
//       const angle = Math.random() * Math.PI * 2;
//       const speed = Math.random() * 1.2 + 0.3;
//       particles.current.push({
//         x, y,
//         vx: Math.cos(angle) * speed * 0.4,
//         vy: -(Math.random() * 1.5 + 0.5),
//         radius: Math.random() * 2 + 0.5,
//         hue,
//         life: 0,
//         maxLife: 90 + Math.random() * 70,
//       });
//     };

//     // Initial ambient field
//     for (let i = 0; i < 50; i++) {
//       spawn(Math.random() * 1400, Math.random() * 800, Math.random() > 0.5 ? 75 : 210 + Math.random() * 40);
//     }

//     let t = 0;
//     const draw = () => {
//       t++;
//       ctx.clearRect(0, 0, canvas.width, canvas.height);

//       // Ambient spawns
//       if (t % 5 === 0) spawn(Math.random() * canvas.width, canvas.height + 5, 75 + Math.random() * 20);
//       // Mouse burst
//       if (t % 2 === 0 && mouse.current.x > 0) {
//         spawn(
//           mouse.current.x + (Math.random() - 0.5) * 40,
//           mouse.current.y + (Math.random() - 0.5) * 40,
//           Math.random() * 360
//         );
//       }

//       particles.current = particles.current.filter(p => p.life < p.maxLife);

//       for (const p of particles.current) {
//         p.life++;
//         const prog = p.life / p.maxLife;

//         // Anti-gravity: float upward
//         p.vy -= 0.03;
//         p.vy *= 0.97;
//         p.vx *= 0.99;

//         // Mouse repulsion
//         const dx = p.x - mouse.current.x;
//         const dy = p.y - mouse.current.y;
//         const dist = Math.sqrt(dx * dx + dy * dy);
//         if (dist < 100 && dist > 0) {
//           const f = (100 - dist) / 100;
//           p.vx += (dx / dist) * f * 1.2;
//           p.vy += (dy / dist) * f * 1.2;
//         }

//         p.x += p.vx;
//         p.y += p.vy;

//         const alpha = Math.sin(prog * Math.PI) * 0.6;
//         ctx.beginPath();
//         ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
//         ctx.fillStyle = `hsla(${p.hue},85%,65%,${alpha})`;
//         ctx.fill();
//       }

//       raf.current = requestAnimationFrame(draw);
//     };
//     raf.current = requestAnimationFrame(draw);

//     return () => {
//       cancelAnimationFrame(raf.current);
//       window.removeEventListener("resize", resize);
//       window.removeEventListener("mousemove", onMove);
//     };
//   }, []);

//   return (
//     <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }} />
//   );
// }

// // ─── Orbiting Coins Canvas ────────────────────────────────────────────────────
// function OrbitCanvas() {
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const raf = useRef<number>(0);
//   const angles = useRef(COINS_DATA.map(c => c.angle));
//   const phases = useRef(COINS_DATA.map(() => Math.random() * Math.PI * 2));

//   useEffect(() => {
//     const canvas = canvasRef.current!;
//     const ctx = canvas.getContext("2d")!;

//     const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
//     resize();
//     window.addEventListener("resize", resize);

//     let t = 0;
//     const draw = () => {
//       t++;
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       const cx = canvas.width / 2;
//       const cy = canvas.height / 2;

//       // Orbit ellipses
//       for (const c of COINS_DATA) {
//         ctx.save();
//         ctx.translate(cx, cy);
//         ctx.scale(1, 0.38);
//         ctx.beginPath();
//         ctx.arc(0, 0, c.orbit, 0, Math.PI * 2);
//         ctx.strokeStyle = "rgba(200,241,53,0.05)";
//         ctx.lineWidth = 1;
//         ctx.setLineDash([3, 14]);
//         ctx.stroke();
//         ctx.setLineDash([]);
//         ctx.restore();
//       }

//       // Coins
//       for (let i = 0; i < COINS_DATA.length; i++) {
//         const c = COINS_DATA[i];
//         angles.current[i] += c.angularVel;
//         const a = angles.current[i];
//         const floatY = Math.sin(t * 0.009 + phases.current[i]) * 10;

//         const x = cx + Math.cos(a) * c.orbit;
//         const y = cy + Math.sin(a) * c.orbit * 0.38 + floatY;

//         const depth = (Math.sin(a) + 1) / 2;
//         const scale = 0.55 + depth * 0.45;
//         const alpha = 0.35 + depth * 0.65;

//         // Glow aura
//         const grd = ctx.createRadialGradient(x, y, 0, x, y, c.size * scale * 1.8);
//         grd.addColorStop(0, c.glow.replace("0.35", `${(alpha * 0.45).toFixed(2)}`));
//         grd.addColorStop(1, "transparent");
//         ctx.fillStyle = grd;
//         ctx.beginPath();
//         ctx.arc(x, y, c.size * scale * 1.8, 0, Math.PI * 2);
//         ctx.fill();

//         // Coin body
//         ctx.save();
//         ctx.globalAlpha = alpha;

//         // Shadow ring
//         ctx.beginPath();
//         ctx.arc(x, y, c.size * scale * 0.52, 0, Math.PI * 2);
//         ctx.fillStyle = "#060610";
//         ctx.fill();

//         // Border
//         ctx.beginPath();
//         ctx.arc(x, y, c.size * scale * 0.52, 0, Math.PI * 2);
//         ctx.strokeStyle = c.color;
//         ctx.lineWidth = 2.5 * scale;
//         ctx.stroke();

//         // Inner ring
//         ctx.beginPath();
//         ctx.arc(x, y, c.size * scale * 0.38, 0, Math.PI * 2);
//         ctx.strokeStyle = c.color + "40";
//         ctx.lineWidth = 1 * scale;
//         ctx.stroke();

//         // Symbol
//         ctx.fillStyle = c.color;
//         ctx.font = `${Math.round(c.size * scale * 0.36)}px Georgia, serif`;
//         ctx.textAlign = "center";
//         ctx.textBaseline = "middle";
//         ctx.fillText(c.symbol, x, y);

//         // Ticker below
//         ctx.fillStyle = "rgba(255,255,255,0.55)";
//         ctx.font = `bold ${Math.round(9.5 * scale)}px 'DM Sans', sans-serif`;
//         ctx.fillText(c.label, x, y + c.size * scale * 0.52 + 11 * scale);

//         ctx.restore();
//       }

//       // Central accent
//       const cg = ctx.createRadialGradient(cx, cy, 0, cx, cy, 90);
//       cg.addColorStop(0, "rgba(200,241,53,0.07)");
//       cg.addColorStop(1, "transparent");
//       ctx.fillStyle = cg;
//       ctx.beginPath();
//       ctx.arc(cx, cy, 90, 0, Math.PI * 2);
//       ctx.fill();

//       raf.current = requestAnimationFrame(draw);
//     };
//     raf.current = requestAnimationFrame(draw);
//     return () => { cancelAnimationFrame(raf.current); window.removeEventListener("resize", resize); };
//   }, []);

//   return (
//     <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }} />
//   );
// }

// // ─── Swap Widget ──────────────────────────────────────────────────────────────
// const RATES_MAP: Record<string, number> = { BTC: 67420, ETH: 3891.5, SOL: 184.2, XRP: 0.612, MATIC: 0.884, DOGE: 0.164 };

// function SwapWidget() {
//   const [fromAmt, setFromAmt] = useState("1.00");
//   const [fromCoin, setFromCoin] = useState("BTC");
//   const [toCoin, setToCoin] = useState("ETH");
//   const [spinning, setSpinning] = useState(false);

//   const toAmt = ((parseFloat(fromAmt) || 0) * (RATES_MAP[fromCoin] / RATES_MAP[toCoin])).toFixed(6);
//   const coins = Object.keys(RATES_MAP);

//   const handleSwap = () => {
//     setSpinning(true);
//     setTimeout(() => { setFromCoin(toCoin); setToCoin(fromCoin); setSpinning(false); }, 320);
//   };

//   const selStyle: React.CSSProperties = {
//     background: "rgba(200,241,53,0.08)", border: "1px solid rgba(200,241,53,0.2)",
//     borderRadius: 10, padding: "7px 10px", color: "#FF5C00",
//     fontSize: 13, fontWeight: 600, cursor: "pointer", outline: "none",
//     fontFamily: "'DM Sans', sans-serif",
//   };

//   const boxStyle: React.CSSProperties = {
//     background: "rgba(255,255,255,0.03)", borderRadius: 14,
//     padding: "14px 16px", border: "1px solid rgba(255,255,255,0.05)",
//   };

//   return (
//     <div style={{
//       background: "rgba(8,8,18,0.9)", border: "1px solid rgba(200,241,53,0.18)",
//       borderRadius: 22, padding: 24, width: 330,
//       backdropFilter: "blur(24px)",
//       boxShadow: "0 0 80px rgba(200,241,53,0.06), 0 40px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.04)",
//     }}>
//       {/* Header */}
//       <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
//         <span style={{ fontFamily: "'Syne',sans-serif", fontSize: 15, fontWeight: 700, color: "#f0f0f5", letterSpacing: "-0.02em" }}>Instant Swap</span>
//         {/* <span style={{ fontSize: 10, color: "#4ade80", fontFamily: "monospace", background: "rgba(74,222,128,0.08)", padding: "3px 8px", borderRadius: 20, border: "1px solid rgba(74,222,128,0.2)" }}>● LIVE</span> */}
//       </div>

//       {/* From */}
//       <div style={boxStyle}>
//         <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", fontFamily: "'DM Sans',sans-serif", marginBottom: 10, letterSpacing: "0.05em", textTransform: "uppercase" }}>You send</div>
//         <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
//           <input
//             value={fromAmt}
//             onChange={e => setFromAmt(e.target.value)}
//             style={{ background: "none", border: "none", outline: "none", fontSize: 28, fontWeight: 700, color: "#fff", fontFamily: "'Syne',sans-serif", width: "100%", letterSpacing: "-0.03em" }}
//           />
//           <select value={fromCoin} onChange={e => setFromCoin(e.target.value)} style={selStyle}>
//             {coins.map(c => <option key={c} value={c}>{c}</option>)}
//           </select>
//         </div>
//       </div>

//       {/* Swap arrow */}
//       <div style={{ display: "flex", justifyContent: "center", margin: "6px 0" }}>
//         <button onClick={handleSwap} style={{
//           background: "rgba(200,241,53,0.08)", border: "1px solid rgba(200,241,53,0.2)",
//           borderRadius: "50%", width: 38, height: 38, cursor: "pointer",
//           display: "flex", alignItems: "center", justifyContent: "center",
//           color: "#FF5C00", fontSize: 18, transition: "transform 0.32s cubic-bezier(0.34,1.56,0.64,1)",
//           transform: spinning ? "rotate(180deg)" : "rotate(0deg)",
//         }}>⇅</button>
//       </div>

//       {/* To */}
//       <div style={boxStyle}>
//         <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", fontFamily: "'DM Sans',sans-serif", marginBottom: 10, letterSpacing: "0.05em", textTransform: "uppercase" }}>You receive</div>
//         <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
//           <div style={{ fontSize: 28, fontWeight: 700, color: "#FF5C00", fontFamily: "'Syne',sans-serif", width: "100%", letterSpacing: "-0.03em" }}>{toAmt}</div>
//           <select value={toCoin} onChange={e => setToCoin(e.target.value)} style={selStyle}>
//             {coins.map(c => <option key={c} value={c}>{c}</option>)}
//           </select>
//         </div>
//       </div>

//       {/* Rate */}
//       <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "14px 0", padding: "10px 12px", background: "rgba(200,241,53,0.04)", borderRadius: 10, border: "1px solid rgba(200,241,53,0.08)" }}>
//         <span style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", fontFamily: "monospace" }}>Rate</span>
//         <span style={{ fontSize: 11, color: "rgba(200,241,53,0.7)", fontFamily: "monospace" }}>1 {fromCoin} = {(RATES_MAP[fromCoin] / RATES_MAP[toCoin]).toFixed(5)} {toCoin}</span>
//       </div>

//       {/* Fee row */}
//       <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16 }}>
//         <span style={{ fontSize: 11, color: "rgba(255,255,255,0.25)", fontFamily: "'DM Sans',sans-serif" }}>Fee</span>
//         <span style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", fontFamily: "'DM Sans',sans-serif" }}>0.1% · No slippage</span>
//       </div>

//       <Link href="/register" style={{
//         display: "block", textAlign: "center",
//         background: "linear-gradient(135deg, #FF5C00 0%, #FF5C00 100%)",
//         color: "#0a0a0f", fontFamily: "'Syne',sans-serif", fontWeight: 700,
//         fontSize: 15, borderRadius: 14, padding: "14px", textDecoration: "none",
//         letterSpacing: "-0.01em", transition: "opacity 0.2s",
//       }}
//         onMouseEnter={e => (e.currentTarget.style.opacity = "0.88")}
//         onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
//       >
//         Swap  Now →
//       </Link>
//     </div>
//   );
// }

// // ─── Live Ticker ──────────────────────────────────────────────────────────────
// function Ticker() {
//   const items = [...RATES_DATA, ...RATES_DATA, ...RATES_DATA, ...RATES_DATA];
//   return (
//     <div style={{ overflow: "hidden", borderTop: "1px solid rgba(255,255,255,0.04)", padding: "10px 0" }}>
//       <style>{`@keyframes hs-tick{from{transform:translateX(0)}to{transform:translateX(-50%)}}.hs-tr{display:flex;gap:56px;animation:hs-tick 28s linear infinite;width:max-content}`}</style>
//       <div className="hs-tr">
//         {items.map((r, i) => (
//           <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
//             <span style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", fontFamily: "monospace", letterSpacing: "0.04em" }}>{r.from}/{r.to}</span>
//             <span style={{ fontSize: 12, color: "#f0f0f5", fontFamily: "monospace", fontWeight: 600 }}>${r.rate}</span>
//             <span style={{
//               fontSize: 10, fontFamily: "monospace", padding: "2px 7px", borderRadius: 20,
//               color: r.positive ? "#4ade80" : "#f87171",
//               background: r.positive ? "rgba(74,222,128,0.1)" : "rgba(248,113,113,0.1)",
//               border: `1px solid ${r.positive ? "rgba(74,222,128,0.2)" : "rgba(248,113,113,0.2)"}`,
//             }}>{r.change}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// // ─── Main Export ──────────────────────────────────────────────────────────────
// export default function HeroSection() {
//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500;600&display=swap');

//         .hs-root{position:relative;width:100%;min-height:100svh;background:#060610;overflow:hidden;display:flex;flex-direction:column}
//         .hs-grid{position:absolute;inset:0;pointer-events:none;background-image:linear-gradient(rgba(200,241,53,0.022) 1px,transparent 1px),linear-gradient(90deg,rgba(200,241,53,0.022) 1px,transparent 1px);background-size:52px 52px}
//         .hs-vignette{position:absolute;inset:0;pointer-events:none;background:radial-gradient(ellipse 75% 65% at 50% 50%,rgba(200,241,53,0.035) 0%,transparent 70%)}
//         .hs-main{flex:1;display:flex;align-items:center;justify-content:space-between;gap:40px;max-width:1280px;width:100%;margin:0 auto;padding:90px 64px 48px;position:relative;z-index:5}
//         .hs-left{flex:1;min-width:0;display:flex;flex-direction:column;gap:28px,text-align:center}
//         .hs-badge{display:inline-flex;align-items:center;gap:8px;padding:7px 16px 7px 10px;border-radius:100px;border:1px solid rgba(200,241,53,0.2);background:rgba(200,241,53,0.05);width:fit-content;animation:hs-fi .6s both}
//         // .hs-dot{width:7px;height:7px;border-radius:50%;background:#4ade80;box-shadow:0 0 8px #4ade80;animation:hs-bl 2s ease-in-out infinite}
//         .hs-badge-t{font-family:'DM Sans',sans-serif;font-size:12px;font-weight:600;color:rgba(200,241,53,.8);letter-spacing:.06em;text-transform:uppercase}
//         .hs-h{font-family:'Syne',sans-serif;font-size:clamp(3rem,5.8vw,5.5rem);font-weight:800;line-height:.92;letter-spacing:-.045em;color:#f0f0f5;margin:0;animation:hs-ru .9s cubic-bezier(.22,1,.36,1) .1s both,text-align:center}
//         .hs-h .acc{color:#FF5C00}.hs-h .dim{color:rgba(240,240,245,.28),text-align:center}
//         .hs-sub{font-family:'DM Sans',sans-serif;font-size:clamp(.9rem,1.4vw,1.05rem);font-weight:300;line-height:1.75;color:rgba(255,255,255,.42);max-width:440px;margin:0;animation:hs-ru .9s cubic-bezier(.22,1,.36,1) .25s both}
//         .hs-stats{display:flex;gap:36px;flex-wrap:wrap;animation:hs-ru .9s cubic-bezier(.22,1,.36,1) .4s both}
//         .hs-sv{font-family:'Syne',sans-serif;font-size:1.65rem;font-weight:700;color:#f0f0f5;letter-spacing:-.03em;line-height:1}
//         .hs-sv span{color:#FF5C00}.hs-sl{font-family:'DM Sans',sans-serif;font-size:11px;color:rgba(255,255,255,.28);letter-spacing:.06em;text-transform:uppercase;margin-top:5px}
//         .hs-divider{width:1px;background:rgba(255,255,255,.06);align-self:stretch}
//         .hs-right{flex-shrink:0;position:relative;animation:hs-fi 1s .5s both;display:flex;align-items:center;justify-content:center}
//         .hs-stage{position:absolute;width:720px;height:520px;top:50%;left:50%;transform:translate(-50%,-50%);pointer-events:none}
//         .hs-ticker{position:relative;z-index:10}
//         @keyframes hs-fi{from{opacity:0}to{opacity:1}}
//         @keyframes hs-ru{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:translateY(0)}}
//         @keyframes hs-bl{0%,100%{opacity:1}50%{opacity:.3}}
//         @media(max-width:900px){.hs-main{flex-direction:column;align-items:center;padding:88px 24px 40px;text-align:center}.hs-badge{align-self:center}.hs-sub{max-width:100%}.hs-stats{justify-content:center}.hs-stage{width:360px;height:300px}}
//       `}</style>

//       <section className="hs-root">
//         <div className="hs-grid" />
//         <div className="hs-vignette" />
//         <ParticleCanvas />

//         <div className="hs-main">
//           {/* Left copy */}
//           <div className="hs-left">
            

//             <h1 className="hs-h">
//               Deposit Currencies with Ease<br />
//               <span className="acc">Convert Them</span><br />
//               <span className="dim">Into Crypto Instantly</span>
//             </h1>

//             <p className="hs-sub">
//               Bridge the gap between traditional finance and digital assets. Deposit currencies instantly and access the world of cryptocurrency with confidence.
//             </p>

            
//           </div>

//           {/* Right: orbits + widget */}
//           {/* <div className="hs-right">
//             <div className="hs-stage">
//               <OrbitCanvas />
//             </div>
//             <SwapWidget />
//           </div> */}
//         </div>

//         {/* Ticker */}
//         <div className="hs-ticker">
//           <Ticker />
//         </div>
//       </section>
//     </>
//   );
// }


"use client";

import { useEffect, useRef } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────
interface Particle {
  x: number; y: number;
  vx: number; vy: number;
  radius: number;
  hue: number;
  life: number;
  maxLife: number;
}

// ─── Constants ────────────────────────────────────────────────────────────────
const RATES_DATA = [
  { from: "BTC", to: "USDT", rate: "67,420.00", change: "+2.4%", positive: true },
  { from: "ETH", to: "USDT", rate: "3,891.50",  change: "+1.8%", positive: true },
  { from: "SOL", to: "USDT", rate: "184.20",     change: "-0.6%", positive: false },
  { from: "XRP", to: "USDT", rate: "0.6120",     change: "+3.1%", positive: true },
  { from: "MATIC", to: "USDT", rate: "0.8840",   change: "+5.2%", positive: true },
  { from: "DOGE", to: "USDT", rate: "0.1640",    change: "-1.3%", positive: false },
];

// ─── Particle Canvas ──────────────────────────────────────────────────────────
function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -999, y: -999 });
  const particles = useRef<Particle[]>([]);
  const raf = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();

    const onMove = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect();
      mouse.current = { x: e.clientX - r.left, y: e.clientY - r.top };
    };
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);

    const spawn = (x: number, y: number, hue: number) => {
      const angle = Math.random() * Math.PI * 2;
      particles.current.push({
        x, y,
        vx: Math.cos(angle) * 0.4,
        vy: -(Math.random() * 1.5 + 0.5),
        radius: Math.random() * 2 + 0.5,
        hue,
        life: 0,
        maxLife: 90 + Math.random() * 70,
      });
    };

    for (let i = 0; i < 50; i++) {
      spawn(Math.random() * 1400, Math.random() * 800, Math.random() > 0.5 ? 75 : 210 + Math.random() * 40);
    }

    let t = 0;
    const draw = () => {
      t++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (t % 5 === 0) spawn(Math.random() * canvas.width, canvas.height + 5, 75 + Math.random() * 20);
      if (t % 2 === 0 && mouse.current.x > 0) {
        spawn(
          mouse.current.x + (Math.random() - 0.5) * 40,
          mouse.current.y + (Math.random() - 0.5) * 40,
          Math.random() * 360
        );
      }

      particles.current = particles.current.filter(p => p.life < p.maxLife);

      for (const p of particles.current) {
        p.life++;
        const prog = p.life / p.maxLife;

        p.vy -= 0.03;
        p.vy *= 0.97;
        p.vx *= 0.99;

        const dx = p.x - mouse.current.x;
        const dy = p.y - mouse.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100 && dist > 0) {
          const f = (100 - dist) / 100;
          p.vx += (dx / dist) * f * 1.2;
          p.vy += (dy / dist) * f * 1.2;
        }

        p.x += p.vx;
        p.y += p.vy;

        const alpha = Math.sin(prog * Math.PI) * 0.6;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue},85%,65%,${alpha})`;
        ctx.fill();
      }

      raf.current = requestAnimationFrame(draw);
    };
    raf.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
    />
  );
}

// ─── Ticker ───────────────────────────────────────────────────────────────────
function Ticker() {
  const items = [...RATES_DATA, ...RATES_DATA, ...RATES_DATA, ...RATES_DATA];
  return (
    <div style={{ overflow: "hidden", borderTop: "1px solid rgba(255,255,255,0.04)", padding: "10px 0" }}>
      <style>{`
        @keyframes hs-tick { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .hs-tr { display: flex; gap: 56px; animation: hs-tick 28s linear infinite; width: max-content; }
      `}</style>
      <div className="hs-tr">
        {items.map((r, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
            <span style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", fontFamily: "monospace", letterSpacing: "0.04em" }}>
              {r.from}/{r.to}
            </span>
            <span style={{ fontSize: 12, color: "#f0f0f5", fontFamily: "monospace", fontWeight: 600 }}>
              ${r.rate}
            </span>
            <span style={{
              fontSize: 10, fontFamily: "monospace", padding: "2px 7px", borderRadius: 20,
              color: r.positive ? "#4ade80" : "#f87171",
              background: r.positive ? "rgba(74,222,128,0.1)" : "rgba(248,113,113,0.1)",
              border: `1px solid ${r.positive ? "rgba(74,222,128,0.2)" : "rgba(248,113,113,0.2)"}`,
            }}>
              {r.change}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Hero Section ─────────────────────────────────────────────────────────────
export default function HeroSection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500;600&display=swap');

        .hs-root {
          position: relative;
          width: 100%;
          min-height: 100svh;
          background: #060610;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }
        .hs-grid {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background-image:
            linear-gradient(rgba(200,241,53,0.022) 1px, transparent 1px),
            linear-gradient(90deg, rgba(200,241,53,0.022) 1px, transparent 1px);
          background-size: 52px 52px;
        }
        .hs-vignette {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: radial-gradient(ellipse 75% 65% at 50% 50%, rgba(200,241,53,0.035) 0%, transparent 70%);
        }
        .hs-main {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          max-width: 1280px;
          width: 100%;
          margin: 0 auto;
          padding: 90px 64px 48px;
          position: relative;
          z-index: 5;
        }
        .hs-left {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 28px;
        }
        .hs-h {
          font-family: 'Syne', sans-serif;
          font-size: clamp(3rem, 5.8vw, 5.5rem);
          font-weight: 800;
          line-height: 0.92;
          letter-spacing: -0.045em;
          color: #f0f0f5;
          margin: 0;
          animation: hs-ru 0.9s cubic-bezier(0.22,1,0.36,1) 0.1s both;
        }
        .hs-h .acc { color: #FF5C00; }
        .hs-h .dim { color: rgba(240,240,245,0.28); }
        .hs-sub {
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(0.9rem, 1.4vw, 1.05rem);
          font-weight: 300;
          line-height: 1.3;
          color: rgba(255,255,255,0.42);
          max-width: 540px;
          margin: 0;
          animation: hs-ru 0.9s cubic-bezier(0.22,1,0.36,1) 0.25s both;
        }
        .hs-ticker { position: relative; z-index: 10; }

        @keyframes hs-fi { from { opacity: 0; } to { opacity: 1; } }
        @keyframes hs-ru { from { opacity: 0; transform: translateY(22px); } to { opacity: 1; transform: translateY(0); } }

        @media (max-width: 900px) {
          .hs-main { padding: 88px 24px 40px; }
        }
      `}</style>

      <section className="hs-root">
        <div className="hs-grid" />
        <div className="hs-vignette" />
        <ParticleCanvas />

        <div className="hs-main">
          <div className="hs-left">
            <h1 className="hs-h">
             From Currency<br />
              <span className="acc">To Crypto</span><br />
              <span className="dim">in Seconds</span>
            </h1>

            <p className="hs-sub">
              Bridge the gap between traditional finance and digital assets.
              Deposit currencies instantly and access the world of cryptocurrency with confidence.
            </p>
          </div>
        </div>

        <div className="hs-ticker">
          <Ticker />
        </div>
      </section>
    </>
  );
}