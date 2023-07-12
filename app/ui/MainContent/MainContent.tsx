'use client';

import React from 'react';
import styled from '@emotion/styled';

const Main = styled.main`
  padding: 0 32px;
`;

export const MainContent: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return <Main>{children}</Main>;
};
