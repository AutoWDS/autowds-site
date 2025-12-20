'use client';

import { ReactNode } from 'react';

interface ScrollToCTAButtonProps {
  children: ReactNode;
  className?: string;
}

export default function ScrollToCTAButton({ children, className }: ScrollToCTAButtonProps) {
  const handleClick = () => {
    const ctaSection = document.getElementById('cta');
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  );
}

