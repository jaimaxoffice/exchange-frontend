import { HOME_FEATURES } from "@/constants/navigation";

export default function FeaturesSection() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-20 md:py-32 bg-black/50 border-y border-[#FF5C00]/10">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose Us?
          </h2>
          <p className="text-white/60 text-lg">
            Experience the best reward system with cutting-edge features
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {HOME_FEATURES.map((feature) => (
            <div
              key={feature.id}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#FF5C00]/50 hover:bg-[#FF5C00]/5 transition group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                {feature.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}