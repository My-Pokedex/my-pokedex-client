import Header from '@components/Header';

export default function PokemonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center h-full pt-[5rem] bg-[url('/assets/img/bg_default.png')] bg-cover bg-center bg-no-repeat">
        {children}
      </div>
    </>
  );
}
