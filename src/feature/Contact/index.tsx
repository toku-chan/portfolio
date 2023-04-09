import styled from '@emotion/styled';
import { Heading, spacingSize } from '~/designSystems';
import { Layout } from '~/components/Layout';

const Content = styled.section`
  margin: ${spacingSize.level4_0x}px auto 0;
  padding: 0;
`;

export function ContactContent() {
  return (
    <Layout>
      <Content>
        <Heading.screenTitle>Contact</Heading.screenTitle>
        <p>メールアドレス貼っておけば良いかな？</p>
        <p>TwitterのDMとかの方が良いかな？</p>
      </Content>
    </Layout>
  );
}
