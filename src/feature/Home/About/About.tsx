import styled from '@emotion/styled';
import Link from 'next/link';
import { Heading_1, Heading_2 } from '~/designSystems';

const personalData = {
  name: '中島一徳',
  location: '千葉県柏市',
  birthday: {
    year: 1993,
    month: 5,
    date: 29,
  },
};

// TODO: 他の場所もこのサイズ感にするが共通化するべきかは検討する
const Content = styled.section`
  margin: 36px auto 0;
  padding: 0;
`;

const DetailWrapper = styled.section`
  margin-top: 18px;
`;

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
    <Content>
      <Heading_1>About</Heading_1>
      <DetailWrapper>
        <Heading_2>名前</Heading_2>
        <p>{personalData.name}</p>
      </DetailWrapper>
      <DetailWrapper>
        <Heading_2>生年月日</Heading_2>
        <p>
          {personalData.birthday.year}年{personalData.birthday.month}月
          {personalData.birthday.date}日 {age}歳
        </p>
      </DetailWrapper>
      <DetailWrapper>
        <Heading_2>現在住んでいるところ</Heading_2>
        <p>{personalData.location}</p>
      </DetailWrapper>
      <DetailWrapper>
        <Heading_2>最寄駅</Heading_2>
        <p>JR常磐線 柏駅</p>
      </DetailWrapper>
      <DetailWrapper>
        <p>
          趣味や最近ハマっていることを見たい方は
          <Link href='/interest'>こちら</Link>から
        </p>
      </DetailWrapper>
    </Content>
  );
}
