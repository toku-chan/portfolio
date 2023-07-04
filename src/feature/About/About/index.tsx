import * as S from '../styles';

const personalData = {
  name: '中島一徳',
  location: '千葉県柏市',
  birthday: {
    year: 1993,
    month: 5,
    date: 29,
  },
};

function getAge() {
  const today = new Date();
  const todayYear = today.getFullYear();
  const thisYearBirthDay = new Date(
    todayYear,
    personalData.birthday.month - 1,
    personalData.birthday.date,
  );
  const age = todayYear - personalData.birthday.year;

  if (today < thisYearBirthDay) {
    return age - 1;
  }

  return age;
}

export function About() {
  const age = getAge();

  return (
    <S.Content>
      <h2>About</h2>
      <S.DetailWrapper>
        <h2>名前</h2>
        <p>{personalData.name}</p>
      </S.DetailWrapper>
      <S.DetailWrapper>
        <h2>生年月日</h2>
        <p>
          {personalData.birthday.year}年{personalData.birthday.month}月
          {personalData.birthday.date}日 {age}歳
        </p>
      </S.DetailWrapper>
      <S.DetailWrapper>
        <h2>現在住んでいるところ</h2>
        <p>{personalData.location}</p>
      </S.DetailWrapper>
      <S.DetailWrapper>
        <h2>最寄駅</h2>
        <p>JR常磐線 柏駅</p>
      </S.DetailWrapper>
    </S.Content>
  );
}
