import Link from "next/link";
import { career } from "./config";
import {
  Heading_1
} from "~/designSystems"

export function Career() {
  console.log("Careerはざっくりとした経歴を箇条書きで書いておく感じが良いかな？")

  return (
    <section>
      <Heading_1>Career</Heading_1>
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