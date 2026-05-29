// export default function HowItWorksSection() {
//   const steps = [
//     {
//       step: 1,
//       title: "Sign Up",
//       description: "Create your account in just 2 minutes",
//     },
//     {
//       step: 2,
//       title: "Complete Tasks",
//       description: "Participate and earn rewards effortlessly",
//     },
//     {
//       step: 3,
//       title: "Withdraw",
//       description: "Cash out your earnings anytime you want",
//     },
//   ];

//   return (
//     <section className="px-4 sm:px-6 lg:px-8 py-20 md:py-32">
//       <div className="max-w-[1100px] mx-auto">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">
//             How It Works
//           </h2>
//           <p className="text-white/60 text-lg">
//             Simple steps to start earning rewards
//           </p>
//         </div>

//         <div className="grid md:grid-cols-3 gap-8">
//           {steps.map((item) => (
//             <div key={item.step} className="relative">
//               <div className="flex flex-col items-center">
//                 <div className="w-16 h-16 rounded-full bg-[#FF5C00] text-white flex items-center justify-center font-bold text-xl mb-4 shadow-lg shadow-[#FF5C00]/30">
//                   {item.step}
//                 </div>

//                 <h3 className="text-xl font-semibold mb-2 text-center">
//                   {item.title}
//                 </h3>

//                 <p className="text-white/60 text-center text-sm">
//                   {item.description}
//                 </p>

//                 {item.step < 3 && (
//                   <div className="hidden md:block absolute top-8 -right-8 text-2xl text-[#FF5C00]/30">
//                     →
//                   </div>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { useState } from "react";

const steps = [
  {
    step: "01",
    title: "Sign Up",
    description:
      "Create your account in just 2 minutes and unlock the full rewards platform.",
  },
  {
    step: "02",
    title: "Complete Tasks",
    description:
      "Participate in activities and earn rewards effortlessly at your own pace.",
  },
  {
    step: "03",
    title: "Withdraw",
    description:
      "Cash out your earnings anytime you want, directly to your account.",
  },
];

export default function HowItWorksSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-20 md:py-32 overflow-hidden">
      <div className="max-w-[1100px] mx-auto">

        {/* Header Row */}
        <div className="flex items-start justify-between flex-wrap gap-4 mb-12">
          <div>
            <p
              className="text-xs tracking-[0.18em] uppercase mb-2 font-mono"
              style={{ color: "#FF5C00" }}
            >
              The process
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight">
              How it works
            </h2>
            <p className="text-white/50 text-sm mt-2">
              Simple steps to start earning rewards
            </p>
          </div>

          {/* Live badge */}
          
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 relative">
          {steps.map((item, index) => (
            <div
              key={item.step}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              className="relative p-6 pb-8 cursor-default group"
              style={{
                borderLeft:
                  index === 0
                    ? "none"
                    : "0.5px solid rgba(255,255,255,0.08)",
              }}
            >
              {/* Large background number */}
              <span
                className="block text-[80px] md:text-[96px] font-extrabold leading-none tracking-tighter mb-4 select-none transition-colors duration-300"
                style={{
                  fontFamily: "'Syne', sans-serif",
                  color:
                    hovered === index
                      ? "#FF5C00"
                      : "rgb(128, 127, 128)",
                }}
              >
                {item.step}
              </span>

              {/* Dot */}
              <div
                className="w-2 h-2 rounded-full mb-4 transition-transform duration-300"
                style={{
                  background: "#FF5C00",
                  transform:
                    hovered === index ? "scale(1.6)" : "scale(1)",
                }}
              />

              {/* Title */}
              <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-white/50 text-sm leading-relaxed">
                {item.description}
              </p>

              {/* Animated bottom bar */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/5">
                <div
                  className="h-full transition-all duration-500 ease-out"
                  style={{
                    background: "#FF5C00",
                    width: hovered === index ? "100%" : "0%",
                  }}
                />
              </div>

              {/* Arrow connector (not on last) */}
              {index < steps.length - 1 && (
                <div
                  className="hidden md:flex absolute top-1/2 -right-3.5 -translate-y-1/2 z-10 w-7 h-7 rounded-full items-center justify-center"
                  style={{
                    background: "#0a0a0a",
                    border: "0.5px solid rgba(255,255,255,0.1)",
                    color: "#FF5C00",
                    fontSize: 11,
                  }}
                >
                  →
                </div>
              )}
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}