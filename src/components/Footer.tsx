import { useState } from 'react';
import { Linkedin, Facebook, Mail } from 'lucide-react';
import { FaXTwitter } from 'react-icons/fa6'; // Official X icon

const EMAIL = "yasserahmed2428@gmail.com";

export function Footer() {
  const [copied, setCopied] = useState(false);
  const year = new Date().getFullYear();

  const handleEmailClick = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const SOCIAL_LINKS = [
    { href: 'https://linkedin.com/in/yasser4hmed', icon: Linkedin, label: 'LinkedIn' },
    { 
      href: `mailto:${EMAIL}?subject=Contact from Portfolio`, 
      icon: Mail, 
      label: 'Email',
      isEmail: true 
    },
    { href: 'https://x.com/YasserAhmed864', icon: FaXTwitter, label: 'X' },
    { href: 'https://www.facebook.com/yasser4A', icon: Facebook, label: 'Facebook' },
  ];

  return (
    <footer 
      className="relative rounded-t-[2.5rem] sm:rounded-t-[3rem] border-t border-white/10"
      style={{
        /* Tint Update: Changed from 0.45 to 0.55 alpha and used a deeper blue 
           to make the glass feel more "solid" and tinted. 
        */
        background: 'rgba(15, 15, 80, 0.55)', 
        backdropFilter: 'blur(40px) saturate(180%) brightness(100%)',
        WebkitBackdropFilter: 'blur(40px) saturate(180%) brightness(100%)',
        boxShadow: `
          0 8px 32px rgba(0, 0, 255, 0.12),
          0 2px 8px rgba(0, 0, 0, 0.3),
          inset 0 1px 0 rgba(255, 255, 255, 0.12)
        `,
      }}
    >
      {/* Shimmer glint reflection */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px rounded-full"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 30%, rgba(180,180,255,0.4) 50%, rgba(255,255,255,0.2) 70%, transparent 100%)',
        }}
      />

      <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-6 px-4 pb-5 pt-9 sm:flex-row sm:px-6 lg:px-8">
        <div className="font-heading text-lg text-heading text-adaptive">Yasser Ahmed</div>
        
        <nav className="flex gap-8 items-center relative">
          {SOCIAL_LINKS.map((social) => {
            const Icon = social.icon;
            return (
              <div key={social.label} className="relative group">
                <a
                  href={social.href}
                  target={social.isEmail ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  onClick={social.isEmail ? handleEmailClick : undefined}
                  className="text-body/90 transition-all hover:text-primary hover:scale-110"
                  aria-label={social.label}
                >
                  <Icon size={20} strokeWidth={1.5} />
                </a>
                
                {social.isEmail && copied && (
                  <span className="absolute -top-10 left-1/2 -translate-x-1/2 rounded bg-primary px-2 py-1 text-[10px] text-background font-bold shadow-lg">
                    Copied!
                  </span>
                )}
              </div>
            );
          })}
        </nav>
      </div>

      <div className="mx-auto mt-2 max-w-content border-t border-white/10 px-4 pb-7 pt-5 text-center text-sm text-white/60 sm:px-6 lg:px-8">
        © {year} Yasser. All rights reserved.
      </div>
    </footer>
  );
}