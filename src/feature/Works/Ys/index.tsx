import styled from "@emotion/styled";
import { Heading_2 } from "~/designSystems";
import { simulatedProductsList } from "./config";

// TODO: 他の場所もこのサイズ感にするが共通化するべきかは検討する
const Content = styled.section`
  margin: 36px auto 0;
  padding: 0;
`;

export function Ys() {
  return (
    <Content>
      <Heading_2>株式会社{`Y's`}</Heading_2>
      <ul>
        {simulatedProductsList.map((item) => (
          <li key={item.title}>
            <p>{item.title}</p>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </Content>
  )
}