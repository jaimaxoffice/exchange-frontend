export default function HowItWorksSection() {
  const steps = [
    {
      step: 1,
      title: "Sign Up",
      description: "Create your account in just 2 minutes",
    },
    {
      step: 2,
      title: "Complete Tasks",
      description: "Participate and earn rewards effortlessly",
    },
    {
      step: 3,
      title: "Withdraw",
      description: "Cash out your earnings anytime you want",
    },
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-20 md:py-32">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-white/60 text-lg">
            Simple steps to start earning rewards
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((item) => (
            <div key={item.step} className="relative">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-[#FF5C00] text-white flex items-center justify-center font-bold text-xl mb-4 shadow-lg shadow-[#FF5C00]/30">
                  {item.step}
                </div>

                <h3 className="text-xl font-semibold mb-2 text-center">
                  {item.title}
                </h3>

                <p className="text-white/60 text-center text-sm">
                  {item.description}
                </p>

                {item.step < 3 && (
                  <div className="hidden md:block absolute top-8 -right-8 text-2xl text-[#FF5C00]/30">
                    →
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}