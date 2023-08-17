import { DefaultProps } from '@/types/common';
import { AUTH_BUTTON_CONTENTS } from '@/constants/contents';
import { AUTH_BUTTON_BG } from '@/constants/styles';

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
