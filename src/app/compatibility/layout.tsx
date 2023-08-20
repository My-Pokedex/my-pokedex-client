import { Header } from '@/components';

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
