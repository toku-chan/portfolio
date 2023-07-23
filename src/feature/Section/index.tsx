import React from 'react';
import styled from '@emotion/styled';
import { SpaceSize } from '~/config';

const StyledSection = styled.section`
  padding-top: ${SpaceSize.base_x4}px;
`;

export const Section: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <StyledSection>{children}</StyledSection>;
};
