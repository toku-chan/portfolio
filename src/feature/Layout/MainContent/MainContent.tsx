'use client';

import React from 'react';
import styled from '@emotion/styled';
import { SpaceSize } from '~/config';

const Main = styled.main`
  padding: 0 ${SpaceSize.base_x2}px;
`;

export const MainContent: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return <Main>{children}</Main>;
};
