import Header from '@components/Header';

export default function SearchResultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center h-full bg-[url('/assets/img/bg_default.png')] bg-cover bg-center bg-no-repeat">
        {children}
      </div>
    </>
  );
}
