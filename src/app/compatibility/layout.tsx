import type { Metadata } from 'next';
import { Header } from '@/components';

export const metadata: Metadata = {
  title: 'My Pokedex - 타입별 상성 보기',
  description: '포켓몬 배틀 시의 타입별 상성을 정리한 페이지입니다.',
};

export default function CompatibilityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div className="container-page">{children}</div>
    </>
  );
}
