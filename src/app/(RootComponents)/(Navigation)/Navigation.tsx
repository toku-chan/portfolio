'use client';

import Link from 'next/link';
import * as S from './styles';

export function Navigation() {
  return (
    <S.Wrapper>
      <S.List>
        <S.Item>
          <Link href='/'>Home</Link>
        </S.Item>
        <S.Item>
          <Link href='/about'>About</Link>
        </S.Item>
        <S.Item>
          <Link href='/products'>Products</Link>
        </S.Item>
        <S.Item>
          <Link href='/contact'>Contact</Link>
        </S.Item>
      </S.List>
    </S.Wrapper>
  );
}
