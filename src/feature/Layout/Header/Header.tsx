/**
 * Header
 * * 共通Titleを持つ
 * * 共通Navigationを持つ
 */
'use client';

import React from 'react';
import styled from '@emotion/styled';
import { Title } from '~/feature/Title';
import { Navigation } from '~/feature/Navigation';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin: 0 auto;
  padding-top: 10px;
`;

export const Header: React.FC = () => {
  return (
    <StyledHeader>
      <Title />
      <Navigation />
    </StyledHeader>
  );
};
