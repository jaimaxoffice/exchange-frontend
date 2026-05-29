"use client";

import Link from "next/link";
import { useState } from "react";

const FOOTER_LINKS = {
  Product: [
    { label: "Withdrawal", href: "/withdrawal" },
    { label: "Deposits", href: "/deposits" },
    { label: "MyAccount", href: "/myaccount" },
    { label: "Register", href: "/register" },
  ],
  Company: [
    // { label: "Withdrawal", href: "/Withdrawal" },
    // { label: "Deposits", href: "/deposits" },
    // { label: "MyAccount", href: "/myaccount" },
    // { label: "Register", href: "/register" },
  ],
  Support: [
    // { label: "Help Center", href: "/help" },
    // { label: "Contact Us", href: "/contact" },
    // { label: "Status", href: "/status" },
    // { label: "Community", href: "/community" },
  ],
  Legal: [
    // { label: "Privacy Policy", href: "/privacy" },
    // { label: "Terms of Use", href: "/terms" },
    // { label: "Cookie Policy", href: "/cookies" },
    // { label: "Licenses", href: "/licenses" },
  ],
};

const SOCIALS = [
  {
    label: "Twitter",
    href: "https://twitter.com",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.73-8.835L1.254 2.25H8.08l4.261 5.632 5.902-5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Discord",
    href: "https://discord.com",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.369-.444.85-.608 1.23a18.566 18.566 0 0 0-5.487 0 12.36 12.36 0 0 0-.617-1.23A.077.077 0 0 0 8.562 3c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026c.462-.62.874-1.275 1.226-1.963.021-.04.001-.088-.041-.104a13.201 13.201 0 0 1-1.872-.878.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028 19.963 19.963 0 0 0 6.002-2.981.076.076 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028zM8.02 15.278c-1.182 0-2.157-1.069-2.157-2.38 0-1.312.956-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.956 2.38-2.157 2.38zm7.975 0c-1.183 0-2.157-1.069-2.157-2.38 0-1.312.955-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.946 2.38-2.157 2.38z" />
      </svg>
    ),
  },
];

function FooterLink({ href, label }: { href: string; label: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <li>
      <Link
        href={href}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="flex items-center gap-1.5 text-[13px] transition-colors duration-200"
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          color: hovered ? "#FF6700" : "#fff",
        }}
      >
        <span
          style={{
            display: "inline-block",
            width: 4,
            height: 4,
            borderRadius: "50%",
            background: "#FF6700",
            opacity: hovered ? 1 : 0,
            transform: hovered ? "scale(1)" : "scale(0)",
            transition: "opacity 0.2s, transform 0.2s",
            flexShrink: 0,
          }}
        />
        {label}
      </Link>
    </li>
  );
}

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail("");
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Space+Grotesk:wght@400;500;600&display=swap');
        @keyframes ticker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <footer className="bg-black border-t border-white/[0.07] overflow-hidden">


        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">

          {/* Top row — brand + newsletter */}
          <div className="flex flex-col lg:flex-row gap-12 mb-14">

            {/* Brand */}
            <div className="lg:w-72 shrink-0">
              <div className="flex items-center gap-2 mb-4">
                <div
                  className="w-8 h-8 rounded-lg bg-[#FF6700] flex items-center justify-center"
                  style={{ boxShadow: "0 0 16px rgba(255,103,0,0.3)" }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M13 2L4.09 12.97H11L10 22l8.91-10.97H13z" />
                  </svg>
                </div>
                <span
                  className="text-white font-bold text-[17px]"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  Reward<span className="text-[#FF6700]">System</span>
                </span>
              </div>
              <p
                className="text-[13px] leading-relaxed mb-6"
                style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#fff" }}
              >
                Next-gen loyalty rewards built for speed, security, and scale. Earn more. Redeem anywhere.
              </p>

              {/* Socials */}
              <div className="flex gap-3">
                {SOCIALS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-8 h-8 rounded-lg border border-white/[0.08] flex items-center justify-center text-white
                               hover:text-[#FF6700] hover:border-[#FF6700]/40 hover:bg-[#FF6700]/08 transition-all duration-200"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Links grid */}
            <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-8">
              {Object.entries(FOOTER_LINKS).map(([group, links]) => (
                <div key={group}>
                  <p
                    className="text-[11px] font-semibold tracking-[0.12em] uppercase mb-4 "
                    style={{ fontFamily: "'Space Grotesk', sans-serif", color: "rgba(255,103,0,0.7)" }}
                  >
                    {group}
                  </p>
                  <ul className="space-y-3 ">
                    {links.map((link) => (
                      <FooterLink key={link.href} href={link.href} label={link.label} />
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>




        </div>
      </footer>
    </>
  );
}