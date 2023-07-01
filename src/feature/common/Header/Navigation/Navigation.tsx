'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styled from '@emotion/styled';
import { navLinks } from './config';

const List = styled.ul`
  display: flex;
`;

const Item = styled.li<{ isActive: boolean }>`
  margin-right: 10px;

  &:last-of-type {
    margin-right: 0;
  }

  a {
    color: #333;
    text-decoration: none;

    ${({ isActive }) =>
      isActive &&
      `
      text-decoration: underline;
    `}
  }
`;

export const Navigation: React.FC = () => {
  const pathname = usePathname();

  return (
    <List>
      {navLinks.map(link => {
        const isActive = pathname.endsWith(link.href);

        return (
          <Item key={link.name} isActive={isActive}>
            <Link href={link.href} key={link.name}>
              {link.name}
            </Link>
          </Item>
        );
      })}
    </List>
  );
};
