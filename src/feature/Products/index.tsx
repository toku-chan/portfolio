import styled from '@emotion/styled';
import { Heading, spacingSize } from '~/designSystems';
import { Exnoa } from './EXNOA';
import { Ys } from './Ys';

const Content = styled.section`
  margin: ${spacingSize.level4_0x}px auto 0;
  padding: 0;
`;

export function Products() {
  return (
    <Content>
      <Heading.screenTitle>制作実績</Heading.screenTitle>
      <Exnoa />
      <Ys />
    </Content>
  );
}
