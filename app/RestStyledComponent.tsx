'use client';

/**
 * Emotionについて
 * * 公式のMigrateページを見てみると、Emotionは現段階ではサポートできるように実装中らしい
 * * styled componentsを実装すると、これはClient Components扱いになるため、use clientの宣言が必要になる
 */
import { Global, css } from '@emotion/react';
import styled from '@emotion/styled';

const ResetStyles = css`
  html,
  body {
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: sans-serif; // TODO: font-familyについても検討する
    }

    ul li {
      list-style: none;
    }
  }
`;

const LayoutWrapper = styled.div`
  max-width: 1280px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 16px;
`;

type Props = {
  children: React.ReactNode;
};

export default function RestStyledComponent({ children }: Props) {
  return (
    <>
      <Global styles={ResetStyles} />
      <LayoutWrapper>{children}</LayoutWrapper>
    </>
  );
}
