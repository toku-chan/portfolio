'use client';

import React from 'react';
import styled from '@emotion/styled';
import { SpaceSize } from '~/config';

const StyledFooter = styled.footer`
  position: sticky;
  top: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: ${SpaceSize.base_x4}px;
`;

const CopyRight = styled.span`
  font-size: ${SpaceSize.base_x0_75}px;
`;

export const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <CopyRight>©︎ i.nakajima</CopyRight>
    </StyledFooter>
  );
};
