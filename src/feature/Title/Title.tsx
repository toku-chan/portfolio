import React from 'react';
import styled from '@emotion/styled';

// NOTE: いつかロゴとかにしてみたい
const Logo = styled.span`
  font-size: 40px;
  font-weight: bold;
`;

export const Title: React.FC = () => {
  return (
    <div>
      <Logo>PORTFOLIO</Logo>
    </div>
  );
};
