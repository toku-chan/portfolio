import styled from "@emotion/styled";
import { Heading_1 } from "~/designSystems"
import { mySkillSets } from "./config";

// TODO: 他の場所もこのサイズ感にするが共通化するべきかは検討する
const Content = styled.section`
  margin: 36px auto 0;
  padding: 0;
`;

export function Skills() {

  return (
    <Content>
      <Heading_1>スキル</Heading_1>
      <ul>
        {mySkillSets.map((item) => (
          <li key={item.skill}>{item.skill}</li>
        ))}
      </ul>
    </Content>
  )
}