import Link from "next/link";
import { Heading1 } from "~/designSystems";
import { Layout } from "~/components/Layout";
import * as Detail from "./Detail";

export function InterestContent() {

  return (
    <Layout>
      <Heading1>趣味・興味あること・関心事</Heading1>
        {/* NOTE: 最近やっている順番で表示。その時のブームよって並び替えすること */}
        <Detail.BassGuitar />
        <Detail.Games />
        <Detail.WinterSports />
        <Detail.Camping />
      <Link href="/">Back To Home</Link>
    </Layout>
  )
}