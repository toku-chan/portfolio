import { Heading1 } from "~/designSystems";

export function Interest() {
  console.log("このページ自体別のページに切り出しても良いかも");

  return (
    <section>
      <Heading1>趣味・興味あること・関心事</Heading1>
      <section>
        <h2>ベース</h2>
        <p>
          趣味程度で弾いてます。コピーするだけです。<br />
          「ぼっち・ざ・ろっく」を見て、大学生ぶりに弾き始めました。
        </p>
      </section>
      <section>
        <h2>ゲーム</h2>
        <ul>
          <li>OverWatch2</li>
          <li>LINEモンスターファーム（スマホゲーム）</li>
          <li>ガーディアンテイルズ（スマホゲーム）</li>
        </ul>
        <p>
          最近はこの辺のゲームをちょこちょこやってます。
        </p>
      </section>
      <section>
        <h2>キャンプ</h2>
        <p>
          昔やっていたけど、ずっとできていないのでやりたい。<br />
          在宅でずっと家だから、無になりにいきたい。焚き火を一生眺めていたい。
        </p>
      </section>
      <section>
        <h2>スノボー</h2>
        <p>
          毎シーズン滑りに行ってます。
          {/* TODO: 滑りに行った写真とかアップしても良いかも。別ページで興味あれば、くらいな？ */}
        </p>
      </section>
    </section>
  )
}