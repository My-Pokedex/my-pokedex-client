import { twMerge } from 'tailwind-merge';

export default function SigninLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={twMerge('container-page', 'justify-center pb-14')}>
      <h2 className="sr-only">로그인</h2>
      {children}
    </div>
  );
}
