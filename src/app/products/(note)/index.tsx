import { Card, CardContent, Link as MuiLink } from '@mui/material';
import { H2, Subtitle1, Body2 } from '~/designSystem';
import { fetchRssFeed } from '~/utils/rss';

function formatDate(pubDate?: string) {
  if (!pubDate) return '日付の取得に失敗しました';

  const date = new Date(pubDate);
  const dateY = date.getFullYear();
  const dateM = date.getMonth() + 1;
  const dateD = date.getDate();

  return dateY + '/' + dateM + '/' + dateD;
}

export async function Note() {
  const data = await fetchRssFeed(process.env.NOTE_RSS_FEED);

  if (!data.items.length) return null;

  return (
    <section>
      <H2>note</H2>
      {data.items.map(item => (
        <Card key={item.pubDate} sx={{ maxWidth: 345 }}>
          <MuiLink
            href={item.link}
            underline='hover'
            target='_blank'
            rel='noopener noreferrer'
          >
            <CardContent>
              <Subtitle1>{item.title}</Subtitle1>
              <Body2 textColor='text.secondary'>
                投稿日：{formatDate(item.pubDate)}
              </Body2>
            </CardContent>
          </MuiLink>
        </Card>
      ))}
    </section>
  );
}
