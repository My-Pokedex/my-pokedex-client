import { Header } from '@/components';

export default function PokemonLayout({
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
