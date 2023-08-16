export default function SigninLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-[url('/assets/img/default_bg.png')] bg-cover bg-center bg-no-repeat">
      {children}
    </div>
  );
}
