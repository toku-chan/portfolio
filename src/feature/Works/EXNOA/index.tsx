import { Heading_2 } from "~/designSystems";
import { simulatedProductsList } from "./config";

export function Exnoa() {
  return (
    <section>
      <Heading_2>合同会社EXNOA</Heading_2>
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