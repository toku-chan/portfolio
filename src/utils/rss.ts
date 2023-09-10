import Parser from 'rss-parser';

/**
 * TODO: 型定義をすること
 * 一旦は形にすることを優先で実装
 */
export async function fetchRssFeed(url?: string) {
  const parser = new Parser();

  if (!url) {
    return {
      items: [],
    };
  }

  return await parser.parseURL(url);
}
