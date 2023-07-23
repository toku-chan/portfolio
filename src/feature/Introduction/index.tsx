import React from 'react';
import styled from '@emotion/styled';
import { SpaceSize } from '~/config';

const Wrapper = styled.div`
  padding-top: ${SpaceSize.base_x2}px;
`;

export const Introduction: React.FC = () => {
  return (
    <Wrapper>
      <p>ああああああああああああああああああ</p>
      <p>iiiiiiiiiiiiii</p>
      <p>ウウウウウウウウウウウウウウウウウウウウウウウウ</p>
      <p>江江江江江江江江江江江江江江江江江江江</p>
    </Wrapper>
  );
};
