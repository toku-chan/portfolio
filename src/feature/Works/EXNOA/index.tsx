import { simulatedProductsList } from "./config";

export function Exnoa() {
  return (
    <section>
      <h2>合同会社EXNOA</h2>
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