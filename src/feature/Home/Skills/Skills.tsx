import styled from "@emotion/styled";
import { Heading_1 } from "~/designSystems"

// TODO: 他の場所もこのサイズ感にするが共通化するべきかは検討する
const Content = styled.section`
  margin: 36px auto 0;
  padding: 0;
`;

export function Skills() {

  return (
    <Content>
      <Heading_1>スキル</Heading_1>
      {/* <p>とりあえずやったことがあることを書こう</p> */}
      {/* <p>どんくらいできるかはまた後で</p> */}
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>ejs</li>
        <li>sass</li>
        <li>emotion</li>
        <li>JavaScript</li>
        <li>jQuery</li>
        <li>TypeScript</li>
        <li>React.js</li>
        <li>Next.js</li>
        <li>Vue.js</li>
        <li>Nuxt.js</li>
        <li>Apollo GraphQL</li>
        <li>jest</li>
        <li>testing-library</li>
        <li>PHP</li>
        <li>Laravel</li>
        <li>Go</li>
        <li>webpack</li>
        <li>vite</li>
        <li>gulp</li>
      </ul>
    </Content>
  )
}