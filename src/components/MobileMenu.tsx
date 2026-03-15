'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { createPortal } from 'react-dom';

interface MobileMenuProps {
  links: { href: string; label: string }[];
}

export default function MobileMenu({ links }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {/* Hamburger button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-white p-2 -ml-2 relative z-[60]"
        aria-label="Toggle menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Dropdown — portaled to body to escape nav overflow/animation issues */}
      {mounted && isOpen && createPortal(
        <div className="md:hidden fixed top-16 left-0 right-0 z-[55] bg-black/95 backdrop-blur-xl border-b border-[#222] py-4 px-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block py-3 text-base text-white hover:text-[#999] transition-colors border-b border-[#111] last:border-0"
            >
              {link.label}
            </Link>
          ))}
        </div>,
        document.body
      )}
    </>
  );
}
