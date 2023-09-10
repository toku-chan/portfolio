import { fetchRssFeed } from '~/utils/rss';

export async function Note() {
  const data = await fetchRssFeed(process.env.NOTE_RSS_FEED);

  if (!data.items.length) return null;

  return (
    <section>
      <h2>note</h2>
      {data.items.map(item => (
        <div key={item.pubDate}>
          <p>{item.title}</p>
        </div>
      ))}
    </section>
  );
}
