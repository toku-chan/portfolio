import styled from '@emotion/styled';
import { Heading_1 } from '~/designSystems/Heading';
import { Layout } from '~/components/Layout';

const Content = styled.section`
  margin: 36px auto 0;
  padding: 0;
`;

export function ContactContent() {
  return (
    <Layout>
      <Content>
        <Heading_1>Contact</Heading_1>
        <p>メールアドレス貼っておけば良いかな？</p>
        <p>TwitterのDMとかの方が良いかな？</p>
      </Content>
    </Layout>
  );
}
