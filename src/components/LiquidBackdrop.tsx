/*import { cn } from '../lib/utils';

/** Soft floating orbs + grid for depth behind hero */
/*export function LiquidBackdrop({ className }: { className?: string }) {
  return (
    <div
      className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}
      aria-hidden
    >
      <div className="liquid-orb absolute -left-20 top-1/4 h-72 w-72 rounded-full bg-primary/25" />
      <div
        className="liquid-orb absolute -right-10 bottom-1/4 h-96 w-96 rounded-full bg-primary-mint/30"
        style={{ animationDelay: '-4s' }}
      />
      <div
        className="liquid-orb absolute left-1/3 top-0 h-64 w-64 rounded-full bg-primary-light/20"
        style={{ animationDelay: '-7s' }}
      />
      {/* Subtle dot grid *//*}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `radial-gradient(circle at center, rgba(208, 255, 113, 0.2) 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />
    </div>
  );
}
*/


import { cn } from '../lib/utils';

/** Soft floating orbs + grid for depth behind hero */
export function LiquidBackdrop({ className }: { className?: string }) {
  return (
    <div
      className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}
      aria-hidden
    >
      <div className="liquid-orb absolute -left-20 top-1/4 h-72 w-72 rounded-full bg-primary/25" />
      <div
        className="liquid-orb absolute -right-10 bottom-1/4 h-96 w-96 rounded-full bg-primary-mint/30"
        style={{ animationDelay: '-4s' }}
      />
      <div
        className="liquid-orb absolute left-1/3 top-0 h-64 w-64 rounded-full bg-primary-light/20"
        style={{ animationDelay: '-7s' }}
      />
      {/* Subtle dot grid — blue toned */}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `radial-gradient(circle at center, rgba(180, 180, 255, 0.25) 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />
    </div>
  );
}