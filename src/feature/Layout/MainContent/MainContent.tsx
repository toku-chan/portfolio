'use client';

import React from 'react';
import styled from '@emotion/styled';
import { SpaceSize } from '~/config';

const Main = styled.main`
  padding: ${SpaceSize.base_x4}px ${SpaceSize.base_x2}px;
`;

export const MainContent: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return <Main>{children}</Main>;
};
