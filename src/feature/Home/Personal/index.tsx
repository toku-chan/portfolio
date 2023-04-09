import Link from 'next/link';
import Image from 'next/image';
import styled from '@emotion/styled';

const Container = styled.div`
  margin-top: 48px;
`;

const Content = styled.div`
  margin-top: 8px;
`;

const List = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Item = styled.li`
  margin-right: 8px;
`;

export function Personal() {
  return (
    <Container>
      <Content>中島一徳</Content>
      <Content>{`Y's`}</Content>
      <Content>
        <List>
          <Item>
            <a
              href='https://twitter.com/web_ittokun'
              target='_blank'
              rel='noreferrer'
            >
              <Image
                src='/sns/twitter.svg'
                alt='Twitter'
                width='32'
                height='32'
              />
            </a>
          </Item>
          <Item>
            <a
              href='https://github.com/toku-chan'
              target='_blank'
              rel='noreferrer'
            >
              <Image
                src='/sns/github.svg'
                alt='GitHub'
                width='32'
                height='32'
              />
            </a>
          </Item>
        </List>
      </Content>
      <Content>
        <Link href='/about'>About</Link>
      </Content>
      <Content>
        <Link href='/contact'>Contact</Link>
      </Content>
    </Container>
  );
}
