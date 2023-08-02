import styled from '@emotion/styled';
import { career } from './config';
import { SpaceSize } from '~/config';
import { H2, H3 } from '../Heading';

const Wrapper = styled.div`
  padding-top: ${SpaceSize.base_x2}px;
`;

const CareerList = styled.section`
  padding-top: ${SpaceSize.base}px;
`;

const Detail = styled.p`
  margin-top: ${SpaceSize.base_x0_5}px;
`;

export function Career() {
  return (
    <Wrapper>
      <H2>キャリア</H2>
      <ul>
        {career.map(item => (
          // NOTE: JSONからmdに変更しても良いかも。内容しっかり書けるようにする
          <CareerList key={item.company}>
            <section>
              <H3>
                {item.company}
                <span>（{item.date}）</span>
              </H3>
              <Detail>{item.detail}</Detail>
            </section>
          </CareerList>
        ))}
      </ul>
    </Wrapper>
  );
}
