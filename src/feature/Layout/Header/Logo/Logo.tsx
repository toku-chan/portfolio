import React from 'react';
import styled from '@emotion/styled';
import { SpaceSize } from '~/config';
import { useDeviceContext } from '~/contexts/device';

// NOTE: いつかロゴとかにしてみたい
const StyledLogo = styled.span<{ deviceType: string }>`
  font-size: ${SpaceSize.base_x1_5}px;
  font-weight: bold;
  color: ${({ deviceType }) => (deviceType === 'sp' ? 'blue' : 'red')};
`;

export const Logo: React.FC = () => {
  const { deviceType } = useDeviceContext();
  return (
    <div>
      <StyledLogo deviceType={deviceType}>PORTFOLIO</StyledLogo>
    </div>
  );
};
