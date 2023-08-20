import { DefaultProps } from '@/types/common';
import { AUTH_BUTTON_CONTENTS } from '@/constants/contents';

type AuthType = 'kakao' | 'naver' | 'google';

interface AuthButtonProps extends DefaultProps {
  type: AuthType;
}

export default function AuthButton({ type }: AuthButtonProps) {
  return (
    <button
      className={`w-[10.25rem] h-[2.625rem] border-[.1875rem] rounded-full border-black-50 font-bold text-base shadow-inner/top/white ${AUTH_BUTTON_BG[type]}`}>
      {AUTH_BUTTON_CONTENTS[type]}
    </button>
  );
}

const AUTH_BUTTON_BG = {
  kakao: 'bg-[#F9E000]',
  naver: 'bg-[#33CE00]',
  google: 'bg-rainbow',
} as const;
