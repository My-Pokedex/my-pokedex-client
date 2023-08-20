import { Header } from '@/components';

export default function SearchResultLayout({
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
