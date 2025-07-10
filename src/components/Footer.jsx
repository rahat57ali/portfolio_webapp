import React from 'react';

function Footer() {
  return (
    <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
        <p>Loosely designed in <a href="https://www.figma.com/" className="font-medium text-slate-400 hover:text-slate-300" target="_blank" rel="noreferrer">Figma</a> and coded in <a href="https://code.visualstudio.com/" className="font-medium text-slate-400 hover:text-slate-300" target="_blank" rel="noreferrer">Visual Studio Code</a> by yours truly. Built with <a href="https://vitejs.dev/" className="font-medium text-slate-400 hover:text-slate-300" target="_blank" rel="noreferrer">Vite</a> and <a href="https://tailwindcss.com/" className="font-medium text-slate-400 hover:text-slate-300" target="_blank" rel="noreferrer">Tailwind CSS</a>, deployed with <a href="https://vercel.com/" className="font-medium text-slate-400 hover:text-slate-300" target="_blank" rel="noreferrer">Vercel</a>.</p>
    </footer>
  );
}

export default Footer;