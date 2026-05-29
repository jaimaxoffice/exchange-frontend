import Link from "next/link";

export default function CTASection() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="max-w-[1100px] mx-auto">
        <div className="relative bg-gradient-to-r from-[#FF5C00]/20 to-black border border-[#FF5C00]/30 rounded-3xl p-12 md:p-16 text-center overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FF5C00]/5 to-transparent -z-10"></div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Earning?
          </h2>

          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of users already earning Converts. No hidden fees, no
            complications, just pure earnings.
          </p>

          <Link
            href="/register"
            className="inline-flex items-center justify-center px-10 py-4 bg-[#FF5C00] text-white font-semibold text-lg rounded-full hover:bg-[#FF5C00]/90 transition shadow-lg shadow-[#FF5C00]/40"
          >
            Create Account  Now
          </Link>
        </div>
      </div>
    </section>
  );
}