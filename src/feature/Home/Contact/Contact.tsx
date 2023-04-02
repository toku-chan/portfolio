import styled from "@emotion/styled";
import { Heading_1 } from "~/designSystems"

// TODO: 他の場所もこのサイズ感にするが共通化するべきかは検討する
const Content = styled.section`
  margin: 36px auto 0;
  padding: 0;
`;

export function Contact() {

  return (
    <Content>
      <Heading_1>Contact</Heading_1>
      <p>メールアドレス貼っておけば良いかな？</p>
      <p>TwitterのDMとかの方が良いかな？</p>
    </Content>
  )
}