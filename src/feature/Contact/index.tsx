import React from 'react';
import styled from '@emotion/styled';
import { SpaceSize } from '~/config';

const Wrapper = styled.div`
  padding-top: ${SpaceSize.base_x2}px;
`;

export const Contact: React.FC = () => {
  return (
    <Wrapper>
      <p>メモ</p>
      <p>メールアドレス貼っておけば良いかな？</p>
      <p>TwitterのDMとかの方が良いかな？</p>
    </Wrapper>
  );
};
