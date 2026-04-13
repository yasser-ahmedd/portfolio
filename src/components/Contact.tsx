import { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Linkedin, Github, Send } from 'lucide-react';



const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID || 'xnjowabe';

export function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const [emailCopied, setEmailCopied] = useState(false);

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();                                        /* stop mailto opening immediately */
    navigator.clipboard.writeText('yasserahmed2428@gmail.com');
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
                                             /* open mailto after copy */
      window.location.href = 'mailto:yasserahmed2428@gmail.com';
    
  };


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    const form = e.currentTarget;
    const formData = new FormData(form);
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });
      setStatus(res.ok ? 'success' : 'error');
      if (res.ok){
        form.reset();
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" ref={ref} className="relative overflow-hidden bg-transparent py-section">
      <div className="pointer-events-none absolute -left-20 top-1/4 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="relative mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="mb-4 font-heading font-heading text-3xl text-adaptive sm:text-4xl">
          Let's Connect 👋
          </h2>
          <p className="mb-10 text-lg text-adaptive">
            Hiring? Early stage startup? Random idea at 2am? I'm in.
          </p>

          <div className="mb-10 flex flex-wrap justify-center gap-4 sm:gap-6">
          <div className="relative group">
              <a
                href="mailto:yasserahmed2428@gmail.com"
                className="flex items-center gap-2 rounded-pill border border-on-light/20 bg-white/25 px-4 py-2.5 text-on-light shadow-sm backdrop-blur-sm transition-all hover:border-primary hover:text-primary"
                aria-label="Email"
                onClick={handleEmailClick}
              >
                <Mail size={22} />
              </a>
              {emailCopied && (
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 rounded bg-primary px-2 py-1 text-[10px] text-background font-bold shadow-lg whitespace-nowrap">
                  Copied!
                </span>
              )}
            </div>
 
            <a
              href="https://www.linkedin.com/in/yasser4hmed"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-pill border border-on-light/20 bg-white/25 px-4 py-2.5 text-on-light shadow-sm backdrop-blur-sm transition-all hover:border-primary hover:text-primary"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
              
            </a>
            <a
              href="https://github.com/yasser-ahmedd"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-pill border border-on-light/20 bg-white/25 px-4 py-2.5 text-on-light shadow-sm backdrop-blur-sm transition-all hover:border-primary hover:text-primary"
              aria-label="GitHub"
            >
              <Github size={22} />
              
            </a>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="liquid-glass-strong space-y-4 rounded-soft border-primary/25 p-6 text-left shadow-glass-lg sm:p-9"
          >
            <div>
              <label htmlFor="name" className="mb-1 block font-label text-sm text-adaptive">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full rounded-3xl border border-on-light/20 bg-white/90 px-4 py-3.5 text-on-light placeholder:text-on-light-muted/50 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/30"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1 block font-label text-sm text-adaptive">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-3xl border border-on-light/20 bg-white/90 px-4 py-3.5 text-on-light placeholder:text-on-light-muted/50 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/30"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-1 block font-label text-sm text-adaptive">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full resize-none rounded-3xl border border-on-light/20 bg-white/90 px-4 py-3.5 text-on-light placeholder:text-on-light-muted/50 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/30"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              disabled={status === 'sending'}
              className="inline-flex w-full items-center justify-center gap-2 rounded-pill bg-primary px-6 py-3 font-label text-sm text-background transition-all hover:scale-[1.02] hover:brightness-110 disabled:opacity-70 sm:w-auto"
            >
              {status === 'sending' ? (
                'Sending...'
              ) : (
                <>
                  Send Message
                  <Send size={18} />
                </>
              )}
            </button>
            {status === 'success' && (
              <p className="font-label text-sm text-[#06c244]">Thanks! Your message was sent.</p>
            )}
            {status === 'error' && (
              <p className="text-sm text-red-400">Something went wrong. Please try again.</p>
            )}
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
