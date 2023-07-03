'use client';

import React from 'react';
import styled from '@emotion/styled';

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
`;

const CopyRight = styled.span`
  font-size: 12px;
`;

export const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <CopyRight>©︎ i.nakajima</CopyRight>
    </StyledFooter>
  );
};
