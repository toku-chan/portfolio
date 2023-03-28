const myBirthDay = {
  year: 1993,
  month: 5,
  date: 29
}

function getAge() {
  const today = new Date();
  const todayYear = today.getFullYear();
  const thisYearBirthDay = new Date(todayYear, myBirthDay.month - 1, myBirthDay.date);
  const age = todayYear - myBirthDay.year;

  if(today < thisYearBirthDay) {
    return age - 1;
  }

  return age;
}

export function About() {
  const age = getAge()

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
        <p>{age}歳</p>
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