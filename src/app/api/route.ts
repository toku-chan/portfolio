import { redirect } from 'next/navigation';

// NOTE: 現状APIは利用していないため、next.jsにリダイレクトさせて、エラーを回避する
export async function GET(): Promise<never> {
  redirect('https://nextjs.org/');
}
