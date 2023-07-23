import styled from '@emotion/styled';
import { SpaceSize } from '~/config';
import { Exnoa } from './EXNOA';
import { Ys } from './Ys';

const Wrapper = styled.div`
  padding-top: ${SpaceSize.base_x2}px;
`;

export function Products() {
  return (
    <Wrapper>
      <Exnoa />
      <Ys />
    </Wrapper>
  );
}
