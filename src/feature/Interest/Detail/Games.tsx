import styled from "@emotion/styled";
import { Heading_2 } from "~/designSystems";

// TODO: 他の場所もこのサイズ感にするが共通化するべきかは検討する
const Content = styled.section`
  margin: 36px auto 0;
  padding: 0;
`;

export function Games() {

  return (
    <Content>
      <Heading_2>ゲーム</Heading_2>
      <ul>
        <li>OverWatch2</li>
        <li>LINEモンスターファーム（スマホゲーム）</li>
        <li>ガーディアンテイルズ（スマホゲーム）</li>
      </ul>
      <p>
        最近はこの辺のゲームをちょこちょこやってます。
      </p>
    </Content>
  )
}