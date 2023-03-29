import Link from "next/link";
import { Layout } from "~/components/Layout";
import { Exnoa } from "./EXNOA";
import { Ys } from "./Ys"

export function WorksContent() {
  return (
    <Layout>
      <h1>制作実績</h1>
      <p>今までやってきたことを記載しておく。実績見せれないので、とりあえずやったことの模擬実装とかはアリかも</p>
      <Exnoa />
      <Ys />
      <Link href="/">Back To Home</Link>
    </Layout>
  )
}