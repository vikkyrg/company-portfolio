import React from 'react';
import logoImg from '../assets/logo.png';

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-slate-200/80 py-8">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Brand identity */}
        <div className="flex items-center gap-3">
          <img
            src={logoImg}
            alt="Innomatrics Technologies Logo"
            className="w-7 h-7 object-contain rounded-lg"
          />
          <div className="flex items-baseline gap-1.5">
            <span className="font-bold text-slate-900 text-sm">Innomatrics Technologies</span>
            <span className="text-xs text-slate-400">· Portfolio Showcase</span>
          </div>
        </div>

        {/* Copyright notice */}
        <div className="text-xs text-slate-500 text-center sm:text-right">
          © {new Date().getFullYear()} Innomatrics Technologies. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
