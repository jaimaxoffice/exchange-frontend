"use client"
import { CreditCard, Plus, ChevronDown, Copy, Check, ArrowRight, AlertCircle, Zap } from "lucide-react";
import { useState } from "react";

export default function DepositsPage() {
  const [copied, setCopied] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState("card");

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-black text-white px-4 py-20">
      <div className="max-w-[1100px] mx-auto">
        
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-2">Deposit Funds</h1>
          <p className="text-white/40">Add funds to your account securely</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Left Sidebar - Deposit Methods */}
          <div className="lg:col-span-1">
            <div className="bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sticky top-20 space-y-4">
              <h3 className="text-lg font-bold mb-6">Deposit Methods</h3>

              {/* Credit/Debit Card */}
              <button
                onClick={() => setSelectedMethod("card")}
                className={`w-full p-4 rounded-2xl border transition-all text-left flex items-center gap-3 ${
                  selectedMethod === "card"
                    ? "bg-[#FF5C00]/10 border-[#FF5C00]"
                    : "bg-black/50 border-white/10 hover:border-white/20"
                }`}
              >
                <CreditCard className="w-5 h-5 text-[#FF5C00]" />
                <div>
                  <p className="font-semibold text-sm">Credit/Debit Card</p>
                  <p className="text-xs text-white/40">Instant deposit</p>
                </div>
              </button>

              {/* Bank Transfer */}
              <button
                onClick={() => setSelectedMethod("bank")}
                className={`w-full p-4 rounded-2xl border transition-all text-left flex items-center gap-3 ${
                  selectedMethod === "bank"
                    ? "bg-[#FF5C00]/10 border-[#FF5C00]"
                    : "bg-black/50 border-white/10 hover:border-white/20"
                }`}
              >
                <CreditCard className="w-5 h-5 text-white/40" />
                <div>
                  <p className="font-semibold text-sm">Bank Transfer</p>
                  <p className="text-xs text-white/40">1-3 business days</p>
                </div>
              </button>

              {/* Crypto */}
              <button
                onClick={() => setSelectedMethod("crypto")}
                className={`w-full p-4 rounded-2xl border transition-all text-left flex items-center gap-3 ${
                  selectedMethod === "crypto"
                    ? "bg-[#FF5C00]/10 border-[#FF5C00]"
                    : "bg-black/50 border-white/10 hover:border-white/20"
                }`}
              >
                <Zap className="w-5 h-5 text-white/40" />
                <div>
                  <p className="font-semibold text-sm">Cryptocurrency</p>
                  <p className="text-xs text-white/40">Instant deposit</p>
                </div>
              </button>

              {/* E-Wallet */}
              <button
                onClick={() => setSelectedMethod("ewallet")}
                className={`w-full p-4 rounded-2xl border transition-all text-left flex items-center gap-3 ${
                  selectedMethod === "ewallet"
                    ? "bg-[#FF5C00]/10 border-[#FF5C00]"
                    : "bg-black/50 border-white/10 hover:border-white/20"
                }`}
              >
                <Plus className="w-5 h-5 text-white/40" />
                <div>
                  <p className="font-semibold text-sm">E-Wallet</p>
                  <p className="text-xs text-white/40">PayPal, Apple Pay</p>
                </div>
              </button>
            </div>
          </div>

          {/* Right Section - Deposit Form */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Card Method */}
            {selectedMethod === "card" && (
              <div className="bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <CreditCard className="w-6 h-6 text-[#FF5C00]" />
                  Credit/Debit Card
                </h3>

                <div className="space-y-5">
                  {/* Deposit Amount */}
                  <div>
                    <label className="block text-sm text-white/60 mb-2 ml-1">Deposit Amount</label>
                    <div className="relative">
                      <input 
                        type="number" 
                        placeholder="0.00" 
                        className="w-full bg-black border border-white/10 rounded-2xl py-4 px-4 outline-none focus:border-[#FF5C00] transition-colors"
                      />
                      <span className="absolute right-4 top-4 text-white/40 font-medium">USD</span>
                    </div>
                  </div>

                  {/* Quick Amount Buttons */}
                  <div className="grid grid-cols-4 gap-3">
                    {["$50", "$100", "$250", "$500"].map((amount) => (
                      <button
                        key={amount}
                        className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl py-2 text-sm font-semibold transition-all"
                      >
                        {amount}
                      </button>
                    ))}
                  </div>

                  {/* Cardholder Name */}
                  <div>
                    <label className="block text-sm text-white/60 mb-2 ml-1">Cardholder Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe" 
                      className="w-full bg-black border border-white/10 rounded-2xl py-4 px-4 outline-none focus:border-[#FF5C00] transition-colors"
                    />
                  </div>

                  {/* Card Number */}
                  <div>
                    <label className="block text-sm text-white/60 mb-2 ml-1">Card Number</label>
                    <input 
                      type="text" 
                      placeholder="4532 1234 5678 9010" 
                      className="w-full bg-black border border-white/10 rounded-2xl py-4 px-4 outline-none focus:border-[#FF5C00] transition-colors"
                    />
                  </div>

                  {/* Expiry & CVV */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-white/60 mb-2 ml-1">Expiry Date</label>
                      <input 
                        type="text" 
                        placeholder="MM/YY" 
                        className="w-full bg-black border border-white/10 rounded-2xl py-4 px-4 outline-none focus:border-[#FF5C00] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-white/60 mb-2 ml-1">CVV</label>
                      <input 
                        type="text" 
                        placeholder="123" 
                        className="w-full bg-black border border-white/10 rounded-2xl py-4 px-4 outline-none focus:border-[#FF5C00] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Fee Info */}
                  <div className="bg-[#FF5C00]/5 border border-[#FF5C00]/10 rounded-2xl p-4 flex justify-between items-center">
                    <span className="text-sm text-white/60">Processing Fee (2.5%)</span>
                    <span className="font-bold text-white">$2.50</span>
                  </div>

                  {/* Submit Button */}
                  <button className="w-full bg-[#FF5C00] hover:bg-[#FF5C00]/90 text-black font-bold py-4 rounded-2xl transition-all flex items-center justify-center gap-2 mt-6">
                    Deposit  Now <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Security Notice */}
                <div className="mt-6 flex gap-3 p-4 bg-green-500/5 rounded-xl border border-green-500/10">
                  <AlertCircle className="w-5 h-5 text-green-400 shrink-0" />
                  <p className="text-xs text-white/60 leading-relaxed">
                    Your payment information is encrypted and secured. We use industry-standard SSL encryption.
                  </p>
                </div>
              </div>
            )}

            {/* Bank Transfer Method */}
            {selectedMethod === "bank" && (
              <div className="bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
                <h3 className="text-xl font-bold mb-6">Bank Transfer Details</h3>

                <div className="space-y-5">
                  {/* Deposit Amount */}
                  <div>
                    <label className="block text-sm text-white/60 mb-2 ml-1">Deposit Amount</label>
                    <div className="relative">
                      <input 
                        type="number" 
                        placeholder="0.00" 
                        className="w-full bg-black border border-white/10 rounded-2xl py-4 px-4 outline-none focus:border-[#FF5C00] transition-colors"
                      />
                      <span className="absolute right-4 top-4 text-white/40 font-medium">USD</span>
                    </div>
                  </div>

                  {/* Bank Details */}
                  <div className="bg-black/50 border border-white/10 rounded-2xl p-6 space-y-4">
                    <h4 className="font-bold text-white mb-4">Transfer These Details:</h4>

                    <div>
                      <p className="text-xs text-white/40 mb-1">Bank Name</p>
                      <div className="flex items-center justify-between bg-black p-3 rounded-xl border border-white/5">
                        <p className="font-semibold">Chase Bank</p>
                        <button 
                          onClick={() => handleCopy("Chase Bank")}
                          className="text-[#FF5C00] hover:text-[#FF5C00]/80"
                        >
                          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>

                    <div>
                      <p className="text-xs text-white/40 mb-1">Account Holder</p>
                      <div className="flex items-center justify-between bg-black p-3 rounded-xl border border-white/5">
                        <p className="font-semibold">Your Platform Inc.</p>
                        <button 
                          onClick={() => handleCopy("Your Platform Inc.")}
                          className="text-[#FF5C00] hover:text-[#FF5C00]/80"
                        >
                          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>

                    <div>
                      <p className="text-xs text-white/40 mb-1">Account Number</p>
                      <div className="flex items-center justify-between bg-black p-3 rounded-xl border border-white/5">
                        <p className="font-semibold font-mono">123456789</p>
                        <button 
                          onClick={() => handleCopy("123456789")}
                          className="text-[#FF5C00] hover:text-[#FF5C00]/80"
                        >
                          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>

                    <div>
                      <p className="text-xs text-white/40 mb-1">Routing Number</p>
                      <div className="flex items-center justify-between bg-black p-3 rounded-xl border border-white/5">
                        <p className="font-semibold font-mono">987654321</p>
                        <button 
                          onClick={() => handleCopy("987654321")}
                          className="text-[#FF5C00] hover:text-[#FF5C00]/80"
                        >
                          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>

                    <div>
                      <p className="text-xs text-white/40 mb-1">Reference Code</p>
                      <div className="flex items-center justify-between bg-black p-3 rounded-xl border border-white/5">
                        <p className="font-semibold font-mono text-[#FF5C00]">USER123456</p>
                        <button 
                          onClick={() => handleCopy("USER123456")}
                          className="text-[#FF5C00] hover:text-[#FF5C00]/80"
                        >
                          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Processing Time */}
                  <div className="bg-blue-500/5 border border-blue-500/10 rounded-2xl p-4 flex gap-3">
                    <AlertCircle className="w-5 h-5 text-blue-400 shrink-0" />
                    <div>
                      <p className="font-semibold text-sm text-white">Processing Time: 1-3 Business Days</p>
                      <p className="text-xs text-white/60 mt-1">Please include your reference code to identify your deposit.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Crypto Method */}
            {selectedMethod === "crypto" && (
              <div className="bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Zap className="w-6 h-6 text-[#FF5C00]" />
                  Cryptocurrency Deposit
                </h3>

                <div className="space-y-5">
                  {/* Select Crypto */}
                  <div>
                    <label className="block text-sm text-white/60 mb-2 ml-1">Select Cryptocurrency</label>
                    <select className="w-full bg-black border border-white/10 rounded-2xl py-4 px-4 outline-none focus:border-[#FF5C00] transition-colors">
                      <option>Bitcoin (BTC)</option>
                      <option>Ethereum (ETH)</option>
                      <option>USDT (Tether)</option>
                      <option>USDC (USD Coin)</option>
                    </select>
                  </div>

                  {/* Wallet Address */}
                  <div>
                    <p className="text-xs text-white/40 mb-3">Send To This Address:</p>
                    <div className="bg-black/50 border border-white/10 rounded-2xl p-6 text-center">
                      <div className="bg-white p-4 rounded-xl mb-4 inline-block">
                        <div className="w-32 h-32 bg-gray-200"></div>
                      </div>
                      <div className="flex items-center justify-between bg-black p-3 rounded-xl border border-white/5 mt-4">
                        <p className="font-mono text-sm break-all">1A1z7agoat2QATU8hMuc01HvUuc3tqBRi</p>
                        <button 
                          onClick={() => handleCopy("1A1z7agoat2QATU8hMuc01HvUuc3tqBRi")}
                          className="text-[#FF5C00] hover:text-[#FF5C00]/80 ml-2"
                        >
                          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Minimum Deposit */}
                  <div className="bg-yellow-500/5 border border-yellow-500/10 rounded-2xl p-4">
                    <p className="text-sm"><span className="font-semibold">Minimum Deposit:</span> 0.001 BTC</p>
                    <p className="text-xs text-white/60 mt-2">Your deposit will be credited after 3 network confirmations.</p>
                  </div>

                  <button className="w-full bg-[#FF5C00] hover:bg-[#FF5C00]/90 text-black font-bold py-4 rounded-2xl transition-all">
                    I've Sent the Funds
                  </button>
                </div>
              </div>
            )}

            {/* E-Wallet Method */}
            {selectedMethod === "ewallet" && (
              <div className="bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
                <h3 className="text-xl font-bold mb-6">E-Wallet Deposit</h3>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-white/60 mb-2 ml-1">Deposit Amount</label>
                    <div className="relative">
                      <input 
                        type="number" 
                        placeholder="0.00" 
                        className="w-full bg-black border border-white/10 rounded-2xl py-4 px-4 outline-none focus:border-[#FF5C00] transition-colors"
                      />
                      <span className="absolute right-4 top-4 text-white/40 font-medium">USD</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <button className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl py-4 font-bold transition-all">
                      PayPal
                    </button>
                    <button className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl py-4 font-bold transition-all">
                      Apple Pay
                    </button>
                  </div>

                  <button className="w-full bg-[#FF5C00] hover:bg-[#FF5C00]/90 text-black font-bold py-4 rounded-2xl transition-all flex items-center justify-center gap-2">
                    Continue <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Recent Deposits */}
            <div className="bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
              <h3 className="text-lg font-bold mb-6">Recent Deposits</h3>

              <div className="space-y-3">
                {[
                  { date: "Dec 15, 2024", amount: "$500.00", method: "Credit Card", status: "Completed" },
                  { date: "Dec 10, 2024", amount: "$1,000.00", method: "Bank Transfer", status: "Completed" },
                  { date: "Dec 5, 2024", amount: "$250.00", method: "Cryptocurrency", status: "Completed" },
                ].map((deposit, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-black/50 rounded-xl border border-white/5">
                    <div>
                      <p className="font-semibold">{deposit.amount}</p>
                      <p className="text-xs text-white/40 mt-1">{deposit.date} • {deposit.method}</p>
                    </div>
                    <span className="text-green-400 text-sm font-semibold">{deposit.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}