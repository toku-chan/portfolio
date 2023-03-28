export function Career() {
  console.log("Careerはざっくりとした経歴を箇条書きで書いておく感じが良いかな？")

  return (
    <section>
      <h1>Career</h1>
      <ul>
        <li>2017/03: 日本大学商学部経営学科を卒業</li>
        <li>2017/04: 株式会社ノジマに入社</li>
        {/* <li>いつ退職したのかも記載しておきたい</li> */}
        {/* <li>いつ内定をもらい、研修期間を記載したい</li> */}
        <li>2019/05: 株式会社{`Y's`}に入社</li>
        <li>2019/05: 合同会社EXNOA（旧: DMM GAMES）に常駐で勤務</li>
        {/* <li>現場でどういうことをやったのか、別記載するのはありかも</li> → worksというページを作成した */}
      </ul>
    </section>
  )
}