import styled from '@emotion/styled';
import { Heading_1 } from '~/designSystems';
import { Exnoa } from './EXNOA';
import { Ys } from './Ys';

const Content = styled.section`
  margin: 36px auto 0;
  padding: 0;
`;

export function Products() {
  return (
    <Content>
      <Heading_1>制作実績</Heading_1>
      <Exnoa />
      <Ys />
    </Content>
  );
}
