"use client"
import { User, Mail, Phone, MapPin, Shield, LogOut, Edit2, Copy, Check } from "lucide-react";
import { useState } from "react";

export default function MyAccountPage() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("user@example.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-black text-white px-4 py-20">
      <div className="max-w-[1100px] mx-auto">
        
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-2">My Account</h1>
          <p className="text-white/40">Manage your profile and account settings</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Left Sidebar - Profile Card */}
          <div className="lg:col-span-1">
            <div className="bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sticky top-20">
              
              {/* Profile Avatar */}
              <div className="flex justify-center mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-[#FF5C00] to-[#FF5C00]/50 rounded-full flex items-center justify-center">
                  <User className="w-12 h-12 text-black" />
                </div>
              </div>

              {/* Profile Info */}
              <div className="text-center mb-6">
                <h2 className="text-xl font-bold mb-1">John Doe</h2>
                <p className="text-white/40 text-sm">Premium Member</p>
              </div>

              {/* Status Badge */}
              <div className="flex items-center justify-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full py-2 px-4 mb-6">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-xs text-green-400">Account Active</span>
              </div>

              {/* Quick Action Buttons */}
              <div className="space-y-3">
                <button className="w-full bg-[#FF5C00] hover:bg-[#FF5C00]/90 text-black font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2">
                  <Edit2 className="w-4 h-4" /> Edit Profile
                </button>
                <button className="w-full bg-white/5 hover:bg-white/10 border border-white/10 font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2">
                  <LogOut className="w-4 h-4" /> Sign Out
                </button>
              </div>
            </div>
          </div>

          {/* Right Section - Account Details */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Personal Information */}
            <div className="bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-6">
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <User className="w-5 h-5 text-[#FF5C00]" />
                Personal Information
              </h3>

              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-white/50 uppercase tracking-wider">First Name</label>
                    <p className="text-white font-semibold mt-2">John</p>
                  </div>
                  <div>
                    <label className="text-xs text-white/50 uppercase tracking-wider">Last Name</label>
                    <p className="text-white font-semibold mt-2">Doe</p>
                  </div>
                </div>

                <div>
                  <label className="text-xs text-white/50 uppercase tracking-wider">Date of Birth</label>
                  <p className="text-white font-semibold mt-2">January 15, 1990</p>
                </div>

                <div>
                  <label className="text-xs text-white/50 uppercase tracking-wider">Nationality</label>
                  <p className="text-white font-semibold mt-2">United States</p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-6">
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <Mail className="w-5 h-5 text-[#FF5C00]" />
                Contact Information
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="text-xs text-white/50 uppercase tracking-wider">Email Address</label>
                  <div className="flex items-center justify-between mt-2 bg-black/50 p-4 rounded-xl border border-white/5">
                    <p className="text-white font-semibold">john.doe@example.com</p>
                    <button 
                      onClick={handleCopy}
                      className="text-[#FF5C00] hover:text-[#FF5C00]/80 transition"
                    >
                      {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="text-xs text-white/50 uppercase tracking-wider">Phone Number</label>
                  <p className="text-white font-semibold mt-2">+1 (555) 123-4567</p>
                </div>

                <div>
                  <label className="text-xs text-white/50 uppercase tracking-wider">Address</label>
                  <p className="text-white font-semibold mt-2">123 Main Street, New York, NY 10001</p>
                </div>
              </div>
            </div>

            {/* Security Settings */}
            <div className="bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-6">
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#FF5C00]" />
                Security
              </h3>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-black/50 rounded-xl border border-white/5">
                  <div>
                    <p className="font-semibold">Two-Factor Authentication</p>
                    <p className="text-sm text-white/40 mt-1">Protect your account with 2FA</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-green-400 text-sm font-semibold">Enabled</span>
                  </div>
                </div>

                <button className="w-full bg-white/5 hover:bg-white/10 border border-white/10 font-bold py-3 rounded-xl transition-all">
                  Change Password
                </button>

                <button className="w-full bg-white/5 hover:bg-white/10 border border-white/10 font-bold py-3 rounded-xl transition-all">
                  View Login Activity
                </button>
              </div>
            </div>

            {/* Account Statistics */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-6 text-center">
                <p className="text-white/50 text-sm mb-2">Account Created</p>
                <p className="text-2xl font-bold">Jan 15, 2022</p>
              </div>
              <div className="bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-6 text-center">
                <p className="text-white/50 text-sm mb-2">Last Login</p>
                <p className="text-2xl font-bold">Today</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}