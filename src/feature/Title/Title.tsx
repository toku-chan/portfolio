import React from 'react';
import styled from '@emotion/styled';
import { breakPoint } from '~/config';

// NOTE: いつかロゴとかにしてみたい
const Logo = styled.span`
  font-size: 40px;
  font-weight: bold;
  color: blue;

  // HACK: テスト実装のため、後日修正すること
  ${breakPoint.mediaQueryPc} {
    color: red;
  }
`;

export const Title: React.FC = () => {
  return (
    <div>
      <Logo>PORTFOLIO</Logo>
    </div>
  );
};
