import React from 'react';
import styled from '@emotion/styled';
import { spacingSize } from '~/designSystems';
import { Header } from '~/components/Header';
import { Footer } from '~/components/Footer';

type Props = {
  children: React.ReactNode;
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Main = styled.main`
  width: 960px;

  // NOTE: タブレットは考慮しない
  // レスポンシブでSP表示は767pxまで
  @media screen and (max-width: 767px) {
    width: 100%;
    padding-left: ${spacingSize.level4_0x}px;
    padding-right: ${spacingSize.level4_0x}px;
  }
`;

export function Layout({ children }: Props) {
  return (
    <Wrapper>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Wrapper>
  );
}
