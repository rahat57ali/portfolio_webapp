import React from 'react';
import { GithubIcon, LinkedinIcon, InstagramIcon, TwitterIcon } from './Icons'; 

const navLinks = [
    { id: 'about', title: 'About' },
    { id: 'experience', title: 'Experience' },
    { id: 'projects', title: 'Projects' },
];

const socialLinks = [
    { label: 'GitHub', url: 'https://github.com/bchiang7', icon: GithubIcon },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/bchiang7/', icon: LinkedinIcon },
    { label: 'Instagram', url: 'https://www.instagram.com/bchiang7', icon: InstagramIcon },
    { label: 'Twitter', url: 'https://twitter.com/bchiang7', icon: TwitterIcon },
]

function Header({ activeSection }) {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-2/5 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">Rahat Ali</h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">Junior Backend Developer</h2>
        <p className="mt-4 max-w-xs leading-normal">I build accessible, pixel-perfect digital experiences for the web.</p>
        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-16 w-max">
            {navLinks.map(link => (
              <li key={link.id}>
                <a className={`group flex items-center py-3 nav-link ${activeSection === link.id ? 'active' : ''}`} href={`#${link.id}`}>
                  <span className="nav-indicator mr-4 h-px w-[30px] bg-slate-600 transition-all group-hover:w-[60px] group-hover:bg-slate-200 motion-reduce:transition-none"></span>
                  <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200">{link.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
        {socialLinks.map(social => (
            <li key={social.label} className="mr-5 text-xs">
                <a href={social.url} target="_blank" rel="noreferrer noopener" aria-label={social.label} className="block text-slate-400 hover:text-slate-200 transition">
                    <social.icon />
                </a>
            </li>
        ))}
      </ul>
    </header>
  );
}

export default Header;