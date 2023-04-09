import Image from 'next/image';
import styled from '@emotion/styled';

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
    <div>
      <ul>
        <li>中島一徳</li>
        <li>{`Y's`}</li>
        <li>
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
        </li>
      </ul>
    </div>
  );
}
