import React from 'react';
import styled from '@emotion/styled';
import { breakPoint, SpaceSize } from '~/config';

// NOTE: いつかロゴとかにしてみたい
const StyledLogo = styled.span`
  font-size: ${SpaceSize.base_x1_5}px;
  font-weight: bold;
  color: blue;

  // HACK: テスト実装のため、後日修正すること
  ${breakPoint.mediaQueryPc} {
    color: red;
  }
`;

export const Logo: React.FC = () => {
  return (
    <div>
      <StyledLogo>PORTFOLIO</StyledLogo>
    </div>
  );
};
