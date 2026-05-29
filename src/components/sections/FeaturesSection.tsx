// // import { HOME_FEATURES } from "@/constants/navigation";

// // export default function FeaturesSection() {
// //   return (
// //     <section className="px-4 sm:px-6 lg:px-8 py-20 md:py-32 bg-black/50 border-y border-[#FF5C00]/10">
// //       <div className="max-w-[1100px] mx-auto">
// //         <div className="text-center mb-12">
// //           <h2 className="text-3xl md:text-4xl font-bold mb-4">
// //             Why Choose Us?
// //           </h2>
// //           <p className="text-white/60 text-lg">
// //             Experience the best Convert  Now with cutting-edge features
// //           </p>
// //         </div>

// //         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
// //           {HOME_FEATURES.map((feature) => (
// //             <div
// //               key={feature.id}
// //               className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#FF5C00]/50 hover:bg-[#FF5C00]/5 transition group"
// //             >

// //               <h3 className="text-xl font-semibold mb-2 text-white">
// //                 {feature.title}
// //               </h3>
// //               <p className="text-white/60 text-sm leading-relaxed">
// //                 {feature.description}
// //               </p>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }


// "use client";

// import { useEffect, useRef } from "react";
// import { HOME_FEATURES } from "@/constants/navigation";

// const ICONS: Record<string, string> = {
//   "ti-bolt": "M13 2L4.09 12.97H11L10 22l8.91-10.97H13z",
//   "ti-shield-check": "M12 3l8 4v5c0 5-3.5 9.74-8 11-4.5-1.26-8-6-8-11V7l8-4zm-2 8l-1.5-1.5-1 1L10 14l5-5-1-1L10 11z",
//   "ti-chart-arrows-vertical": "M12 3v18M8 7l4-4 4 4M8 17l4 4 4-4",
//   "ti-world": "M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm0 0c-1.66 2.5-2.5 5-2.5 10s.84 7.5 2.5 10m0-20c1.66 2.5 2.5 5 2.5 10s-.84 7.5-2.5 10M2 12h20",
// };

// const PILLS: Record<string, string> = {};

// const featuresMeta = [
//   { num: "01", iconPath: ICONS["ti-bolt"], pill: "0ms" },
//   { num: "02", iconPath: ICONS["ti-shield-check"], pill: "256-bit" },
//   { num: "03", iconPath: ICONS["ti-chart-arrows-vertical"], pill: "Up to 5×" },
//   { num: "04", iconPath: ICONS["ti-world"], pill: "60+ countries" },
// ];

// export default function FeaturesSection() {
//   const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

//   useEffect(() => {
//     const observers: IntersectionObserver[] = [];
//     cardRefs.current.forEach((card, i) => {
//       if (!card) return;
//       const obs = new IntersectionObserver(
//         ([entry]) => {
//           if (entry.isIntersecting) {
//             setTimeout(() => {
//               card.style.opacity = "1";
//               card.style.transform = "translateY(0)";
//             }, i * 100);
//             obs.disconnect();
//           }
//         },
//         { threshold: 0.15 }
//       );
//       obs.observe(card);
//       observers.push(obs);
//     });
//     return () => observers.forEach((o) => o.disconnect());
//   }, []);

//   return (
//     <section className="bg-black px-4 sm:px-6 lg:px-8 py-20 md:py-32 border-y border-white/5">
//       <div className="max-w-[1100px] mx-auto">

//         {/* Header */}
//         <div className="text-center mb-14">
//           <div className="inline-flex items-center gap-2 mb-5">
//             <span className="w-[6px] h-[6px] rounded-lg bg-[#FF6700] animate-pulse" />
//             <span
//               className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#FF6700]"
//               style={{ fontFamily: "'Space Grotesk', sans-serif" }}
//             >
//               Why choose us
//             </span>
//           </div>

//           <h2
//             className="text-[42px] md:text-[56px] font-extrabold leading-none tracking-tight text-white mb-4"
//             style={{ fontFamily: "'Syne', sans-serif" }}
//           >
//             Built to{" "}
//             <span className="text-[#FF6700]">Convert</span>{" "}
//             you.
//           </h2>

