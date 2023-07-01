'use client';

import React from 'react';
import styled from '@emotion/styled';

const CopyRight = styled.span`
  font-size: 12px;
`;

export const Footer: React.FC = () => {
  return (
    <footer>
      <CopyRight>©︎ i.nakajima</CopyRight>
    </footer>
  );
};
