import Link from 'next/link';
import styled from '@emotion/styled';
import { Layout } from '~/components/Layout';
import { Career } from './Career';
import { Skills } from '../Skills';
import { Products } from '../Products';

const Container = styled.div`
  display: flex;
`;

export function HomeContent() {
  return (
    <Layout>
      <Container>
        {/* 左ナビ */}
        <div>
          <div>アイコン</div>
          <div>名前</div>
          <div>勤め先</div>
          <div>
            <p>SNS</p>
            <ul>
              <li>Twitter</li>
              <li>GitHub</li>
              <li>Instagram</li>
            </ul>
          </div>
          <div>
            <Link href='/about'>About</Link>
          </div>
          <div>
            <Link href='/contact'>Contact</Link>
          </div>
        </div>
        {/* メインコンテンツ */}
        <div>
          <div>
            <Career />
          </div>
          <div>
            <Skills />
          </div>
          <div>
            <Products />
          </div>
        </div>
      </Container>
    </Layout>
  );
}