//           <p
//             className="text-white/40 text-[15px] max-w-sm mx-auto leading-relaxed"
//             style={{ fontFamily: "'Space Grotesk', sans-serif" }}
//           >
//             Cutting-edge features for a next-gen loyalty experience.
//           </p>
//         </div>

//         {/* Cards grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
//           {HOME_FEATURES.map((feature, i) => {
//             const meta = featuresMeta[i] ?? { num: `0${i + 1}`, iconPath: "", pill: "" };
//             return (
//               <div
//                 key={feature.id}
//                 ref={(el) => { cardRefs.current[i] = el; }}
//                 className="group relative bg-[#111] border border-white/[0.07] rounded-lg p-6 overflow-hidden cursor-default
//                            transition-colors duration-300 hover:border-[#FF6700]/35 hover:bg-[#151515]"
//                 style={{
//                   opacity: 0,
//                   transform: "translateY(28px)",
//                   transition: "opacity 0.55s cubic-bezier(0.22,1,0.36,1), transform 0.55s cubic-bezier(0.22,1,0.36,1), background-color 0.3s, border-color 0.3s",
//                 }}
//               >
//                 {/* Scanline on hover */}
//                 <span
//                   className="absolute top-0 left-0 right-0 h-px
//                              bg-gradient-to-r from-transparent via-[#FF6700] to-transparent
//                              -translate-x-full group-hover:translate-x-full
//                              transition-transform duration-700 ease-in-out"
//                 />

//                 {/* Number */}
//                 <p
//                   className="text-[11px] font-bold tracking-[0.12em] text-[#FF6700]/40 mb-5"
//                   style={{ fontFamily: "'Syne', sans-serif" }}
//                 >
//                   {meta.num}
//                 </p>

//                 {/* Icon */}
//                 <div
//                   className="w-11 h-11 rounded-lg bg-[#FF6700] flex items-center justify-center mb-5
//                              transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6"
//                 >
//                   <svg
//                     width="20" height="20" viewBox="0 0 24 24"
//                     fill="none" stroke="#000" strokeWidth="2"
//                     strokeLinecap="round" strokeLinejoin="round"
//                   >
//                     <path d={meta.iconPath} />
//                   </svg>
//                 </div>

//                 {/* Text */}
//                 <h3
//                   className="text-white text-[15px] font-bold leading-snug mb-2"
//                   style={{ fontFamily: "'Syne', sans-serif" }}
//                 >
//                   {feature.title}
//                 </h3>
//                 <p
//                   className="text-white/40 text-[12px] leading-relaxed"
//                   style={{ fontFamily: "'Space Grotesk', sans-serif" }}
//                 >
//                   {feature.description}
//                 </p>


//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { useEffect, useRef, useState } from "react";
import { HOME_FEATURES } from "@/constants/navigation";

const featuresMeta = [
  { num: "01", pill: "0ms",           icon: <BoltIcon /> },
  { num: "02", pill: "256-bit",       icon: <ShieldIcon /> },
  { num: "03", pill: "Up to 5×",      icon: <ChartIcon /> },
  { num: "04", pill: "60+ countries", icon: <WorldIcon /> },
];

function BoltIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2L4.09 12.97H11L10 22l8.91-10.97H13z" />
    </svg>
  );
}
function ShieldIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l8 4v5c0 5-3.5 9.74-8 11-4.5-1.26-8-6-8-11V7l8-4z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}
function ChartIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v18M8 7l4-4 4 4M8 17l4 4 4-4" />
    </svg>
  );
}
function WorldIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2c-1.66 2.5-2.5 5-2.5 10s.84 7.5 2.5 10" />
      <path d="M12 2c1.66 2.5 2.5 5 2.5 10s-.84 7.5-2.5 10" />
      <path d="M2 12h20" />
    </svg>
  );
}

function useCountUp(target: number, trigger: boolean, duration = 1200) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [trigger, target, duration]);
  return value;
}

function FloatingOrb({ style }: { style: React.CSSProperties }) {
  return (
    <div
      className="absolute rounded-full bg-[#FF6700]/[0.06] pointer-events-none"
      style={style}
    />
  );
}

