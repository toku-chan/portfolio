import styled from '@emotion/styled';
import { Layout } from '~/components/Layout';
import { Heading_1 } from '~/designSystems';
import { Exnoa } from './EXNOA';
import { Ys } from './Ys';

const Content = styled.section`
  margin: 36px auto 0;
  padding: 0;
`;

export function WorksContent() {
  return (
    <Layout>
      <Content>
        <Heading_1>制作実績</Heading_1>
        <p>
          今までやってきたことを記載しておく。実績見せれないので、とりあえずやったことの模擬実装とかはアリかも
        </p>
        <Exnoa />
        <Ys />
      </Content>
    </Layout>
  );
}
