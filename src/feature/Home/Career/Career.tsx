// TODO: いつノジマを退職したか記載
// TODO: いつY'sの内定をもらったか記載
// TODO: Y'sでの研修期間を記載
const career = [
  {
    date: "2017/03",
    detail: "日本大学商学部経営学科を卒業",
  },
  {
    date: "2017/04",
    detail: "株式会社ノジマに入社",
  },
  {
    date: "2019/05",
    detail: "株式会社Y'sに入社",
  },
  {
    date: "2019/05",
    detail: "合同会社EXNOA（旧: DMM GAMES）に常駐で勤務",
  },
];

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
    </section>
  )
}