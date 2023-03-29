import { simulatedProductsList } from "./config";

export function Ys() {
  return (
    <section>
      <h2>株式会社{`Y's`}</h2>
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