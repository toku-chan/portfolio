import { Heading_1 } from "~/designSystems"

export function Skills() {
  console.log("やれることってどういう指標で出せば良いかな・・・")

  return (
    <section>
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
    </section>
  )
}