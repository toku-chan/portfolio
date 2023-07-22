/**
 * Header
 * * 共通Titleを持つ
 * * 共通Navigationを持つ
 */
'use client';

import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useDeviceContext } from '~/contexts/device';
import { Logo } from './Logo';
import { Navigation } from './Navigation';

/**
 * NOTE
 * * Pc/Spをレスポンシブにすることで、styleがどちらに依存しているかわかりづらくなる
 * * それを防ぐために意図的に記述を分ける
 * * 共通で利用している部分に関してはコンポーネントに対して直で記載
 */
const StyledSp = css``;

const StyledPc = css`
  margin: 0 auto;
`;

const StyledHeader = styled.header<{ deviceType: string }>`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  ${({ deviceType }) => (deviceType === 'sp' ? StyledSp : StyledPc)};
`;

export const Header: React.FC = () => {
  const { deviceType } = useDeviceContext();
  return (
    <StyledHeader deviceType={deviceType}>
      <Logo />
      {deviceType !== 'sp' && <Navigation />}
    </StyledHeader>
  );
};
