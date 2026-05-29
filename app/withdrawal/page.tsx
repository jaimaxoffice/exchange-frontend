export default function Withdrawal() {
  return (
    <div className="min-h-screen bg-black text-white px-4 py-30">
      {/* Selection & Scrollbar Styles */}
      <style>{`
        ::selection {
          background-color: #0a0a0a;
          color: #FF5C00;
        }
        html {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        html::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      <div className="max-w-[1100px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Withdraw <span className="text-[#FF5C00]">Funds</span>
          </h1>
          <p className="text-white/60 max-w-[500px] mx-auto">
            Securely withdraw your earnings to your preferred payment method
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Balance Card */}
          <div className="md:col-span-2 bg-white/5 border border-white/10 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Available Balance</h2>
              <span className="text-[#FF5C00] text-sm font-medium">● Available</span>
            </div>
            <div className="text-4xl font-bold mb-2">$12,450.00</div>
            <p className="text-white/50 text-sm">Last updated: Just now</p>
            
            {/* Quick Amount Buttons */}
            <div className="flex gap-3 mt-6">
              {['25%', '50%', '75%', 'MAX'].map((percent) => (
                <button
                  key={percent}
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm hover:bg-white/10 hover:border-[#FF5C00]/50 transition-all"
                >
                  {percent}
                </button>
              ))}
            </div>
          </div>

          {/* Stats Card */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-6">Withdrawal Stats</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-white/60">Total Withdrawn</span>
                <span className="font-medium">$45,200</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/60">Pending</span>
                <span className="font-medium">$2,500</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/60">This Month</span>
                <span className="font-medium text-[#FF5C00]">$8,750</span>
              </div>
            </div>
          </div>
        </div>

        {/* Withdrawal Form */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6">Request Withdrawal</h2>
          
          <div className="space-y-6">
            {/* Amount Input */}
            <div>
              <label className="block text-white/70 mb-2 text-sm">Withdrawal Funds</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50">$</span>
                <input
                  type="number"
                  placeholder="0.00"
                  className="w-full bg-black/50 border border-white/10 rounded-xl py-4 pl-8 pr-4 text-white placeholder-white/30 focus:outline-none focus:border-[#FF5C00] transition-colors"
                />
              </div>
            </div>

            {/* Payment Method */}
            <div>
              <label className="block text-white/70 mb-2 text-sm">Select Network</label>
              <div className="grid grid-cols-3 gap-3">
                {['BSC Smart Chain', 'Tron (TRX)', 'Solana'].map((method) => (
                  <button
                    key={method}
                    className="py-3 px-4 bg-black/50 border border-white/10 rounded-xl text-sm hover:border-[#FF5C00] hover:bg-[#FF5C00]/10 transition-all focus:border-[#FF5C00]"
                  >
                    {method}
                  </button>
                ))}
              </div>
            </div>

            {/* Account Details */}
            <div>
              <label className="block text-white/70 mb-2 text-sm">Wallet Address</label>
              <input
                type="text"
                placeholder="Enter account number or wallet address"
                className="w-full bg-black/50 border border-white/10 rounded-xl py-4 px-4 text-white placeholder-white/30 focus:outline-none focus:border-[#FF5C00] transition-colors"
              />
            </div>

            {/* Submit Button */}
            <button className="w-full bg-[#FF5C00] hover:bg-[#FF5C00]/90 text-black font-semibold py-4 rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98]">
              Request Withdrawal
            </button>

            {/* Info Text */}
            <p className="text-white/40 text-xs text-center">
              Processing time: 1-3 business days • Minimum withdrawal: $50
            </p>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="mt-8 bg-white/5 border border-white/10 rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Withdrawals</h2>
          <div className="space-y-3">
            {[
              { amount: '$2,500.00', date: 'Dec 15, 2024', status: 'Completed' },
              { amount: '$1,200.00', date: 'Dec 10, 2024', status: 'Completed' },
              { amount: '$3,000.00', date: 'Dec 5, 2024', status: 'Pending' },
            ].map((transaction, i) => (
              <div
                key={i}
                className="flex items-center justify-between py-3 border-b border-white/5 last:border-0"
              >
                <div>
                  <div className="font-medium">{transaction.amount}</div>
                  <div className="text-white/50 text-sm">{transaction.date}</div>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs ${
                    transaction.status === 'Completed'
                      ? 'bg-green-500/20 text-green-500'
                      : 'bg-[#FF5C00]/20 text-[#FF5C00]'
                  }`}
                >
                  {transaction.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}