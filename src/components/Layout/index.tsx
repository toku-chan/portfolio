import React from 'react';
import { Header } from '~/components/Header';
import { Footer } from '~/components/Footer';
import styled from '@emotion/styled';

type Props = {
  children: React.ReactNode;
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Main = styled.main`
  width: 100%;

  // NOTE: タブレットは考慮しない
  // レスポンシブでSP表示は767pxまで
  @media screen and (max-width: 767px) {
    padding-left: 36px;
    padding-right: 36px;
  }
`;

export function Layout({ children }: Props) {
  console.log('処理があるならなんかする');

  return (
    <Wrapper>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Wrapper>
  );
}
