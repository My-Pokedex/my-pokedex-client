import { twMerge } from 'tailwind-merge';
import { DefaultProps } from '@/types/common';
import { COMMON_BUTTON_CONTENTS } from '@/constants/contents';
import { COMMON_BUTTON_BG } from '@/constants/styles';

type CommonButtonUsage =
  | 'area'
  | 'viewAll'
  | 'move'
  | 'viewCompatibility'
  | 'newCombination'
  | 'share';

interface CommonButtonProps extends DefaultProps {
  type: CommonButtonUsage;
}

export default function CommonButton({ type }: CommonButtonProps) {
  return (
    <button
      type="button"
      className={twMerge(
        `px-[1.5625rem] py-[.5rem] border-[.1875rem] border-black-50 rounded-full text-xl font-bold shadow-inner/top/white drop-shadow-[0_2px_6px_rgba(0,0,0,0.25)] ${COMMON_BUTTON_BG[type]}`,
        type === 'viewAll' && 'px-[1.3125rem] py-[.375rem] text-[1.125rem]',
      )}>
      {COMMON_BUTTON_CONTENTS[type]}
    </button>
  );
}