function Card({
  feature,
  meta,
  index,
  visible,
}: {
  feature: (typeof HOME_FEATURES)[0];
  meta: (typeof featuresMeta)[0];
  index: number;
  visible: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current!.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date. Now();
    setRipples((prev) => [...prev, { id, x, y }]);
    setTimeout(() => setRipples((prev) => prev.filter((r) => r.id !== id)), 700);
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      className="group relative bg-[#111] border border-white/[0.07] rounded-lg p-6 overflow-hidden cursor-default select-none"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0) scale(1)" : "translateY(36px) scale(0.97)",
        transition: `opacity 0.6s cubic-bezier(0.22,1,0.36,1) ${index * 0.1}s,
                     transform 0.6s cubic-bezier(0.22,1,0.36,1) ${index * 0.1}s,
                     border-color 0.3s, background-color 0.3s`,
        borderColor: hovered ? "rgba(255,103,0,0.4)" : undefined,
        backgroundColor: hovered ? "#141414" : undefined,
      }}
    >
      {/* Ripple clicks */}
      {ripples.map((r) => (
        <span
          key={r.id}
          className="absolute rounded-lg bg-[#FF6700]/20 pointer-events-none"
          style={{
            left: r.x,
            top: r.y,
            width: 8,
            height: 8,
            marginLeft: -4,
            marginTop: -4,
            animation: "ripple 0.7s cubic-bezier(0.22,1,0.36,1) forwards",
          }}
        />
      ))}

      {/* Top scanline sweep */}
      <span
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF6700] to-transparent pointer-events-none"
        style={{
          transform: hovered ? "translateX(100%)" : "translateX(-100%)",
          transition: hovered ? "transform 0.65s ease" : "none",
        }}
      />

      {/* Corner accent */}
      <span
        className="absolute top-0 right-0 w-16 h-16 pointer-events-none"
        style={{
          background: `radial-gradient(circle at top right, rgba(255,103,0,${hovered ? 0.12 : 0.04}), transparent 70%)`,
          transition: "background 0.4s",
        }}
      />

      {/* Number */}
      <p
        className="text-[11px] font-bold tracking-[0.14em] mb-5"
        style={{
          fontFamily: "'Syne', sans-serif",
          color: hovered ? "rgba(255,103,0,0.7)" : "rgba(255,103,0,0.3)",
          transition: "color 0.3s",
        }}
      >
        {meta.num}
      </p>

      {/* Icon box */}
      <div
        className="w-11 h-11 rounded-lg bg-[#FF6700] flex items-center justify-center mb-5"
        style={{
          transform: hovered ? "scale(1.12) rotate(-6deg)" : "scale(1) rotate(0deg)",
          transition: "transform 0.35s cubic-bezier(0.34,1.56,0.64,1)",
          boxShadow: hovered ? "0 0 20px rgba(255,103,0,0.35)" : "none",
        }}
      >
        {meta.icon}
      </div>

      {/* Title */}
      <h3
        className="text-[15px] font-bold leading-snug mb-2"
        style={{
          fontFamily: "'Syne', sans-serif",
          color: hovered ? "#fff" : "rgba(255,255,255,0.9)",
          transition: "color 0.3s",
        }}
      >
        {feature.title}
      </h3>

      {/* Description */}
      <p
        className="text-[12px] leading-relaxed"
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          color: hovered ? "rgba(255,255,255,0.55)" : "rgba(255,255,255,0.35)",
          transition: "color 0.3s",
        }}
      >
        {feature.description}
      </p>

      {/* Footer */}
      
    </div>
  );
}

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [titleVisible, setTitleVisible] = useState(false);

  const count1 = useCountUp(99, visible);
  const count2 = useCountUp(60, visible);
  const count3 = useCountUp(5, visible);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTitleVisible(true);
          setTimeout(() => setVisible(true), 200);
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      {/* Inject keyframes */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Space+Grotesk:wght@400;500;600&display=swap');
        @keyframes ripple {
          from { transform: scale(1); opacity: 1; }
          to   { transform: scale(18); opacity: 0; }
        }
        @keyframes floatY {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-14px); }
        }
        @keyframes ticker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      <section
        ref={sectionRef}
        className="relative bg-black px-4 sm:px-6 lg:px-8 py-20 md:py-32 border-y border-white/5 overflow-hidden"
      >
        {/* Floating background orbs */}
        <FloatingOrb style={{ width: 320, height: 320, top: -80, left: -60, animation: "floatY 7s ease-in-out infinite" }} />
        <FloatingOrb style={{ width: 200, height: 200, bottom: -40, right: 80, animation: "floatY 9s ease-in-out infinite 2s" }} />
        <FloatingOrb style={{ width: 140, height: 140, top: "40%", right: -30, animation: "floatY 6s ease-in-out infinite 1s" }} />

        <div className="max-w-[1100px] mx-auto relative z-10">

          {/* Header */}
          <div className="text-center mb-14">
            {/* Eyebrow */}
            <div
              className="inline-flex items-center gap-2 mb-5"
              style={{
                opacity: titleVisible ? 1 : 0,
                transform: titleVisible ? "translateY(0)" : "translateY(16px)",
                transition: "opacity 0.5s ease, transform 0.5s ease",
              }}
            >
              <span className="w-[6px] h-[6px] rounded-lg bg-[#FF6700] animate-pulse" />
              <span
                className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#FF6700]"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Why choose us
              </span>
            </div>

            {/* Title word-by-word reveal */}
            <h2
              className="text-[42px] md:text-[56px] font-extrabold leading-none tracking-tight text-white mb-4"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              {["Built", "to"].map((word, i) => (
                <span
                  key={i}
                  className="inline-block mr-3"
                  style={{
                    opacity: titleVisible ? 1 : 0,
                    transform: titleVisible ? "translateY(0)" : "translateY(24px)",
                    transition: `opacity 0.5s ease ${0.1 + i * 0.08}s, transform 0.5s ease ${0.1 + i * 0.08}s`,
                  }}
                >
                  {word}
                </span>
              ))}
              <span
                className="inline-block text-[#FF6700] mr-3"
                style={{
                  opacity: titleVisible ? 1 : 0,
                  transform: titleVisible ? "translateY(0)" : "translateY(24px)",
                  transition: "opacity 0.5s ease 0.26s, transform 0.5s ease 0.26s",
                }}
              >
                convert
              </span>
              <span
                className="inline-block"
                style={{
                  opacity: titleVisible ? 1 : 0,
                  transform: titleVisible ? "translateY(0)" : "translateY(24px)",
                  transition: "opacity 0.5s ease 0.34s, transform 0.5s ease 0.34s",
                }}
              >
                your Crypto.
              </span>
            </h2>

            <p
              className="text-white/40 text-[15px] max-w-sm mx-auto leading-relaxed"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                opacity: titleVisible ? 1 : 0,
                transform: titleVisible ? "translateY(0)" : "translateY(12px)",
                transition: "opacity 0.5s ease 0.42s, transform 0.5s ease 0.42s",
              }}
            >
              Cutting-edge features for a next-gen loyalty experience.
            </p>

          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
            {HOME_FEATURES.map((feature, i) => {
              const meta = featuresMeta[i] ?? { num: `0${i + 1}`, pill: "", icon: null };
              return (
                <Card
                  key={feature.id}
                  feature={feature}
                  meta={meta}
                  index={i}
                  visible={visible}
                />
              );
            })}
          </div>

          {/* Scrolling ticker */}
          <div
            className="mt-14 overflow-hidden"
            style={{
              opacity: visible ? 1 : 0,
              transition: "opacity 0.5s ease 0.7s",
              borderTop: "1px solid rgba(255,255,255,0.05)",
              borderBottom: "1px solid rgba(255,255,255,0.05)",
              paddingTop: 12,
              paddingBottom: 12,
            }}
          >
            <div
              className="flex whitespace- Nowrap"
              style={{ animation: "ticker 18s linear infinite" }}
            >
              {[...Array(2)].map((_, rep) => (
                <span key={rep} className="flex items-center gap-8 mr-8">
                  {["Instant Converts", "Secure vault", "Smart tiers", "Global network", "Zero fees", "24/7 support", "Real-time sync"].map((t) => (
                    <span key={t} className="flex items-center gap-3">
                      <span className="w-1 h-1 rounded-lg bg-[#FF6700] inline-block" />
                      <span
                        className="text-[12px] text-white/25 font-medium"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        {t}
                      </span>
                    </span>
                  ))}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}