import React, { useState } from 'react';
import { X as XIcon, Check } from 'lucide-react';

// --- Brand Icons (Inline SVGs) ---
const GoogleIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-5 h-5 text-[#1877F2]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const XSocialIcon = () => (
  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function AuthPage() {
  const [mode, setMode] = useState('signup'); // 'login' or 'signup'

  return (
    <div className="min-h-screen bg-[#14181c] flex items-center justify-center p-4 font-sans selection:bg-[#00e054] selection:text-black">
      
      {/* Auth Card Container */}
      <div className="w-full max-w-md bg-[#14181c] rounded-lg shadow-2xl border border-[#2c3440] overflow-hidden flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-[#2c3440] bg-[#1a1f26]">
          <h2 className="text-white font-bold tracking-widest text-sm uppercase">
            {mode === 'signup' ? 'JOIN GRADEBOXD' : 'SIGN IN'}
          </h2>
          {/* Replaced 'X' with a simplified logo or home link since it's a standalone page */}
          <div className="text-[#00e054] font-bold text-sm tracking-tighter flex items-center gap-1">
             <div className="w-2 h-2 bg-[#00e054] rounded-full"></div>
             LOG
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            
            {/* Email Field */}
            <div>
              <label className="block text-[#99aabb] text-xs font-bold uppercase mb-1.5">Email Address</label>
              <div className="relative">
                <input 
                  type="email" 
                  className="w-full bg-[#2c3440] border border-[#14181c] text-white p-2.5 rounded focus:outline-none focus:border-[#00e054] focus:ring-1 focus:ring-[#00e054] transition-all placeholder-[#445566]"
                  placeholder="student@university.edu"
                />
              </div>
            </div>

            {/* Username - Signup Only */}
            {mode === 'signup' && (
              <div className="animate-in fade-in slide-in-from-top-2 duration-200">
                <label className="block text-[#99aabb] text-xs font-bold uppercase mb-1.5">Username</label>
                <div className="relative">
                  <input 
                    type="text" 
                    className="w-full bg-[#2c3440] border border-[#14181c] text-white p-2.5 rounded focus:outline-none focus:border-[#00e054] focus:ring-1 focus:ring-[#00e054] transition-all placeholder-[#445566]"
                    placeholder="campus_king"
                  />
                </div>
              </div>
            )}

            {/* Password */}
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="block text-[#99aabb] text-xs font-bold uppercase">Password</label>
                {mode === 'login' && <a href="#" className="text-[#667788] text-xs hover:text-[#00e054] transition-colors">Forgot password?</a>}
              </div>
              <div className="relative">
                <input 
                  type="password" 
                  className="w-full bg-[#2c3440] border border-[#14181c] text-white p-2.5 rounded focus:outline-none focus:border-[#00e054] focus:ring-1 focus:ring-[#00e054] transition-all"
                />
              </div>
            </div>

            {/* Checkboxes - Signup Only */}
            {mode === 'signup' && (
              <div className="space-y-3 pt-2 animate-in fade-in slide-in-from-top-2 duration-200">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input type="checkbox" className="mt-1 w-4 h-4 rounded border-[#445566] bg-[#2c3440] text-[#00e054] focus:ring-[#00e054] focus:ring-offset-[#14181c] transition-colors" />
                  <span className="text-[#99aabb] text-xs leading-normal group-hover:text-white transition-colors">
                    I'm at least 16 years old and accept the <a href="#" className="text-white hover:underline">Terms of Use</a>.
                  </span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input type="checkbox" className="mt-1 w-4 h-4 rounded border-[#445566] bg-[#2c3440] text-[#00e054] focus:ring-[#00e054] focus:ring-offset-[#14181c] transition-colors" />
                  <span className="text-[#99aabb] text-xs leading-normal group-hover:text-white transition-colors">
                    I accept the <a href="#" className="text-white hover:underline">Privacy Policy</a> and consent to the processing of my personal information.
                  </span>
                </label>
              </div>
            )}

            {/* Captcha Placeholder - Signup Only */}
            {mode === 'signup' && (
              <div className="bg-[#2c3440] border border-[#445566] rounded p-3 flex items-center justify-between mt-4 animate-in fade-in slide-in-from-top-2 duration-200">
                 <div className="flex items-center gap-3">
                   <div className="w-6 h-6 border-2 border-[#667788] rounded flex items-center justify-center bg-white cursor-pointer hover:border-[#00e054]"></div>
                   <span className="text-white text-sm">I am human</span>
                 </div>
                 <div className="flex flex-col items-end">
                    <div className="w-6 h-6 text-[#99aabb] opacity-50">
                      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16z"/></svg>
                    </div>
                    <span className="text-[10px] text-[#667788]">Privacy - Terms</span>
                 </div>
              </div>
            )}

            {/* Submit Button */}
            <button className="w-full bg-[#00e054] hover:bg-[#00c048] text-[#14181c] font-bold text-sm uppercase tracking-wider py-3 rounded transition-all mt-4 shadow-lg shadow-[#00e054]/10 hover:shadow-[#00e054]/20 transform active:scale-[0.99]">
              {mode === 'signup' ? 'Sign Up' : 'Sign In'}
            </button>

            {/* Social Divider */}
            <div className="relative py-2">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#2c3440]"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-[#14181c] px-2 text-[#667788]">Or connect with</span>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="grid grid-cols-3 gap-3">
               <button className="flex items-center justify-center p-2.5 rounded bg-[#2c3440] hover:bg-[#384250] border border-[#2c3440] hover:border-[#445566] transition-all group">
                 <div className="group-hover:scale-110 transition-transform"><GoogleIcon /></div>
               </button>
               <button className="flex items-center justify-center p-2.5 rounded bg-[#2c3440] hover:bg-[#384250] border border-[#2c3440] hover:border-[#445566] transition-all group">
                 <div className="group-hover:scale-110 transition-transform"><FacebookIcon /></div>
               </button>
               <button className="flex items-center justify-center p-2.5 rounded bg-[#2c3440] hover:bg-[#384250] border border-[#2c3440] hover:border-[#445566] transition-all group">
                 <div className="group-hover:scale-110 transition-transform"><XSocialIcon /></div>
               </button>
            </div>

          </form>
        </div>

        {/* Footer / Toggle Switch */}
        <div className="p-4 bg-[#1a1f26] border-t border-[#2c3440] text-center">
          <p className="text-[#99aabb] text-sm">
            {mode === 'signup' ? 'Already have an account?' : "Don't have an account?"}{' '}
            <button 
              onClick={() => setMode(mode === 'signup' ? 'login' : 'signup')}
              className="text-white font-bold hover:text-[#00e054] transition-colors ml-1 uppercase text-xs tracking-wider"
            >
              {mode === 'signup' ? 'Sign in' : 'Join now'}
            </button>
          </p>
        </div>

      </div>
    </div>
  );
}
