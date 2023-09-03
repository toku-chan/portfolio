import styled from '@emotion/styled';
import { SpaceSize } from '~/config';
import { H2 } from '../Heading';
import * as Details from './Details';

const Wrapper = styled.div`
  padding-top: ${SpaceSize.base_x2}px;
`;

export function Career() {
  return (
    <Wrapper>
      <H2>キャリア</H2>
      <Details.Ys />
      <Details.Exnoa />
    </Wrapper>
  );
}
