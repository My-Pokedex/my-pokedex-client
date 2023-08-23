'use client';

import { useRouter } from 'next/navigation';

export default function BackButton() {
  const router = useRouter();

  const handleClick = () => router.back();

  return (
    <button
      type="button"
      title="뒤로 가기"
      onClick={handleClick}
      className="fixed bottom-4 left-4 w-12 h-[2.0625rem] bg-cover bg-[url('/assets/img/arrow_left.svg')] drop-shadow-lg bounce-back"
    />
  );
}
