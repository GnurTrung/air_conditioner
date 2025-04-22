'use client'
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollToHash() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          // delay một chút nếu cần, tùy vào việc page đã mount chưa
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          }, 200); 
        }
      }
    }
  }, [pathname]);

  return null;
}
