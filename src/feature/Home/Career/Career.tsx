import Link from "next/link";
import { career } from "./config";

export function Career() {
  console.log("Careerはざっくりとした経歴を箇条書きで書いておく感じが良いかな？")

  return (
    <section>
      <h1>Career</h1>
      <ul>
        {career.map((item) => (
          // TODO: idとかにしておきたいが、暫定でdetailにしておく
          <li key={item.detail}>{item.date}: {item.detail}</li>
        ))}
      </ul>
      <Link href="/works">制作実績はこちら</Link>
    </section>
  )
}