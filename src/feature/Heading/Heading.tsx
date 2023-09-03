import React, { PropsWithChildren } from 'react';
import styled from '@emotion/styled';
import { SpaceSize } from '~/config';

// 見出し1
const StyledH1 = styled.h1`
  font-size: ${SpaceSize.base_x2}px;
  font-weight: 500; // TODO: weightについては検討していないので調査する
`;
export const H1: React.FC<PropsWithChildren> = ({ children }) => {
  return <StyledH1>{children}</StyledH1>;
};

// 見出し2
const StyledH2 = styled.h2`
  font-size: ${SpaceSize.base_x1_5}px;
  font-weight: 500; // TODO: weightについては検討していないので調査する
`;
export const H2: React.FC<PropsWithChildren> = ({ children }) => {
  return <StyledH2>{children}</StyledH2>;
};

// 見出し3
const StyledH3 = styled.h3`
  font-size: ${SpaceSize.base_x1_25}px;
  font-weight: 500; // TODO: weightについては検討していないので調査する
`;
export const H3: React.FC<PropsWithChildren> = ({ children }) => {
  return <StyledH3>{children}</StyledH3>;
};
