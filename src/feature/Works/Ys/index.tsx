import { Heading_2 } from "~/designSystems";

import { simulatedProductsList } from "./config";

export function Ys() {
  return (
    <section>
      <Heading_2>株式会社{`Y's`}</Heading_2>
      <ul>
        {simulatedProductsList.map((item) => (
          <li key={item.title}>
            <p>{item.title}</p>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}