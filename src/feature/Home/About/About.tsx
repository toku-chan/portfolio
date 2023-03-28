const personalData = {
  name: "中島一徳",
  location: "千葉県柏市",
  birthday: {
    year: 1993,
    month: 5,
    date: 29
  }
}

function getAge() {
  const today = new Date();
  const todayYear = today.getFullYear();
  const thisYearBirthDay = new Date(todayYear, personalData.birthday.month - 1, personalData.birthday.date);
  const age = todayYear - personalData.birthday.year;

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
        <p>{personalData.name}</p>
      </div>
      <div>
        <h2>生年月日</h2>
        <p>{personalData.birthday.year}/{personalData.birthday.month}/{personalData.birthday.date}</p>
        <p>{age}歳</p>
      </div>
      <div>
        <h2>現在住んでいるところ</h2>
        <p>{personalData.location}</p>
      </div>
    </section>
  )
}