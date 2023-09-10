'use client';

/**
 * Emotionについて
 * * 公式のMigrateページを見てみると、Emotionは現段階ではサポートできるように実装中らしい
 * * styled componentsを実装すると、これはClient Components扱いになるため、use clientの宣言が必要になる
 */
import { Global, css } from '@emotion/react';
import styled from '@emotion/styled';
import { SpaceSize } from '~/designSystem/config';
import { useDeviceContext } from '~/contexts/device';

const ResetStyles = css`
  html,
  body {
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: sans-serif; // TODO: font-familyについても検討する
      font-size: ${SpaceSize.base}px;
      line-height: 1.5;
    }

    ul li {
      list-style: none;
    }
  }
`;

const LayoutWrapper = styled.div<{ deviceType: string }>`
  width: 100vw;
  min-height: 100vh;
  margin: 0;

  ${({ deviceType }) =>
    deviceType === 'pc' &&
    `
    min-height: 100vh;
  `}
`;

type Props = {
  children: React.ReactNode;
};

export function RestStyled({ children }: Props) {
  const { deviceType } = useDeviceContext();
  return (
    <>
      <Global styles={ResetStyles} />
      <LayoutWrapper deviceType={deviceType}>{children}</LayoutWrapper>
    </>
  );
}
