'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { navLinks } from './config';

export function Navigation() {
  const pathname = usePathname();

  return (
    <>
      {navLinks.map(link => {
        const isActive = pathname.startsWith(link.href);
        console.log(isActive);

        return (
          <Link href={link.href} key={link.name}>
            {link.name}
          </Link>
        );
      })}
    </>
  );
}
