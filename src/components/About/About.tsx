export function About() {
  console.log("Aboutは名前・年齢・性別・出身・住まいを記載するよ")

  return (
    <section>
      <h1>About</h1>
      <div>
        <h2>名前</h2>
        <p>中島一徳<span>なかじまいっとく</span></p>
      </div>
      <div>
        <h2>生年月日</h2>
        <p>1993/05/29</p>
        <p>満「自動計算で」歳</p>
      </div>
      <div>
        <h2>性別</h2>
        <p>男</p>
      </div>
      <div>
        <h2>現在住んでいるところ</h2>
        <p>千葉県柏市</p>
      </div>
    </section>
  )
}