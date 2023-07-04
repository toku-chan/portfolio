import styled from '@emotion/styled';
import { Exnoa } from './EXNOA';
import { Ys } from './Ys';

const Content = styled.section`
  padding: 0;
`;

export function Products() {
  return (
    <Content>
      <Exnoa />
      <Ys />
    </Content>
  );
}
